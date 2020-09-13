import Link from 'next/link';
import Headline from 'components/Headline';
import PostTitle from 'components/PostTitle';
import PostMeta from 'components/PostMeta';
import Moment from 'react-moment';
import ReactMarkdown from 'react-markdown';

const BlogPostLink = (props) => (
  <Link href="/blog/[slug]" as={`/blog/${props.url}`} passHref>
    {props.children}
  </Link>
);

const HomePage = ({ allPosts, siteConfig }) => {
  return (
    <>
      <Headline />

      <div className="max-w-screen-xl mx-auto relative pb-4 overflow-hidden">
        {allPosts &&
          allPosts.map((blog, index) => (
            <BlogPostLink
              key={`${blog.fields.slug}-${index}`}
              url={blog.fields.slug}
            >
              <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="text-lg max-w-prose mx-auto ">
                  <PostTitle title={blog.fields.post_title} />
                  <PostMeta date={blog.fields.publish_date} />

                </div>
                <div>
                  <img
                    className="object-cover w-full sm:w-4/5 mx-auto py-10"
                    src="https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div className="prose prose-lg text-gray-500 mx-auto pb-10">

                <div>
      {blog.fields.content_preview
        ? <div>
            <ReactMarkdown source={blog.fields.content_preview} />
            <p>
              <a>
                <span className="text-gray-600 hover:text-gray-800 underline">
                  Read more
                </span>
              </a>
            </p>
          </div>
        : <ReactMarkdown source={blog.fields.post_content} />
      }
    </div>
                </div>
                <hr />
              </div>
            </BlogPostLink>
          ))}
      </div>
    </>
  );
};

export default HomePage;
