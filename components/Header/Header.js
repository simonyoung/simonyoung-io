import Link from 'next/link';

const Header = () => {
  return (
    <React.Fragment>
      <header className="hidden md:flex flex-col items-center mb-16">
        <h1 className="text-3xl text-center text-gray-800 mb-4 font-thin">
          Simon Young
        </h1>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/feed">
          <a>Feed</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/speaking">
          <a>Speaking</a>
        </Link>
        <hr className="w-8 h-1 bg-red-700" />
      </header>
    </React.Fragment>
  );
};

export default Header;
