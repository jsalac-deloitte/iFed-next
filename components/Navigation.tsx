import type { NextPage } from "next";
import { MdOutlineMenu } from "react-icons/md";
import Image from "next/image";

const Logo = "/assets/images/shared/Deloitte-Logo-Mobile.png";
const Navigation: NextPage = () => {
  return (
    <div className="w-screen h-[70px] bg-black flex justify-between">
      <div>
        <Image src={Logo} alt="Logo" width={125} height={50} />
      </div>
      <div>
        <MdOutlineMenu className="w-[48px] h-[48px] invert mr-[20px] mt-[11px]" />
      </div>
    </div>
  );
};

export default Navigation;
