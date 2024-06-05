import React from "react";

const ButtonTodoApp = ({ id, onDelete }) => {
    return (
        <div className="mt-4 w-auto rounded p-4 bg-slate-400 text-center hover:bg-slate-600">
            <button className="" onClick={() => onDelete(id)}>
                Hapus
            </button>
        </div>
    );
};

export default ButtonTodoApp;
