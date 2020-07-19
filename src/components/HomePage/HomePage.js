import Link from 'next/link';

import Button from 'components/Button/Button';
import Moment from 'react-moment';

const BlogPostLink = (props) => (
  <Link href="/blog/[slug]" as={`/blog/${props.url}`} passHref>
    {props.children}
  </Link>
);

export default ({ allPosts, siteConfig }) => {
  return (
    <>
      <div>
        <h2>Hello 👋</h2>
        <h1>
          I'm <a href="#">Simon</a>. I'm a software engineering leader based in
          London. Sometimes I <a href="#">speak at conferences</a>. I'm also a{' '}
          <a href="#">photographer</a>.
        </h1>
        <Button>Talk to me</Button>
      </div>
      <div>Recent Posts</div>
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
                  <div>Simon Young</div>
                  <div>1 May 2020</div>
                </div>
              </div>
            </BlogPostLink>
          ))}
      </div>
    </>
  );
};
