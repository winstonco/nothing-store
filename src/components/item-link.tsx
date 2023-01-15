import Link from 'next/link';
import { ReactElement } from 'react';

const ItemLink = ({
  itemId,
  children,
}: {
  itemId: number;
  children: ReactElement;
}) => {
  return <Link href={`/item/${itemId}`}>{children}</Link>;
};

export default ItemLink;
