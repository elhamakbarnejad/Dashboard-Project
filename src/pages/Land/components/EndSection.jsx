import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TfiCup } from "react-icons/tfi";
import { MdOutlineAllInclusive } from "react-icons/md";
const EndSection = () => {
  return (
    <div className="bg-sky-700 dark:bg-gray-800 min-h-80 w-full mt-15 flex items-stretch justify-center px-25 gap-3">
      <div className="flex-center flex-col  gap-3 px-5 hidden lg:flex">
        <VscWorkspaceTrusted className="text-4xl text-white font-bold mb-2" />
        <p className="text-lg font-bold text-white text-center">
          Trusted Since 1995
        </p>
        <p className="text-sm text-amber-50 text-center">
          All products are 100% authentic original brand names. We guarantee
          your security and will not share your data with anyone.
        </p>
      </div>
      <div className="flex-center flex-col gap-3 px-5">
        <TfiCup className="text-4xl text-white font-bold mb-2" />
        <p className="text-lg font-bold text-white text-center">Earn Rewards</p>
        <p className="text-sm text-amber-50 text-center w-50 lg:w-full">
          Every purchase gets you closer to lifetime discounts. Earn one point
          for every dollar spent, 1000 points equals 10% off.
        </p>
      </div>
      <div className="flex-center flex-col gap-3 px-5  hidden lg:flex">
        <MdOutlineAllInclusive className="text-4xl text-white font-bold mb-2" />
        <p className="text-lg font-bold text-white text-center">
          Wholesale Accounts
        </p>
        <p className="text-sm text-amber-50 text-center">
          Register to buy wholesale at Perfume.com. The best place to buy in
          bulk or drop ship to your customers.
        </p>
      </div>
    </div>
  );
};

export default EndSection;
