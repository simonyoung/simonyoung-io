import matter from 'gray-matter';
import Layout from '../../components/Layout';
import Post from '../../components/Post';

const PostPage = ({ siteTitle, data, content }) => {
  return (
    <Layout>
      <Post title={siteTitle} data={data} content={content} />
    </Layout>
  );
};

PostPage.getInitialProps = async function(context) {
  // context contains the query paraameter
  const { slug } = context.query;

  // get the file in the post dir based on the slug
  const content = await import(`../../data/posts/${slug}.md`);
  // gray-matter parses the yaml frontmatter from the markdown
  const data = matter(content.default);

  // also get the config
  const siteConfig = await import(`../../data/config.json`);

  return {
    siteTitle: siteConfig.title,
    ...content,
    ...data
  };
};

export default PostPage;
