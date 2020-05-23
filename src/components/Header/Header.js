import Link from 'next/link';
import { HeaderContainer, HeaderContent, HeaderLinks } from './Header.styles';
import Logo from 'components/Logo';

const NavLink = (props) => (
  <Link href="/[slug]" as={`/${props.url}`}>
    <a>{props.title}</a>
  </Link>
);

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">
          <Logo />
        </Link>
        <HeaderLinks>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <NavLink key="about" url="about" title="About" />
        </HeaderLinks>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
