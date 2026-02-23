import React from "react";
import { Link } from "react-router";

const MenProductDemo = () => {
  return (
    <>
      {" "}
      <p className="text-2xl text-gray-800 font-bold dark:text-white text-center">
        Best Sellers For Men
      </p>
      <Link to="/login">
        {" "}
        <p className="text-xs text-blue-900 mb-10 dark:text-white text-center">
          View All Men’s Cologne➡️{" "}
        </p>
      </Link>{" "}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-10 mx-auto gap-3">
        <div className="flex flex-col items-center justify-center ">
          <img className="rounded-lg mb-2" src="./images/7.webp" alt="pic" />
          <p className="primary-p-text font-bold dark:text-white hover:-translate-y-1 primary-transition">
            Versace Eros By Versace
          </p>
        </div>
        <div className="flex flex-col items-center justify-center hover:-translate-y-1 primary-transition">
          <img className="rounded-lg mb-2" src="./images/8.webp" alt="pic" />
          <p className="primary-p-text font-bold dark:text-white mt-2">
            Eternity By Calvin Klein
          </p>
        </div>
        <div className="flex flex-col items-center justify-center hover:-translate-y-1 primary-transition">
          <img className="rounded-lg mb-2" src="./images/9.webp" alt="pic" />
          <p className="primary-p-text font-bold dark:text-white mt-2">
            Versace Man By Versace
          </p>
        </div>
        <div className="flex flex-col items-center justify-center hover:-translate-y-1 primary-transition">
          <img className="rounded-lg mb-2" src="./images/10.webp" alt="pic" />
          <p className="primary-p-text font-bold dark:text-white mt-2">
            Cool Water By Davidoff
          </p>
        </div>
        <div className="flex flex-col items-center justify-center hover:-translate-y-1 primary-transition">
          <img className="rounded-lg mb-2" src="./images/11.webp" alt="pic" />
          <p className="primary-p-text font-bold dark:text-white mt-2">
            Versace Pour Homme By Versace
          </p>
        </div>
        <div className="flex flex-col items-center justify-center hover:-translate-y-1 primary-transition">
          <img className="rounded-lg mb-2" src="./images/12.webp" alt="pic" />
          <p className="primary-p-text font-bold dark:text-white mt-2">
            Obsession By Calvin Klein
          </p>
        </div>
      </div>
    </>
  );
};

export default MenProductDemo;
