import { FooterContainer, FooterAuthor } from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterAuthor href="https://www.simonyoung.io/">
        {'Copyright © Simon Young, '}
        {new Date().getFullYear()}
        {'. Design courtesy of Marguerite Roth'}
      </FooterAuthor>
      <footer></footer>
    </FooterContainer>
  );
};

export default Footer;
