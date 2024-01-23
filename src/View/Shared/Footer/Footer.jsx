import { MdCall, MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import FollowUs from "../FollowUs/FollowUs";

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
    <section className="bg-[#222222] md:text-base text-sm bg-[url('https://res.cloudinary.com/dezmmga9k/image/upload/v1705510546/Chomotkar/Logo/Website-Green-Banner-2_pbo2rk.jpg')] text-black md:pt-16 pt-8">
      <div className="my-container  flex lg:flex-row flex-col w-full justify-between gap-3 gap-y-10">
        {/* 1 card */}
        <div className="lg:w-4/12 w-full ">
          <div className="flex md:justify-start justify-center">
            <img
              className="md:w-52 drop-shadow-2xl w-40"
              src="https://res.cloudinary.com/dezmmga9k/image/upload/v1705569203/Chomotkar/Logo/Untitled-2_bcblaa.png"
              alt=""
            />

            {/* <h2 className="md:text-3xl mt-3 text-2xl font-black font-exo">
              Chomotkar
            </h2> */}
          </div>
          <div className="md:block hidden mt-6 ">
            <p className="font-mono  font-base ">
              Chomotkar is a dynamic and innovative online retail platform that
              offers a wide range of products to customers countrywide.
            </p>
            <FollowUs />
          </div>
        </div>

        {/* collapse 2nd and 3rd card */}
        <div className="lg:w-5/12 w-full flex  justify-between md:gap-20 gap-4 lg:gap-32">
          {/* 2nd col */}
          <div className=" md:mx-auto">
            <h1 className="text-black font-bold md:text-xl text-base uppercase">
              Information
            </h1>
            <div className="md:mt-11 mt-5 grid md:gap-3 gap-1">
              <Link
                to="#"
                className="hover:text-[#75934e] whitespace-nowrap font-mono duration-500 hover:underline underline-offset-4">
                About Us
              </Link>
              <Link
                to="#"
                className="hover:text-[#75934e] whitespace-nowrap font-mono duration-500 hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="hover:text-[#75934e] whitespace-nowrap font-mono duration-500 hover:underline underline-offset-4">
                Returns Policy
              </Link>
              <Link
                to="#"
                className="hover:text-[#75934e] whitespace-nowrap font-mono duration-500 hover:underline underline-offset-4">
                Shipping Policy
              </Link>
              <Link
                to="/contact-us"
                className="hover:text-[#75934e] whitespace-nowrap font-mono duration-500 hover:underline underline-offset-4">
                Contact Us
              </Link>
            </div>
          </div>

          {/* {/* 3rd col for small device */}
          <div className="block md:hidden">
            <FollowUs />
          </div>
        </div>

        {/* 4th col */}
        <div className=" lg:w-3/12 w-full mr-0">
          <h1 className="text-black font-bold md:text-xl text-base uppercase">
            GET IN TOUCH
          </h1>
          <div className="md:mt-11 mt-4 font-mono">
            <div className="flex items-center gap-2">
              <MdCall className="text-base md:text-lg" />
              <span>+880 1886-084422</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-base md:text-lg" />
              <span>chomotkarshop@gmail.com</span>
            </div>
          </div>
          <div className="flex items-baseline font-mono gap-2 mt-2">
            <IoLocation className="text-base md:text-lg" />
            <span>
              R-25 H-10 Block-Alobdhi Road <br />
              Pallabi Mirpur-12 Dhaka 1216
            </span>
          </div>
        </div>
      </div>
      <div className="border-t bg-[#75934e] bg-opacity-60 border-white mt-4 md:py-4 py-2 pb-16 md:pb-4">
        <div className=" sm:flex gap-[0px] grid justify-start my-container  ">
          <p className="sm:mr-auto text-black font-semibold text-xs md:text-base">
            Copyright &copy; 2024{" "}
            <span className="text-red-600">Chomotkar Fashion</span>. All rights
            reserved
          </p>
          <div className="flex text-xs md:text-base items-center  gap-3 sm:pt-0 pt-3">
            <Link
              to="https://apurbahasanj.netlify.app/"
              target="_blank"
              title="click here!">
              <div className="flex justify-center items-center">
                <motion.div
                  animate={controls}
                  className=" border border-red-600 shadow-xl rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="md:w-[18px] md:h-[18px] w-3 h-3">
                    <path d="M21 12h-4l-3 9L9 3l-3 9H3" />
                  </svg>
                </motion.div>
              </div>
            </Link>

            <Link
              className=" text-black  font-semibold  hover:underline"
              to="https://apurbahasanj.netlify.app/"
              target="_blank"
              title="click here!">
              <p className="whitespace-nowrap">
                Technical Support by{" "}
                <span className="text-red-600 whitespace-nowrap">
                  Apurba Hasan J
                </span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
