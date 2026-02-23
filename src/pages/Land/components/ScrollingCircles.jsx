import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
const ScrollingCircles = () => {
  return (
    <div className="relative lg:w-200 w-100 hidden sm:block mb-15 dark:text-white mx-auto ">
      <button
        onClick={() =>
          document
            .getElementById("scrollDiv")
            .scrollBy({ left: -100, behavior: "smooth" })
        }
        className="absolute left-0 top-8 z-10 bg-[#04AA6D]/30 rounded-full  shadow text-3xl"
      >
        <IoMdArrowDropleft />
      </button>

      <div
        id="scrollDiv"
        className="flex overflow-x-auto gap-4 mx-10 scroll-smooth no-scrollbar "
      >
        <div className="p-2 font-bold flex-shrink-0 w-20 h-20 bg-blue-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center ">
          Calvin
          <br /> Kleinfont-bold
        </div>
        <div className="p-2 font-bold  flex-shrink-0 w-20 h-20 bg-green-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center">
          Dolce
          <br /> & Gabbana
        </div>
        <div className="font-bold  flex-shrink-0 w-20 h-20 bg-yellow-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center">
          Bvlgari
        </div>
        <div className="p-2 font-bold  flex-shrink-0 w-20 h-20 bg-red-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center">
          Christian Dior
        </div>
        <div className="p-2 font-bold  flex-shrink-0 w-20 h-20 bg-purple-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center">
          Yves <br />
          Saint Laurent
        </div>
        <div className="p-2 font-bold  flex-shrink-0 w-20 h-20 bg-blue-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center ">
          Calvin Klein
        </div>
        <div className="p-2 font-bold  flex-shrink-0 w-20 h-20 bg-green-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center">
          Dolce & Gabbana
        </div>
        <div className="p-2 font-bold  flex-shrink-0 w-20 h-20 bg-yellow-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center">
          Bvlgari
        </div>
        <div className="p-2 font-bold  flex-shrink-0 w-20 h-20 bg-red-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center">
          Christian Dior
        </div>
        <div className="p-2 font-bold  flex-shrink-0 w-20 h-20 bg-purple-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center">
          Yves
          <br /> Saint Laurent
        </div>
        <div className="p-2 font-bold flex-shrink-0 w-20 h-20 bg-blue-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center ">
          Calvin
          <br /> Kleinfont-bold
        </div>
        <div className="p-2 font-bold  flex-shrink-0 w-20 h-20 bg-green-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center">
          Dolce
          <br /> & Gabbana
        </div>
        <div className="font-bold  flex-shrink-0 w-20 h-20 bg-yellow-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center">
          Bvlgari
        </div>
        <div className="p-2 font-bold  flex-shrink-0 w-20 h-20 bg-red-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center">
          Christian Dior
        </div>
        <div className="p-2 font-bold  flex-shrink-0 w-20 h-20 bg-purple-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center">
          Yves <br />
          Saint Laurent
        </div>
        <div className="p-2 font-bold  flex-shrink-0 w-20 h-20 bg-blue-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center ">
          Calvin Klein
        </div>
        <div className="p-2 font-bold  flex-shrink-0 w-20 h-20 bg-green-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center">
          Dolce & Gabbana
        </div>
        <div className="p-2 font-bold  flex-shrink-0 w-20 h-20 bg-yellow-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center">
          Bvlgari
        </div>
        <div className="p-2 font-bold  flex-shrink-0 w-20 h-20 bg-red-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center">
          Christian Dior
        </div>
        <div className="p-2 font-bold  flex-shrink-0 w-20 h-20 bg-purple-500/60 rounded-full flex-center text-gray-800dark:text-white text-xs text-center">
          Yves
          <br /> Saint Laurent
        </div>
      </div>

      <button
        onClick={() =>
          document
            .getElementById("scrollDiv")
            .scrollBy({ left: 100, behavior: "smooth" })
        }
        className="absolute right-0 top-5 z-10 bg-[#04AA6D]/30 rounded-full shadow text-3xl"
      >
        <IoMdArrowDropright />
      </button>

      <style>{`
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
    </div>
  );
};

export default ScrollingCircles;
