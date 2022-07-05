import Navigation from "../../../components/Navigation";
import React, { useState, ChangeEvent } from "react";
import { Iindustry } from "./Interfaces";
import Industrytest2 from "../../../components/admin/metadata/sub-components/Industrytest2";
import { MdAddCircleOutline } from "react-icons/md";

import Test2Industry from "../../../components/admin/metadata/sub-components/Test2Industry";
import Test2Levels from "../../../components/admin/metadata/sub-components/Test2Levels";
import Test2Skilss from "../../../components/admin/metadata/sub-components/Test2Skills";

const ProfessionalLevel: React.FC = () => {
  const [industry, setIndustry] = useState<string>("");
  const [dataList, setDataList] = useState<Iindustry[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setIndustry(event.target.value);
  };

  const addIndustry = (): void => {
    const newIndustry = { industryName: industry };
    setDataList([...dataList, newIndustry]);
    setIndustry("");
    // console.log(dataList);
  };
  const completeIndustry = (industryNameToDelete: string): void => {
    setDataList(
      dataList.filter((industry) => {
        return industry.industryName != industryNameToDelete;
      })
    );
  };
  const [displayIndustry, setDisplayIndustry] = useState(true);
  const [displayLevel, setDisplayLevel] = useState(false);
  const [displaySkills, setDisplaySkills] = useState(false);

  const industrySection = async () => {
    if (displayIndustry === false) {
      setDisplayIndustry(true);
      setDisplayLevel(false);
      setDisplaySkills(false);
    } else {
      setDisplayIndustry(false);
      setDisplayLevel(false);
      setDisplaySkills(false);
    }
  };

  const levelSection = async () => {
    if (displayLevel === false) {
      setDisplayIndustry(false);
      setDisplayLevel(true);
      setDisplaySkills(false);
    } else {
      setDisplayIndustry(false);
      setDisplayLevel(false);
      setDisplaySkills(false);
    }
  };

  const skillsSection = async () => {
    if (displaySkills === false) {
      setDisplayIndustry(false);
      setDisplayLevel(false);
      setDisplaySkills(true);
    } else {
      setDisplayIndustry(false);
      setDisplayLevel(false);
      setDisplaySkills(false);
    }
  };

  return (
    <div>
      <Navigation />
      <main>
        <div className="lg:flex">
          <div className="flex  justify-center">
            <div className="flex flex-col md:flex md:flex-row  md:py-5 md:space-x-1 py-5  space-y-1 lg:flex lg:flex-col lg:pl-[70px] lg:space-y-6 lg:mt-2">
              <button
                onClick={industrySection}
                disabled={displayIndustry}
                className="h-[50px] w-[250px] bg-[#BBBCBC] text-[24px] hover:bg-[#393939] hover:text-white
             rounded-t-[10px] md:rounded-l-[10px] md:rounded-r-none md:mt-1  md:w-[125px] md:h-[50px] pt-2 
             lg:w-[250px] lg:rounded-l-[10px]  lg:rounded-r-[10px] lg:ml-1"
              >
                Industries
              </button>
              <button
                onClick={levelSection}
                disabled={displayLevel}
                className="h-[50px] w-[250px] bg-[#BBBCBC] text-[24px] hover:bg-[#393939] hover:text-white  md:w-[125px] md:h-[50px] 
             lg:w-[250px] lg:rounded-l-[10px]  lg:rounded-r-[10px] "
              >
                Levels
              </button>
              <button
                onClick={skillsSection}
                disabled={displaySkills}
                className="h-[50px] w-[250px] bg-[#BBBCBC] text-[24px] hover:bg-[#393939] hover:text-white   md:w-[125px] md:h-[50px]
                lg:w-[250px] lg:rounded-l-[10px]  lg:rounded-r-[10px]
            rounded-b-[10px]  md:rounded-r-[10px] md:rounded-l-none "
              >
                Skills
              </button>
            </div>
          </div>
        </div>

        <div className={displayIndustry === true ? "block" : "hidden"}>
          <Test2Industry />
        </div>
        <div className={displayLevel === true ? "block" : "hidden"}>
          <Test2Levels />
        </div>
        <div className={displaySkills === true ? "block" : "hidden"}>
          <Test2Skilss />
        </div>
        <div className="bg-mid mt-[20px]">
          <p className="pt-[20px] pl-[50px] text-[16px]">Add Industry</p>
          <div>
            <div className="flex justify-between px-[50px] py-[20px]">
              <input
                type="text"
                placeholder="Enter industry"
                value={industry}
                onChange={handleChange}
                name="fullname"
                className="w-[175px] py-[8px] pl-[15px] text-[12px] rounded-[25px]"
              ></input>
              <button
                onClick={addIndustry}
                className="bg-deloitteGreen flex items-center text-white text-[12px] rounded-[25px] cursor-pointer"
              >
                <span className="ml-[15px] mr-[3px]">Add</span>{" "}
                <MdAddCircleOutline className="w-[20px] h-[20px] my-[5px] mr-[15px]" />
              </button>
            </div>
          </div>
        </div>

        <div>
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
      </main>
    </div>
  );
};
export default ProfessionalLevel;
