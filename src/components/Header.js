import Link from 'next/link';
import Logo from 'components/Logo';
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
      <header className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <Logo />

        <div className="md:flex items-center text-center space-x-8 md:text-justify">
          <Link href="/blog">
            <a className="font-medium text-gray-500 hover:text-gray-700">
              Blog
            </a>
          </Link>
          <Link href="/notes">
            <a className="font-medium text-gray-500 hover:text-gray-700">
              Notes
            </a>
          </Link>
          <NavLink key="about" url="about" title="About" />
          <NavLink key="now" url="now" title="Now" />
        </div>
      </header>
    </>
  );
};

export default Header;
