import { getContent } from '../../helpers/contentful';

export default async (req, res) => {
  const posts = await getContent(process.env.CONTENTFUL_BLOG_CONTENT_TYPE);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(posts));
};
