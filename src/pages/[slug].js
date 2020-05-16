import { useRouter } from 'next/router';
import { getContent, getContentBySlug } from '../helpers/contentful';
import DynamicContent from 'components/DynamicContent';

const DynamicContentPage = ({ siteTitle, data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <DynamicContent title={siteTitle} data={data} />;
};

export async function getStaticPaths() {
  const posts = await getContent(process.env.CONTENTFUL_PAGE_CONTENT_TYPE);
  const paths = posts.map((post) => ({
    params: { slug: post.fields.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const siteConfig = await import(`data/config.json`);
  const data = await getContentBySlug(
    params.slug,
    process.env.CONTENTFUL_PAGE_CONTENT_TYPE
  );

  return {
    props: {
      siteTitle: siteConfig.title,
      data: data,
    },
    unstable_revalidate: 1,
  };
}

export default DynamicContentPage;
