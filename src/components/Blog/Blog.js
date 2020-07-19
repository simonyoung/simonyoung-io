import Link from 'next/link';

const BlogPostLink = (props) => (
  <Link href="/blog/[slug]" as={`/blog/${props.url}`} passHref>
    {props.children}
  </Link>
);

export default ({ allPosts, siteConfig }) => {
  return (
    <>
      <div>Blog</div>
      <div>
        {allPosts &&
          allPosts.map((blog, index) => (
            <BlogPostLink
              key={`${blog.fields.slug}-${index}`}
              url={blog.fields.slug}
            >
              <div className="BlogPostCard">
                <div>Development</div>
                <div>{blog.fields.post_title}</div>
                <div>Preview description of blog post</div>
                <div className="PostCardAction">
                  Read more <span>&#8594;</span>
                </div>
                <div>
                  <div>{blog.fields.post_date}</div>
                </div>
              </div>
            </BlogPostLink>
          ))}
      </div>
    </>
  );
};
