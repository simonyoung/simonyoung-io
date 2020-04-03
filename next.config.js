//next.config.js
require('dotenv').config();

module.exports = {
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_BLOG_CONTENT_TYPE: process.env.CONTENTFUL_BLOG_CONTENT_TYPE,
    CONTENTFUL_PAGE_CONTENT_TYPE: process.env.CONTENTFUL_PAGE_CONTENT_TYPE
  }
};
