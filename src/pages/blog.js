import { getContent } from 'helpers/contentful';
import Blog from 'components/Blog/Blog';

const BlogPage = ({ siteConfig, allPosts }) => (
  <Blog allPosts={allPosts} siteConfig={siteConfig} />
);

export async function getStaticProps() {
  const siteConfig = await import(`data/config.json`);
  const posts = await getContent(
    process.env.CONTENTFUL_BLOG_CONTENT_TYPE,
    '-fields.post_date'
  );
  return {
    props: {
      allPosts: posts,
      ...siteConfig,
    },
    unstable_revalidate: 1,
  };
}

export default BlogPage;
