import { GetStaticProps } from 'next';
import { requestPosts } from '@/services/contentful';
import BlogPage from '@/components/BlogPage';
import { IPost } from 'interfaces';

type Props = {
  posts: IPost[];
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Blog = ({ posts }: Props) => {
  return <BlogPage posts={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await requestPosts();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

export default Blog;
