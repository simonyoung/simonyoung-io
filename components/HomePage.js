import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default ({ allPosts, siteConfig }) => {
  return (
    <>
      <ul className="list">
        {allPosts &&
          allPosts.map((blog, index) => (
            <PostLink
              key={`${blog.fields.url}-${index}`}
              id={blog.fields.url}
              title={blog.fields.title}
            />
          ))}
      </ul>
    </>
  );
};
