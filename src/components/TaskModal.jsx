import React, { useContext, useRef } from "react";
import { TaskContext } from "./TaskProvider";

export const TaskModal = ({ columnId, setIsModalVisible }) => {
  const { dispatch } = useContext(TaskContext);
  const titleRef = useRef();
  const descriptionRef = useRef();

  function addTask() {
    if (titleRef.current.value) {
      dispatch({
        type: "ADD_TASK",
        payload: {
          columnId: columnId,
          title: titleRef.current.value,
          description: descriptionRef.current.value,
        },
      });
    }

    setIsModalVisible(false);
  }

  function cancel() {
    setIsModalVisible(false);
  }

  return (
    <div className="w-96 bg-zinc-700 text-white absolute flex flex-col top-1/2 left-1/2 z-50 p-6 rounded-2xl translate-x-[-50%] translate-y-[-50%]">
      <label className="w-full text-start">Title</label>
      <input
        ref={titleRef}
        type="text"
        className="bg-zinc-700 mb-4 p-2 border rounded border-zinc-600"
        placeholder="e.g., Take a break"
      />

      <label className="w-full text-start">Description</label>
      <textarea
        ref={descriptionRef}
        className="bg-zinc-700 mb-4 p-2 border rounded border-zinc-600"
        placeholder="e.g., It's always good to take a short break."
      ></textarea>

      <div className="grid grid-cols-2 gap-4 w-full">
        <button
          onClick={addTask}
          className="rounded w-full bg-indigo-500 p-2 text-center"
        >
          Add New Task
        </button>
        <button
          onClick={cancel}
          className="rounded w-full bg-zinc-600 p-2 text-center"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
