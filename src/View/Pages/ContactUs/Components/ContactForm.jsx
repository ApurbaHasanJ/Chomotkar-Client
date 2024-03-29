import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { BsFillSendFill } from "react-icons/bs";
import SectionTitle from "../../../Shared/SectionTitle";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
  };

  function onChange(value) {
    // console.log("Captcha value:", value);
  }

  return (
    <section className="mt-24 my-container">
      <SectionTitle
        subtitle={"---Send Us a Message---"}
        title={"CONTACT FORM"}
      />

      {/* Body */}

      <div className="py-20 ">
        <div
          className="my-container shadow-xl"
          style={{
            backgroundImage: `url('https://i.postimg.cc/tg8rPHSH/authentication.png')`,
          }}>
          <div className="   my-7 mt-0 lg:my-16 items-center">
            {/* Login Img */}

            <div className=" px-10 mx-3 lg:mx-0 rounded-lg">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  {/* name */}
                  <div className="form-control ">
                    <label className="label justify-start text-base font-medium text-slate-900 ">
                      <span className="label-text">Name</span>
                      <span className="text-red-600 text-xl">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      {...register("name")}
                      required
                      placeholder="Your name"
                      className="input hover:shadow-md "
                    />
                  </div>
                  {/* email */}
                  <div className="form-control ">
                    <label className="label justify-start text-base font-medium text-slate-900 ">
                      <span className="label-text">Email</span>
                      <span className="text-red-600 text-xl">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      {...register("email")}
                      required
                      placeholder="Your email"
                      className="input hover:shadow-md "
                    />
                  </div>
                </div>
                <div className="form-control mb-3">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
                    <span className="label-text">Phone</span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    id="phone"
                    name="Phone"
                    {...register("Phone")}
                    className="input hover:shadow-md "
                    required
                    placeholder="Phone"
                  />
                </div>
                <div className="form-control mb-3">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
                    <span className="label-text">Message</span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <textarea
                    name="message"
                    {...register("message")}
                    required
                    placeholder="Your message"
                    className="textarea hover:shadow-md "
                    rows="8"
                  />
                </div>

                <div className="mt-7">
                  <ReCAPTCHA
                    sitekey="6Lciln4oAAAAAPsdss2OH2dWn-3NKaiY1GC6dIAq"
                    onChange={onChange}
                  />
                </div>

                <div
                  onSubmit={handleSubmit}
                  className="flex justify-center mt-5 ">
                  <button
                    type="submit"
                    {...register("submit")}
                    // disabled={disabled}
                    className="  border-none bg-gradient-to-r from-[#835D23] hover:from-[#a57224] hover:to-[#d28209] to-[#c87f12] flex justify-center items-center gap-3 p-4 px-5 text-white bg-[#d1a054b3] hover:bg-[#ec9f2db3]">
                    <span className="text-xl font-semibold">Send Message</span>
                    <BsFillSendFill className="text-xl" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
