const ProductCard = ({ product }) => {
  return (
    <div className="rounded-lg bg-white dark:bg-gray-900 h-140 w-70">
      <div className="w-full">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover"
        />
      </div>
      <div className=" px-4 gap-1 flex items-center justify-between flex-col w-full *:w-full">
        <h1 className="flex-center text-center font-bold text-md text-gray-800 my-2 bg-gray-100 dark:bg-gray-800 p-1 h-15 rounded-sm dark:text-white">
          {product.title}
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex text-yellow-400 text-xl">
            {"★".repeat(Math.floor(product.rating))}
            {"☆".repeat(5 - Math.floor(product.rating))}
          </div>
          <p className="text-gray-600 text-md font-bold">{product.rating}</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-gray-800 font-bold dark:text-white">
            By:{" "}
            <span className="text-gray-600 font-bold dark:text-white">
              {product.brand}
            </span>{" "}
          </p>
          <p className="text-gray-800 font-bold dark:text-white">
            Stock:{" "}
            <span className="text-gray-600 font-bold dark:text-white">
              {product.stock}
            </span>{" "}
          </p>
        </div>
        <p className="text-gray-800 font-bold dark:text-white">
          Price:{" "}
          <span className="text-red-500 font-bold dark:text-white">
            {product.price}$
          </span>{" "}
        </p>
        <p className="text-gray-800 font-bold dark:text-white">
          Discount:{" "}
          <span className="text-red-500 font-bold dark:text-white">
            {product.discountPercentage}%
          </span>{" "}
        </p>
        <p className="text-gray-800 font-bold text-xs dark:text-white">
          Warranty:{" "}
          <span className="text-gray-500 font-bold text-xs dark:text-white">
            {product.warrantyInformation}
          </span>{" "}
        </p>
        <p className="text-gray-800 font-bold text-xs dark:text-white">
          shipping:{" "}
          <span className="text-gray-500 font-bold text-xs dark:text-white">
            {product.shippingInformation}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
