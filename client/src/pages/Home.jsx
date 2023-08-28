import react, { useState, useEffect } from "react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import { RiQuestionnaireFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import LeftNavMenu from "../components/LeftNavMenu";
import Modaln from "../components/Modal";
import AddQModal from "../components/AddQModal";
import { useAuth } from "../context/auth";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isqOpen, setIsqOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);

  // for short description
  const [fullDescription, setFullDescription] = useState(false);

  // toggle description
  const toggleDescription = () => {
    setFullDescription(!shortDescription);
  };

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
  // useEfeect hooks
  useEffect(() => {
    getAllPost();
    // const interval = setInterval(getAllAgain, 30000);
    // return () => clearInterval(interval);
  }, []);
  // First Time fetch post
  const getAllPost = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/quora/v1/post/all-post");
      setPost(res.data.post);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  // post fetch without refresh
  // const getAllAgain = async () => {
  //   try {
  //     const res = await axios.get("/quora/v1/post/all-post");
  //     const newPost = res.data.post;
  //     setPost([...newPost]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <div className="whole-body w-full flex gap-3 mt-3 right-0 laptop:flex-row mobile:flex-col">
        <div className="left-sidebar laptop:fixed flex justify-start h-screen laptop:w-[9rem] laptop:flex-col mobile:flex-row mobile:w-full mobile:h-20">
          <div
            onClick={openModal}
            className="space-container laptop:w-[90%] flex items-center px-2 py-3 text-sm rounded-sm bg-gray-200 font-medium justify-center mt-2 cursor-pointer gap-1 text-gray-600"
          >
            <AiOutlinePlus /> Create Space
          </div>
          <Modaln closeModal={closeModal} isOpen={isOpen} />
          <LeftNavMenu />
        </div>
        <div className="main-scroll-body laptop:ml-[9rem] laptop:w-[600px] mobile:w-full">
          <div className="question-bar bg-white w-full border rounded-sm p-2">
            <div className="input-profile-container w-full flex items-center gap-3 py-1 px-1">
              {auth.user.photo ? (
                <img
                  src={auth.user.photo}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <CgProfile size={36} className="text-gray-600" />
              )}

              <div
                onClick={openqModal}
                className="w-full bg-gray-100 text-gray-500 py-2 rounded-full pl-2 border truncate"
              >
                What do you want to ask or share?
              </div>
            </div>
            <div className="flex w-full justify-between px-3 py-1 items-center">
              <div
                title="Post your Question"
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
          {/* All post loop here */}
          {loading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1 gap-3 mt-3">
              {post?.map((p) => (
                <div key={p.id} className="bg-[#ffffff] rounded-sm">
                  <div className="profile-tag-container flex gap-3 items-center px-3 py-3">
                    <img
                      src={p.author.photo}
                      alt=""
                      className="h-10 w-10 rounded-full"
                    />
                    <Link>{p.author.name}</Link>
                  </div>
                  <div className="px-3 pt-[0.8px]">
                    <div className="text-lg font-semibold leading-none text-black">
                      {p.title}
                    </div>
                    <div
                      className={
                        fullDescription
                          ? "full-description"
                          : "short-description"
                      }
                    >
                      {p.description}
                      {!fullDescription && (
                        <button onClick={toggleDescription}>
                          See more details
                        </button>
                      )}
                    </div>
                  </div>
                  <img
                    src={p.photo}
                    alt="post-photo"
                    className="h-[24rem] w-full mt-2"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
