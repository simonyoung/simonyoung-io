import { useRouter } from 'next/router';
import { getContent, getPageBySlug } from '../helpers/contentful';
import DynamicContent from '../components/DynamicContent';

const DynamicContentPage = ({ siteTitle, data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <DynamicContent title={siteTitle} data={data} />;
};

export async function getStaticPaths() {
  const posts = await getContent(process.env.CONTENTFUL_PAGE_CONTENT_TYPE);
  console.log(posts);
  const paths = posts.map(post => ({
    params: { page: post.fields.url }
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const siteConfig = await import(`../data/config.json`);
  const data = await getPageBySlug(params.page);

  return {
    props: {
      siteTitle: siteConfig.title,
      data: data
    }
  };
}

export default DynamicContentPage;
