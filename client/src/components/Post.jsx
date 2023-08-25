import React from "react";

const Post = ({ CgProfile }) => {
  return (
    <>
      <div className="flex flex-col h-full w-full">
        <div className="logo flex items-center gap-2 h-10">
          <CgProfile size={35} />
          <span className="text-xl">User name</span>
        </div>
        <div className="h-full">
          <textarea
            name=""
            id=""
            className="w-full h-64 outline-none py-3 px-2"
            placeholder="Say something..."
          ></textarea>
        </div>
        {/* post button */}
        <div className="mt-4 flex justify-between">
          <input type="file" name="" id="" />
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 text-lg py-2 rounded-full "
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default Post;
