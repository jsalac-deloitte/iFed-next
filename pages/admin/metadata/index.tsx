import React, { useState, ChangeEvent } from "react";
import { Iindustry } from "../../../Interfaces/Interface/interfaceIndustry";

import Test2Industry from "../../../components/admin/metadata/subcomponents/Test2Industry";
import Test2Levels from "../../../components/admin/metadata/subcomponents/Test2Levels";
import Test2Skilss from "../../../components/admin/metadata/subcomponents/Test2Skills";
import { NextPage } from "next";
import Navbar from "../../../components/shared/Navbar";

const ProfessionalLevel: NextPage = () => {
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
      <Navbar />
      <div className="bg-mobile-meta md:bg-tablet-skill md:h-[148px] lg:bg-desktop-skill lg:h-[277px]  lg:bg-cover  bg-blue-50  h-[70px]"></div>
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
      </main>
    </div>
  );
};
export default ProfessionalLevel;
