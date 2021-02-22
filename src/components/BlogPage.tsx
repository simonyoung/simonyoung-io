/* eslint-disable @typescript-eslint/no-explicit-any */
import { Post } from '@/components/Post/Post';
import { IPost } from 'interfaces';

type Props = {
  posts: IPost[];
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const BlogPage = ({ posts }: Props) => {
  const isPreview = true;
  return (
    <>
      <div className="max-w-screen-xl mx-auto relative overflow-hidden py-8 px-4">
        <div>
          <h2 className="text-3xl text-center leading-9 tracking-tight font-extrabold text-logo-mid md:text-5xl">
            Blog
          </h2>
          <div className="text-center">
            <p className="mt-3 max-w-md mx-auto text-base text-logo-light md:text-xl md:max-w-lg md:py-2">
              Full length articles on engineering management, technology and leadership.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto relative overflow-hidden divide-y divide-logo-dark divide-dotted ">
        {posts.map((post: any, index: number) => {
          return (
            <div key={index}>
              <Post isPreview={isPreview} key={index} {...post} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogPage;
