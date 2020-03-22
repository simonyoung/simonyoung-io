const Footer = () => {
  return (
    <footer className="hidden md:block p-2">
      <p className="text-sm text-center">
        {'Copyright © Simon Young, '}
        {new Date().getFullYear()}
        {'.'}
      </p>
    </footer>
  );
};

export default Footer;
