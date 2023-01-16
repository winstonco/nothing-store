// https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/utils/stripe-helpers.ts

import Stripe from 'stripe';

// import { STRIPE_PRODUCT_ID, STRIPE_SECRET_KEY } from '@/checkEnvVars';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2022-11-15',
});

export const getPriceIdForStripe = async (amount: number, currency: string) => {
  const price = await stripe.prices.create({
    unit_amount: amount * 100,
    currency: currency,
    product: process.env.STRIPE_PRODUCT_ID,
  });
  return price.id;
};
