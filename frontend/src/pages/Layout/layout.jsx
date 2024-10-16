import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
export const Layout = () => {
  return (
    <div className="app-container w-screen h-screen flex-col bg-green-200  flex">
        <Navbar/>
      <div class="flex  md:flex-row bg-pink-200  w-full h-full">
      <Sidebar/>
        <Outlet />
      </div>
    </div>
  );
};
