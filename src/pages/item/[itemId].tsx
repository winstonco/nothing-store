import Image from 'next/image';
import { NextPage } from 'next';

import { ItemRecord, pb } from '@/utils/pb-helpers';

// https://nextjs.org/docs/api-reference/data-fetching/get-initial-props

export const getServerSideProps = async (ctx: {
  query: any;
}): Promise<{ props: {} }> => {
  const itemId = ctx.query.itemId;
  console.log(itemId);
  const authData = await pb.admins.authWithPassword(
    process.env.PB_EMAIL!,
    process.env.PB_PASSWORD!
  );
  const item: ItemRecord = await pb
    .collection('items')
    .getFirstListItem(`id='${itemId}'`);
  console.log(item);
  const fileUrlConfig = {
    thumb: '50x50',
  };
  const file_url = pb.getFileUrl(item, item.item_image, fileUrlConfig);
  pb.authStore.clear();
  return { props: { file_url, name: item.name, price_id: item.price_id } };
};

const ItemPage: NextPage<{
  file_url: string;
  name: string;
  price_id: string;
}> = ({ file_url, name, price_id }) => {
  return (
    <>
      <Image src={file_url} alt={name} width={50} height={50} />
      <h3>{name}</h3>
      <button
        onClick={() => {
          let items: string[] = JSON.parse(
            window.sessionStorage.getItem('cart') ?? '[]'
          );
          items = [...items, price_id];
          window.sessionStorage.setItem('cart', JSON.stringify(items));
        }}
      >
        Select
      </button>
    </>
  );
};

export default ItemPage;
