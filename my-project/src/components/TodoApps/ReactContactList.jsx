import React from "react";
import ReactContactBodyName from "./ReactContactBodyName";

const ReactContactList = ({ contact, onDelete }) => {
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {contact.map((datas) => (
                <div
                    key={datas.id}
                    className="rounded  w-full border-2 p-4 md:w-[400] lg:w-[400] xl:w-[400]"
                >
                    <ReactContactBodyName   
                        id={datas.id}
                        title={datas.title}
                        body={datas.body}
                        archive={datas.archive}
                        createdArt={datas.createdArt}
                        onDelete={onDelete}
                    />
                </div>
            ))}
        </div>
    );
};

export default ReactContactList;
