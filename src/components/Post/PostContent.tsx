import ReactMarkdown from 'react-markdown';

const PostContent = ({ preview, content, isPreview }) => {
  return (
    <>
      <div className="prose prose-lg text-gray-100 mx-auto pb-10">
        <div>
          {preview && isPreview ? (
            <div>
              preview
              <ReactMarkdown source={preview} />
              <p>
                <a>
                  <span className="text-pink-500 hover:text-pink-600 underline">Read more</span>
                </a>
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
