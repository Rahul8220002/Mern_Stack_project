import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { MdOutlineRateReview } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import AdminHeader from "./AdminHeader";
import { Logout } from "../app/feature/authSlice";

const AdminAside = () => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    const response = await dispatch(Logout());
    if (response?.payload?.success) {
      navigate("/");
    }
  };

  const handletoggle = isShow && (
    <div className="font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
        <li>
          <Link
            to={"/addproduct"}
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Add-product
          </Link>
        </li>
      </ul>
    </div>
  );

  const handleclick = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <div className="flex">
        <aside className="left-0 w-64 h-screen pt-2 transition-transform-translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span className="flex-shrink-0 w-5 h-5 text-xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    <MdOutlineDashboard />
                  </span>
                  <button
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    onClick={handleclick}
                  >
                    Dashboard
                    <span className="w-3 h-23 ms-3 text-2xl">
                      <RiArrowDropDownLine />
                    </span>
                  </button>
                </div>
                {handletoggle}
              </li>
              <li>
                <div className="flex items-center cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span className="flex-shrink-0 w-5 h-5 text-xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    <MdOutlineShoppingCart />
                  </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">Order</span>
                  <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Pro
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span className="flex-shrink-0 w-5 h-5 text-xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    <FiUsers />
                  </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Customers
                  </span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    3
                  </span>
                </div>
              </li>
              <li>
                <Link
                  to={"/rating"}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-shrink-0 w-5 h-5 text-xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    <MdOutlineRateReview />
                  </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">Reviews</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/My Product"}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-shrink-0 w-5 h-5 text-xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    <MdOutlineProductionQuantityLimits />
                  </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Products
                  </span>
                </Link>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    he
                  </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Sign Out
                  </span>
                </button>
              </li>
              <hr className="border-b-2" />
              <li>
                <Link
                  to={"/profile"}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-shrink-0 w-5 h-5 text-xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    <IoSettingsOutline />
                  </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <div>
          <AdminHeader />
        </div>
      </div>
    </>
  );
};

export default AdminAside;
