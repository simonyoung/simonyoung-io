import Link from 'next/link';

const Logo = () => {
  return (
    <div className="text-4xl text-center leading-9 pb-4 font-extrabold text-gray-900 tracking-tight md:pb-0 sm:leading-10 md:text-4xl md:leading-14 md:text-left">
      <h1>
        <Link href="/">
          <a>Simon Young</a>
        </Link>
      </h1>
    </div>
  );
};
export default Logo;
