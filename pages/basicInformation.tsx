import React, { FunctionComponent } from "react";
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
                Basic Information
            </div>
            <div className="basicInfo flex flex-wrap grid grid-cols-2 bg-white text-center text-black py-2 mx-4 rounded-lg mb-4">
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
        </>

    )
}

export default BasicInformation;