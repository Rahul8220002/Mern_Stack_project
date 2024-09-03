import { Link } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Collection from "./Collection";
import PageSub from "./PageSub";
import { assets } from "../../assets/Image";

const Header = () => {
  return (
    <>
      <HomeLayout>
        <main className="md:w-full h-[550px] flex justify-between items-center bg-sky-950">
          <section className="md:w-9/12 flex justify-center items-center">
            <div className="w-[90%]">
              <img
                src={assets.headerlogo}
                alt=""
                className="hidden md:block mix-blend-overlay hover:scale-105 "
              />
            </div>
          </section>
          <div className="w-full p-4">
            <p className="mx-1 text-white text-[42px] font-bold">
              <span className="text-yellow-300">Hello user!</span> welcome to
              the website
            </p>
            <p className="text-gray-300 text-[18px] me-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at
              quidem eveniet dignissimos deleniti?
            </p>
            <button className="mx-1 w-28 bg-yellow-500 rounded-2xl p-2 font-semibold mt-2">
              shop-now
            </button>
            <Link
              to="/shop"
              className="mx-1 w-28 border-[1px] border-sky-400 rounded-2xl p-2 font-semibold mt-2 text-white"
            >
              Explore
            </Link>
          </div>
        </main>
      </HomeLayout>
      <Collection />
      <PageSub />
    </>
  );
};
export default Header;
