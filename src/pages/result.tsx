// https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/pages/result.tsx

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const ResultPage: NextPage = () => {
  const router = useRouter();

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    async (url: string) => {
      try {
        const data = await fetch(url).then((res) => res.json());
        return data;
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(err.message);
        }
        throw err;
      }
    }
  );

  if (error) return <div>failed to load</div>;

  let amount_total = 0;
  let name = 'test';
  let email = 'test@test.com';
  if (data !== undefined) {
    console.log(data);
    amount_total = data.amount_total;
    const customer_details = data.customer_details;
    name = customer_details.name;
    email = customer_details.email;
  }

  return (
    <div className="page-container">
      <h1>Checkout Payment Result</h1>
      <h2>Status: {data?.payment_intent?.status ?? 'loading...'}</h2>
      <h3>CheckoutSession response:</h3>
      <ul>
        <li>Total: ${amount_total / 100}.00</li>
        <li>
          Customer info:
          <ul>
            <li>{name}</li>
            <li>{email}</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ResultPage;
