/* eslint-disable @typescript-eslint/no-explicit-any */
import Headline from '@/components/Headline';
import { Post } from '@/components/Post';
import { IPost } from 'interfaces';
import { NextSeo } from 'next-seo';

type Props = {
  posts: IPost[];
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Posts = ({ posts }: Props) => {
  const isPreview = true;
  return (
    <>
      <NextSeo
        title="Home"
        openGraph={{
          title: 'home',
          description: 'homepage; a list of posts',
        }}
      />
      <Headline />
      <div className="max-w-screen-xl mx-auto relative pb-4 overflow-hidden divide-y divide-logo-dark divide-dotted">
        {posts.map((post: any, index: number) => {
          return (
            <div key={index}>
              <Post isPreview={isPreview} {...post} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;

/*
const BlogPostLink = (props) => <Link href={`/blog/${props.url}`}>{props.children}</Link>;

const HomePage = ({ allPosts }) => {
  const isPreview = true;
  return (
    <>
      <NextSeo
        title="Home"
        openGraph={{
          title: 'home',
          description: 'homepage; a list of posts',
        }}
      />


      <div className="max-w-screen-xl mx-auto relative pb-4 overflow-hidden">
        {allPosts &&
          allPosts.map((blog, index) => (
            <BlogPostLink key={`${blog.fields.slug}-${index}`} url={blog.fields.slug}>
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
                <hr className="mb-12 border-pink-200" />
              </div>
            </BlogPostLink>
          ))}
      </div>
    </>
  );
};

export default HomePage;
*/
