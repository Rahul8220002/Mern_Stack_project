import { useState } from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { HiOutlineSupport } from "react-icons/hi";
import { PiArrowsClockwiseFill } from "react-icons/pi";
import HomeLayout from "../Layout/HomeLayout";

const services = {
  data: [
    {
      icon: <MdOutlineLocalShipping />,
      title: "Fast & Free Shipping",
      des: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      icon: <LuShoppingBag />,
      title: "Easy to Shop",
      des: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      icon: <HiOutlineSupport />,
      title: "24/7 Support",
      des: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      icon: <PiArrowsClockwiseFill />,
      title: "Hassle Free Returns",
      des: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
  ],
};

const Service = () => {
  const { data } = services;
  const [service] = useState(data);

  const cart = (
    <div className="w-[96%]">
      <section className="md:w-full mt-8 md:grid grid-cols-4 gap-3">
        {service &&
          service.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full h-60 leading-6 bg-slate-200 shadow-md"
              >
                <div className="text-4xl m-5 p-2">{item.icon}</div>
                <p className="text-base font-semibold m-5">{item.title}</p>
                <p className="text-gray-500 m-5">{item.des}</p>
              </div>
            );
          })}
      </section>
    </div>
  );
  return (
    <>
      <HomeLayout>
        <div className="flex justify-center items-center">{cart}</div>
        <div className="flex justify-center items-center">{cart}</div>
      </HomeLayout>
    </>
  );
};
export default Service;
