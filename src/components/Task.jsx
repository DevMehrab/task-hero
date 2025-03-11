import React, { useState } from "react";
import { DisplayTask } from "./DisplayTask";

export const Task = ({ task }) => {
  const title = task.title;
  const description = task.description;
  const date = task.date;
  const [isModalHidden, setIsModalHidden] = useState(true);

  function handleClick() {
    setIsModalHidden(!isModalHidden);
  }
  return (
    <div className=" bg-zinc-800 rounded mb-4">
      <div onClick={handleClick} className="p-4">
        <h5 className="text-white">{title}</h5>
        <p className="text-zinc-400 text-sm mt-1">{date}</p>
      </div>
      {!isModalHidden && (
        <DisplayTask
          title={title}
          description={description}
          date={date}
          setIsModalHidden={setIsModalHidden}
        />
      )}
    </div>
  );
};
