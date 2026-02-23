import { useContext } from "react";
import ProductsTable from "../../featurs/ProductsTable/ProductsTable";
import UsersTable from "../../featurs/UsersTable/UsersTable";
import LoaderGeneral from "../../components/commons/Loader/LoaderGeneral";
import ProductsContext from "../../conexts/Products/Products";
import ProductsChart from "../../components/commons/Chart/ProductsChart";
import UsersChart from "../../components/commons/Chart/UsersChart";
import UsersConrext from "../../conexts/Users/Users";

const Home = () => {
  const { loader } = useContext(ProductsContext);
  const { loader1 } = useContext(UsersConrext);

  return (
    <div className="flex items-center justify-between flex-col p-10 w-[90%] bg-gray-100 mx-auto rounded-lg dark:bg-gray-800 mt-5 ">
      <div className="flex flex-col primary-border rounded-md p-2 w-full ">
        <h1 className="text-2xl font-bold mb-6 dark:text-white text-center mt-5">
          Products Management
        </h1>
        <div className="flex items-center justify-center w-full gap-10 flex-col lg:flex-row">
          {" "}
          {loader ? <LoaderGeneral /> : <ProductsTable />}
          <ProductsChart />
        </div>
      </div>
      <div className="flex flex-col primary-border rounded-md p-2 w-full ">
        {" "}
        <h1 className="text-2xl font-bold mb-6 dark:text-white text-center mt-5">
          Users Management
        </h1>
        <div className="flex items-center justify-center w-full gap-10 flex-col lg:flex-row">
          {" "}
          {loader1 ? <LoaderGeneral /> : <UsersTable />}
          <UsersChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
