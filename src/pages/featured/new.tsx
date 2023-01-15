import { NextPageWithLayout } from '../_app';
import FeaturedLayout from './_featured-layout';

const New: NextPageWithLayout = () => {
  return (
    <>
      <h2>New Items</h2>
      <ul>
        <li>New item 1</li>
        <li>New item 2</li>
        <li>New item 3</li>
      </ul>
    </>
  );
};

New.getLayout = (page) => {
  return <FeaturedLayout>{page}</FeaturedLayout>;
};

export default New;
