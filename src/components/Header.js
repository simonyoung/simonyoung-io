import Link from 'next/link';

import Logo from 'components/Logo';

const NavLink = (props) => (
  <Link href="/[slug]" as={`/${props.url}`}>
    <a className="font-medium text-gray-500 hover:text-gray-700">
      {props.title}
    </a>
  </Link>
);

const Header = () => {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Logo />
      </div>

      <div class="md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
        <Link href="/blog">
          <a className="font-medium text-gray-500 hover:text-gray-700">Blog</a>
        </Link>
        <NavLink key="about" url="about" title="About" />
      </div>
    </header>
  );
};

export default Header;
