import { useRouter } from 'next/router';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';

export default ({ title, data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <h3>by {data.author}</h3>
      <Moment date={data.date} format="dddd Do MMMM YYYY" />
    </div>
  );
};
