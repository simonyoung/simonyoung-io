import { getContent } from '../helpers/contentful';
import HomePage from '../components/HomePage';

const Index = ({ siteConfig, allPosts, allNotes }) => (
  <HomePage allPosts={allPosts} allNotes={allNotes} siteConfig={siteConfig} />
);

export async function getStaticProps() {
  const siteConfig = await import(`../../data/config.json`);
  const posts = await getContent(process.env.CONTENTFUL_BLOG_CONTENT_TYPE);
  const notes = await getContent(process.env.CONTENTFUL_NOTE_CONTENT_TYPE);

  return {
    props: {
      allPosts: posts,
      allNotes: notes,
      ...siteConfig,
    },
  };
}

export default Index;
