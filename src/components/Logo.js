import Link from 'next/link';

const Logo = () => {
  return (
    <>
      <div className="flex order-none w-1/5  items-center text-gray-900 justify-center mb-0">
        <Link href="/">
          <a>
            <span className="block p-6 border-gray-400 border-4 rounded-full title-font text-6xl font-extrabold text-gray-400 bg-gray-200 text-center leading-10">
              S
            </span>
          </a>
        </Link>
      </div>
    </>
  );
};
export default Logo;
