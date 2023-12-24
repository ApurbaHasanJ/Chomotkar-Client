import { useState } from "react";

const ModalBody = ({ demos, banner, category }) => {
  const [demo, setDemo] = useState("");

  const handleDemos = (demo) => {
    setDemo(demo);
  };

  console.log(banner);
  return (
    <div className="  flex md:flex-row flex-col justify-between gap-10">
      <div className=" mx-auto w-full min-w-[250px] max-w-screen-md drop-shadow-2xl md:mr-20 mt-3 justify-center items-center">
        <img
          className=" mx-auto   object-cover "
          src={demo || banner}
          alt={`${category} demo`}
        />
      </div>
      <div className="flex md:max-h-[calc(100vh-80px)] flex-wrap gap-4   ">
        {demos.map((demo, index) => (
          <div key={index} className="">
            <img
              onClick={() => handleDemos(demo)}
              className="w-28 object-cover hover:border-2 hover:border-blue-500 h-20"
              src={demo}
              alt={category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalBody;