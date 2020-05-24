import Link from 'next/link';
import {
  BlogTitle,
  BlogGrid,
  BlogPostContainer,
  BlogPostCategory,
  BlogPostTitle,
  BlogPostMetas,
  BlogPostAuthor,
  BlogPostDate,
  BlogPostAction,
  BlogPostDescription,
} from './Blog.styles';

const BlogPostLink = (props) => (
  <Link href="/blog/[slug]" as={`/blog/${props.url}`} passHref>
    {props.children}
  </Link>
);

export default ({ allPosts, siteConfig }) => {
  return (
    <>
      <BlogTitle>Blog</BlogTitle>
      <BlogGrid>
        {allPosts &&
          allPosts.map((blog, index) => (
            <BlogPostLink
              key={`${blog.fields.slug}-${index}`}
              url={blog.fields.slug}
            >
              <BlogPostContainer className="BlogPostCard">
                <BlogPostCategory>Development</BlogPostCategory>
                <BlogPostTitle>{blog.fields.post_title}</BlogPostTitle>
                <BlogPostDescription>
                  Preview description of blog post
                </BlogPostDescription>
                <BlogPostAction className="PostCardAction">
                  Read more <span>&#8594;</span>
                </BlogPostAction>
                <BlogPostMetas>
                  <BlogPostAuthor>Simon Young</BlogPostAuthor>
                  <BlogPostDate>1 May 2020</BlogPostDate>
                </BlogPostMetas>
              </BlogPostContainer>
            </BlogPostLink>
          ))}
      </BlogGrid>
    </>
  );
};
