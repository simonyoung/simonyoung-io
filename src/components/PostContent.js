import ReactMarkdown from 'react-markdown';

const PostContent = ({ preview, content, isPreview }) => {
  return (
    <>
      <div className="prose prose-lg text-gray-500 mx-auto pb-10">
        <div>
          {preview && isPreview ? (
            <div>
              <ReactMarkdown source={preview} />
              <p>
                <a>
                  <span className="text-gray-600 hover:text-gray-800 underline">
                    Read more
                  </span>
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
