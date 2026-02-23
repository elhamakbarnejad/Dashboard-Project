import { Link, useNavigate } from "react-router";
import { ThemeBtn } from "../ThemeBtn/ThemeBtn";
import { FaTruck } from "react-icons/fa";
import { SiFsecure } from "react-icons/si";
import { SiAuthentik } from "react-icons/si";

const TopBar = () => {
  const isAuthenticated = localStorage.getItem("token");
  const navigate = useNavigate();
  const loginHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="bg-white dark:bg-gray-800 text-black shadow-sm dark:shadow-white flex flex-col items-center justify-between sticky top-0 left-0 right-0 z-999">
      <div className="flex justify-between items-center mx-auto w-full px-10 min-h-25">
        <div className="flex items-center justify-center gap-10">
          <div className="flex-center gap-2">
            {" "}
            {isAuthenticated ? (
              <button
                onClick={loginHandler}
                className=" px-2 sm:px-6 py-2 text-sm bg-[#ff704d] text-white hover:opacity-70 rounded-lg primary-transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className=" px-2 sm:px-6 py-2 text-sm bg-[#04AA6D]/90 text-white hover:opacity-85 rounded-lg primary-transition"
              >
                Login
              </button>
            )}
            <ThemeBtn />
          </div>

          <div className="items-start justify-center gap-1 flex flex-col">
            <h1 className="text-gray-700 text-md sm:text-xl font-bold flex items-start dark:text-white px-2">
              Eli Shop
            </h1>
            <p className="primary-p-text dark:text-white hidden lg:block px-2">
              Trade statistics for international business
              <br />
              development Monthly, quarterly and yearly trade data.
            </p>
          </div>
        </div>
        <div className="hidden md:block px-2">
          <img
            src="./images/TM_logo.gif"
            alt="Logo"
            className="object-cove rounded-full"
          />
        </div>
      </div>
      <div className="min-h-15 bg-gray-200 dark:bg-gray-900  w-full lg:flex-row flex-col flex gap-1  items-center justify-between px-10">
        <div className="flex-center gap-2">
          {" "}
          <Link to="/login">
            {" "}
            <p className="dark:text-white lg:text-md text-sm text-gray-600 font-bold hover:bg-[#04AA6D]/40 primary-transition flex-center h-15 px-2">
              {" "}
              Groceries
            </p>
          </Link>
          <Link to="/login">
            {" "}
            <p className="dark:text-white lg:text-md text-sm text-gray-600 font-bold hover:bg-[#04AA6D]/40 primary-transition flex-center h-15 px-2">
              {" "}
              Fragrances
            </p>
          </Link>
          <Link to="/login">
            {" "}
            <p className="dark:text-white lg:text-md text-sm text-gray-600 font-bold hover:bg-[#04AA6D]/40 primary-transition flex-center h-15 px-2">
              {" "}
              Beauty
            </p>
          </Link>
          <Link to="/login">
            {" "}
            <p className="dark:text-white lg:text-md text-sm text-gray-600 font-bold hover:bg-[#04AA6D]/40 primary-transition flex-center h-15 px-2">
              {" "}
              Furniture
            </p>
          </Link>
        </div>
        <div className="flex-center gap-5">
          <Link to="/login">
            {" "}
            <div className="flex-center flex-col hover:bg-[#04AA6D]/40 primary-transition h-15 px-2">
              <div className=" flex-center gap-2  ">
                <FaTruck className="lg:text-2xl text-xl text-red-600 dark:text-red-400 font-bold" />
                <p className="lg:text-md text-sm text-gray-600 font-bold flex-center dark:text-white">
                  Free
                </p>
              </div>
              <p className="text-xs text-gray-600 flex-center dark:text-white">
                Shipping
              </p>
            </div>
          </Link>
          <Link to="/login">
            {" "}
            <div className="flex-center flex-col hover:bg-[#04AA6D]/40 primary-transition h-15 px-2">
              <div className=" flex-center gap-2  ">
                <SiFsecure className="lg:text-2xl text-xl text-red-600 dark:text-red-400 font-bold" />
                <p className="lg:text-md text-sm text-gray-600 font-bold flex-center dark:text-white">
                  100%
                </p>
              </div>
              <p className="text-xs text-gray-600 flex-center dark:text-white">
                Secure
              </p>
            </div>
          </Link>
          <Link to="/login">
            {" "}
            <div className="flex-center flex-col hover:bg-[#04AA6D]/40 primary-transition h-15 px-2">
              <div className=" flex-center gap-2  ">
                <SiAuthentik className="lg:text-2xl text-xl text-red-600 dark:text-red-400 font-bold" />
                <p className="lg:text-md text-sm text-gray-600 font-bold flex-center dark:text-white">
                  100%
                </p>
              </div>
              <p className="text-xs text-gray-600 flex-center dark:text-white">
                Authentic
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
