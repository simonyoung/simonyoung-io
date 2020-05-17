import Link from 'next/link';

const PostLink = (props) => (
  <li>
    <Link href="/p/[slug]" as={`/p/${props.url}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default ({ allPosts, siteConfig }) => {
  return (
    <>
      <h2>Blog</h2>
      <ul className="list">
        {allPosts &&
          allPosts.map((blog, index) => (
            <PostLink
              key={`${blog.fields.slug}-${index}`}
              url={blog.fields.slug}
              title={blog.fields.post_title}
            />
          ))}
      </ul>
    </>
  );
};
