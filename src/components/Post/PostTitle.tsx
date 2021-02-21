import { FunctionComponent } from 'react';
import Link from 'next/link';

type TitleProps = {
  title: string;
  slug: string;
};

export const PostTitle: FunctionComponent<TitleProps> = ({ title, slug }) => (
  <h1 className="text-3xl text-center leading-8 font-extrabold tracking-tight text-logo-mid">
    <Link href={`/blog/${slug}`}>
      <a className="hover:underline">{title}</a>
    </Link>
  </h1>
);
