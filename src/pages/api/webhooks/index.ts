import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'micro-cors';
import { buffer } from 'micro';
import Stripe from 'stripe';

import getErrorMessage from '@/utils/getErrorMessage';
// import { STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET } from '@/checkEnvVars';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2022-11-15',
});

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
};

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('reached');
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature']!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        buf.toString(),
        sig,
        webhookSecret
      );
    } catch (err) {
      // On error, log and return the error message
      if (err) {
        const errMsg = getErrorMessage(err);
        console.log(`❌ Error message: ${errMsg}`);
        res.status(400).send(`Webhook Error: ${errMsg}`);
        return;
      }
    }

    // Successfully constructed event
    console.log('✅ Success:', event!.id);
  }
};

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});
// ...
export default cors(webhookHandler as any);
