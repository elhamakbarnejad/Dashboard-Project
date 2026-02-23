import FooterSidebar from "./components/FooterSidebar";
import MainSidebar from "./components/MainSidebar";
import TopSidebar from "./components/TopSidebar";

const Sidebar = () => {
  return (
    <aside className="w-30 min-h-screen bg-gray-200 dark:bg-gray-900 sticky top-0 py-10">
      <div className="flex flex-col justify-between items-center gap-30   *:w-full">
        {" "}
        <TopSidebar />
        <MainSidebar />
        {/* <FooterSidebar /> */}
      </div>
    </aside>
  );
};

export default Sidebar;
