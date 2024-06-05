import React from "react";
import { dataGet , showFormatedDates} from "./utils/data";
import ButtonTodoApp from "./ButtonTodoApp";

const ReactContactBodyName = ({ title, body, createdArt, id, onDelete }) => {
    return (
        <div className="flex flex-col mt-1 items-center">
            <div className="max-w-lg flex-grow p-8">
                <details className="open:bg-white dark:open:bg-gray-400 open:ring-1 open:ring-black/5 dark:open:ring-whote/10 open:shadow-lg p-6 rounded-lg">
                    <summary className="text-sm leading-6 text-slate-900 font-semibold select-none">
                        {title}
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        <p className="text-gray-900">{body}</p>
                    </div>
                    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        <p className="text-gray-900">{showFormatedDates(createdArt)}</p>
                    </div>
                    <ButtonTodoApp
                        id={id}
                        onDelete={onDelete}
                        className="self-start"
                    />  
                </details>
            </div>
        </div>
    );
};

export default ReactContactBodyName;
