import { FunctionComponent } from 'react';
import dayjs from 'dayjs';

type MetaProps = {
  date: string;
};

export const PostMeta: FunctionComponent<MetaProps> = ({ date }) => (
  <>
    <div className="w-max-content ">
      <p className="inline-block text-logo-light text-xs uppercase leading-6 font-light tracking-wider">
        {dayjs(date).format('MMMM DD, YYYY')}
      </p>
    </div>
  </>
);
