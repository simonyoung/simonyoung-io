import Link from 'next/link';
import { IPostFields } from 'interfaces';

const PostPreview = ({ post_title, slug }: IPostFields) => (
  <article>
    <h2>
      <Link href="/blog/[slug]" as={`/blog/${slug}`}>
        {post_title}
      </Link>
    </h2>
  </article>
);

export default PostPreview;
