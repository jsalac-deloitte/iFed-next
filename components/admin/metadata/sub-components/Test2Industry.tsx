import React, { ChangeEvent, useState } from "react";
import { MdAddCircleOutline, MdEdit, MdDeleteForever } from "react-icons/md";
import { data } from "../../../Constant";
import { Iindustry } from "../../../../pages/admin/metadata/Interfaces";
import Industrytest2 from "../../../../components/admin/metadata/sub-components/Industrytest2";
const Test2Industry = () => {
  const [industry, setIndustry] = useState<string>("");
  const [dataList, setDataList] = useState<Iindustry[]>([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setIndustry(event.target.value);
  };

  const completeIndustry = (industryNameToDelete: string): void => {
    setDataList(
      dataList.filter((industry) => {
        return industry.industryName != industryNameToDelete;
      })
    );
  };

  const addIndustry = (): void => {
    const newIndustry = { industryName: industry };
    setDataList([...dataList, newIndustry]);
    setIndustry("");
    // console.log(dataList);
  };

  return (
    <div className="">
      <div className="md:flex md:flex-row md:items-center md:justify-center lg:ml-[80px]">
        <div className="bg-[#393939] h-[109px] mt-8 pt-4 md:w-[375px] md:h-[109px] md:rounded-l-[10px] ">
          <p className="max-w-[325px] mt-[20px] mx-auto text-[12px] italic  text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            faucibus lectus libero, sit amet rhoncus urna suscipit vitae.
          </p>
        </div>

        <div className="bg-[#BBBCBC] md:mt-8  md:w-[375px] md:h-[109px] md:rounded-r-[10px]  ">
          <p className="pt-[20px] pl-[50px] text-[20px]">
            Add new <span>{data[0].kind}</span>
          </p>
          <div className="flex justify-between px-[50px] py-[20px] md:pt-2">
            <input
              onChange={handleChange}
              type="text"
              placeholder="Enter industry name..."
              className="w-[175px] py-[8px] pl-[15px] text-[12px] rounded-[25px] "
            />
            <button
              onClick={addIndustry}
              className="bg-green-700 flex items-center text-white text-[12px] rounded-[25px] cursor-pointer"
            >
              <span className="ml-[15px] mr-[3px]">Add</span>
              <MdAddCircleOutline className="w-[20px] h-[20px] my-[5px] mr-[15px]" />
            </button>
          </div>
        </div>
      </div>

      <div className="">
        {dataList.map((industry: Iindustry, key: number) => {
          return (
            <Industrytest2
              key={key}
              industry={industry}
              completeIndustry={completeIndustry}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Test2Industry;
