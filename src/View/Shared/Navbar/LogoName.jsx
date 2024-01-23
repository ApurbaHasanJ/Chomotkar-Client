import { Link } from "react-router-dom";

const LogoName = () => {
  return (
    <div className="">
      <Link to="/" className=" normal-case  h-auto">
        {/* <h2 className="md:text-3xl  text-2xl font-black font-exo">
            Chomotkar
          </h2>
          <p className="font-exo text-xs font-bold tracking-[5px] md:tracking-[9.12px]">
            Fashion
          </p> */}
        <img
          className="md:w-44 drop-shadow-2xl w-40"
          src="https://res.cloudinary.com/dezmmga9k/image/upload/v1705569203/Chomotkar/Logo/Untitled-1_epmglz.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default LogoName;
