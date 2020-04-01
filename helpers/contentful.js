import { ContentfulClientApi, createClient, getEntries } from 'contentful';

const client = createClient({
  space: process.env.contentful_space_id,
  accessToken: process.env.contentful_access_token
});

export const getContent = async content_type => {
  const entries = await client.getEntries({
    content_type: content_type
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
};

export const getContentBySlug = async slug => {
  const entry = await client.getEntries({
    content_type: 'post',
    'fields.url': slug
  });
  if (entry.items) return entry.items[0];
  console.log(`Error getting Entries for ${contentType.name}.`);
};
