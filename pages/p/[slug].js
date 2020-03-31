import fetch from 'node-fetch';
import Post from '../../components/Post';

const PostPage = ({ siteTitle, data }) => {
  return <Post title={siteTitle} data={data} />;
};

export async function getStaticPaths() {
  const res = await fetch(process.env.API_BASE_URL + `/api/posts`);
  const posts = await res.json();

  const paths = posts.map(post => ({
    params: { slug: post.fields.url }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const siteConfig = await import(`../../data/config.json`);
  const res = await fetch(
    process.env.API_BASE_URL + `/api/post/${params.slug}`
  );
  const data = await res.json();

  return {
    props: {
      siteTitle: siteConfig.title,
      data: data
    }
  };
}

export default PostPage;
