import Link from 'next/link';

const NavLink = props => (
  <Link href="/[slug]" as={`/${props.url}`}>
    <a>{props.title}</a>
  </Link>
);

const Header = () => {
  return (
    <React.Fragment>
      <header className="">
        <h1>Simon Young</h1>
        <Link href="/">
          <a>Home</a>
        </Link>
        <NavLink key="notes" url="notes" title="Notes" />
        <NavLink key="about" url="about" title="About" />
        <NavLink key="speaking" url="speaking" title="Speaking" />
        <hr />
      </header>
    </React.Fragment>
  );
};

export default Header;
