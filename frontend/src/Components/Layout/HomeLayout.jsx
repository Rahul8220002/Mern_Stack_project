import { Link, useNavigate } from "react-router-dom";
import { BiLogoNodejs } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Logout, RemoveUserAccount } from "../app/feature/authSlice";

const navigation = [
  { name: <Link to="/">Home</Link>, current: true },
  { name: <Link to="/about">About</Link>, current: false },
  { name: <Link to="/contacts">Contacts</Link>, current: false },
  { name: <Link to="/services">Services</Link>, current: false },
  { name: <Link to="/shop">Shop</Link>, current: false },
];

const HomeLayout = ({ children }) => {
  const [isShow, setisShow] = useState(false);
  const [menu, setMenu] = useState(false);
  const userRole = useSelector((state) => state.auth?.data?.role);
  const { data } = useSelector((state) => state?.addto);

  const isLoggedInUser = useSelector((state) => state.auth?.data);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCilck = () => {
    setisShow(!isShow);
  };
  const openmenu = () => {
    setMenu(!menu);
  };
  const handleLogout = async (e) => {
    e.preventDefault();
    const response = await dispatch(Logout());
    if (response?.payload?.success) {
      navigate("/");
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const response = await dispatch(RemoveUserAccount());
    if (response?.payload?.success) {
      navigate("/");
    }
  };
  return (
    <>
      <nav className="text-white border-b-2 border-sky-900">
        <div className="max-w-full h-16 flex items-cente bg-sky-950 justify-between">
          <Link
            to={"/"}
            className="flex items-center space-x-2 rtl:space-x-reverse text-4xl"
          >
            <BiLogoNodejs />
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
              Rahul
            </span>
          </Link>
          {isLoggedInUser ? (
            <div className="flex items-center justify-between md:order-2 md:space-x-1 rtl:space-x-reverse">
              <Link to={"/cart"} className="w-9 p-1 text-xl md:space-y-2">
                <sup className="absolute w-1 h-1 text-sm mt-5 mx-4">
                  {data.length}
                </sup>
                <MdOutlineShoppingCart />
              </Link>
              <button
                type="button"
                onClick={handleCilck}
                className="inline-flex items-center font-semibold justify-center px-3 py-2 text-base text-gray-400 dark:text-white rounded-lg cursor-pointer hover:bg-yellow-200 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {isLoggedInUser?.firstName}
                <span className="text-lg me-2 mx-1 flex items-center">
                  <FaRegUserCircle />
                </span>
              </button>
              {isShow && (
                <div className="z-50 absolute w-auto mt-[200px] me-9 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                  <ul className="py-2 font-medium">
                    <Link
                      to={"/profile"}
                      className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                    >
                      <span className="text-xl ">
                        <FaRegUserCircle />
                      </span>
                      Profile
                    </Link>
                    <li
                      className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                      onClick={handleLogout}
                    >
                      <span className="text-xl ">
                        <FiLogOut />
                      </span>
                      Logout
                    </li>
                    <li
                      className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                      onClick={handleDelete}
                    >
                      <span className="text-xl ">
                        <FiLogOut />
                      </span>
                      Delete Account
                    </li>
                  </ul>
                </div>
              )}

              <button
                type="button"
                className="w-10 h-10 text-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                onClick={openmenu}
              >
                <IoMdMenu className="text-center mx-2 text-2xl text-black" />

                {menu && (
                  <div className="z-50 relative flex justify-end mt-7 w-auto me-1 text-base list-none divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                    <ul className="bg-gray-400 flex flex-col items-end text-black font-medium p-3 md:p-0 md:space-x-8 md:mt-0 md:border-0 ">
                      {navigation.map((item, index) => (
                        <li
                          key={index}
                          className="py-2 md:p-0 hover:text-yellow-900"
                        >
                          {item.name}
                        </li>
                      ))}
                      {userRole === "Admin" ? (
                        <li>
                          <Link to="/require/admin">Admin_DashBoard</Link>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                )}
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between md:me-3 md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
              <Link
                to={"/signin"}
                type="button"
                className="inline-flex items-center font-medium justify-center px-3 py-1 md:py-2 sm:py-2 text-sm text-white dark:text-white rounded-lg cursor-pointer hover:bg-blue-600 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                SignIn
              </Link>
              <Link
                to={"/signup"}
                type="button"
                className="inline-flex items-center font-medium justify-center px-3 py-1 md:py-2 sm:py-2 text-sm text-white dark:text-white rounded-lg cursor-pointer hover:bg-blue-600 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                SignUp
              </Link>
              <button
                type="button"
                className="w-10 h-10 text-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={openmenu}
              >
                <IoMdMenu className="text-center mx-2 text-2xl text-black" />
                {menu && (
                  <div className="z-50 relative flex justify-end mt-7 w-auto me-1 text-base list-none divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                    <ul className="bg-gray-400 flex flex-col items-end text-black font-medium p-3 md:p-0 md:space-x-8 md:mt-0 md:border-0 ">
                      {navigation.map((item, index) => (
                        <li
                          key={index}
                          className="py-2 md:p-0 hover:text-yellow-900"
                        >
                          {item.name}
                        </li>
                      ))}
                      {userRole === "Admin" ? (
                        <li>
                          <Link to="/require/admin">Admin_DashBoard</Link>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                )}
              </button>
            </div>
          )}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              {navigation.map((item, index) => (
                <li
                  key={index}
                  className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent md:hover:text-yellow-600 dark:text-white md:dark:hover:text-zinc-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {item.name}
                </li>
              ))}
              {userRole === "Admin" ? (
                <li>
                  <Link to="/require/admin">Admin_DashBoard</Link>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default HomeLayout;
