import { Link } from "react-router";

import Image from "./components/Image";
import ScrollingCircles from "./components/ScrollingCircles";
import MenProductDemo from "./components/MenProductDemo.JSX";
import WomenProductDemo from "./components/WomenProductDemo";
import EndSection from "./components/EndSection";

const Land = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-white gap-2 dark:bg-gray-900 ">
      <Image />
      <p className="text-sm text-gray-700 mt-10 mb-5 dark:text-white">
        Free shipping on thousands of fragrances. Save up to 80% off retail.
      </p>
      <p className="text-xl text-gray-600 dark:text-white">
        MOST POPULAR PERFUME & COLOGNE BRANDS
      </p>
      <Link to="/login">
        {" "}
        <p className="text-xs text-blue-900 mb-10 dark:text-white">
          VIEW FULL BRAND LIST ➡️
        </p>
      </Link>
      <ScrollingCircles />
      <MenProductDemo />
      <WomenProductDemo />
      <EndSection />
    </div>
  );
};

export default Land;
