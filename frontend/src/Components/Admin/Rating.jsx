import { Link } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Article from "./Article";
import { useNavigate } from "react-router-dom";

const Rating = () => {
  const navigate = useNavigate();
  return (
    <HomeLayout>
      <div className="w-full flex justify-center items-center flex-col mt-8">
        <div className="w-[85%]">
          <div className="mt-5 flex flex-col gap-3 ">
            <div className="mb-5">
              <Link to={navigate(-1)}>
                <button className="bg-purple-500 rounded-lg p-2 px-5">
                  Back
                </button>
              </Link>
            </div>
            <div className="flex items-center mb-5">
              <p className="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">
                8.7
              </p>
              <p className="ms-2 font-medium text-gray-900 dark:text-white">
                Excellent
              </p>
              <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                376 reviews
              </p>
              <a
                href="#"
                className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Read all reviews
              </a>
            </div>
            <div className="gap-8 sm:grid sm:grid-cols-2">
              <div>
                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Staff
                  </div>
                  <div className="flex items-center mb-3">
                    <input type="range" className="w-full" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      8.8
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Comfort
                  </div>
                  <div className="flex items-center mb-3">
                    <input type="range" className="w-full" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      8.9
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Free WiFi
                  </div>
                  <div className="flex items-center mb-3">
                    <input type="range" className="w-full" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      8.8
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Facilities
                  </div>
                  <div className="flex items-center">
                    <input type="range" className="w-full" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      5.4
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Value for money
                  </div>
                  <dd className="flex items-center mb-3">
                    <input type="range" className="w-full" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      8.9
                    </span>
                  </dd>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Cleanliness
                  </div>
                  <dd className="flex items-center mb-3">
                    <input type="range" className="w-full" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      7.0
                    </span>
                  </dd>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Location
                  </div>
                  <dd className="flex items-center">
                    <input type="range" className="w-full" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      8.9
                    </span>
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Article Name="Jese Leos" />
        <Article Name="Rahul kumar" />
        <Article Name="Rajesh sharma" />
      </div>
    </HomeLayout>
  );
};
export default Rating;
