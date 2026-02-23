import { Outlet } from "react-router";
import TopBar from "../../featurs/TopBar/TopBar";

const PublicLayout = () => {
  return (
    <div className=" bg-gray-100 mx-auto">
      <TopBar />

      <Outlet />
    </div>
  );
};

export default PublicLayout;
