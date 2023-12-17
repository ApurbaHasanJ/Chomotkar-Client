const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="text-center flex  justify-between items-baseline">
      <div className="bg-slate-500 h-4 w-20 rounded-e-full">
        
      </div>
     <div>
       <p className="text-rose-500 text-lg font-mono mb-4">{subtitle}</p>
      <h2 className="md:text-4xl text-2xl font-semibold">{title}</h2>
    
     </div>
     <div className="bg-slate-500 h-4 w-20 rounded-s-full"></div>
     </div>
  );
};

export default SectionTitle;
