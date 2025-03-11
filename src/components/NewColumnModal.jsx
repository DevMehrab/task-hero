import React, { useRef, useContext } from "react";
import { TaskContext } from "./TaskProvider";

export const NewColumnModal = ({ setIsModalHidden }) => {
    const { appData, dispatch, activeBoard } = useContext(TaskContext);
    const inputRef = useRef();

    function handleClick() {
        setIsModalHidden(true);
        if (inputRef.current.value !== '') {
            appData.boards.forEach((board) => {
                if (board.name === activeBoard) {
                    dispatch({
                        type: "ADD_COLUMN",
                        payload: {
                            boardId: board.id,
                            columnName: inputRef.current.value,
                        },
                    });
                }
            });
        }
    }

    return (
        <div className="z-auto">
            <input
                ref={inputRef}
                type="text"
                placeholder="column name"
                className="w-full border border-zinc-500 rounded p-2"
            />
            <p
                onClick={handleClick}
                className="w-full bg-zinc-600 text-center p-2 rounded my-4 text-zinc-400 cursor-pointer"
            >
                +New Column
            </p>
        </div>
    );
};
