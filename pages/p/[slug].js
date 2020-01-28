import matter from 'gray-matter';
import Layout from '../../components/Layout';
import Post from '../../components/Post';

const PostPage = ({ siteTitle, data, content }) => {
  return <Post title={siteTitle} data={data} content={content} />;
};

PostPage.getInitialProps = async function(context) {
  // context contains the query paraameter
  const { slug } = context.query;

  // retrieve post data and parse yaml front matter
  const content = await import(`../../data/posts/${slug}.md`);
  const data = matter(content.default);

  //retrieve core site config
  const siteConfig = await import(`../../data/config.json`);

  return {
    siteTitle: siteConfig.title,
    ...content,
    ...data
  };
};

export default PostPage;
