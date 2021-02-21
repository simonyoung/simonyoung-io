/* eslint-disable @typescript-eslint/no-explicit-any */
import { Post } from '@/components/Post';
import { IPost } from 'interfaces';

type Props = {
  posts: IPost[];
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Blog = ({ posts }: Props) => {
  const isPreview = true;
  return (
    <>
      <div className="max-w-screen-xl mx-auto relative overflow-hidden py-8 px-4">
        <div>
          <h2 className="text-3xl text-center leading-9 tracking-tight font-extrabold text-logo-mid">
            Blog
          </h2>
          <div className="mt-3">
            <p className="text-base text-center leading-7 text-logo-light">
              Full length articles on engineering management, technology and leadership.
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-16 border-t-2 border-solid border-logo-dark pt-10">
          {posts.map((post: any, index: number) => {
            return (
              <div key={index}>
                <Post isPreview={isPreview} key={index} {...post} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
