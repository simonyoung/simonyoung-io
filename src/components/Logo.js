import Link from 'next/link';

const Logo = () => {
  return (
    <div className="text-2xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
      <h1>
        <Link href="/blog">
          <a>Simon Young</a>
        </Link>
      </h1>
    </div>
  );
};
export default Logo;
