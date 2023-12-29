

const SearchResult = ({ product }) => {
  return (
    <>
      <img className="w-20" src={product?.photos[0].img} alt="" />
      <div>
        <p className="my-2  hover:text-rose-400 duration-300 md:text-lg font-mono">
          {product?.title}
        </p>
        <div className="text-slate-800 flex justify-start items-center gap-2 text-base font-medium font-mono">
          {product?.newPrice ? (
            <div className="flex justify-center items-center gap-2">
              <span className="line-through">TK.{product?.price}</span>
              <span className="font-semibold">TK.{product?.newPrice}</span>
            </div>
          ) : (
            <span>TK.{product?.price}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResult;
