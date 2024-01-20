import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const FollowUs = () => {
  return (
    <div>
      <h1 className="text-black md:hidden block font-bold text-xl uppercase">
        Follow Us
      </h1>
      <div className=" flex justify-start items-center gap-4 mt-5">
        <a
          href="https://www.facebook.com/Chomotkar"
          target="_blank"
          rel="noopener noreferrer">
          <FaSquareFacebook className="bg-[#75934e] text-white p-[6px] duration-500 hover:bg-[#47720f] rounded-xl text-4xl" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <RiInstagramFill className="bg-[#75934e] text-white p-[6px] duration-500 hover:bg-[#47720f] rounded-xl text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default FollowUs;
