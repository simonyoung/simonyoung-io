import styled, { css } from 'styled-components';
import colors from 'styles/colors';
import dimensions from 'styles/dimensions';

export const Hero = styled.div`
  padding-top: 2.5em;
  padding-bottom: 3em;
  margin-bottom: 6em;
  max-width: 830px;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 3em;
  }
  h1 {
    margin-bottom: 1em;
    a {
      text-decoration: none;
      transition: all 100ms ease-in-out;
      &:nth-of-type(1) {
        color: ${colors.teal500};
      }
      &:nth-of-type(2) {
        color: ${colors.orange500};
      }
      &:nth-of-type(3) {
        color: ${colors.purple500};
      }
      &:nth-of-type(4) {
        color: ${colors.blue500};
      }
      &:nth-of-type(5) {
        color: ${colors.teal500};
      }
      &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;
        &:nth-of-type(1) {
          color: ${colors.blue600};
          background-color: ${colors.blue200};
        }
        &:nth-of-type(2) {
          color: ${colors.orange600};
          background-color: ${colors.orange200};
        }
        &:nth-of-type(3) {
          color: ${colors.purple600};
          background-color: ${colors.purple200};
        }
        &:nth-of-type(4) {
          color: ${colors.green600};
          background-color: ${colors.green200};
        }
        &:nth-of-type(5) {
          color: ${colors.teal600};
          background-color: ${colors.teal200};
        }
      }
    }
  }
`;
