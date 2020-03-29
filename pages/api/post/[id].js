import { getContentBySlug } from '../../../helpers/contentful';

export default async (req, res) => {
  const {
    query: { id }
  } = req;

  const post = await getContentBySlug(id);

  if (!post) {
    return res.status(404).json({
      status: 404,
      message: 'Not Found'
    });
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(post));
  }
};
