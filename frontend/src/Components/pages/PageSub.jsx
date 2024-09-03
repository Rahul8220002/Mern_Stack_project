const PageSub = () => {
  return (
    <>
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-20 lg:py-48">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Subscribe To Get Discount Offers
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod Lorem ipsum dolor sit amet Lorem, ipsum dolor.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <form className="w-full max-w-md mx-auto">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Email sign-up
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <span className="w-4 h-4 text-gray-500 dark:text-gray-400"></span>
                </div>
                <input
                  type="email"
                  id="default-email"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email here..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Expore
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default PageSub;
