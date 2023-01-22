import Image from 'next/image';
import Link from 'next/link';

const ItemLink = ({
  itemId,
  itemName,
  imageSrc,
}: {
  itemId: string;
  itemName: string;
  imageSrc: string;
}) => {
  return (
    <Link href={`/item/${itemId}`}>
      <Image src={imageSrc} alt={itemName} width={50} height={50} />
    </Link>
  );
};

export default ItemLink;
