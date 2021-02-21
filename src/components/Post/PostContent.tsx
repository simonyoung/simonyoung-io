import { FunctionComponent } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

type ContentProps = {
  preview: string;
  content: string;
  isPreview: boolean;
  slug: string;
};

export const PostContent: FunctionComponent<ContentProps> = ({
  preview,
  content,
  isPreview,
  slug,
}) => (
  <>
    <div className="mx-auto w-max-content">
      {preview && isPreview ? (
        <div>
          <div className="prose text-logo-light py-4">
            <ReactMarkdown source={preview} />
          </div>
          <p>
            <Link href={`/blog/${slug}`}>
              <a className="text-logo-mid hover:text-logo-dark underline text-xs uppercase font-light tracking-wider">
                Read more
              </a>
            </Link>
          </p>
        </div>
      ) : (
        <div className="prose text-logo-light  py-4">
          <ReactMarkdown source={content} />
        </div>
      )}
    </div>
  </>
);
