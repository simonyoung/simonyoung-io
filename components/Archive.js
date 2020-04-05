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
              key={`${blog.fields.post_url}-${index}`}
              url={blog.fields.post_url}
              title={blog.fields.post_title}
            />
          ))}
      </ul>
    </>
  );
};
