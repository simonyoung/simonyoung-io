import { useRouter } from 'next/router';
import Moment from 'react-moment';
import ReactMarkdown from 'react-markdown';

export default ({ title, data }) => {
  return (
    <div>
      <h1>{data.fields.post_title}</h1>
      <Moment date={data.fields.post_date} format="DD MMM YYYY" />
      <ReactMarkdown source={data.fields.post_content} />
    </div>
  );
};
