import Link from 'next/link';
import Moment from 'react-moment';

const PostLink = (props) => (
  <div className="post-box">
    <p>
      <Moment date={props.date} format="DD MMM YYYY" />
    </p>
    <h2>
      <Link href="/blog/[slug]" as={`/blog/${props.url}`}>
        <a>{props.title}</a>
      </Link>
    </h2>
  </div>
);

export default ({ allPosts, siteConfig }) => {
  return (
    <>
      <h2>Latest Posts</h2>
      <div className="post-list">
        {allPosts &&
          allPosts.map((blog, index) => (
            <PostLink
              key={`${blog.fields.slug}-${index}`}
              url={`${blog.fields.slug}`}
              title={blog.fields.post_title}
              date={blog.fields.post_date}
            />
          ))}
      </div>
    </>
  );
};
