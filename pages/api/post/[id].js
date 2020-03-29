import { getContentBySlug } from '../../../helpers/contentful';

export default async (req, res) => {
  const {
    query: { id }
  } = req;

  const post = await getContentBySlug(id);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(post));
};
