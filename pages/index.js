import matter from 'gray-matter';
import Layout from '../components/Layout';
import HomePage from '../components/HomePage';

const Index = ({ siteConfig, allBlogs }) => (
  <HomePage allBlogs={allBlogs} siteConfig={siteConfig} />
);

// src/pages/index.js
Index.getInitialProps = async function() {
  const siteConfig = await import(`../data/config.json`);
  // get all .md files from the src/posts dir
  const posts = (context => {
    // grab all the files matching this context
    const keys = context.keys();
    // grab the values from these files
    const values = keys.map(context);
    // go through each file
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');
      // get the current file value
      const value = values[index];
      // Parse frontmatter & markdownbody for the current file
      const document = matter(value.default);
      // return the .md content & pretty slug
      return {
        document,
        slug
      };
    });
    // return all the posts
    return data;
  })(require.context('../data', true, /\.md$/));

  return {
    allBlogs: posts,
    ...siteConfig
  };
};

export default Index;
