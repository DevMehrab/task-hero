import React, { useContext, useState } from "react";
import { Task } from "./Task";
import { TaskModal } from "./TaskModal";
import { TaskContext } from "./TaskProvider";

export const Column = ({ title = "My Board 1", columnId }) => {
  const { appData } = useContext(TaskContext);

  const [isModalVisible, setIsModalVisible] = useState(false);
  function handleClick() {
    setIsModalVisible(true);
  }
  let list = appData.tasks.map((task) => {
    if (task.columnId === columnId) {
      return <Task task={task} />;
    }
  });
  return (
    <div className="w-64 mx-2">
      <div className="flex w-full justify-between mb-4">
        <h4 className="outline-0 text-zinc-400">{title}</h4>
        <p
          onClick={handleClick}
          className="px-2 text-zinc-400 hover:text-indigo-500 mx-2 rounded cursor-pointer"
        >
          +New Task
        </p>
      </div>
      <ul>{list}</ul>
      {isModalVisible && (
        <TaskModal columnId={columnId} setIsModalVisible={setIsModalVisible} />
      )}
    </div>
  );
};
