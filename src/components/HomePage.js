import Link from 'next/link';
import Moment from 'react-moment';

const BlogPostLink = (props) => (
  <Link href="/blog/[slug]" as={`/blog/${props.url}`} passHref>
    {props.children}
  </Link>
);

export default ({ allPosts, siteConfig }) => {
  return (
    <>
      <main className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="hidden text-4xl tracking-tight leading-10 font-extrabold text-gray-900 md:block sm:text-5xl sm:leading-none md:text-6xl">
            Hello, I'm
            <br className="xl:hidden" />
            <span className="text-teal-400"> Simon Young</span>.
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            I'm a software engineering leader based in London.
            <br /> Sometimes I <a href="#">speak at conferences</a>. I'm also a{' '}
            <a href="#">photographer</a>.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-400 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Talk to me
              </a>
            </div>
          </div>
        </div>
      </main>

      <div className="max-w-screen-xl mx-auto relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              From the blog
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
              Recent articles I've written - published here and elsewhere.
            </p>
          </div>

          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {allPosts &&
              allPosts.map((blog, index) => (
                <BlogPostLink
                  key={`${blog.fields.slug}-${index}`}
                  url={blog.fields.slug}
                >
                  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover"
                        src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-teal-600">
                          <a href="#" className="hover:underline">
                            Blog
                          </a>
                        </p>
                        <a href="#" className="block">
                          <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                            {blog.fields.post_title}
                          </h3>
                          <p className="mt-3 text-base leading-6 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Architecto accusantium praesentium eius, ut
                            atque fuga culpa, similique sequi cum eos quis
                            dolorum.
                          </p>
                        </a>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <a href="#">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://pbs.twimg.com/profile_images/920328425608445952/hy7wwmbq_400x400.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm leading-5 font-medium text-gray-900">
                            <a href="#" className="hover:underline">
                              Simon Young
                            </a>
                          </p>
                          <div className="flex text-sm leading-5 text-gray-500">
                            <time dateTime="2020-05-01">May 1, 2020</time>
                            <span className="mx-1">&middot;</span>
                            <span>3 min read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </BlogPostLink>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
