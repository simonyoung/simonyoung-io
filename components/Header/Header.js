import Link from 'next/link';

const Header = () => {
  return (
    <React.Fragment>
      <header className="">
        <h1>Simon Young</h1>

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
        <hr />
      </header>
    </React.Fragment>
  );
};

export default Header;
