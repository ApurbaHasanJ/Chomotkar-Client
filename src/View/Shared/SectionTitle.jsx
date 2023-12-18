const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="text-center  flex  justify-center items-start gap-4">
      <div className="bg-slate-950 h-3 w-16 rounded-e-full"></div>
      <div>
        <p className="text-rose-500 capitalize text-base font-mono mb-4">{subtitle}</p>
        <h2 className="md:text-3xl text-2xl font-cinzel font-semibold">{title}</h2>
      </div>
      <div className="bg-slate-950 h-3 w-16 rounded-s-full"></div>
    </div>
  );
};

export default SectionTitle;
