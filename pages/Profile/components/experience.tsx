import React, { FunctionComponent } from "react";
import Skill from "./skills"
import { SkillObject } from "../ReadUser";
import Industry from "./industries"
import Image from "next/image"

interface Props {
    key: number;
    level: string;
    skills: SkillObject[];
    industries: string[];
}

const Experience: FunctionComponent<Props> = (props) => {
    return (
        <>
            <div className="experienceLabel bg-black text-xl font-bold text-center text-white py-2 mx-4 md:mx-20 lg:mx-40 max-w-3xl rounded-lg mb-4">
                <div className="label text relative">
                    Experience
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
            <div className="basicInfo bg-white text-center text-black p-2 mx-4 md:mx-20 lg:mx-40 max-w-3xl rounded-lg mb-4">
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