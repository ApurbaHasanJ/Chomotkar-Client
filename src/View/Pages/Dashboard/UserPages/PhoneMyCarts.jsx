import { RxCross2 } from "react-icons/rx";
import useCarts from "../../../Hooks/useCarts";
import { useContext, useState } from "react";
import { SideCartContext } from "../../../Providers/SideCartProvider";
import Checkout from "./Checkout";
import Carts from "../../../Shared/Cart/Carts";

const PhoneMyCarts = () => {
  const { sideCart, setSideCart } = useContext(SideCartContext);
  const [payCarts, setPayCarts] = useState({});

  const [toggleModal, setToggleModal] = useState(false);
  const { filteredCarts, handleDeleteItem } = useCarts();

  console.log(filteredCarts);

  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
  };
  return (
    <>
      {toggleModal ? (
        <div className="py-8 pb-20 overflow-scroll max-h-screen fixed top-[52px] z-[50] bg-[#F6F6F6]">
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
              <p className="font-mono ps-4 uppercase font-semibold text-[26px]">
                Cart
              </p>
              <RxCross2
                onClick={() => setSideCart(!sideCart)}
                className="text-2xl bg-[#75934e] bg-opacity-60 transition-all duration-1000 text-white rounded-md hover:text-rose-500"
              />
            </div>
            <Carts filteredCarts={filteredCarts} setPayCarts={setPayCarts} setSideCart={setSideCart} handleDeleteItem={handleDeleteItem} handleToggleModal={handleToggleModal}/>
          </div>
        </div>
      )}
    </>
  );
};

export default PhoneMyCarts;
