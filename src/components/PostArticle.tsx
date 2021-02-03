import { IPostFields } from 'interfaces';

const PostArticle = ({ post_title, description }: IPostFields) => {
  return (
    <article>
      <h1>{post_title}</h1>
      {description && <p>{description}</p>}
    </article>
  );
};

export default PostArticle;
