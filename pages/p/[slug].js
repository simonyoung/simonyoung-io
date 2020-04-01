import { getContent, getContentBySlug } from '../../helpers/contentful';
import Post from '../../components/Post';

const PostPage = ({ siteTitle, data }) => {
  return <Post title={siteTitle} data={data} />;
};

export async function getStaticPaths() {
  const posts = await getContent(process.env.CONTENTFUL_BLOG_CONTENT_TYPE);

  const paths = posts.map(post => ({
    params: { slug: post.fields.url }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const siteConfig = await import(`../../data/config.json`);
  const data = await getContentBySlug(params.slug);

  return {
    props: {
      siteTitle: siteConfig.title,
      data: data
    }
  };
}

export default PostPage;
