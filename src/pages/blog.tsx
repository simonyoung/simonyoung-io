import { GetStaticProps } from 'next';
import { requestPosts } from '@/services/contentful';
import Blog from '@/components/Blog';
import { IPost } from 'interfaces';

type Props = {
  posts: IPost[];
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const BlogPage = ({ posts }: Props) => {
  return <Blog posts={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await requestPosts();
  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
