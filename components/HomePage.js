import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default ({ allBlogs, siteConfig }) => {
  console.log(allBlogs);

  return (
    <>
      <ul className="list">
        {allBlogs &&
          allBlogs.map((blog, index) => (
            <PostLink key={`${blog.slug}-${index}`} id={blog.slug} />
          ))}
      </ul>
    </>
  );
};
