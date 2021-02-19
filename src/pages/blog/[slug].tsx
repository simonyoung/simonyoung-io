/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticProps, GetStaticPaths } from 'next';
import { requestPosts } from '@/services/contentful';
import Error from '@/components/Error';
import { Post } from '@/components/Post';
// / import { IPost } from 'interfaces';

// type Props = {
//   post?: IPost[];
//   errors?: string;
// };

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const PostBySlug = ({ post, errors }) => {
  if (errors) return <Error errors={errors} />;

  return post && <Post {...post} />;
};

export default PostBySlug;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await requestPosts();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const paths = posts.map((post: any) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await requestPosts();

  try {
    const slug = params?.slug;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const post = posts.filter((data: any) => data.slug === slug);

    return {
      props: {
        post: post[0],
      },
    };
  } catch (err) {
    return {
      props: {
        errors: err.message,
      },
    };
  }
};
