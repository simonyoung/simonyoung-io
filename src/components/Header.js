import Link from 'next/link';
import Logo from 'components/Logo';
import Hamburger from 'components/Hamburger';
import NavBar from 'components/NavBar';
import { Transition } from '@tailwindui/react';
import { useState } from 'react';

const NavLink = (props) => (
  <Link href="/[slug]" as={`/${props.url}`}>
    <a className="font-medium text-gray-500 hover:text-gray-700">
      {props.title}
    </a>
  </Link>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header>
        <div className="container mx-auto flex flex-wrap p-2 pt-4 flex-row items-center">
          <div className="flex w-2/5 flex-wrap items-center text-base ml-auto"></div>
          <Logo />
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>

      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
