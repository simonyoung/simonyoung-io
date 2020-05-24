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

const PostLink = (props) => (
  <Link href="/blog/[slug]" as={`/blog/${props.url}`}>
    <a>{props.title}</a>
  </Link>
);

export default ({ allPosts, siteConfig }) => {
  return (
    <>
      <BlogTitle>Blog</BlogTitle>
      <BlogGrid>
        {allPosts &&
          allPosts.map((blog, index) => (
            <Link
              href="/blog/[slug]"
              as={`/blog/${blog.fields.slug}`}
              key={`${blog.fields.slug}-${index}`}
              url={blog.fields.slug}
              title={blog.fields.post_title}
            >
              <BlogPostContainer
                className="BlogPostCard"
                key={`${blog.fields.slug}-${index}`}
                url={blog.fields.slug}
                title={blog.fields.post_title}
              >
                <BlogPostCategory>Development</BlogPostCategory>
                <BlogPostTitle>{blog.fields.post_title}</BlogPostTitle>
                <BlogPostDescription>
                  Preview description of blog post
                </BlogPostDescription>
                <BlogPostAction
                  className="PostCardAction"
                  key={`${blog.fields.slug}-${index}`}
                  url={blog.fields.slug}
                  title={blog.fields.post_title}
                >
                  Read more <span>&#8594;</span>
                </BlogPostAction>
                <BlogPostMetas>
                  <BlogPostAuthor>Simon Young</BlogPostAuthor>
                  <BlogPostDate>1 May 2020</BlogPostDate>
                </BlogPostMetas>
              </BlogPostContainer>
            </Link>
          ))}
      </BlogGrid>
    </>
  );
};
