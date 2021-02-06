import { PostTitle } from '@/components/Post/PostTitle';
import PostMeta from '@/components/Post/PostMeta';
import PostContent from '@/components/Post/PostContent';
import { IPostFields } from 'interfaces';

const Post = ({
  post_title,
  publish_date,
  content_preview,
  post_content,
  slug,
  isPreview,
}: IPostFields) => (
  <>
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="text-lg max-w-prose mx-auto ">
        <PostTitle title={post_title} slug={slug} />
        <PostMeta date={publish_date} />
      </div>
    </div>
    <PostContent
      preview={content_preview}
      content={post_content}
      isPreview={isPreview}
      slug={slug}
    />
  </>
);

export default Post;
