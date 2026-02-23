import { useState, useContext } from "react";
import ProductsConrext from "../../conexts/Products/Products";
import Table from "../../components/commons/Table/Table";
import Pagination from "../../components/commons/Pagination/Pagination";

const ProductsTable = () => {
  const { allProducts } = useContext(ProductsConrext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  if (!allProducts?.products) return null;

  const headers = ["Image", "Title", "Category", "Price", "Stock", "No."];

  const products = allProducts.products;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const renderRow = (product) => (
    <tr
      key={product.id}
      className="border-b even:bg-gray-100 dark:hover:bg-gray-500 dark:text-white dark:even:text-black text-center *:text-sm *:primary-border *:justify-items-center *:text-md"
    >
      <td className="md:text-md  px-1 py-2 hidden md:table-cell">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-10 h-10 object-cover rounded"
        />
      </td>
      <td className="w-75 md:text-md text:xs  px-2 py-2">{product.title}</td>
      <td className="md:text-md  px-1 py-2 hidden md:table-cell">
        {product.category}
      </td>
      <td className="w-20 md:text-md  px-1 py-2">${product.price}</td>
      <td className="md:text-md  px-1 py-2 hidden md:table-cell">
        {product.stock}
      </td>
      <td className="md:text-md  px-1 py-2">{product.id}</td>
    </tr>
  );

  return (
    <div className="p-4">
      <Table headers={headers} data={currentProducts} renderRow={renderRow} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductsTable;
