import { NextPageWithLayout } from '../_app';
import New from './new';
import Seasonal from './seasonal';
import FeaturedLayout from './_featured-layout';

const Featured: NextPageWithLayout = () => {
  return (
    <>
      <ul>
        <li>Nothing 1</li>
        <li>Nothing 2</li>
        <li>Nothing 3</li>
      </ul>
      <Seasonal />
      <New />
    </>
  );
};

Featured.getLayout = (page) => {
  return <FeaturedLayout>{page}</FeaturedLayout>;
};

export default Featured;
