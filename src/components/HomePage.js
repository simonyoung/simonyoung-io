import Link from 'next/link';
import Moment from 'react-moment';

const PostLink = props => (
  <div className="post-box">
    <p>
      <Moment date={props.date} format="DD MMM YYYY" />
    </p>
    <h2>
      <Link href="/p/[slug]" as={`/p/${props.url}`}>
        <a>{props.title}</a>
      </Link>
    </h2>
  </div>
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
      <h2>Articles</h2>
      <div className="post-list">
        {allPosts &&
          allPosts.map((blog, index) => (
            <PostLink
              key={`${blog.fields.slug}-${index}`}
              url={blog.fields.slug}
              title={blog.fields.post_title}
              date={blog.fields.post_date}
            />
          ))}
      </div>
      <hr />
      <h2>Notes</h2>
      <ul className="list">
        {allNotes &&
          allNotes.map((note, index) => (
            <NoteLink
              key={`${note.fields.slug}-${index}`}
              url={note.fields.slug}
              title={note.fields.note_title}
            />
          ))}
      </ul>
    </>
  );
};
