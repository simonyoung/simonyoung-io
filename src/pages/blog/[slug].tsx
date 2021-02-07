import { GetStaticProps, GetStaticPaths } from 'next';
import { requestPosts } from '@/services/contentful';
import Error from '@/components/Error';
import { Post } from '@/components/Post';
import { IPostFields } from 'interfaces';

type Props = {
  post?: IPostFields;
  errors?: string;
};

const PostBySlug = ({ post, errors }: Props) => {
  if (errors) return <Error errors={errors} />;

  return post && <Post {...post} />;
};

export default PostBySlug;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await requestPosts();

  const paths = posts.map((post: any) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await requestPosts();

  try {
    const slug = params?.slug;
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
