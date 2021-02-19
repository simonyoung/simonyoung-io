import { Entry } from 'contentful';

export interface IPostFields {
  post_title: string;
  slug: string;
  content_preview?: string | undefined;
  post_content?: string | undefined;
  publish_date: string;
}

export interface IPost extends Entry<IPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'post';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}
