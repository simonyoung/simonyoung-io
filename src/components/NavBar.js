import Link from 'next/link';
import Logo from 'components/Logo';
import Transition from 'components/Transition';

const NavBar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Transition
        show={isOpen}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 p-3 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg">
            <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5 space-y-6">
                <div className="flex items-center justify-between">
                  <Logo />
                  <div class="-mr-0">
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="flex items-center px-3 py-2 border rounded border-gray-500  text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
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
                </div>
                <div>
                  <nav className="grid gap-6">
                    <Link href="/blog">
                      <a className="text-base font-medium text-gray-500 hover:text-gray-700">
                        Blog
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="text-base font-medium text-gray-500 hover:text-gray-700">
                        Blog
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="text-base font-medium text-gray-500 hover:text-gray-700">
                        Blog
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="text-base font-medium text-gray-500 hover:text-gray-700">
                        Blog
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="text-base font-medium text-gray-500 hover:text-gray-700">
                        Blog
                      </a>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};
export default NavBar;
