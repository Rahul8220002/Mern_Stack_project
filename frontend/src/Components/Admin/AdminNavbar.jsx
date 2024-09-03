import { useState } from "react";
import AdminAside from "./AdminAside";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import HomeLayout from "../Layout/HomeLayout";
import { Link } from "react-router-dom";

// import { BiLogoNodejs } from "react-icons/bi";
const AdminNavbar = () => {
  const [isShow, setisShow] = useState(false);
  const handleclick = () => {
    setisShow(!isShow);
  };

  return (
    <>
      <HomeLayout>
        <nav className="w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  onClick={handleclick}
                >
                  <HiOutlineMenuAlt2 />
                </button>

                <p className="flex ms-2 md:me-24">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-8 me-3"
                    alt="FlowBite Logo"
                  />
                  <span className="self-center text-2xl font-bold sm:text-3xl whitespace-nowrap dark:text-white">
                    Admin
                  </span>
                </p>
              </div>
              <div className="bg-purple-400 p-2 rounded-lg">
                <Link to={"/addproduct"}>
                  <button>Add Product ➕</button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {isShow && <AdminAside />}
        <div className="hidden md:block">
          <AdminAside />
        </div>
      </HomeLayout>
    </>
  );
};

export default AdminNavbar;
