import { getContent } from 'helpers/contentful';
import Blog from '@/components/Blog';
import { GetStaticPropsResult } from 'next';

interface Props {
  allPosts: Content[];
}

export async function getStaticProps(): GetStaticPropsResult<Props> {
  const allPosts = await getContent(
    process.env.CONTENTFUL_BLOG_CONTENT_TYPE,
    '-fields.publish_date',
    5
  );
  return {
    props: { allPosts },
  };
}

const BlogPage = ({ allPosts }: Props) => <Blog allPosts={allPosts} />;

export default BlogPage;
