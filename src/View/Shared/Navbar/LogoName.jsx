
import { Link } from "react-router-dom";

const LogoName = () => {
  return (
    <div className="">
      <Link to="/" className=" normal-case ">
        <div>
          <h2 className="md:text-xl  text-2xl font-black font-cinzel">
            Chomotkar
          </h2>
          <p className="font-cinzel text-xs font-bold tracking-[5px] md:tracking-[9.12px]">
            Fashion
          </p>
        </div>
      </Link>
    </div>
  );
};

export default LogoName;
