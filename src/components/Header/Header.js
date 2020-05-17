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
        <h1>
          <Link href="/">
            <a>Simon Young</a>
          </Link>
        </h1>
        <ul>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>

          <li>
            <NavLink key="about" url="about" title="About" />
          </li>
        </ul>
      </nav>
      <hr />
    </React.Fragment>
  );
};

export default Header;
