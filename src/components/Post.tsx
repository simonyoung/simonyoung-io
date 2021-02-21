import { FunctionComponent } from 'react';
import { PostTitle } from '@/components/Post/PostTitle';
import { PostMeta } from '@/components/Post/PostMeta';
import { PostContent } from '@/components/Post/PostContent';

type PostProps = {
  post_title: string;
  publish_date: string;
  content_preview: string;
  post_content: string;
  slug: string;
  isPreview: boolean;
};

export const Post: FunctionComponent<PostProps> = ({
  post_title,
  publish_date,
  content_preview,
  post_content,
  slug,
  isPreview,
}) => (
  <>
    <div className="relative gap-4 py-8 px-4">
      <div className="text-lg max-w-3xl mx-auto">
        <PostTitle title={post_title} slug={slug} />
        <PostMeta date={publish_date} />
        <PostContent
          preview={content_preview}
          content={post_content}
          isPreview={isPreview}
          slug={slug}
        />
      </div>
    </div>
  </>
);
