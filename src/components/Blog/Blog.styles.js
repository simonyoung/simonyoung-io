import Link from 'next/link';
import styled, { css } from 'styled-components';
import colors from 'styles/colors';
import dimensions from 'styles/dimensions';

export const BlogTitle = styled.h1`
  margin-bottom: 1em;
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5em;
  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5em;
  }
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 2.5em;
  }
`;

export const BlogPostContainer = styled.a`
  border: 1px solid ${colors.grey200};
  padding: 3em 2.5em 2.25em 2.5em;
  border-radius: 3px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  transition: all 150ms ease-in-out;

  &:hover,
  &:visited {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transition: all 150ms ease-in-out;
    cursor: pointer;

    .PostCardAction {
      color: ${colors.blue500};
      transition: all 150ms ease-in-out;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }
  }
`;

export const BlogPostCategory = styled.h6`
  font-weight: 600;
  color: ${colors.grey600};
`;

export const BlogPostTitle = styled.h3`
  margin: 0;
  margin-top: 0.5em;
`;

export const BlogPostMetas = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5em;
  justify-content: space-between;
  font-size: 0.85em;
  color: ${colors.grey600};
`;

export const BlogPostAuthor = styled.div`
  margin: 0;
`;

export const BlogPostDate = styled.div`
  margin: 0;
`;

export const BlogPostDescription = styled.div`
  margin-top: 2em;
  margin-bottom: 4em;
  p:last-of-type {
    margin: 0;
  }
`;

export const BlogPostAction = styled.div`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;
  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
`;
