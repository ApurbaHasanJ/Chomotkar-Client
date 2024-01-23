import { FaDeleteLeft } from "react-icons/fa6";

const Carts = ({
  handleDeleteItem,
  filteredCarts,
  setPayCarts,
  setSideCart,
  handleToggleModal,
}) => {
  return (
    <div>
      {filteredCarts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 overflow-y-scroll max-h-[calc(100vh-52px)] pb-6">
          {filteredCarts &&
            filteredCarts.map((product, index) => (
              <div
                key={index}
                className=" p-4 text-sm h-fit text-slate-800 bg-[#75934e] bg-opacity-30 rounded-md drop-shadow-md">
                <FaDeleteLeft
                  onClick={() => {
                    handleDeleteItem(
                      product?._id,
                      product?.color,
                      product?.size
                    ),
                      setSideCart(false);
                  }}
                  className="text-2xl text-[#75934e] text-opacity-70 hover:text-red-500 absolute top-5 right-4"
                />
                <div className="flex  items-center gap-4">
                  <img
                    className="w-[85px]"
                    src={product?.photos[0].img}
                    alt=""
                  />
                  <div className="flex flex-col ">
                    <div className="flex gap-2">
                      <span>Size:</span>
                      {product?.size ? (
                        <span className="uppercase">{product?.size}</span>
                      ) : (
                        "none"
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Color: </span>
                      {product?.color ? (
                        <>
                          <span
                            style={{ backgroundColor: product?.color }}
                            className="w-3 h-3 rounded-full border-2 border-slate-400"></span>
                          <span className="capitalize">{product?.color}</span>
                        </>
                      ) : (
                        "none"
                      )}
                    </div>
                    <div className="flex gap-2">
                      <span>Quantity: </span>
                      <span className="font-medium">{product?.quantity}</span>
                    </div>
                    <div className="flex gap-2">
                      <span>Price: </span>
                      <span className="font-medium">
                        {product?.price * product?.quantity}TK
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-end gap-2">
                  <h3>{product?.title}</h3>
                  <button
                    type="button"
                    onClick={() => {
                      setPayCarts({
                        ...product,
                        quantity: product?.quantity,
                        color: product?.color || "",
                        size: product?.size || "",
                      });
                      handleToggleModal(true);
                    }}
                    className="bg-[#75934e] h-fit bg-opacity-60 hover:bg-[#517521] text-white shadow-lg hover:shadow-2xl py-2 px-3 rounded-lg text-xs font-medium font-g-mono">
                    CHECKOUT
                  </button>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="p-4 mt-10 text-sm text-center text-slate-800 bg-[#75934e] bg-opacity-30 rounded-md drop-shadow-md">
          No Carts Available
        </div>
      )}
    </div>
  );
};

export default Carts;
