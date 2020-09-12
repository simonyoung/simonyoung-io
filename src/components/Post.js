import { useRouter } from 'next/router';
import Moment from 'react-moment';
import ReactMarkdown from 'react-markdown';

const Post = ({ title, data }) => {
  return (
    <div className="max-w-screen-xl mx-auto relative py-8 overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto mb-6">
          <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {data.fields.post_title}
          </h1>
          <p className="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
            <Moment date={data.fields.publish_date} format="DD MMM YYYY" />
          </p>
        </div>
        <div className="prose prose-lg text-gray-500 mx-auto">
          <ReactMarkdown source={data.fields.post_content} />
        </div>
      </div>
    </div>
  );
};

export default Post;
