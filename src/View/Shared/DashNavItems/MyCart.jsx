import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import SectionTitle from "../SectionTitle";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Providers/CartProvider";
import useProducts from "../../Hooks/useProducts";
import { TiTick } from "react-icons/ti";

const MyCart = () => {
  const { carts, totalQuantity, handleRemoveCart } = useContext(CartContext);
  const [products] = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Update the quantity in the products list based on the carts data
    const updatedProducts = products
      .filter((product) =>
        carts.some((cart) => cart.productId === product?._id)
      )
      .map((product) => {
        const cartItem = carts.find((cart) => cart.productId === product?._id);
        return {
          ...product,
          quantity: cartItem ? cartItem.quantity : 0,
        };
      });

    setFilteredProducts(updatedProducts);
  }, [carts, products]);

  const totalPrice = filteredProducts.reduce((acc, product) => {
    const productPrice = product.newPrice ? product.newPrice : product.price;
    const totalProductPrice = productPrice * product.quantity;
   
    return acc + totalProductPrice;
  }, 0);
  

  
  

  // console.log(filterProducts);
  // calculating total price

  //   const totalPrice = carts.reduce((total, cart) => total + cart?.price, 0);

  // handle delete from cart
  //   const handleDeleteItem = (cart) => {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         fetch(`http://localhost:5000/carts/${cart?._id}`, {
  //           method: "DELETE",
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             console.log(data);
  //             if (data.deletedCount > 0) {
  //               refetch();
  //               Swal.fire({
  //                 title: "Deleted!",
  //                 text: "Item deleted successfully",
  //                 icon: "success",
  //               });
  //             }
  //           });
  //       }
  //     });
  //   };

  return (
    <div className="py-8  min-h-screen bg-[#F6F6F6]">
      <SectionTitle title={"WANNA ADD MORE?"} subtitle={"---My Cart!---"} />

      {/* table */}
      <div className="mt-20 my-container">
        <div className="md:flex grid items-center justify-between font-g-mono">
          <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold  whitespace-nowrap">
            Total Products: {totalQuantity}
          </h2>
          <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold  whitespace-nowrap">
            total price: TK.{totalPrice}
          </h2>
          <button className="bg-[#D1A054] hover:bg-[#b97c20] text-white shadow-lg hover:shadow-2xl mb-3 py-3 px-5 rounded-lg text-lg font-semibold ">
            PAY ALL
          </button>
        </div>
        <div className="relative  overflow-x-auto shadow-md   rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right rounded-lg text-gray-500 ">
            <thead className="text-xs  text-white uppercase bg-[#D1A054]  ">
              <tr>
                <th scope="col" className="p-8 text-base">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  IMAGE
                </th>
                <th scope="col" className="px-6 py-3">
                  NAME
                </th>
                <th scope="col" className="px-6 py-3">
                  PRICE
                </th>
                <th scope="col" className="px-6 py-3">
                  QUANTITY
                </th>
                <th scope="col" className="px-6 py-3">
                  TOTAL PRICE
                </th>
                <th scope="col" className="px-6 py-3">
                  PLACE ORDER
                </th>

                <th scope="col" className="px-6 py-3">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody className=" w-full ">
              {filteredProducts.map((cart, index) => (
                <tr
                  key={cart?._id}
                  className="bg-white border-b   py-10 hover:bg-gray-50 ">
                  <td className="w-4 p-8">{index + 1}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <img
                      className="md:w-32 md:h-full object-cover h-16 w-24"
                      src={cart?.photos[0]?.img}
                      alt={cart?.title}
                    />
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {cart?.title}
                  </th>

                  <td scope="row" className="px-6 py-4">
                    {cart?.newPrice ? (
                      <div className="flex flex-col justify-start items-start gap-2">
                        <span className="line-through">TK.{cart?.price}</span>
                        <span className="font-semibold">
                          TK.{cart?.newPrice}
                        </span>
                      </div>
                    ) : (
                      <span className="font-semibold">TK.{cart?.price}</span>
                    )}
                  </td>
                  {/* quantity */}
                  <td scope="row" className="px-6 py-4">
                    {cart?.quantity}
                  </td>
                  {/* total amount */}
                  <td scope="row" className="px-6 py-4">
                    {cart?.newPrice ? (
                      <div className="flex flex-col whitespace-nowrap justify-start items-start ml-4 gap-2">
                        <span className="line-through">
                          TK.{cart?.price * cart?.quantity}
                        </span>
                        <span className="font-semibold">
                          TK.{cart?.newPrice * cart?.quantity}
                        </span>
                      </div>
                    ) : (
                      <span className="font-semibold ml-4">
                        TK.{cart?.price * cart?.quantity}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <button className="bg-[#D1A054] hover:bg-[#b97c20] text-white shadow-lg hover:shadow-2xl py-2 px-4 rounded-lg text-base font-semibold font-g-mono">
                      PAY
                    </button>
                  </td>

                  <td className=" px-6 py-4 h-full">
                    <MdDeleteForever className="bg-red-600 hover:bg-red-700 text-center  p-1 rounded-md text-white text-[32px]" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
