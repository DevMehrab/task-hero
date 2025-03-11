import React, { useRef } from "react";

export const DisplayTask = ({ title, description, setIsModalHidden }) => {
  const modalRef = useRef();
  function handleClick() {
    setIsModalHidden(true);
  }
  return (
    <div
      ref={modalRef}
      className="h-screen w-screen absolute top-0 left-0 bg-[#3f3f4690]"
    >
      <div className="bg-zinc-700 rounded-2xl text-zinc-200 z-40 p-6 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] m-auto w-96">
        <h2 className="text-lg">{title}</h2>
        <p className="text-sm text-zinc-400 pb-6">{description}</p>
        <button
          onClick={handleClick}
          className="bg-zinc-600 w-full p-2 text-zinc-300 rounded cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
