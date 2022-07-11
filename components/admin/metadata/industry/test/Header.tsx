import type { NextPage } from "next";

import Image from "next/image";

const Navigation: NextPage = () => {
  return (
    <div className="flex">
      <div>
        <Image
          src="/assets/images/admin/metadata/Deloitte-Logo-Mobile.png"
          alt="Logo"
          width={125}
          height={50}
        />
      </div>

      <div className="text-white flex flex-row">
        <div className=" text-[50px] -mt-[25px] ml-4 ">.</div>
        <div>
          <h2 className="text-[20px] ml-5 pt-3">iFED</h2>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
