

const ProductDetails = ({productDetails}) => {
    return (
        <div>
            <div>
                  <div className="">
                    <h1 className="text-lg mb-2 text-center font-bold underline underline-offset-2">
                      Customer Details
                    </h1>
                    <div className="">
                      <span className="font-semibold">Status: </span>
                      <span>
                        {productDetails?.paidStatus === true
                          ? "PAID"
                          : "NOT PAID"}
                      </span>
                    </div>
                    <div className=" text-red-600">
                      <span className="font-semibold">Transaction ID: </span>
                      <span>{productDetails?.transactionId || "none"}</span>
                    </div>

                    <div className="">
                      <span className="  font-semibold">Name: </span>
                      <span>{productDetails?.cusName}</span>
                    </div>
                  </div>
                  <div className="">
                    <span className="font-semibold">Phone: </span>
                    <span>+88{productDetails?.cusPhone || "None"}</span>
                  </div>
                  <div className="">
                    <span className="font-semibold">Email: </span>
                    <span>{productDetails?.cusEmail || "None"}</span>
                  </div>

                  <div className="">
                    <span className="font-semibold">Address: </span>
                    <span>{productDetails?.cusAdd || "None"}</span>
                  </div>
                  <div className="">
                    <span className="font-semibold">Location: </span>
                    <span>{productDetails?.cusLocation || "None"}</span>
                  </div>
                  <div className="">
                    <span className="font-semibold">Order Time: </span>
                    <span>{productDetails?.createdAt || "None"}</span>
                  </div>
                </div>
                <hr className="mt-2 border-b border-gray-400" />
                <div className="mt-3">
                  <h1 className="text-lg mb-2 text-center font-bold underline underline-offset-2">
                    Product Details
                  </h1>
                  <div className="">
                    <span className="font-semibold">Name: </span>
                    <span>{productDetails?.product?.title || "None"}</span>
                  </div>
                  <div className="capitalize">
                    <span className="font-semibold">Category: </span>
                    <span>{productDetails?.product?.category || "None"}</span>
                  </div>
                  <div className="capitalize">
                    <span className="font-semibold">Sub Category: </span>
                    <span>
                      {productDetails?.product?.subCategory || "None"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Color: </span>
                    <span
                      style={{
                        backgroundColor: productDetails?.product?.color,
                      }}
                      className="p-2 rounded-full border"></span>
                    <span className="capitalize">
                      {productDetails?.product?.color}
                    </span>
                  </div>
                  <div className="capitalize">
                    <span className="font-semibold">Size: </span>
                    <span>{productDetails?.size || "None"}</span>
                  </div>
                  <div className="">
                    <span className="font-semibold">Coupon: </span>
                    <span>{productDetails?.couponCode || "None"}</span>
                  </div>
                  <div className="capitalize">
                    <span className="font-semibold">Quantity: </span>
                    <span>{productDetails?.quantity || "None"}</span>
                  </div>
                  <div className="font-bold text-red-500">
                    <span className="font-bold">Price: </span>
                    <span>BDT. {productDetails?.totalAmount || "None"}</span>
                  </div>
                </div>
        </div>
    );
};

export default ProductDetails;