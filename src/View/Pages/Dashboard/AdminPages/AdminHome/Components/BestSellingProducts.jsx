import useOrders from "../../../../../Hooks/useOrders";
import useProducts from "../../../../../Hooks/useProducts";

const BestSellingProducts = () => {
  const [orders, ,] = useOrders();
  const [products] = useProducts();
//   console.log(orders);
const filteredOrders = orders.filter(
    (order) => order.paidStatus === true && order.orderStatus === "confirmed"
  );

//   console.log(filteredOrders);
  // Create a map to store the quantity of each product
  const productQuantityMap = new Map();

  //   count quantity of each product
  filteredOrders.forEach((order) => {
    const productId = order.productId;
    const quantity = order.quantity;

    if (productQuantityMap.has(productId)) {
      productQuantityMap.set(
        productId,
        productQuantityMap.get(productId) + quantity
      );
    } else {
      productQuantityMap.set(productId, quantity);
    }
  });

  // Convert the map to an array of objects
  const bestSellingProducts = [...productQuantityMap.entries()].map(
    ([productId, quantity]) => ({
      productId,
      quantity,
    })
  );

  bestSellingProducts.sort((a, b) => b.quantity - a.quantity);

  // Take only the top 5 products
  const topFive = bestSellingProducts.slice(0, 5);

  const matchedProducts = products
    .filter((product) => topFive.some((top) => top.productId === product._id))
    .map((product) => ({
      ...product,
      quantity: topFive.find((top) => top.productId === product._id).quantity,
    }));

//   console.log(matchedProducts);
  return (
    <div className="bg-white md:w-3/6 w-full h-fit shadow-2xl shadow-purple-200 drop-shadow-2xl rounded-xl p-10">
      <h2 className="text-purple-600 font-semibold text-2xl drop-shadow-2xl">
        Best Selling Products
      </h2>
      <ul className="grid gap-4 mt-6">
        {matchedProducts.map((product, index) => (
          <li key={index} className="flex gap-3">
            <img className="w-16 h-16" src={product?.photos[0]?.img} alt="" />
            <div className="grid">
              <span>{product?.title}</span>
              <span>ID: {product?._id}</span>
            </div>
            <div className="grid ml-auto drop-shadow-2xl bg-purple-200 font-semibold p-2 rounded-xl">
              <span>
                Price: {product?.newPrice ? product.newPrice : product.price}
              </span>
              <span>Quantity: {product?.quantity}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestSellingProducts;
