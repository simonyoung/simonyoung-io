import { GetStaticProps } from 'next';
import { requestPosts } from '@/services/contentful';
import HomePage from '@/components/HomePage';
import { IPost } from 'interfaces';

type Props = {
  posts: IPost[];
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Index = ({ posts }: Props) => {
  return <HomePage posts={posts} />;
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

export default Index;
