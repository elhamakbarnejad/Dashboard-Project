import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUser = async () => {
      setLoader(true);
      try {
        const res = await fetch("https://dummyjson.com/products", {
          signal: controller.signal,
        });
        if (res.status === 200) {
          const data = await res.json();
          setTimeout(() => {
            setAllProducts(data);
            setLoader(false);
          }, 2000);
        } else {
          const errorData = await res.json();
          throw new Error(errorData.message || "Fetching data ...");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchUser();
    return () => controller.abort();
  }, []);
  return (
    <ProductsContext.Provider value={{ allProducts, error, loader }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
