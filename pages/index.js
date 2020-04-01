import fetch from 'node-fetch';
import HomePage from '../components/HomePage';
import { getContent } from '../helpers/contentful';

const Index = ({ siteConfig, allPosts }) => (
  <HomePage allPosts={allPosts} siteConfig={siteConfig} />
);

export async function getStaticProps() {
  const siteConfig = await import(`../data/config.json`);
  const posts = await getContent(process.env.CONTENTFUL_BLOG_CONTENT_TYPE);

  return {
    props: {
      allPosts: posts,
      ...siteConfig
    }
  };
}

export default Index;
