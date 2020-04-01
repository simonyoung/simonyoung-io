import fetch from 'node-fetch';
import HomePage from '../components/HomePage';

const Index = ({ siteConfig, allPosts }) => (
  <HomePage allPosts={allPosts} siteConfig={siteConfig} />
);

export async function getStaticProps() {
  const siteConfig = await import(`../data/config.json`);
  console.log(process.env.API_BASE_URL);
  const res = await fetch(`https://simonyoung-io.now.sh/api/posts`);
  const posts = await res.json();

  return {
    props: {
      allPosts: posts,
      ...siteConfig
    }
  };
}

export default Index;
