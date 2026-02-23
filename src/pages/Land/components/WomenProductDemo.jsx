import { Link } from "react-router";

const WomenProductDemo = () => {
  return (
    <>
      <p className="text-2xl text-gray-800 font-bold dark:text-white text-center mt-25">
        Best Sellers For Women
      </p>
      <Link to="/login">
        {" "}
        <p className="text-xs text-blue-900 mb-10 dark:text-white text-center">
          View All Women’s Perfume ➡️
        </p>
      </Link>{" "}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-10 mx-auto gap-3">
        <div className="flex flex-col items-center justify-center hover:-translate-y-1 primary-transition">
          <img className="rounded-lg mb-2" src="./images/1.webp" alt="pic" />
          <p className="primary-p-text font-bold dark:text-white mt-2">
            Bright Crystal By Versace
          </p>
        </div>
        <div className="flex flex-col items-center justify-center hover:-translate-y-1 primary-transition">
          <img className="rounded-lg mb-2" src="./images/2.webp" alt="pic" />
          <p className="primary-p-text font-bold dark:text-white mt-2">
            Light Blue By Dolce & Gabbana
          </p>
        </div>
        <div className="flex flex-col items-center justify-center hover:-translate-y-1 primary-transition">
          <img className="rounded-lg mb-2" src="./images/3.webp" alt="pic" />
          <p className="primary-p-text font-bold dark:text-white mt-2">
            Jimmy Choo By Jimmy Choo
          </p>
        </div>
        <div className="flex flex-col items-center justify-center hover:-translate-y-1 primary-transition">
          <img className="rounded-lg mb-2" src="./images/4.webp" alt="pic" />
          <p className="primary-p-text font-bold dark:text-white mt-2">
            Eternity By Calvin Klein
          </p>
        </div>
        <div className="flex flex-col items-center justify-center hover:-translate-y-1 primary-transition">
          <img className="rounded-lg mb-2" src="./images/5.webp" alt="pic" />
          <p className="primary-p-text font-bold dark:text-white mt-2">
            Viva La Juicy By Juicy Couture
          </p>
        </div>
        <div className="flex flex-col items-center justify-center hover:-translate-y-1 primary-transition">
          <img className="rounded-lg mb-2" src="./images/6.webp" alt="pic" />
          <p className="primary-p-text font-bold dark:text-white mt-2">
            Pink Sugar By Aquolina
          </p>
        </div>
      </div>
    </>
  );
};

export default WomenProductDemo;
