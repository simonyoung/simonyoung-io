import { ContentfulClientApi, createClient, getEntries } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getContent = async (content_type) => {
  const entries = await client.getEntries({
    content_type: content_type,
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
};

export const getContentBySlug = async (slug, content_type) => {
  const entry = await client.getEntries({
    content_type: content_type,
    'fields.slug': slug,
  });
  if (entry.items) return entry.items[0];
  console.log(`Error retrieving entries for ${contentType.name}.`);
};
