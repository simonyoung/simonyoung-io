import { GetStaticProps } from 'next';
import { requestPosts } from '@/services/contentful';
import HomePage from '@/components/HomePage';
import { IPost } from 'interfaces';

type Props = {
  posts: IPost[];
};

const Index = ({ posts }: Props) => {
  return <HomePage posts={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await requestPosts();
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
};

export default Index;
