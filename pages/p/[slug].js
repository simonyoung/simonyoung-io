import { useRouter } from 'next/router';
import matter from 'gray-matter';
import Layout from '../../components/Layout';
import Post from '../../components/Post';

const PostPage = ({ siteTitle, data, content }) => {
  console.log(data);
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
  //console.log(content);

  // also get the config
  const config = await import(`../../data/config.json`);

  // gray-matter parses the yaml frontmatter from the markdown
  const data = matter(content.default);
  return {
    siteTitle: config.title,
    ...content,
    ...data
  };
};

export default PostPage;
