import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "flowbite";

const MainLayOut = () => {
  return (
    <div>
      <div className="   overflow-x-hidden">
        <div className="">
          <Header></Header>
        </div>
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
