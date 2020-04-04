import Link from 'next/link';

const NoteLink = props => (
  <li>
    <Link href="/notes/[slug]" as={`/notes/${props.url}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default ({ allNotes, siteConfig }) => {
  return (
    <>
      <h2>Notes</h2>
      <ul className="list">
        {allNotes &&
          allNotes.map((note, index) => (
            <NoteLink
              key={`${note.fields.note_url}-${index}`}
              url={note.fields.note_url}
              title={note.fields.note_title}
            />
          ))}
      </ul>
    </>
  );
};
