import React, { FunctionComponent } from "react";

interface Props {
    key: number;
    level: string;
    skills: object[];
    industries: string[];
}

const Experience: FunctionComponent<Props>= (props) => {
    return (
        <>
            <div className="experienceLabel bg-black text-xl font-bold text-center text-white py-2 mx-4 rounded-lg mb-4">
                Experience
            </div>
            <div className="basicInfo bg-white text-center text-black py-2 mx-4 rounded-lg mb-4">
                <div className="explabel text-base font-bold">Level</div>
                <div className="expLevel text-sm">{props.level}</div>
                <div className="explabel text-base font-bold">Skills</div>
                <div className="expSkill text-sm"></div>
            </div>
            
        </>

    )
}

export default Experience;