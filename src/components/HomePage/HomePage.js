import Link from 'next/link';
import { Hero } from './HomePage.styles';
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
      <Hero>
        <h1>
          I'm your new <a href="#">Next.js</a> site. Hello and{' '}
          <a href="#">welcome</a>. Enjoy your <a href="#">visit</a>. It's{' '}
          <a href="#">nice</a> here. I deploy to <a href="#">Vercel</a>.
        </h1>
      </Hero>
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
