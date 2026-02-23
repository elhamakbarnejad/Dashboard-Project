import { IoStorefrontSharp } from "react-icons/io5";
import { Link } from "react-router";

const TopSidebar = () => {
  return (
    <div className="w-full">
      <Link to="/" className="w-full flex-center flex-col gap-1">
        {" "}
        <IoStorefrontSharp className="text-3xl font-bold text-amber-600" />
        <h1 className="text-md font-bold text-amber-600">Eli Shop</h1>
      </Link>
    </div>
  );
};

export default TopSidebar;
