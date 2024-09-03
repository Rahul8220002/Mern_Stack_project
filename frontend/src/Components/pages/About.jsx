import { Link } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

const links = [
  { name: <Link to={"/contacts"}>Open roles</Link> },
  { name: <Link to={"/shop"}>Shop</Link> },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "0" },
  { name: "Full-Stack Devloper", value: "MERN" },
  { name: "work hard", value: "24h" },
];
const About = () => {
  return (
    <>
      <HomeLayout>
        <div>
          <div className="flex justify-center items-center w-full h-[42vh] bg-gradient-to-b from-indigo-500">
            <div className="w-[75%] h-[40vh] flex justify-between items-center ">
              <section className="text-center">
                <h1 className="font-bold text-5xl sm:text-5xl -rotate-3 text-opacity-70 p-4 mx-6 first-letter:uppercase first-letter:text-8xl">
                  about
                </h1>
              </section>
              <section>
                <img
                  src="https://img.freepik.com/free-photo/young-successful-confident-businessman-posing-looking-aside-grey-wall_176420-42923.jpg"
                  alt="aboutImage"
                  width={400}
                  height={480}
                  className="origin-bottom -rotate-2 p-4 bg-neutral-content hidden sm:block md:block"
                />
              </section>
            </div>
          </div>
          <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-20">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
              />
              <div className="mx-auto max-w-7xl px-4 lg:px-6">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    About us
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Hello! and welcome to Rahul Website! We’re excited to help
                    you find exactly what you’re looking for. Whether you are
                    shopping for the latest trends or timeless classics, our
                    curated collections have something for everyone. Don’t miss
                    our exclusive deals and new arrivals—happy shopping!
                  </p>
                  <p className="text-sm mt-2 text-gray-300">
                    Thank you for visiting Website, and we hope you have an
                    great experience!
                  </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                    {links.map((link) => (
                      <a key={link.name} href={link.href}>
                        {link.name} <span aria-hidden="true">&rarr;</span>
                      </a>
                    ))}
                  </div>
                  <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                      <div key={stat.name} className="flex flex-col-reverse">
                        <dt className="text-base leading-5 text-gray-300">
                          {stat.name}
                        </dt>
                        <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white py-8 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center text-lg font-semibold leading-2 text-gray-900">
                Trusted by the world’s most innovative teams
              </h2>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <img
                  alt="Transistor"
                  src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
                <img
                  alt="Reform"
                  src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
                <img
                  alt="Tuple"
                  src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
                <img
                  alt="SavvyCal"
                  src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                />
                <img
                  alt="Statamic"
                  src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                />
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
};
export default About;
