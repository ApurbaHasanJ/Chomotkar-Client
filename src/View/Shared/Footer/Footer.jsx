import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { MdCall, MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Footer = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: [0, 360], // Rotate from 0 to 360 degrees
      scale: [1, 1.1, 1], // Pulsating animation from 1 to 1.1 and back to 1
      transition: {
        duration: 4, // Animation duration
        repeat: Infinity, // Repeat the animation indefinitely
        ease: "linear", // Linear easing for a smooth rotation
      },
    });
  }, [controls]);
  return (
    <section className="bg-[#222222] text-white md:mt-32 pt-16  mt-20">
      <div className="my-container  flex lg:flex-row flex-col w-full justify-between gap-3 gap-y-10">
        {/* 1 card */}
        <div className="lg:w-4/12 w-full">
          <div>
            <h2 className="md:text-3xl  text-2xl font-black font-cinzel">
              Chomotkar
            </h2>
            <p className="font-cinzel text-xs font-bold tracking-[5px] md:tracking-[9.12px]">
              Fashion.
            </p>
          </div>
          <p className="font-mono mt-6 font-base ">
            Chomotkar Fashion is a dynamic and innovative online retail platform
            that offers a wide range of products to customers countrywide.
          </p>
          <div className="flex justify-start items-center gap-4 mt-5">
            <FaSquareFacebook className="bg-black p-[6px] duration-500 hover:bg-rose-400 rounded-xl text-4xl" />
            <RiInstagramFill className="bg-black p-[6px] duration-500 hover:bg-rose-400 rounded-xl text-4xl" />
          </div>
        </div>

        {/* collapse 2nd and 3rd card */}
        <div className="lg:w-5/12 w-full flex  justify-between md:gap-20 lg:gap-32">
          {/* 2nd col */}
          <div className="">
            <h1 className="text-rose-500 font-bold text-xl uppercase">
            Categories
            </h1>
            <div className="mt-11 grid gap-3">
              <Link
                to="/men"
                className="hover:text-rose-500 font-mono duration-500 hover:underline underline-offset-4">
                Men
              </Link>
              <Link
                to="/women"
                className="hover:text-rose-500 font-mono duration-500 hover:underline underline-offset-4">
                Women
              </Link>
              <Link
                to="/women/combo"
                className="hover:text-rose-500 font-mono duration-500 hover:underline underline-offset-4">
                Combo
              </Link>
              <Link
                to="/electronics"
                className="hover:text-rose-500 font-mono duration-500 hover:underline underline-offset-4">
                Electronics
              </Link>
            </div>
          </div>
          {/* 3rd col */}
          <div className=" mr-10">
            <h1 className="text-rose-500 font-bold text-xl uppercase">
            Information
            </h1>
            <div className="mt-11 grid gap-3">
              <Link
                to="#"
                className="hover:text-rose-500 whitespace-nowrap font-mono duration-500 hover:underline underline-offset-4">
                About Us
              </Link>
              <Link
                to="#"
                className="hover:text-rose-500 whitespace-nowrap font-mono duration-500 hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="hover:text-rose-500 whitespace-nowrap font-mono duration-500 hover:underline underline-offset-4">
                Returns Policy
              </Link>
              <Link
                to="#"
                className="hover:text-rose-500 whitespace-nowrap font-mono duration-500 hover:underline underline-offset-4">
                Shipping Policy
              </Link>
              <Link
                to="#"
                className="hover:text-rose-500 whitespace-nowrap font-mono duration-500 hover:underline underline-offset-4">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* 4th col */}
        <div className=" lg:w-3/12 w-full mr-0">
          <h1 className="text-rose-500 font-bold text-xl uppercase">
            GET IN TOUCH
          </h1>
          <div className="mt-11 font-mono">
            <div className="flex items-center gap-2">
              <MdCall />
              <span>+88018800000</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail />
              <span>apurbahasanj@gmail.com</span>
            </div>
          </div>
          <div className="flex items-baseline font-mono gap-2 mt-5">
            <IoLocation />
            <span>
              R-25 H-10 Block-Alobdhi Road <br />
              Pallabi Mirpur-12 Dhaka 1216
            </span>
          </div>
        </div>
      </div>
      <div className="border-t bg-[#131313]  border-white mt-7 py-4 pb-20 md:pb-4">
        <div className=" sm:flex gap-[6px] grid justify-start my-container  ">
          <p className="sm:mr-auto text-white font-semibold text-base">
            Copyright &copy; 2024{" "}
            <span className="text-red-600">Chomotkar Fashion</span>. All rights
            reserved
          </p>
          <div className="flex items-center gap-3 sm:pt-0 pt-3">
            <Link
              to="https://apurbahasanj.netlify.app/"
              target="_blank"
              title="click here!">
              <div className="flex justify-center items-center">
                <motion.div
                  animate={controls}
                  className="text-xs border border-red-600 shadow-xl rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-[18px] h-[18px] ">
                    <path d="M21 12h-4l-3 9L9 3l-3 9H3" />
                  </svg>
                </motion.div>
              </div>
            </Link>

            <Link
              className=" text-white  font-semibold text-base  hover:underline"
              to="https://apurbahasanj.netlify.app/"
              target="_blank"
              title="click here!">
              <p>
                Technical Support by{" "}
                <span className="text-red-600">Apurba Hasan J</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
