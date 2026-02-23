import { TfiDashboard } from "react-icons/tfi";
import { TiShoppingCart } from "react-icons/ti";
import { PiUsersThreeBold } from "react-icons/pi";
import { NavLink } from "react-router";

const MainSidebar = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-8">
      <NavLink
        to="/home"
        className={({ isActive }) => {
          return `${isActive ? "bg-[#04AA6D]/20 w-full" : ""}`;
        }}
        end
      >
        {" "}
        <div className=" flex-center flex-col w-full p-2">
          <TfiDashboard className="text-2xl text-gray-700 font-bold dark:text-white" />
          <p className="text-sm text-gray-500 font-bold dark:text-white">
            Home
          </p>
        </div>
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => {
          return `${isActive ? "bg-[#04AA6D]/20 w-full" : ""}`;
        }}
        end
      >
        {" "}
        <div className=" flex-center flex-col p-2">
          <TiShoppingCart className="text-2xl text-gray-700 font-bold dark:text-white" />
          <p className="text-sm text-gray-500 font-bold dark:text-white">
            Products
          </p>
        </div>
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) => {
          return `${isActive ? "bg-[#04AA6D]/20 w-full" : ""}`;
        }}
        end
      >
        {" "}
        <div className=" flex-center flex-col p-2">
          <PiUsersThreeBold className="text-2xl text-gray-700 font-bold dark:text-white" />
          <p className="text-sm text-gray-500 font-bold dark:text-white">
            Users
          </p>
        </div>
      </NavLink>
    </div>
  );
};

export default MainSidebar;
