import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "flowbite";
import { useState } from "react";

const MainLayOut = () => {
  const [header, setHeader] = useState(false);
  return (
    <div>
      <div className="   overflow-x-hidden">
        <div className="">
          <Header setHeader={setHeader} header={header}></Header>
        </div>
        <div onClick={() => setHeader(false)} className="min-h-screen">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
