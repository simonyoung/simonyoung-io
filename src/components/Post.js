import { useRouter } from 'next/router';
import PostTitle from 'components/PostTitle';
import PostMeta from 'components/PostMeta';
import PostImage from 'components/PostImage';
import PostContent from 'components/PostContent';

const Post = ({ title, data }) => {
  const isPreview = false;
  return (
    <div className="max-w-screen-xl mx-auto relative py-4 overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto mb-6">
          <PostTitle title={data.fields.post_title} />
          <PostMeta date={data.fields.publish_date} />
        </div>

        <PostContent
          preview={data.fields.content_preview}
          content={data.fields.post_content}
          isPreview={isPreview}
        />
      </div>
    </div>
  );
};

export default Post;
