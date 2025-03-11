import React, { useContext, useRef, useState } from "react";
import { TaskContext } from "./TaskProvider";

export const Navbar = () => {
    const [isInputVisible, setIsInputVisible] = useState(false);
    const { appData, dispatch, setActiveBoard } = useContext(TaskContext);
    const inputRef = useRef();
    function handleClick() {
        setIsInputVisible(!isInputVisible);
        if (isInputVisible) {
            if (inputRef.current.value) {
                dispatch({
                    type: "ADD_BOARD",
                    payload: {
                        boardName: inputRef.current.value,
                    },
                });
            setActiveBoard(inputRef.current.value)
            }

        }
    }
    console.log(appData);

    const list = appData.boards.map((board) => {
        return (
            <li
                key={board.id}
                onClick={(e) => {
                    setActiveBoard(e.target.innerHTML);
                }}
                className="my-4 text-zinc-400 hover:text-indigo-500 focus:text-indigo-500"
            >
                {board.name}
            </li>
        );
    });
    return (
        <div className="bg-zinc-800 border p-6 border-e-zinc-700 w-64 h-screen">
            <div className="logo">
                <h2 className="text-white mb-8 text-xl font-semibold">Task Hero</h2>
                <div className="boars-list text-sm">
                    <p className="text-zinc-500">All boards ({appData.boards.length})</p>
                    <ul>{list}</ul>
                    {isInputVisible && (
                        <input
                            ref={inputRef}
                            className="border border-zinc-500 text-zinc-400 outline-0 w-full p-2 rounded"
                            placeholder="boardName"
                        />
                    )}
                    <h4
                        onClick={handleClick}
                        className="cursor-pointer text-indigo-500 my-4"
                    >
                        {!isInputVisible ? <p>+Create New Board</p> : <p>Add Board</p>}
                    </h4>
                </div>
            </div>
        </div>
    );
};
