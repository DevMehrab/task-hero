import React from "react";

export const Header = ({ boardName }) => {
  return (
    <div className="flex justify-between items-center h-fit p-6 bg-zinc-800 w-full border-b border-b-zinc-700">
      <h2 className="text-white">{boardName}</h2>
      <p className="text-zinc-200"> {new Date().toDateString()}</p>
    </div>
  );
};
