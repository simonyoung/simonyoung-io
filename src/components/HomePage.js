import Link from 'next/link';
import Headline from 'components/Headline';
import PostTitle from 'components/PostTitle';
import PostMeta from 'components/PostMeta';
import PostImage from 'components/PostImage';
import PostContent from 'components/PostContent';

const BlogPostLink = (props) => (
  <Link href="/blog/[slug]" as={`/blog/${props.url}`} passHref>
    {props.children}
  </Link>
);

const HomePage = ({ allPosts, siteConfig }) => {
  const isPreview = true;
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

                <PostContent
                  preview={blog.fields.content_preview}
                  content={blog.fields.post_content}
                  isPreview={isPreview}
                />
                <hr className="mb-12" />
              </div>
            </BlogPostLink>
          ))}
      </div>
    </>
  );
};

export default HomePage;
