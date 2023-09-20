import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [header, setHeader] = useState(false);
  return (
    <div className="flex justify-between items-center   p-4 shadow-md text-white font-semibold gap-3  top-0     relative">
      <Link to="/">
        <div className="flex items-center gap-1 text-xl">
          <figure>
            <img src="https://i.ibb.co/N3F9twf/10001.png" alt="" />
          </figure>
          Programming Hero
        </div>
      </Link>
      {/* menu list  */}
      <div className="overflow-hidden">
        {/* mobaile menu iocn */}
        <div>
          <button
            onClick={() => setHeader(!header)}
            className="inline-block sm:hidden text-3xl "
          >
            {header ? <AiOutlineClose></AiOutlineClose> : <FiMenu></FiMenu>}
          </button>
        </div>

        <nav
          className={`${
            header ? "right-0" : "-right-full"
          } flex  sm:flex-row flex-col  justify-center sm:items-center absolute sm:static rounded p-4 sm:px-4 w-11/12 sm:w-auto bg-gray-300 sm:bg-none bg-opacity-10 sm:bg-opacity-0   top-26 gap-3 list-none z-30 duration-500 backdrop-blur-md sm:backdrop-blur-0`}
        >
          <NavLink
            to={"/"}
            className="sm:bg-opacity-0 bg-gray-800 hover:bg-black sm:hover:bg-opacity-0 duration-300 block p-2  rounded "
          >
            Home
          </NavLink>

          <NavLink
            to={"/about"}
            className="sm:bg-opacity-0 bg-gray-800 hover:bg-black sm:hover:bg-opacity-0 duration-300 block p-2  rounded"
          >
            About
          </NavLink>

          <NavLink
            to={"/course"}
            className=" sm:bg-opacity-0 bg-gray-800 hover:bg-black sm:hover:bg-opacity-0 duration-300 block p-2  rounded"
          >
            Course
          </NavLink>
          <NavLink
            to={"/posts"}
            className=" sm:bg-opacity-0 bg-gray-800 hover:bg-black sm:hover:bg-opacity-0 duration-300 block p-2  rounded"
          >
            Posts
          </NavLink>

          <NavLink
            to={"/contact"}
            className="sm:bg-opacity-0 bg-gray-800 hover:bg-black sm:hover:bg-opacity-0 duration-300 block p-2  rounded"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
