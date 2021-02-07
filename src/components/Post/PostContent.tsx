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
    <div className="prose prose-lg text-gray-100 mx-auto pb-10">
      <div>
        {preview && isPreview ? (
          <div>
            <ReactMarkdown source={preview} />
            <p className="text-pink-500 hover:text-pink-600 underline">
              <Link href={`/blog/${slug}`}>Read more</Link>
            </p>
          </div>
        ) : (
          <ReactMarkdown source={content} />
        )}
      </div>
    </div>
  </>
);
