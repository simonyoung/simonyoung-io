import { getContent } from 'helpers/contentful';
import HomePage from 'components/HomePage';
import { GetStaticProps } from 'next';

const Index = ({ siteConfig, allPosts }) => (
  <HomePage allPosts={allPosts} siteConfig={siteConfig} />
);

export const getStaticProps: GetStaticProps = async (context) => {
  const siteConfig = await import(`data/config.json`);
  const posts = await getContent(
    process.env.CONTENTFUL_BLOG_CONTENT_TYPE,
    '-fields.publish_date',
    3
  );
  return {
    props: {
      allPosts: posts,
      ...siteConfig,
    },
    revalidate: 1,
  };
};

export default Index;
