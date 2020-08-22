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
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="..."
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Transition
          show={isOpen}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:flex items-center text-center space-x-8 md:text-justify">
            <Link href="/blog">
              <a className="font-medium text-gray-500 hover:text-gray-700">
                Blog
              </a>
            </Link>
          </div>
        </Transition>
      </header>
    </>
  );
};

export default Header;
