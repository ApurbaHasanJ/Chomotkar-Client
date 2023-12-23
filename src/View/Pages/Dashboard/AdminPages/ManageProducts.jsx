import { TbEdit } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import useProducts from "../../../Hooks/useProducts";
import SectionTitle from "../../../Shared/SectionTitle";
import Loader from "../../../Shared/Loader/Loader";
import { useState } from "react";
import UpdateProduct from "./UpdateProduct";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const [products, productsLoading, refetch] = useProducts();
  const [productId, setProductId] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const handleToggleModal = () => {
    setModal(!modal);
    refetch();
  };

  const handleDeleteProduct = (deleteId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#ff7675",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        fetch(`http://localhost:5000/products/${deleteId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.deletedCount) {
              setLoading(false);
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Product Deleted Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <div className="pt-12  min-h-screen relative ">
      <div className={`${modal ? "hidden" : "block"}`}>
        <SectionTitle
          title={"MANAGE ALL products"}
          subtitle={"---Hurry Up!---"}
        />

        {/* table */}
        <div className="my-container my-20">
          <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
            Total Products: {products?.length}
          </h2>

          <div className="relative  overflow-x-auto shadow-md   rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right rounded-lg text-gray-500 ">
              <thead className="text-xs  text-white uppercase bg-[#ff7675]  ">
                <tr>
                  <th scope="col" className="p-8 font-semibold">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ITEM IMAGE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ITEM NAME
                  </th>

                  <th scope="col" className="px-6 py-3">
                    COLOR
                  </th>
                  <th scope="col" className="px-6 py-3">
                    PRICE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ACTION
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading || productsLoading ? (
                  <tr className="h-96">
                    <td className="">
                      <Loader />
                    </td>
                  </tr>
                ) : (
                  products.map((product, index) => (
                    <tr
                      key={product?._id}
                      className="bg-white border-b py-10 hover:bg-gray-50 ">
                      <td className="w-4 p-8 font-semibold">{index + 1}</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        <img
                          className="md:w-28 md:h-full object-cover w-24"
                          src={product?.photos[0].img}
                          alt={product?.title}
                          title={product?.title}
                        />
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {product?.title}
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 capitalize whitespace-nowrap ">
                        {product?.color}
                      </th>

                      <td scope="row" className="px-6 py-4">
                        {product?.newPrice ? (
                          <div className="flex flex-col justify-start items-start gap-2">
                            <span className="line-through">
                              TK.{product?.price}
                            </span>
                            <span className="font-semibold">
                              TK.{product?.newPrice}
                            </span>
                          </div>
                        ) : (
                          <span>TK.{product?.price}</span>
                        )}
                      </td>
                      <td scope="row" className="px-6 py-4">
                        <TbEdit
                          onClick={() => {
                            handleToggleModal();
                            setProductId(product?._id);
                          }}
                          className="bg-[#ff7675] hover:bg-[#f15e5e] p-1 rounded-md text-white text-[32px]"
                        />
                      </td>
                      <td scope="row" className=" px-6 py-4">
                        <MdDeleteForever
                          onClick={() => handleDeleteProduct(product?._id)}
                          className="bg-red-600 hover:bg-red-700  p-1 rounded-md text-white text-[32px]"
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="">
        {modal && (
          <UpdateProduct
            productId={productId}
            modal={modal}
            handleToggleModal={handleToggleModal}
          />
        )}
      </div>
    </div>
  );
};

export default ManageProducts;
