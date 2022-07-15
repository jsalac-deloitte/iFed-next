import React from "react";
import { MdDeleteForever } from "react-icons/md";

import { Ilevel } from "../../../../Interfaces/Interface/interfaceLevel";

interface Props {
  level: Ilevel;
  completeLevel(levelNameToDelete: string): void;
}

const Level = ({ level, completeLevel }: Props) => {
  return (
    <div id="main" className="flex flex-row px-5">
      <div id="industry-content" className="px-5 w-[300px]">
        <span>{level.levelName}</span>
      </div>
      <div className="py-[10px] border-solid border-b border-lineGray flex justify-between ml-[200px]  ">
        <button
          onClick={() => {
            completeLevel(level.levelName);
          }}
          className="bg-[#DC3545] flex items-center text-white 
            text-[6px] rounded-[25px] cursor-pointer"
        >
          <span className="ml-[5px]">Deleted arnold </span>
          <MdDeleteForever className="w-[30px] h-[20px] my-[3px] mr-[3px]" />
        </button>
      </div>
    </div>
  );
};

export default Level;
