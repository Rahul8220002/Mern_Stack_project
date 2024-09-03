import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../app/feature/authSlice";
import HomeLayout from "../Layout/HomeLayout";

const SignUp = () => {
  let [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    DOB: "",
    password: "",
    role: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !data.firstName ||
      !data.email ||
      !data.mobile ||
      !data.DOB ||
      !data.password ||
      !data.role
    ) {
      return toast.error("All fill are required");
    }

    if (!data.firstName.length > 3) {
      return toast.error("name should be atlest os 3 characters");
    }

    if (
      !data.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return toast.error("please provide valid email ");
    }

    const response = await dispatch(RegisterUser(data));
    if (response?.payload?.success) {
      navigate("/signin");
    }
  };

  return (
    <HomeLayout>
      <div className="w-full min-h-full px-6 py-4 lg:px-5 ">
        <div className="mt-5 bg-sky-50 sm:mx-auto sm:w-full sm:max-w-sm shadow-2xl w-[98%] flex flex-col justify-center items-center">
          <h2 className="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create to your account
          </h2>
          <form noValidate onSubmit={handleSubmit} className="space-y-2 mb-3">
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-2 text-gray-900">
                  Role
                </label>
              </div>
              <div className="mt-1.5">
                <input
                  name="role"
                  list="options"
                  required
                  autoComplete="role"
                  value={data.role}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <datalist id="options">
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </datalist>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-2 text-gray-900">
                FirstName
              </label>
              <div className="mt-1">
                <input
                  name="firstName"
                  type="text"
                  value={data.firstName}
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-2 text-gray-900">
                lastName
              </label>
              <div className="mt-1">
                <input
                  name="lastName"
                  type="text"
                  required
                  value={data.lastName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-2 text-gray-900">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={data.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-2 text-gray-900">
                Mobile Number
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="mobile"
                  type="number"
                  required
                  autoComplete="email"
                  value={data.mobile}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-2 text-gray-900">
                DOB
              </label>
              <div className="mt-1">
                <input
                  id="DOB"
                  name="DOB"
                  type="date"
                  required
                  value={data.DOB}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-2 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-1.5">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={data.password}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 mt-2 text-sm font-semibold leading-8 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
            <div>
              If you Allready have Account please?
              <Link
                to="/signin"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 mx-1.5"
              >
                Signin
              </Link>
            </div>
          </form>
        </div>
      </div>
    </HomeLayout>
  );
};
export default SignUp;
