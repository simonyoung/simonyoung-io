import Link from 'next/link';
import Logo from 'components/Logo';
import { Transition } from '@tailwindui/react';

const NavBar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Transition
        show={isOpen}
        enter="duration-150 transition ease-in-out transform"
        enterFrom="opacity-0 -translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="duration-150 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="top-0 left-0 w-full opacity-95 bg-gray-900 fixed  overflow-auto h-full z-30">
          <div className="pt-5 pb-6 px-5 space-y-6">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-3 py-2 border rounded border-gray-200  text-gray-200 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>
              <nav className="grid gap-6">
                <Link href="/">
                  <a onClick={() => setIsOpen(!isOpen)}>Home</a>
                </Link>
                <Link href="/blog">
                  <a onClick={() => setIsOpen(!isOpen)}>Blog</a>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};
export default NavBar;
