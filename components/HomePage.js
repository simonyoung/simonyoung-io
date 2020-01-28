//const HelloWorld = () => <div>Hello world. Welcome to the site.</div>;

//export default HelloWorld;

import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);
/*
export default function Posts() {
  return (
    <>
      <ul className="list">
        <PostLink id="the-empire-strikes-back" />
      </ul>
    </>
  );
}
*/

export default ({ allBlogs, siteConfig }) => {
  console.log(allBlogs);

  return (
    <>
      <ul className="list">
        <PostLink id="a-new-hope" />
        <PostLink id="the-empire-strikes-back" />
        <PostLink id="return-of-the-jedi" />
      </ul>
    </>
  );
};
