import React, { createContext, useReducer, useState } from "react";

export const TaskContext = createContext();

const initialState = {
  boards: [{ id: 1, name: "Board One" }],
  columns: [{ boardId: 1, columnId: 1, name: "Todo" }],
  tasks: [
    {
      columnId: 1,
      taskId: 1,
      title: "Go for a morning walk",
      description: "Step outside for a refreshing morning walk to start the day with energy. Breathe in the fresh air, enjoy the quiet surroundings, and get your body moving.",
      date: "10:13:44 PM",
    },
  ],
  subtasks: [{ id: 1, title: "Subtask 1", isDone: false }],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    // 🟢 Add a New Task
    case "ADD_BOARD": {
      const { boardName } = action.payload;
      const newBoardId = Date.now();
      return {
        ...state,
        boards: [...state.boards, { id: newBoardId, name: boardName }],
      };
    }
    case "ADD_COLUMN": {
      const { boardId, columnName } = action.payload;

      const newColumnId = Date.now();
      return {
        ...state,
        columns: [
          ...state.columns,
          { boardId: boardId, columnId: newColumnId, name: columnName },
        ],
      };
    }
    case "ADD_TASK": {
      const { columnId, title, description } = action.payload;
      const newTaskId = Date.now(); // Unique ID
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            columnId: columnId,
            taskId: newTaskId,
            title,
            description,
            date: new Date().toLocaleTimeString(),
          },
        ],
      };
    }
    case "ADD_SUBTASK": {
      const { taskId, title } = action.payload;
      const newSubTaskId = Date.now(); // Unique ID
      return {
        ...state,
        subtasks: [
          ...state.tasks,
          { subTaskId: newSubTaskId, title, taskId: taskId },
        ],
      };
    }

    // 🟢 Delete Task
    case "DELETE_TASK": {
      const { taskId, columnId } = action.payload;
      const newTasks = { ...state.tasks };
      delete newTasks[taskId];

      return {
        ...state,
        tasks: newTasks,
        columns: {
          ...state.columns,
          [columnId]: {
            ...state.columns[columnId],
            taskIds: state.columns[columnId].taskIds.filter(
              (id) => id !== taskId,
            ),
          },
        },
      };
    }

    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [activeBoard, setActiveBoard] = useState("Board One");
  const [appData, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider
      value={{ appData, dispatch, activeBoard, setActiveBoard }}
    >
      {children}
    </TaskContext.Provider>
  );
};
