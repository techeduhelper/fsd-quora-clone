import react, { useState } from "react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import { RiQuestionnaireFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import LeftNavMenu from "../components/LeftNavMenu";
import Modaln from "../components/Modal";
import AddQModal from "../components/AddQModal";
import { useAuth } from "../context/auth";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isqOpen, setIsqOpen] = useState(false);
  const [auth, setAuth] = useAuth();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openqModal() {
    setIsqOpen(true);
  }

  function closeqModal() {
    setIsqOpen(false);
  }
  console.log(auth);

  return (
    <>
      <div className="whole-body w-full flex gap-3 mt-3 right-0 laptop:flex-row mobile:flex-col">
        <div className="left-sidebar laptop:fixed flex justify-start h-screen laptop:w-[12rem] laptop:flex-col mobile:flex-row mobile:w-full mobile:h-20">
          <div
            onClick={openModal}
            className="space-container laptop:w-[90%] flex items-center px-2 py-3 text-sm rounded-sm bg-gray-200 font-medium justify-center mt-2 cursor-pointer gap-1 text-gray-600"
          >
            <AiOutlinePlus /> Create Space
          </div>
          <Modaln closeModal={closeModal} isOpen={isOpen} />
          <LeftNavMenu />
        </div>
        <div className="main-scroll-body laptop:ml-[12rem] laptop:w-[600px] mobile:w-full">
          <div className="question-bar bg-white w-full border rounded-sm p-2">
            <div className="input-profile-container w-full flex items-center gap-3 py-1 px-3">
              <CgProfile size={36} className="text-gray-600" />
              <div
                onClick={openqModal}
                className="w-full bg-gray-100 text-gray-500 py-2 rounded-full pl-2 border truncate"
              >
                What do you want to ask or share?
              </div>
            </div>
            <div className="flex w-full justify-between px-3 py-1 items-center">
              <div
                onClick={openqModal}
                className="ask-button flex items-center justify-center hover:bg-gray-100 py-2 hover:rounded-full cursor-pointer w-full mx-2 gap-2 text-gray-700"
              >
                <RiQuestionnaireFill size={24} /> Ask
              </div>
              <AddQModal
                isOpen={isqOpen}
                closeModal={closeqModal}
                CgProfile={CgProfile}
              />
              <div className="border-contain h-5 border-r-2 "></div>
              <div className="answer-btn flex items-center justify-center hover:bg-gray-100 py-2 hover:rounded-full cursor-pointer w-full mx-2 gap-2 text-gray-700">
                <FaRegEdit size={22} />
                Answer
              </div>
              <div className="border-contain h-5 border-r-2 "></div>
              <div
                onClick={openqModal}
                className="post-btn flex items-center justify-center hover:bg-gray-100 py-2 hover:rounded-full cursor-pointer w-full mx-2 gap-2 text-gray-700"
              >
                <AiOutlineEdit size={24} />
                Post
              </div>
            </div>
          </div>
          <div>{JSON.stringify(auth, null, 4)}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
