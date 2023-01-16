import Stripe from 'stripe';
import { ChangeEvent, FormEvent, useState } from 'react';

import getStripe from '@/utils/get-stripe';
import { MAX_AMOUNT, MIN_AMOUNT } from '@/_config';

const CheckoutForm = () => {
  const [amount, setAmount] = useState<number>(MIN_AMOUNT);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Create a Checkout Session.
    const checkoutSession: Stripe.Checkout.Session = await (
      await fetch('/api/checkout_sessions', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify({ amount }), // body data type must match "Content-Type" header
      })
    ).json();

    if ((checkoutSession as any).statusCode === 500) {
      console.error((checkoutSession as any).message);
      return;
    }

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: checkoutSession.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
  };

  return (
    <div className="w-100 h-100 flex flex-col items-center">
      <h2>Enter an amount below:</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-1"
      >
        <input
          className="w-20 border-2 border-neutral-900 rounded-xl px-3"
          type="number"
          name="amount"
          min={MIN_AMOUNT}
          max={MAX_AMOUNT}
          onChange={handleChange}
          value={amount}
          required
        />
        <input
          className="w-20 border-2 border-neutral-900 rounded-xl px-2"
          type="submit"
          value="Pay"
        />
      </form>
    </div>
  );
};

export default CheckoutForm;
