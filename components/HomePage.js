import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/p/[slug]" as={`/p/${props.url}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const NoteLink = props => (
  <li>
    <Link href="/notes/[slug]" as={`/notes/${props.url}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default ({ allPosts, allNotes, siteConfig }) => {
  return (
    <>
      <ul className="list">
        {allPosts &&
          allPosts.map((blog, index) => (
            <PostLink
              key={`${blog.fields.url}-${index}`}
              url={blog.fields.url}
              title={blog.fields.title}
            />
          ))}
      </ul>
      <hr />
      <h2>Notes</h2>
      <ul className="list">
        {allNotes &&
          allNotes.map((note, index) => (
            <NoteLink
              key={`${note.fields.url}-${index}`}
              url={note.fields.note_url}
              title={note.fields.note_title}
            />
          ))}
      </ul>
    </>
  );
};
