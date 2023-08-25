import React from "react";
import Modal from "react-modal";
import { RxCross2 } from "react-icons/rx";

const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "60%",
    height: "70%",
    padding: "1rem",
    overflow: "auto ",
    border: "none",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    background: "#ffffff",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 1000,
  },
};

const Modaln = ({ isOpen, closeModal }) => {
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <button
          className="hover:bg-gray-50 p-2 hover:rounded-full"
          onClick={closeModal}
        >
          <RxCross2 size={30} />
        </button>
        <div className="flex flex-col justify-start gap-6 px-4 py-3">
          <div className="flex flex-col justify-center">
            <span className="text-xl font-bold">Create a Space</span>
            <span className="text-gray-600 text-lg">
              Share your interests, curate content, host discussions, and more.
            </span>
          </div>
          <form className="flex flex-col gap-8 bottom-0">
            <div className="flex flex-col">
              <label className="text-xl font-medium">Name</label>
              <span className="text-base text-gray-500">
                This can be changed in Space settings.
              </span>
              <input
                className="py-3 px-2 w-full mt-1 border rounded-sm"
                type="text"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-xl font-medium">Brief description</label>
              <span className="text-base text-gray-500">
                Include a few keywords to show people what to expect if they
                join.
              </span>
              <input
                className="py-3 px-2 w-full mt-1 border rounded-sm"
                type="text"
              />
            </div>
            <hr />
            <div className="bottom-0 flex flex-col items-end">
              <button
                type="submit"
                className="text-xl px-8 py-3 bg-blue-400 text-white rounded-full"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Modaln;
