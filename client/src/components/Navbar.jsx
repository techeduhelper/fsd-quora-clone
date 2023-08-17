import React from "react";
import {
  AiFillHome,
  AiOutlineUsergroupDelete,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiDetail, BiEditAlt } from "react-icons/bi";
import { BsBell } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#ffffff] fixed top-0 right-0 w-full">
        <div className="nav-item-container flex flex-row items-center mx-56 py-1 mb-1">
          <div className="logo font-['Poppins', sans-serif] text-4xl font-bold text-[#cf4644]">
            Quora
          </div>
          <div className="menu flex flex-row  items-center ml-4 text-2xl text-gray-600 gap-3 h-full">
            <div className="hover:bg-slate-100 px-4 py-2 cursor-pointer">
              <AiFillHome />
            </div>
            <div className="hover:bg-slate-100 px-4 py-2 cursor-pointer">
              <BiDetail />
            </div>
            <div className="hover:bg-slate-100 px-4 py-2 cursor-pointer">
              <BiEditAlt />
            </div>
            <div className="hover:bg-slate-100 px-4 py-2 cursor-pointer">
              <AiOutlineUsergroupDelete />
            </div>
            <div className="hover:bg-slate-100 px-4 py-2 cursor-pointer">
              <BsBell />
            </div>
          </div>
          <div className="search-input w-72 border ml-2 flex items-center hover:outline-2 hover:outline-blue-500 cursor-pointer rounded-sm">
            <AiOutlineSearch size={20} className="ml-2" />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search Quora"
              className="outline-none py-1 ml-1 w-full"
            />
          </div>
          <div className="ml-3">
            <div className="px-2 rounded-full border py-1 text-gray-500 hover:bg-slate-50 cursor-pointer ">
              Try Quora+
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
