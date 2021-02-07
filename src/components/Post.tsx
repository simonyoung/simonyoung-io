import { FunctionComponent } from 'react';
import { PostTitle } from '@/components/Post/PostTitle';
import { PostMeta } from '@/components/Post/PostMeta';
import { PostContent } from '@/components/Post/PostContent';
import { IPostFields } from 'interfaces';

type PostProps = {
  post_title: string;
  publish_date: string;
  content_preview: string;
  post_content: string;
  slug: string;
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
