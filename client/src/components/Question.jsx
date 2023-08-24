import React from "react";

const Question = ({ CgProfile, closeModal }) => {
  function checkInput() {
    const userInput = document.getElementById("userInput").value;
    const submitButton = document.getElementById("submitButton");

    if (userInput.trim() !== "") {
      submitButton.removeAttribute("disabled");
      submitButton.style.backgroundColor = "blue";
    } else {
      submitButton.setAttribute("disabled", true);
      submitButton.style.backgroundColor = "lightgrey";
    }
  }

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="bg-blue-100 px-4 py-3 rounded-sm text-blue-600">
          <span className="text-lg font-bold">
            Tips on getting good answers quickly
          </span>
          <ul className="text-sm list-disc pl-5 pt-1 [&>li]:pt-1">
            <li>Make sure your question has not been asked already</li>
            <li>Keep your question short and to the point</li>
            <li>Double-check grammar and spelling</li>
          </ul>
        </div>
        <div className="profile-container mt-10 w-full flex items-center gap-3">
          <div className="logo text-gray-500">
            <CgProfile size={32} />
          </div>
          <div>
            <select
              id="visibility"
              className="bg-gray-50 border-2  text-gray-900 text-sm rounded-full p-2.5  dark:placeholder-gray-400 dark:text-white"
            >
              <option selected value="public">
                Public
              </option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>
        <div className="form-container mt-4 w-full border-b-2">
          <input
            onInput={checkInput}
            type="text"
            name=""
            id="userInput"
            placeholder="Start your question with , What , How, Why , etc."
            className="w-full text-xl outline-none py-2"
          />
        </div>
        <div className="button bottom-0 mt-20 w-full flex justify-end gap-5">
          <button
            onClick={closeModal}
            className="px-3 py-2 bg-blue-700  text-white rounded-full"
          >
            Cancel
          </button>
          <button
            id="submitButton"
            className="px-3 py-2 bg-blue-700 text-white rounded-full"
          >
            Add question
          </button>
        </div>
      </div>
    </>
  );
};

export default Question;