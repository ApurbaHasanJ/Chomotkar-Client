import { Link } from "react-router-dom";

const ShopByCategory = () => {
  return (
    <section className="mt-20">
      <div className="grid grid-cols-4 items-center justify-between">
      <Link to="#">
        <div className="w-60 h-60 border border-gray-300 rounded-full ">
          <img
            className="w-full"
            src="https://i.ibb.co/RS6Kwk7/handsome-young-man-with-curly-hair-sitting-chair-white-wall.jpg"
          />
        </div>
        <p className="text-center text-slate-700 text-base font-semibold">MEN</p>
      </Link>
      <Link to="#">
        <div className="w-60 h-60 border border-gray-300 rounded-full ">
          <img
            className="w-full"
            src="https://i.ibb.co/RS6Kwk7/handsome-young-man-with-curly-hair-sitting-chair-white-wall.jpg"
          />
        </div>
        <p className="text-center text-slate-700 text-base font-semibold">WOMEN</p>
      </Link>
      <Link to="#">
        <div className="w-60 h-60 border border-gray-300 rounded-full ">
          <img
            className="w-full"
            src="https://i.ibb.co/RS6Kwk7/handsome-young-man-with-curly-hair-sitting-chair-white-wall.jpg"
          />
        </div>
        <p className="text-center text-slate-700 text-base font-semibold">OUTFITS</p>
      </Link>
      <Link to="#">
        <div className="w-60 h-60 border border-gray-300 rounded-full ">
          <img
            className="w-full"
            src="https://i.ibb.co/RS6Kwk7/handsome-young-man-with-curly-hair-sitting-chair-white-wall.jpg"
          />
        </div>
        <p className="text-center text-slate-700 text-base font-semibold">SHOE</p>
      </Link>
      </div>
    </section>
  );
};
export default ShopByCategory;
