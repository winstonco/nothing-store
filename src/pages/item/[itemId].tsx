import { useRouter } from 'next/router';

const ItemPage = () => {
  const router = useRouter();
  const itemId = router.query.itemId;

  return <h2>{itemId}</h2>;
};

export default ItemPage;
