import { useRouter } from 'next/router';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export default ({ title, data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <h3>by {data.author}</h3>
    </div>
  );
};
