import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import { MdAddCircleOutline, MdEdit, MdDeleteForever } from "react-icons/md";

const infoSkill: NextPage = () => {
  return (
    <div className="bg-[#E8EAE9] md:h-screen h-full">
      <div>
        <Navigation />
      </div>
      <div className="bg-green-500 h-[72px]"></div>
      <main>
        <div className="lg:flex">
          <div className="flex  justify-center">
            <div className="flex flex-col md:flex md:flex-row  md:py-5 md:space-x-1 py-5  space-y-1 lg:flex lg:flex-col">
              <button
                className="h-[50px] w-[250px] bg-[#BBBCBC] text-[24px] hover:bg-[#393939] hover:text-white
             rounded-t-[10px] md:rounded-l-[10px] md:rounded-r-none md:mt-1  md:w-[125px] md:h-[50px] pt-2 
             lg:w-[250px] lg:rounded-l-[10px]  lg:rounded-r-[10px] lg:ml-1"
              >
                Industries
              </button>
              <button
                className="h-[50px] w-[250px] bg-[#BBBCBC] text-[24px] hover:bg-[#393939] hover:text-white  md:w-[125px] md:h-[50px] 
             lg:w-[250px] lg:rounded-l-[10px]  lg:rounded-r-[10px] "
              >
                Levels
              </button>
              <button
                className="h-[50px] w-[250px] bg-[#BBBCBC] text-[24px] hover:bg-[#393939] hover:text-white   md:w-[125px] md:h-[50px]
                lg:w-[250px] lg:rounded-l-[10px]  lg:rounded-r-[10px]
            rounded-b-[10px]  md:rounded-r-[10px] md:rounded-l-none "
              >
                Skills
              </button>
            </div>
          </div>
          <div>
            <div className="md:flex md:flex-row md:items-center md:justify-center">
              <div className="bg-[#393939] h-[109px] mt-8 pt-4 md:w-[375px] md:h-[109px] md:rounded-l-[10px] ">
                <p className="max-w-[325px] mt-[20px] mx-auto text-[12px] italic  text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas faucibus lectus libero, sit amet rhoncus urna
                  suscipit vitae.
                </p>
              </div>

              <div className="bg-[#BBBCBC] md:mt-8  md:w-[375px] md:h-[109px] md:rounded-r-[10px]  ">
                <p className="pt-[20px] pl-[50px] text-[20px]">Add new level</p>
                <div className="flex justify-between px-[50px] py-[20px] md:pt-2">
                  <input
                    type="text"
                    placeholder="Enter level name..."
                    className="w-[175px] py-[8px] pl-[15px] text-[12px] rounded-[25px] "
                  />
                  <button className="bg-green-700 flex items-center text-white text-[12px] rounded-[25px] cursor-pointer">
                    <span className="ml-[15px] mr-[3px]">Add</span>
                    <MdAddCircleOutline className="w-[20px] h-[20px] my-[5px] mr-[15px]" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-[20px] mx-auto px-[15px] py-[20px] w-[280px] bg-white  rounded-[10px] md:w-[560px] md:h-[344px] md:mt-[50px]">
              <p className="pl-[10px] pb-[25px] bold text-[16px]">List</p>
              <div className="py-[10px] border-solid border-b border-gray-500 flex justify-between">
                <span className="pl-[10px] text-[12px] text-[#53565A]">
                  Analyst
                </span>
                <div className="mr-[10px] w-[75px] flex justify-between">
                  <button className="bg-[#0D6EFD] flex items-center text-white text-[6px] md:rounded-[25px] rounded-l-[25px]  cursor-pointer md:-[64px] md:h-[20px] md:text-[12px] md:-ml-8">
                    <span className="ml-[7px] mr-[3px] ">Edit</span>
                    <MdEdit className="w-[10px] h-[10px] my-[3px] mr-[5px]" />
                  </button>
                  <button className="bg-[#DC3545] flex items-center text-white text-[6px] md:rounded-[25px] rounded-r-[25px]  cursor-pointer md:h-[20px] md:text-[12px]">
                    <span className="ml-[5px]">Delete</span>
                    <MdDeleteForever className="w-[10px] h-[10px] my-[3px] mr-[3px]" />
                  </button>
                </div>
              </div>
              <div className="py-[10px] border-solid border-b border-gray-500 flex justify-between">
                <span className="pl-[10px] text-[12px] text-[#53565A]">
                  Consultant
                </span>
                <div className="mr-[10px] w-[75px] flex justify-between">
                  <button className="bg-[#0D6EFD] flex items-center text-white text-[6px] md:rounded-[25px] rounded-l-[25px]  cursor-pointer md:h-[20px] md:text-[12px] md:-ml-8">
                    <span className="ml-[7px] mr-[3px]">Edit</span>
                    <MdEdit className="w-[10px] h-[10px] my-[3px] mr-[5px]" />
                  </button>
                  <button className="bg-[#DC3545] flex items-center text-white text-[6px] md:rounded-[25px] rounded-r-[25px] cursor-pointer md:h-[20px] md:text-[12px]">
                    <span className="ml-[5px]">Delete</span>
                    <MdDeleteForever className="w-[10px] h-[10px] my-[3px] mr-[3px]" />
                  </button>
                </div>
              </div>
              <div className="py-[10px] border-solid border-b border-gray-500 flex justify-between">
                <span className="pl-[10px] text-[12px] text-[#53565A]">
                  Senior Consultant
                </span>
                <div className="mr-[10px] w-[75px] flex justify-between">
                  <button className="bg-[#0D6EFD] flex items-center text-white text-[6px] md:rounded-[25px] rounded-l-[25px] cursor-pointer md:h-[20px] md:text-[12px] md:-ml-8">
                    <span className="ml-[7px]  mr-[3px]">Edit</span>
                    <MdEdit className="w-[10px] h-[10px] my-[3px] mr-[5px]" />
                  </button>
                  <button className="bg-[#DC3545] flex items-center text-white text-[6px] md:rounded-[25px]  rounded-r-[25px] cursor-pointer md:h-[20px] md:text-[12px] ">
                    <span className="ml-[5px]">Delete</span>
                    <MdDeleteForever className="w-[10px] h-[10px] my-[3px] mr-[3px]" />
                  </button>
                </div>
              </div>
              <div className="py-[10px] border-solid border-b border-lineGray flex justify-between">
                <span className="pl-[10px] text-[12px] text-[#53565A]">
                  Manager
                </span>
                <div className="mr-[10px] w-[75px] flex justify-between">
                  <button className="bg-[#0D6EFD] flex items-center text-white text-[6px] md:rounded-[25px] rounded-l-[25px] cursor-pointer md:h-[20px] md:text-[12px] md:-ml-8">
                    <span className="ml-[7px] mr-[3px]">Edit</span>
                    <MdEdit className="w-[10px] h-[10px] my-[3px] mr-[5px]" />
                  </button>
                  <button className="bg-[#DC3545] flex items-center text-white text-[6px] md:rounded-[25px]  rounded-r-[25px]  cursor-pointer md:h-[20px] md:text-[12px]">
                    <span className="ml-[5px]">Delete</span>
                    <MdDeleteForever className="w-[10px] h-[10px] my-[3px] mr-[3px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default infoSkill;
