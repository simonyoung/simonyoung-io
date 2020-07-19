import { useRouter } from 'next/router';
import Moment from 'react-moment';
import ReactMarkdown from 'react-markdown';

export default ({ title, data }) => {
  return (
    <div>
      <div>
        <h1>{data.fields.post_title}</h1>
      </div>
      <div>
        <div>author</div>
        <div>
          <Moment date={data.fields.post_date} format="DD MMM YYYY" />
        </div>
      </div>

      <div>
        <ReactMarkdown source={data.fields.post_content} />
      </div>
    </div>
  );
};
