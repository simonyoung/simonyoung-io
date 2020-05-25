import styled from 'styled-components';
import colors from 'styles/colors';
import dimensions from 'styles/dimensions';

export const LogoContainer = styled.div`
  line-height: 1em;
  padding-bottom: 0;
  padding-top: 0;

  h1 {
    margin-block-start: 0;
    margin-block-end: 0;
    color: ${colors.orange500};
    text-decoration: none;
    border-bottom: 0;
    font-weight: 700;
    font-size: 1.75em;
    line-height: 1em;
    height: 100%;
    padding-bottom: 0;
    padding-top: 0;
    display: block;
    position: relative;
  }
`;
