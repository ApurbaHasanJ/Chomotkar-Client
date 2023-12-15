const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="text-center">
      <p className="text-rose-500 text-lg font-mono mb-4">{subtitle}</p>
      <h2 className="md:text-4xl text-2xl font-semibold">{title}</h2>
    </div>
  );
};

export default SectionTitle;
