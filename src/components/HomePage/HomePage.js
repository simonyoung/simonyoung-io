import Link from 'next/link';
import { Hero } from './HomePage.styles';
import Button from 'components/Button/Button';
import Moment from 'react-moment';
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
} from 'components/Blog/Blog.styles';

const BlogPostLink = (props) => (
  <Link href="/blog/[slug]" as={`/blog/${props.url}`} passHref>
    {props.children}
  </Link>
);

export default ({ allPosts, siteConfig }) => {
  return (
    <>
      <Hero>
        <h2>Hello 👋</h2>
        <h1>
          I'm <a href="#">Simon</a>. I'm a software engineering leader based in
          London. Sometimes I <a href="#">speak at conferences</a>. I'm also a{' '}
          <a href="#">photographer</a>.
        </h1>
        <Button>Talk to me</Button>
      </Hero>
      <BlogTitle>Recent Posts</BlogTitle>
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
