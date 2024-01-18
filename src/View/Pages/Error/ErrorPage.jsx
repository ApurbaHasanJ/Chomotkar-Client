import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen my-container">
      <img
        className="h-[80%] mx-auto"
        src="https://res.cloudinary.com/dezmmga9k/image/upload/v1705562877/Chomotkar/ErrorPage/3814348_cddgv5.jpg"
        alt="Page not found"
      />
      <div className="flex justify-center">
        <Link
          to="/"
          type="button"
          className="  border-none  bg-[#75934e] hover:text- hover:bg-[#517521]  transition-colors duration-500 flex justify-center items-center gap-3 p-4 px-5 text-white">
          <span className="text-xl font-semibold">Back To Home</span>
          <AiFillHome className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
