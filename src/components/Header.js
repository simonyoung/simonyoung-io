import Link from 'next/link';
import Logo from 'components/Logo';
import Hamburger from 'components/Hamburger';
import NavBar from 'components/NavBar';
import { useState } from 'react';
import Transition from 'components/Transition';

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
      <header className="flex items-center justify-between flex-wrap py-4 px-4 sm:px-6 md:flex lg:px-8">
        <Logo />
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
