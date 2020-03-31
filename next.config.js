//next.config.js
require('dotenv').config();

module.exports = {
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_BLOG_CONTENT_TYPE: process.env.CONTENTFUL_BLOG_CONTENT_TYPE,
    NOW_URL: process.env.NOW_URL
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });
    return config;
  }
};
