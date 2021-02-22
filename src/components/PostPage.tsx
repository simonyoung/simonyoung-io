/* eslint-disable @typescript-eslint/no-explicit-any */
import { Post } from '@/components/Post/Post';
//import { IPost } from 'interfaces';
import { NextSeo } from 'next-seo';

//type Props = {
//  post: IPost[];
//};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const PostPage = ({ post }) => {
  const isPreview = false;
  return (
    <>
      <NextSeo
        title={post.post_title}
        openGraph={{
          title: post.post_title,
        }}
      />
      <div className="max-w-screen-xl mx-auto relative overflow-hidden divide-y divide-logo-dark divide-dotted ">
        <div>
          <Post isPreview={isPreview} {...post} />
        </div>
      </div>
    </>
  );
};

export default PostPage;
