import { BiSolidLocationPlus } from "react-icons/bi";
import { AiFillClockCircle } from "react-icons/ai";
import SectionTitle from "../../../Shared/SectionTitle";
import { MdContactSupport } from "react-icons/md";

const ContactInfo = () => {
  return (
    <section className="mt-16 my-container">
      <SectionTitle subtitle={"---Visit Us---"} title={"Contact Info"} />

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 mt-16">
        {/* First */}
        <div className="border border-gray-100 shadow ">
          <div className="bg-[#75934e] py-5">
            <MdContactSupport className="text-3xl mx-auto text-white" />
          </div>
          <div className="mx-5 mb-5 pt-8 pb-12 text-center bg-slate-100 ">
            <h3 className="text-slate-950 text-2xl">CONTACT</h3>
            <p className="text-slate-600 mt-3">
              +880 1886-084422
              <br />
              chomotkarshop@gmail.com
            </p>
          </div>
        </div>

        {/* 2nd */}
        <div className="border border-gray-100 shadow">
          <div className="bg-[#75934e] py-5">
            <BiSolidLocationPlus className="text-3xl mx-auto text-white" />
          </div>
          <div className="mx-5 mb-5 pt-8 pb-12 text-center bg-slate-100">
            <h3 className="text-slate-950 text-2xl">ADDRESS</h3>
            <p className="text-slate-600 mt-3">
              R-25 H-10 Block-Alobdhi Road <br />
              Pallabi Mirpur-12 Dhaka 1216
            </p>
          </div>
        </div>

        {/* 3rd */}
        <div className="border border-gray-100 shadow">
          <div className="bg-[#75934e] py-5">
            <AiFillClockCircle className="text-3xl mx-auto text-white" />
          </div>
          <div className="mx-5 mb-5 pt-8 pb-12 text-center bg-slate-100">
            <h3 className="text-slate-950 text-2xl">WORKING HOURS</h3>
            <p className="text-slate-600 mt-3">
              Saturday - Thursday
              <br />
              Morning 10am - Night 09pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
