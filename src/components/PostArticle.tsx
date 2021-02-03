import { IPostFields } from 'interfaces';

const PostArticle = ({ page_title, description }: IPostFields) => {
  return (
    <article>
      <h1>{page_title}</h1>
      {description && <p>{description}</p>}
    </article>
  );
};

export default PostArticle;
