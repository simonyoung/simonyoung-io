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

export default function Posts() {
  return (
    <div>
      <ul>
        <PostLink id="the-empire-strikes-back" />
      </ul>
    </div>
  );
}
