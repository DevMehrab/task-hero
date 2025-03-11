import React, { useContext } from "react";
import { Column } from "./Column";
import { NewColumn } from "./NewColumn";
import { TaskContext } from "./TaskProvider";

export const TasksContainer = () => {
  const { appData, activeBoard } = useContext(TaskContext);

  let list = appData.boards.map((board) => {
    if (board.name === activeBoard) {
      return appData.columns.map((column) => {
        if (board.id === column.boardId) {
          return (
            <Column
              key={column.columnId}
              title={column.name}
              columnId={column.columnId}
            />
          );
        }
      });
    }
  });

  return (
    <div className="flex h-full p-6">
      {list}
      <NewColumn />
    </div>
  );
};
