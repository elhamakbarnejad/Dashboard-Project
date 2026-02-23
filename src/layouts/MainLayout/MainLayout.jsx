import { Outlet, ScrollRestoration } from "react-router";
import TopBar from "../../featurs/TopBar/TopBar";
import Sidebar from "../../featurs/Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <div className="flex">
        <Sidebar />
        <ScrollRestoration />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
