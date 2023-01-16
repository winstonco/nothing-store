const NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
const STRIPE_PRODUCT_ID = process.env.STRIPE_PRODUCT_ID;

const checkEnvVars = () => {
  if (
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined ||
    !NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY.startsWith('pk_')
  ) {
    throw new Error(
      'Environment variable: NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is undefined or invalid'
    );
  }
  if (!STRIPE_SECRET_KEY!.startsWith('sk_')) {
    console.log(
      'Environment variable: STRIPE_SECRET_KEY is undefined or invalid'
    );
  }
  if (
    STRIPE_WEBHOOK_SECRET === undefined ||
    !STRIPE_WEBHOOK_SECRET.startsWith('whsec_')
  ) {
    throw new Error(
      'Environment variable: STRIPE_WEBHOOK_SECRET is undefined or invalid'
    );
  }
  if (
    STRIPE_PRODUCT_ID === undefined ||
    !STRIPE_PRODUCT_ID.startsWith('prod_')
  ) {
    throw new Error(
      'Environment variable: STRIPE_PRODUCT_ID is undefined or invalid'
    );
  }
};

export default checkEnvVars;
