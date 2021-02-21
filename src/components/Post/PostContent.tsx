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
    <div className="mx-auto">
      {preview && isPreview ? (
        <div>
          <div className="mx-auto max-w-none prose md:prose-lg text-logo-light md:text-logo-light py-4">
            <ReactMarkdown source={preview} />
          </div>
          <p className="mx-auto">
            <Link href={`/blog/${slug}`}>
              <a className="text-logo-mid hover:text-logo-dark underline text-xs uppercase font-light tracking-wider md:text-sm">
                Read more
              </a>
            </Link>
          </p>
        </div>
      ) : (
        <div className="mx-auto prose md:prose-lg text-logo-light md:text-logo-light py-4">
          <ReactMarkdown source={content} />
        </div>
      )}
    </div>
  </>
);
