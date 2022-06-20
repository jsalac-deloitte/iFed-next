import type { NextPage } from "next";
import { MdOutlineMenu } from "react-icons/md";
import Header from "../components/Header";

const Navigation: NextPage = () => {
  return (
    <div className="w-screen h-[70px] bg-black flex justify-between">
      <div className="pt-3 ml-6">
        <Header />
      </div>
      <div>
        <MdOutlineMenu className="w-[48px] h-[48px] invert mr-[20px] mt-[11px]" />
      </div>
    </div>
  );
};

export default Navigation;
