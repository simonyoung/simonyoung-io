import { useRouter } from 'next/router';
import Moment from 'react-moment';
import ReactMarkdown from 'react-markdown';

const Post = ({ title, data }) => {
  return (
    <div className="max-w-screen-xl mx-auto relative py-4 overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto mb-6 ">
          <h1 className="mt-2 mb-6 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {data.fields.post_title}
          </h1>
          <div className="w-max-content mx-auto">
            <p className="align-items inline-block px-2 py-0 text-base leading-6 ml-2 uppercase font-medium">
              By Simon Young
            </p>
            <p className="align-items inline-block px-2">
              <svg
                class="h-6 w-6 my-2 relative inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <Moment
                date={data.fields.publish_date}
                format="DD MMM YYYY"
                className="text-base leading-6 ml-2 uppercase font-medium inline-block"
              />
            </p>
          </div>
        </div>
        <div className="prose prose-lg text-gray-500 mx-auto">
          <ReactMarkdown source={data.fields.post_content} />
        </div>
      </div>
    </div>
  );
};

export default Post;
