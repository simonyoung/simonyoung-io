import { FunctionComponent } from 'react';
import Link from 'next/link';

type TitleProps = {
  title: string;
  slug: string;
};

export const PostTitle: FunctionComponent<TitleProps> = ({ title, slug }) => (
  <h1 className="mt-2 mb-6 text-3xl text-center leading-8 font-extrabold tracking-tight text-logo-mid sm:text-4xl sm:leading-10">
    <Link href={`/blog/${slug}`}>
      <a className="hover:underline">{title}</a>
    </Link>
  </h1>
);
