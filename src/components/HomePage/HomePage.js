import Link from 'next/link';
import { Hero } from './HomePage.styles';
import Button from 'components/Button/Button';
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
        <h2>Hello 👋</h2>
        <h1>
          I'm <a href="#">Simon</a>. I'm a software engineering leader based in
          London. Sometimes I <a href="#">speak at conferences</a>. I'm also a{' '}
          <a href="#">photographer</a>.
        </h1>
        <Button>Talk to me</Button>
      </Hero>
      <h2>Blog</h2>
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
