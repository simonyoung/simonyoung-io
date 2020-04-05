const Footer = () => {
  return (
    <footer className="">
      <hr />
      <p className="">
        {'Copyright © Simon Young, '}
        {new Date().getFullYear()}
        {'.'}
      </p>
    </footer>
  );
};

export default Footer;
