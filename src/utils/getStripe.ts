// https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe

import { Stripe, loadStripe } from '@stripe/stripe-js';

// import { NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY } from '@/checkEnvVars';

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

export default getStripe;
