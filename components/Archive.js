import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/p/[slug]" as={`/p/${props.url}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default ({ allPosts, siteConfig }) => {
  return (
    <>
      <h2>Archive</h2>
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
    </>
  );
};
