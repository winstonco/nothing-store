import type { ReactElement } from 'react';
import Image from 'next/image';

import Layout from '../components/Layout';
import type { NextPageWithLayout } from './_app';
import { ItemRecord, pb } from '@/utils/pb-helpers';

export const getServerSideProps = async (): Promise<{ props: {} }> => {
  const authData = await pb.admins.authWithPassword(
    process.env.PB_EMAIL!,
    process.env.PB_PASSWORD!
  );
  const allRecords: ItemRecord[] = await pb
    .collection('items')
    .getFullList(200 /* batch size */, {
      sort: '-created',
    });
  const records = allRecords.map((record) => {
    const fileUrlConfig = {
      thumb: '50x50',
    };
    const file_url = pb.getFileUrl(record, record.item_image, fileUrlConfig);
    console.log(file_url);
    return {
      id: record.id,
      item_image: record.item_image,
      file_url,
      name: record.name,
      description: record.description,
      created: record.created,
    };
  });
  console.log(records);
  pb.authStore.clear();
  return { props: { records } };
};

const Page: NextPageWithLayout = (props?: { records?: ItemRecord[] }) => {
  if (props?.records) {
    const itemList = props.records.map((record) => {
      return (
        <div key={record.id}>
          <Image src={record.file_url} alt={record.id} width={50} height={50} />
          <h3>{record.name}</h3>
          <p>{record.created}</p>
        </div>
      );
    });
    return (
      <h1 className="text-3xl font-bold underline">
        Hello World!
        {itemList}
      </h1>
    );
  }
  return <h1>No records prop</h1>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
