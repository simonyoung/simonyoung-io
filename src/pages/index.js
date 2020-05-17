import { getContent } from 'helpers/contentful';
import HomePage from 'components/HomePage';

const Index = ({ siteConfig, allPosts }) => (
  <HomePage allPosts={allPosts} siteConfig={siteConfig} />
);

export async function getStaticProps() {
  const siteConfig = await import(`data/config.json`);
  const posts = await getContent(process.env.CONTENTFUL_BLOG_CONTENT_TYPE);

  return {
    props: {
      allPosts: posts,
      ...siteConfig,
    },
    unstable_revalidate: 1,
  };
}

export default Index;
