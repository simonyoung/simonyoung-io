import Link from 'next/link';

const Logo = () => {
  return (
    <div className="flex flex-shrink-0 items-center text-3xl text-left leading-9 py-0 font-extrabold text-gray-900 tracking-tight md:pb-0 sm:leading-10 md:text-4xl md:leading-14">
      <Link href="/">
        <a>Simon Young</a>
      </Link>
    </div>
  );
};
export default Logo;
