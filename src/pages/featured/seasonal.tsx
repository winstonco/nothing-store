import ItemLink from '@/components/ItemLink';
import { NextPageWithLayout } from '../_app';
import FeaturedLayout from './_featured-layout';

const Seasonal: NextPageWithLayout = () => {
  return (
    <>
      <h2>Seasonal Items</h2>
      <ul>
        <li>
          <ItemLink itemId={293456}>
            <>Seasonal item 1</>
          </ItemLink>
        </li>
        <li>
          <ItemLink itemId={34278}>
            <>Seasonal item 2</>
          </ItemLink>
        </li>
        <li>
          <ItemLink itemId={12348}>
            <>Seasonal item 3</>
          </ItemLink>
        </li>
      </ul>
    </>
  );
};

Seasonal.getLayout = (page) => {
  return <FeaturedLayout>{page}</FeaturedLayout>;
};

export default Seasonal;
