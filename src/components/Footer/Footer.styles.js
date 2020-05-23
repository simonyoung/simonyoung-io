import styled, { css } from 'styled-components';
import colors from 'styles/colors';
import dimensions from 'styles/dimensions';

export const FooterContainer = styled.div`
  padding-top: 3.75em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    max-width: 50px;
  }
`;

export const FooterAuthor = styled.a`
  font-size: 0.75em;
  color: ${colors.grey700};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-top: 1.5em;
  &:hover {
    color: ${colors.blue900};
    .FooterSpooch {
      animation-name: rotate;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
