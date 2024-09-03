import { useState } from "react";
import HomeLayout from "../Layout/HomeLayout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Login } from "../app/feature/authSlice";

const SignIn = () => {
  const [logindata, setLoginData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginhandleChange = (e) => {
    let { name, value } = e.target;
    setLoginData({ ...logindata, [name]: value });
  };

  const submitloginform = async (e) => {
    e.preventDefault();
    if (!logindata.email || !logindata.password || !logindata.role) {
      return toast.error("All fill are required");
    }
    if (
      !logindata.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return toast.error("please provild valid email");
    }
    //dispatch
    const response = await dispatch(Login(logindata));
    if (response?.payload?.success) {
      navigate("/");

      setLoginData({
        email: "",
        password: "",
        role: "",
      });
    }
  };

  return (
    <HomeLayout>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form noValidate className="space-y-5" onSubmit={submitloginform}>
            <div value={logindata.role} onChange={loginhandleChange}>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select an option
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="role"
                aria-placeholder="Choose a Role"
              >
                <option value="choose">Choose a Role</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={logindata.email}
                  onChange={loginhandleChange}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={logindata.password}
                  onChange={loginhandleChange}
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-3 text-center text-sm text-gray-500">
            Not a member?
          </p>
        </div>
      </div>
    </HomeLayout>
  );
};
export default SignIn;
