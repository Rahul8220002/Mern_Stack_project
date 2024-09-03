import { PiUserCircleDuotone } from "react-icons/pi";
import HomeLayout from "../Layout/HomeLayout";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { VscArrowSmallLeft } from "react-icons/vsc";

import EditPassword from "./EditPassword";

const Profile = () => {
  const bioabout = {
    bio: "I'm Rahul Kumar, an aspiring Full Stack developer currently. I'm thrilled to be part of this platform.I'm always seeking opportunities to expand my skillset and knowledge in web development. Currently, I'm focused on mastering various programming languages like JavaScript, while also exploring the dynamic world of Full Stack Web Development. My areas of interest include HTML, CSS, Tailwind CSS, JavaScript, React.js, and backend technologies such as Node.js, Express.js, and databases like MongoDB.",
    git: "GitHub URL-https://github.com/Rahul8220002",
  };
  const { data } = useSelector((state) => state.auth);

  const [about] = useState(bioabout);
  const [isShow, setIsShow] = useState(false);
  // const navigate = useNavigate();

  const ModelIsShow = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <HomeLayout>
        <div className="w-full flex justify-center">
          <div className="w-[70%] mt-3">
            <section className="bg-gray-100 p-3 rounded-xl shadow-lg">
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-xl font-bold leading-7 text-gray-900 ">
                    Profile
                  </h2>
                  <p className="mt-1 text-sm leading-2 text-gray-600">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        GitHub
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                            website.com/
                          </span>
                          <input
                            name="username"
                            type="text"
                            value={about.git}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-2 text-gray-900"
                      >
                        About
                      </label>
                      <div className="mt-2">
                        <textarea
                          name="about"
                          rows={3}
                          className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                          value={[about.bio]}
                        />
                      </div>
                      <p className="mt-3 text-sm leading-4 text-gray-600">
                        Write a few sentences about yourself.
                      </p>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="photo"
                        className="block text-sm font-medium leading-3 text-gray-900"
                      >
                        Photo
                      </label>
                      <div className="mt-2 flex items-center gap-x-3">
                        <PiUserCircleDuotone
                          aria-hidden="true"
                          className="h-12 w-12 text-gray-300"
                        />
                        <button
                          type="button"
                          className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-900/10 pb-6">
                  <h2 className="text-base font-semibold leading-3 text-gray-900">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <div
                        className="mt-2 block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                      >
                        {" "}
                        {data?.firstName}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <div
                        className="mt-2 block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                      >
                        {data?.lastName}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Role
                      </label>
                      <div
                        className="mt-2 block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                      >
                        {data?.role}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Mobile Number
                      </label>
                      <div
                        className="mt-2 block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                      >
                        {data?.mobile}
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-4 text-gray-900"
                      >
                        Email address
                      </label>
                      <div
                        className="mt-2 block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                      >
                        {data?.email}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-4 text-gray-900"
                      >
                        Country
                      </label>
                      <div className="mt-2">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>choose your country</option>
                          <option>India</option>
                          <option>Canada</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-900/10 pb-7">
                  <h2 className="text-base font-semibold leading-3 text-gray-900">
                    Notifications
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Well always let you know about important changes, but you
                    pick what else you want to hear about.
                  </p>

                  <div className="mt-8 space-y-10">
                    <fieldset>
                      <legend className="text-sm font-semibold leading-6 text-gray-900">
                        Push Notifications
                      </legend>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        These are delivered via SMS to your mobile phone.
                      </p>
                      <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                          <input
                            id="push-everything"
                            name="push-notifications"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="push-everything"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Everything
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="push-email"
                            name="push-notifications"
                            type="radio"
                            checked
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="push-email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Same as email
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="push-nothing"
                            name="push-notifications"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="push-nothing"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            No push notifications
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </section>
            <div className="mt-6 flex items-center justify-start gap-x-6">
              <button
                onClick={ModelIsShow}
                className="rounded-md mb-3 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Change password
              </button>
            </div>
          </div>
        </div>
        {isShow && <EditPassword />}
      </HomeLayout>
    </>
  );
};
export default Profile;
