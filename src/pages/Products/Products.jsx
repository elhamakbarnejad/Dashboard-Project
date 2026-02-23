import { useContext } from "react";
import ProductsConrext from "../../conexts/Products/Products";
import ProductCard from "../../featurs/ProductCard/ProductCard";
import LoaderGeneral from "../../components/commons/Loader/LoaderGeneral";

const Products = () => {
  const { allProducts, error, loader } = useContext(ProductsConrext);

  return (
    <div className="flex items-center justify-between flex-col p-10 w-[90%] bg-gray-100 mx-auto rounded-lg dark:bg-gray-800 mt-5">
      <h1 className="flex-center dark:text-white text-md text-gray-600 mb-10">
        Welcome to the Perfume.com best sellers list. These are the 300 best
        selling perfumes, fragrances, colognes and after shaves. If you are
        having trouble deciding what perfume or cologne to buy then you have
        come to the right place. Our best selling fragrance selection is
        generated directly from customers orders. If you are trying to figure
        out what’s trending now and popular then this is the best place to
        browse.
      </h1>{" "}
      {loader ? (
        <LoaderGeneral />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
          {allProducts?.products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <h1 className="flex-center dark:text-white text-md text-gray-600 mt-10">
        Trusted since 1995, Perfume.com has all the best selling fragrances in
        stock and ready to ship. Best selling men’s fragrances, colognes and the
        best selling women's perfumes are on sale. Some of our most popular
        fragrance brands are Paul Sebastian, Giorgio Armani, Davidoff, Dolce &
        Gabbana, Calvin Klein, Estee Lauder, Elizabeth Arden, Azzaro and
        Guerlain. In addition to top sellers, we also stock all celebrity scents
        like Britney Spears, Paris Hilton, Jennifer Lopez and many hard to find
        fragrances, discontinued and new fragrances. Most orders ship the same
        day and get free delivery worldwide.
      </h1>{" "}
    </div>
  );
};

export default Products;
