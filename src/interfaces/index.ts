import { Entry } from 'contentful';

export interface IPostFields {
  post_title: string;
  slug: string;
  description?: string | undefined;
  date: string;
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
