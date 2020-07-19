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
      <main class="mx-auto max-w-screen-xl px-4 sm:mt-0 sm:px-6 md:mt-4 lg:mt-8 xl:mt-16">
        <div class="text-center">
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Hello, I'm
            <br class="xl:hidden" />
            <span class="text-teal-400"> Simon Young</span>.
          </h2>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            I'm a software engineering leader based in London.
            <br /> Sometimes I <a href="#">speak at conferences</a>. I'm also a{' '}
            <a href="#">photographer</a>.
          </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <a
                href="#"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-400 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Talk to me
              </a>
            </div>
          </div>
        </div>
      </main>

      <div class="relative pt-8 pb-4 px-4 sm:px-6 lg:pt-16 lg:pb-12 lg:px-8">
        <div class="absolute inset-0">
          <div class="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              From the blog
            </h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
              Recent posts I've written - published here and elsewhere.
            </p>
          </div>

          <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {allPosts &&
              allPosts.map((blog, index) => (
                <BlogPostLink
                  key={`${blog.fields.slug}-${index}`}
                  url={blog.fields.slug}
                >
                  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div class="flex-shrink-0">
                      <img
                        class="h-48 w-full object-cover"
                        src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                        alt=""
                      />
                    </div>
                    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div class="flex-1">
                        <p class="text-sm leading-5 font-medium text-teal-600">
                          <a href="#" class="hover:underline">
                            Blog
                          </a>
                        </p>
                        <a href="#" class="block">
                          <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                            {blog.fields.post_title}
                          </h3>
                          <p class="mt-3 text-base leading-6 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Architecto accusantium praesentium eius, ut
                            atque fuga culpa, similique sequi cum eos quis
                            dolorum.
                          </p>
                        </a>
                      </div>
                      <div class="mt-6 flex items-center">
                        <div class="flex-shrink-0">
                          <a href="#">
                            <img
                              class="h-10 w-10 rounded-full"
                              src="https://pbs.twimg.com/profile_images/920328425608445952/hy7wwmbq_400x400.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="ml-3">
                          <p class="text-sm leading-5 font-medium text-gray-900">
                            <a href="#" class="hover:underline">
                              Simon Young
                            </a>
                          </p>
                          <div class="flex text-sm leading-5 text-gray-500">
                            <time datetime="2020-05-01">May 1, 2020</time>
                            <span class="mx-1">&middot;</span>
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
