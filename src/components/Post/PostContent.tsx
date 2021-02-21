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
    <div className="prose prose-md text-logo-light">
      <div>
        {preview && isPreview ? (
          <div>
            <ReactMarkdown source={preview} />
            <p>
              <Link href={`/blog/${slug}`}>
                <a className="hover:underline">Read more</a>
              </Link>
            </p>
          </div>
        ) : (
          <ReactMarkdown source={content} />
        )}
      </div>
    </div>
  </>
);
