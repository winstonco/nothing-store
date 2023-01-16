import Link from 'next/link';
import React, { ReactElement } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsStars } from 'react-icons/bs';
import { CgMoreO } from 'react-icons/cg';
import { FaCcStripe } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <ul className="flex flex-row py-2 px-2 bg-slate-200 border-b-2 border-neutral-900">
        <NavLink icon={<AiOutlineHome className="text-xl" />} href="/">
          Home
        </NavLink>
        <NavLink icon={<BsStars className="text-xl" />} href="/featured">
          Featured
        </NavLink>
        <NavLink icon={<CgMoreO className="text-xl" />} href="/more">
          More
        </NavLink>
        <NavLink icon={<FaCcStripe className="text-xl" />} href="/checkout">
          Pay Now
        </NavLink>
      </ul>
    </>
  );
};

const NavLink = ({
  children,
  icon,
  href,
}: {
  children: string;
  icon: ReactElement;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="text-neutral-900 flex flex-row items-center text-xl gap-1 px-2 border-r-2 border-neutral-900"
    >
      {icon}
      {children}
    </Link>
  );
};

export default Navbar;
