import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const PostContent = ({ preview, content, isPreview, slug }) => {
  return (
    <>
      <div className="prose prose-lg text-gray-100 mx-auto pb-10">
        <div>
          {preview && isPreview ? (
            <div>
              <ReactMarkdown source={preview} />
              <p className="text-pink-500 hover:text-pink-600 underline">
                <Link href={`/blog/${slug}`}>Read more</Link>
              </p>
            </div>
          ) : (
            <ReactMarkdown source={content} />
          )}
        </div>
      </div>
    </>
  );
};
export default PostContent;
