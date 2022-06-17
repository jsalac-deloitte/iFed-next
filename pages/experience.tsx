import React, { FunctionComponent } from "react";
import Skill from "./skills"
import { SkillObject } from "./userProfile";
import Industry from "./industries"

interface Props {
    key: number;
    level: string;
    skills: SkillObject[];
    industries: string[];
}

const Experience: FunctionComponent<Props> = (props) => {
    return (
        <>
            <div className="experienceLabel bg-black text-xl font-bold text-center text-white py-2 mx-4 rounded-lg mb-4">
                Experience
            </div>
            <div className="basicInfo bg-white text-center text-black p-2 mx-4 rounded-lg mb-4">
                <div className="explabel text-base font-bold">Level</div>
                <div className="expLevel text-sm mb-3">{props.level}</div>
                <div className="explabel text-base font-bold">Skills</div>
                <div className="flex flex-wrap mb-3">
                    {props.skills.map((skill, x) => (
                        <Skill
                            key={x}
                            value={skill}
                        />
                    ))}

                </div>
                <div className="explabel text-base font-bold">Industries</div>
                <div className="flex flex-wrap mb-3">
                    {props.industries.map((industry, x) => (
                        <Industry
                            key={x}
                            value={industry}
                        />
                    ))}

                </div>
            </div>

        </>

    )
}

export default Experience;