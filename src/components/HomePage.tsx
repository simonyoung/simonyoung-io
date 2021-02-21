/* eslint-disable @typescript-eslint/no-explicit-any */
import Headline from '@/components/Headline';
import { Post } from '@/components/Post/Post';
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
      <div className="max-w-screen-xl mx-auto relative overflow-hidden divide-y divide-logo-dark divide-dotted ">
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
