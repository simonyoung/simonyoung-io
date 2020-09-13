import { getContent } from 'helpers/contentful';
import Notes from 'components/Notes';

const NotesPage = ({ siteConfig, allPosts }) => (
  <Notes allPosts={allPosts} siteConfig={siteConfig} />
);

export async function getStaticProps() {
  const siteConfig = await import(`data/config.json`);
  const posts = await getContent(
    process.env.CONTENTFUL_NOTE_CONTENT_TYPE,
    '-fields.publish_date'
  );
  return {
    props: {
      allPosts: posts,
      ...siteConfig,
    },
    revalidate: 1,
  };
}

export default NotesPage;
