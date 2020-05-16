import { getContent } from 'helpers/contentful';
import Notes from 'components/Notes';

const NotesPage = ({ siteConfig, allNotes }) => (
  <Notes allNotes={allNotes} siteConfig={siteConfig} />
);

export async function getStaticProps() {
  const siteConfig = await import(`data/config.json`);
  const notes = await getContent(process.env.CONTENTFUL_NOTE_CONTENT_TYPE);
  return {
    props: {
      allNotes: notes,
      ...siteConfig,
    },
    unstable_revalidate: 1,
  };
}

export default NotesPage;
