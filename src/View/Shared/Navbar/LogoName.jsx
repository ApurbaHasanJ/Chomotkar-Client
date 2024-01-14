import { Link } from "react-router-dom";

const LogoName = () => {
  return (
    <div className="">
      <Link to="/" className=" normal-case  h-auto">
        {/* <h2 className="md:text-3xl  text-2xl font-black font-cinzel">
            Chomotkar
          </h2>
          <p className="font-cinzel text-xs font-bold tracking-[5px] md:tracking-[9.12px]">
            Fashion
          </p> */}
        <img
          className="md:w-72 drop-shadow-2xl w-[220px] h-10 object-cover"
          src="https://res.cloudinary.com/dezmmga9k/image/upload/v1704721496/Chomotkar/Logo/logo-chomotkar-website-final_export_Golden_jla5u9.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default LogoName;
