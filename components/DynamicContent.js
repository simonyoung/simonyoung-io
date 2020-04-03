import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';

export default ({ title, data }) => {
  return (
    <div>
      <h1>{data.fields.page_title}</h1>

      <ReactMarkdown source={data.fields.page_content} />
    </div>
  );
};
