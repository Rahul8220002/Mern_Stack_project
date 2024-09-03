import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import HomeLayout from "../Layout/HomeLayout";
const Contacts = () => {
  return (
    <HomeLayout>
      <div className="w-full h-auto md:h-[81vh] md:flex flex-col justify-center items-center bg-slate-200">
        <div className="w-full h-35  md:flex md:justify-evenly sm:flex sm:justify-evenly">
          <section className="md:w-1/4 md:h-52 p-5 flex justify-start md:justify-center">
            <div className="w-14 h-12 text-xl p-2 flex items-center justify-center rounded-xl bg-teal-700 text-white">
              <CiLocationOn />
            </div>
            <article className="font-semibold p-1 mx-1 text-gray-500">
              <h4>34 Raymouth Rd. Baltemoer</h4>
              <p>chandigrah 34c</p>
            </article>
          </section>
          <section className="md:w-1/4 md:h-52 p-5 flex justify-start md:justify-center">
            <div className="w-14 h-12 text-xl p-2 flex items-center justify-center rounded-xl bg-teal-700 text-white">
              <MdOutlineEmail />
            </div>
            <article className="font-semibold p-1 mx-1 text-gray-500">
              <p>rahulk822002@gmail.com</p>
            </article>
          </section>
          <section className="md:w-1/4 md:h-52 p-5 flex justify-start md:justify-center">
            <div className="w-14 h-12 text-xl flex items-center justify-center rounded-xl bg-teal-700 text-white">
              <FiPhoneCall />
            </div>
            <article className="font-semibold p-1 mx-1 text-gray-500">
              <p>+91 867791****</p>
            </article>
          </section>
        </div>
        <div className="w-full p-5 flex flex-col md:justify-start md:items-center bg-slate-400">
          <form className="max-w-sm w-full">
            <div className="mb-5 md:w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your full Name
              </label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Rahul kumar"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                your email
              </label>
              <input
                type="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5 md:w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                your Message
              </label>
              <textarea
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Hii...."
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Contacts;
