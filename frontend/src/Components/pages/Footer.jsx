import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full h-[90%] bg-sky-950 mt-0 text-white">
      <h1 className="font-bold text-4xl text-white p-3 ">Rahul</h1>
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-between ">
        <section className="w-full md:w-1/5 pt-0 p-2">
          <p className="p-3">
            Cras mattis sit ornare in metus eu amet adipiscing enim. Ullamcorper
            in orci, ultrices integer eget arcu. Consectetur leo dignissim
            lacus, lacus sagittis dictumst.
          </p>
          <div className="flex text-3xl gap-4 p-2">
            <a href="https://www.instagram.com/_rahul_067/?hl=en">
              <FaInstagram />
            </a>
            <a href="">
              <FaFacebookSquare />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/rahul-kumar-0866a5250/">
              <FaLinkedin />
            </a>
          </div>
        </section>
        <section className="md:w-1/5 p-3">
          <p>
            <Link to="#">About us</Link>
          </p>
          <p>
            <Link to="/services">Services</Link>
          </p>
          <p>
            <Link to="#">Blog</Link>
          </p>
          <p>
            <Link to="/contacts">Contact us</Link>
          </p>
        </section>
        <section className="md:w-1/5 p-3">
          <p>
            <Link to="/contacts">Support</Link>
          </p>
          <p>Live chat</p>
          <p>
            <Link to="/services">Privacy Policy</Link>
          </p>
          <p>
            <Link to="/services">Returns & Refunds</Link>
          </p>
        </section>
        <section className="md:w-1/5 p-3">
          <p>
            <Link to="/">Jobs</Link>
          </p>
          <p>Leadership</p>
          <p>Our team</p>
          <p>
            <Link to="/shop">Knowledge Base</Link>
          </p>
        </section>
        <section className="w-1/5 p-3">
          <p>
            <Link to="/contacts"> Careers</Link>
          </p>
          <p>Our Journals</p>
          <p>
            <Link to="/services">Conditions</Link>
          </p>
          <p>Affiliate Programme</p>
        </section>
      </div>
      <hr className="border-b-2 border-sky-900" />
      <section className="pt-7 px-2 flex justify-between">
        <div>
          <p>
            Copyright ©2024.All Rights Reserved.— Designed By Rahul kumar
            Distributed By vs_code
          </p>
          <p className="pt-2 pb-3">MERN Stack</p>
        </div>
        <div>
          <p>Terms & Conditions, Privacy Policy</p>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
