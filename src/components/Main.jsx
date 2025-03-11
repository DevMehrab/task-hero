import React, { useContext } from "react";
import { Header } from "./Header";
import { TasksContainer } from "./TasksContainer";
import { TaskContext } from "./TaskProvider";

export const Main = () => {
  const { activeBoard } = useContext(TaskContext);
  let boardName = activeBoard;
  return (
    <div className="w-full flex flex-col">
      <Header boardName={boardName} />
      <TasksContainer />
    </div>
  );
};
