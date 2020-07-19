const Footer = () => {
  return (
    <footer className="flex justify-between items-center py-10">
      <div href="https://www.simonyoung.io/">
        {'Copyright © Simon Young, '}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
