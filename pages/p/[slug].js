import { useRouter } from 'next/router';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import Post from '../../components/Post';

const PostPage = ({ siteTitle, data }) => {
  console.log(data);
  return (
    <Layout>
      <Post title={siteTitle} data={data} />
    </Layout>
  );
};

PostPage.getInitialProps = async function(context) {
  // context contains the query paraameter
  const { slug } = context.query;
  // get the file in the post dir based on the slug
  const content = await import(`../../data/posts/${slug}.md`);
  // also get the config
  const config = await import(`../../data/config.json`);
  console.log(content);
  // gray-matter parses the yaml frontmatter from the markdown
  const data = matter(content.default);
  return {
    siteTitle: config.title,
    ...data
  };
};

export default PostPage;
