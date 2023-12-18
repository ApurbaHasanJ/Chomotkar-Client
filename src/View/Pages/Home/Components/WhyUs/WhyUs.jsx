import { MdHighQuality, MdOutlineSentimentVerySatisfied, MdPrecisionManufacturing } from "react-icons/md";
import SectionTitle from "../../../../Shared/SectionTitle";
import { BsCartCheckFill } from "react-icons/bs";
import { FaHandHoldingHeart, FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

const WhyUs = () => {
  return (
    <section className="md:my-32 mt-20 my-container">
      <SectionTitle
        title={"The Benefits of Choosing Us"}
        subtitle={"Beyond Fashion: What Sets Us Apart"}
      />
      <div className="mt-10 grid md:grid-cols-4 grid-cols-2 gap-3 gap-y-6">
        {/* high quality */}
        <div className="text-xl flex flex-col text-center justify-center gap-2  drop-shadow-2xl shadow-md items-center duration-500 p-3 py-4 font-mono border border-slate-400 hover:border-rose-400 hover:text-rose-400 text-slate-400">
          <MdHighQuality className="text-5xl"/>
          <span>High Quality <br /> Products</span>
        </div>
        <div className="text-xl flex flex-col text-center justify-center gap-2  drop-shadow-2xl shadow-md items-center duration-500 p-3 py-4 font-mono border border-slate-400 hover:border-rose-400 hover:text-rose-400 text-slate-400">
          <MdOutlineSentimentVerySatisfied className="text-5xl"/>
          <span>Consumer <br /> Satisfaction</span>
        </div>
        <div className="text-xl flex flex-col text-center justify-center drop-shadow-2xl shadow-md items-center duration-500  gap-2 p-3 py-4 font-mono border border-slate-400 hover:border-rose-400 hover:text-rose-400 text-slate-400">
          <TbTruckDelivery className="text-5xl"/>
          <span>Fastest <br /> Shipping</span>
        </div>
        <div className="text-xl flex flex-col text-center justify-center drop-shadow-2xl shadow-md items-center duration-500  gap-2 p-3 py-4 font-mono border border-slate-400 hover:border-rose-400 hover:text-rose-400 text-slate-400">
          <BsCartCheckFill className="text-5xl"/>
          <span>Product <br /> Sold</span>
        </div>
        <div className="text-xl flex flex-col text-center justify-center drop-shadow-2xl shadow-md items-center duration-500  gap-2 p-3 py-4 font-mono border border-slate-400 hover:border-rose-400 hover:text-rose-400 text-slate-400">
          <MdPrecisionManufacturing className="text-5xl"/>
          <span>Own <br /> Manufacture</span>
        </div>
        <div className="text-xl flex flex-col text-center justify-center drop-shadow-2xl shadow-md items-center duration-500  gap-2 p-3 py-4 font-mono border border-slate-400 hover:border-rose-400 hover:text-rose-400 text-slate-400">
          <FaSquareFacebook className="text-5xl"/>
          <span>10000+ <br /> Followers</span>
        </div>
        <div className="text-xl flex flex-col text-center justify-center drop-shadow-2xl shadow-md items-center duration-500  gap-2 p-3 py-4 font-mono border border-slate-400 hover:border-rose-400 hover:text-rose-400 text-slate-400">
          <FaInstagramSquare className="text-5xl"/>
          <span>9000+ <br /> Followers</span>
        </div>
        <div className="text-xl flex flex-col text-center justify-center drop-shadow-2xl shadow-md items-center duration-500  gap-2 p-3 py-4 font-mono border border-slate-400 hover:border-rose-400 hover:text-rose-400 text-slate-400">
          <FaHandHoldingHeart className="text-5xl"/>
          <span>Serving <br /> Science 2022</span>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;