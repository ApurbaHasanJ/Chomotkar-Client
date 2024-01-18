const SectionTitle = ({ title }) => {
  return (
    <div className="text-center  flex  justify-center items-start gap-4">
      {/* <div className="bg-slate-950 h-3 w-16 rounded-e-full"></div> */}
      <div>
        {/* <p className="text-green-500 capitalize text-base font-mono mb-4">--------------</p> */}
        <h2 className="md:text-3xl sm:text-2xl uppercase border-b-[3px] border-[#75934e] pb-1 text-xl font-exo font-semibold">{title}</h2>
      </div>
      {/* <div className="bg-slate-950 h-3 w-16 rounded-s-full"></div> */}
    </div>
  );
};

export default SectionTitle;
