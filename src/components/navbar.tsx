import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/featured'}>Featured</Link>
        </li>
        <li>
          <Link href={'/more'}>More</Link>
        </li>
      </ul>
    </>
  );
}
