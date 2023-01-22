import { ItemRecord, pb } from '@/utils/pb-helpers';
import { NextPageWithLayout } from '../_app';
import New from './new';
import FeaturedLayout from './_featured-layout';
import ItemLink from '@/components/ItemLink';

export const getServerSideProps = async (): Promise<{ props: {} }> => {
  const authData = await pb.admins.authWithPassword(
    process.env.PB_EMAIL!,
    process.env.PB_PASSWORD!
  );
  const allRecords: ItemRecord[] = await pb
    .collection('items')
    .getFullList(200 /* batch size */, {
      filter: 'featured = true',
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

const Featured: NextPageWithLayout = (props?: { records?: ItemRecord[] }) => {
  if (props?.records === undefined) {
    return <></>;
  }
  const itemList = props.records.map((record) => {
    return (
      <li key={record.id}>
        <ItemLink
          itemId={record.id}
          itemName={record.name}
          imageSrc={record.file_url}
        />
      </li>
    );
  });
  return (
    <>
      <ul>{itemList}</ul>
      <New />
    </>
  );
};

Featured.getLayout = (page) => {
  return <FeaturedLayout>{page}</FeaturedLayout>;
};

export default Featured;
