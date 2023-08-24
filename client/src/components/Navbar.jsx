import React, { useState } from "react";
import {
  AiFillHome,
  AiOutlineUsergroupDelete,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiDetail, BiEditAlt, BiSolidDownArrow } from "react-icons/bi";
import { BsBell, BsGlobe } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-[#ffffff] sticky top-0 right-0 w-screen mobile:w-screen z-50 border-b-2">
        <div className="nav-item-container flex flex-row items-center mobile:mx-3 laptop:mx-56 py-1 mb-1">
          <Link
            to={"/home"}
            className="logo font-['Poppins', sans-serif] text-4xl font-bold text-[#cf4644]"
          >
            Quora
          </Link>
          <div className="menu flex flex-row  items-center ml-4 text-2xl text-gray-600 laptop:gap-2 mobile:gap-1 h-full">
            <Link
              to={"/home"}
              className="hover:bg-slate-100 px-4 py-2 cursor-pointer"
            >
              <AiFillHome />
            </Link>
            <div className="hover:bg-slate-100 px-4 py-2 cursor-pointer">
              <BiDetail />
            </div>
            <div className="hover:bg-slate-100 px-4 py-2 cursor-pointer">
              <BiEditAlt />
            </div>
            <Link
              to={"/home/spaces"}
              className="hover:bg-slate-100 px-4 py-2 cursor-pointer"
            >
              <AiOutlineUsergroupDelete />
            </Link>
            <div className="hover:bg-slate-100 px-4 py-2 cursor-pointer">
              <BsBell />
            </div>
          </div>
          <div className="search-input border ml-2 flex items-center hover:outline-2 hover:outline-blue-500 cursor-pointer rounded-sm">
            <AiOutlineSearch size={20} className="ml-2" />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search Quora"
              className="outline-none py-1 ml-1 mobile:w-40"
            />
          </div>
          <div className="ml-3 flex items-center gap-3 right-0 w-full">
            <button className="px-2 rounded-full border py-1 text-gray-500 hover:bg-slate-50 cursor-pointer laptop:w-32">
              Try Quora+
            </button>
            <div
              onClick={togglePopup}
              className="profile text-gray-600 cursor-pointer hover:bg-slate-100 py-1 px-2"
            >
              <CgProfile size={25} />
              {isOpen && (
                <div className="absolute w-60 mt-6 -ml-28 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <BiSolidDownArrow
                    style={{ transform: "rotate(180deg)" }}
                    className=" text-white  text-center -mt-5 mx-auto"
                    size={20}
                  />
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </a>
                    <a
                      href="http://localhost:8080/auth/logout"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="globe text-gray-600 cursor-pointer px-2 hover:bg-slate-100 py-1">
              <BsGlobe size={24} />
            </div>
            <div className="addquestion flex w-36 justify-between items-center py-1 px-2 rounded-full bg-[#cf4644] text-white">
              <div className="hover:bg-[#e04a48] hover:rounded-full cursor-pointer">
                Add Question
              </div>
              <RiArrowDropDownLine
                size={25}
                className="ml-1 border-l-[0.1px] border-black"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;



// 🚀 Excited to Share My Portfolio! 🚀
// 