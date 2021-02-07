import Link from 'next/link';
import { ReactElement } from 'react';

export const Logo: React.FC = (): ReactElement => {
  return (
    <>
      <div className="flex order-none w-1/5  items-center text-gray-900 justify-center mb-0">
        <Link href="/">
          <a>
            <span className="block p-6 border-gray-400 hover:border-gray-500 border-4 rounded-full title-font text-6xl font-extrabold text-gray-400 hover:text-gray-500 bg-gray-200 hover:bg-gray-300 text-center leading-10">
              S
            </span>
          </a>
        </Link>
      </div>
    </>
  );
};
