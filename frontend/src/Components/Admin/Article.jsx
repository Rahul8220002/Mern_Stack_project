const Article = ({ Name }) => {
  return (
    <>
      <article className="mt-4 mx-3 p-4 bg-slate-200 rounded-md shadow-lg">
        <div className="flex items-center mb-4">
          <img
            className="w-10 h-10 me-4 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcZleFJUE4sq_TR8nG_IxzelETXY34d44CqlECkuyBBKU5NYQ-z6FuRf2tA&s"
            alt=""
          />
          <div className="font-medium dark:text-white">
            <p>
              {Name}
              <time
                dateTime="2014-08-16 19:00"
                className="block text-sm text-gray-500 dark:text-gray-400"
              >
                Joined on August 2014
              </time>
            </p>
          </div>
        </div>
        <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
            Thinking to buy another one!
          </h3>
        </div>
        <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
          <p>
            Reviewed in the United Kingdom on{" "}
            <time dateTime="2017-03-03 19:00">March 3, 2017</time>
          </p>
        </footer>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          This is my third Invicta Pro Diver. They are just fantastic value for
          money. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Veritatis temporibus quibusdam iure incidunt sunt cupiditate eligendi,
          vitae fugit odio commodi voluptate dolore quas. Sunt maiores tempora
          quae harum fugiat rerum..
        </p>
        <p className="mb-3 text-gray-500 dark:text-gray-400">
          It is obviously not the same build quality as those very expensive
          watches. But that is like comparing a Citroën to a Ferrari. This watch
          was well under £100! An absolute bargain.
        </p>
        <a className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          Read more
        </a>
        <aside>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            19 people found this helpful
          </p>
          <div className="flex items-center mt-3">
            <a
              href="#"
              className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Helpful
            </a>
            <a
              href="#"
              className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600"
            >
              Report abuse
            </a>
          </div>
        </aside>
      </article>
    </>
  );
};
export default Article;
