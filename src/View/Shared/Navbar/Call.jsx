import { FaPhone } from "react-icons/fa6";

const Call = () => {
  const handleCallClick = () => {
    // Replace '1234567890' with the actual phone number you want to call
    const phoneNumber = "+8801884167824";

    // Create a tel URL with the phone number
    const telUrl = `tel:${phoneNumber}`;

    // Open the phone app with the provided phone number
    window.location.href = telUrl;
  };

  return (
    <div
      className=" duration-300 text-[#75934e] hover:text-[#47720f] "
      onClick={handleCallClick}>
      <FaPhone className="text-xl  " />
    </div>
  );
};

export default Call;
