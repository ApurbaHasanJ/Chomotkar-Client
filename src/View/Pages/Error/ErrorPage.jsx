import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen my-container">
      <img
        className="h-[80%] mx-auto"
        src="https://res.cloudinary.com/dxixdugif/image/upload/v1703344413/chomotkar-fashion/3819740_f5utvc.jpg"
        alt="Page not found"
      />
      <div className="flex justify-center">
        <Link
          to="/"
          type="button"
          className="  border-none bg-gradient-to-r from-[#f04d4d] hover:from-[#ec2727] hover:to-[#c22b2b] to-[#ff7272] transition-colors duration-500 flex justify-center items-center gap-3 p-4 px-5 text-white bg-[#d1a054b3] hover:bg-[#ec9f2db3]">
          <span className="text-xl font-semibold">Back To Home</span>
          <AiFillHome className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
