import { useRouter } from 'next/router';
import Moment from 'react-moment';

export default ({ title, data }) => {
  return (
    <div>
      <h1>{data.fields.title}</h1>
      <Moment date={data.fields.date} format="dddd Do MMMM YYYY" />
    </div>
  );
};
