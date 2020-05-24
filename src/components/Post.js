import { useRouter } from 'next/router';
import Moment from 'react-moment';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import colors from 'styles/colors';

const PostHeroContainer = styled('div')`
  max-height: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 3em;
  img {
    width: 100%;
  }
`;

const PostHeroAnnotation = styled('div')`
  padding-top: 0.25em;
  h6 {
    text-align: right;
    color: ${colors.grey600};
    font-weight: 400;
    font-size: 0.85rem;
  }
  a {
    color: currentColor;
  }
`;

const PostCategory = styled('div')`
  max-width: 550px;
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  color: ${colors.grey600};
  h5 {
    margin-top: 0;
    margin-bottom: 1em;
  }
`;

const PostTitle = styled('div')`
  max-width: 550px;
  margin: 0 auto;
  text-align: center;
  h1 {
    margin-top: 0;
  }
`;

const PostBody = styled('div')`
  max-width: 550px;
  margin: 0 auto;
  .block-img {
    margin-top: 3.5em;
    margin-bottom: 0.5em;
    img {
      width: 100%;
    }
  }
`;

const PostMetas = styled('div')`
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 2em;
  justify-content: space-between;
  font-size: 0.85em;
  color: ${colors.grey600};
`;

const PostAuthor = styled('div')`
  margin: 0;
`;

const PostDate = styled('div')`
  margin: 0;
`;

export default ({ title, data }) => {
  return (
    <div>
      <PostCategory>Category</PostCategory>
      <PostTitle>
        <h1>{data.fields.post_title}</h1>
      </PostTitle>
      <PostMetas>
        <PostAuthor>author</PostAuthor>
        <PostDate>
          <Moment date={data.fields.post_date} format="DD MMM YYYY" />
        </PostDate>
      </PostMetas>

      <PostBody>
        <ReactMarkdown source={data.fields.post_content} />
      </PostBody>
    </div>
  );
};
