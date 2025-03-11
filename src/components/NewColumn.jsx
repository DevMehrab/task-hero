import React, { useState } from "react";
import { NewColumnModal } from "./NewColumnModal";

export const NewColumn = () => {
  const [isModalHidden, setIsModalHidden] = useState(true);
  function handleClick() {
    setIsModalHidden(!isModalHidden);
  }
  return (
    <div className="h-full w-80 flex flex-col justify-center items-center bg-[#33333330] mx-4 text-white rounded-2xl p-8">
      <button>
        {isModalHidden ? (
          <p onClick={handleClick}>+new column</p>
        ) : (
          <NewColumnModal setIsModalHidden={setIsModalHidden} />
        )}
      </button>
    </div>
  );
};
