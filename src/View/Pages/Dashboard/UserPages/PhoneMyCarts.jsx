import { RxCross2 } from "react-icons/rx";
import useCarts from "../../../Hooks/useCarts";
import { useContext, useState } from "react";
import { SideCartContext } from "../../../Providers/SideCartProvider";
import { FaDeleteLeft } from "react-icons/fa6";
import Checkout from "./Checkout";

const PhoneMyCarts = () => {
  const { sideCart, setSideCart } = useContext(SideCartContext);
  const [payCarts, setPayCarts] = useState({});

  const [toggleModal, setToggleModal] = useState(false);
  const { filteredProducts, handleDeleteItem } = useCarts();

  console.log(filteredProducts);

  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
  };
  return (
    <>
      {toggleModal ? (
        <div className="py-8 pb-20 overflow-scroll max-h-screen fixed top-[52px] z-[400] bg-[#F6F6F6]">
          <Checkout handleToggleModal={handleToggleModal} payCarts={payCarts} />
        </div>
      ) : (
        <div
          className={`fixed bg-white h-full max-w-[350px] w-full pb-4 p-2 ${
            sideCart ? "right-0" : "-right-[1700px]"
          } transform duration-700 shadow-2xl top-0 z-[10000]`}>
          <div className="relative z-[400]">
            {/* heading with X */}
            <div className="flex justify-between items-center my-2">
              <p className="font-mono ps-4 uppercase font-semibold text-3xl">
                Cart
              </p>
              <RxCross2
                onClick={() => setSideCart(!sideCart)}
                className="text-2xl bg-[#75934e] bg-opacity-60 transition-all duration-1000 text-white rounded-md hover:text-rose-500"
              />
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 overflow-y-scroll max-h-[calc(100vh-52px)] pb-6">
                {filteredProducts &&
                  filteredProducts.map((product, index) => (
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
                            setSideCart(!sideCart);
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
                            <span className="uppercase">{product?.size}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>Color: </span>
                            <span
                              style={{ backgroundColor: product?.color }}
                              className="w-3 h-3 rounded-full border-2 border-slate-400"></span>
                            <span className="capitalize">{product?.color}</span>
                          </div>
                          <div className="flex gap-2">
                            <span>Quantity: </span>
                            <span className="font-medium">
                              {product?.quantity}
                            </span>
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
        </div>
      )}
    </>
  );
};

export default PhoneMyCarts;
