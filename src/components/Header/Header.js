import Link from 'next/link';

const NavLink = (props) => (
  <Link href="/[slug]" as={`/${props.url}`}>
    <a>{props.title}</a>
  </Link>
);

const Header = () => {
  return (
    <React.Fragment>
      <nav>
        <h1>Simon Young</h1>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/archive">
              <a>Archive</a>
            </Link>
          </li>
          <li>
            <Link href="/notes">
              <a>Notes</a>
            </Link>
          </li>

          <li>
            <NavLink key="about" url="about" title="About" />
          </li>
          <li>
            <NavLink key="speaking" url="speaking" title="Speaking" />
          </li>
        </ul>
      </nav>
      <hr />
    </React.Fragment>
  );
};

export default Header;
