import React, { FunctionComponent } from "react";
import Image from "next/image";

interface Props {
    key: number;
    firstName: string;
    lastName: string;
    email: string;
    contactNo: string
}

const BasicInformation: FunctionComponent<Props> = (props) => {
    return (
        <>
            <div className="basicInfoLabel bg-black text-xl font-bold text-center text-white py-2 mx-4 rounded-lg mb-4">
                <div className="label text relative">
                    Basic Information
                    <div className="editButton active:bg-gray-300 rounded-full w-1/6 invert absolute right-0 top-0">
                        <Image
                            src={"/img/pencil.png"}
                            alt={"edit.png"}
                            width="15"
                            height="15"
                        />
                    </div>
                </div>
            </div>
            <div className="basicInfo flex flex-col bg-white text-center text-black p-2 mx-4 rounded-lg mb-4">
                <div className="basicInfoText grid grid-cols-2">
                    <div className="flex-auto">
                        <div className="bscInflabel text-base font-bold">First Name</div>
                        <div className="bscInfFirstName text-sm">{props.firstName}</div>
                    </div>
                    <div className="flex-auto">
                        <div className="bscInflabel text-base font-bold">Last Name</div>
                        <div className="bscInfFirstName text-sm">{props.lastName}</div>
                    </div>
                    <div className="flex-auto">
                        <div className="bscInflabel text-base font-bold">Email Adress</div>
                        <div className="bscInfFirstName text-sm">{props.email}</div>
                    </div>
                    <div className="flex-auto">
                        <div className="bscInflabel text-base font-bold">Contact Number</div>
                        <div className="bscInfFirstName text-sm">{props.contactNo}</div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default BasicInformation;