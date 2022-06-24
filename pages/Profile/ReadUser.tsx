import React from "react";
import Image from "next/image";
import BasicInformation from "./components/basicInformation";
import Experience from "./components/experience";

export type SkillObject = {
    skillName: string;
    skillLevel: SkillLevel
}
type ProfileStatus = "active" | "inactive" | "new"
type ProfileGroup = "Digital Analytics" | "FED" | "Mobile" | "SFCC" | "Sitecore" | "UI/UX"
type SkillLevel = "Beginner" | "Intermediate" | "Expert"

interface Profile {
    id: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    resourceGroup: ProfileGroup;
    contactNo: string;
    email: string;
    status: ProfileStatus;
    image: string;
    level: string;
    skills: SkillObject[];
    industries: string[];
}


let currentUser: Profile = {
    id: 123,
    firstName: "George",
    lastName: "Costanza",
    email: "gcostanza@deloitte.com",
    contactNo: "0917-123-4567",
    resourceGroup: "Digital Analytics",
    status: "active",
    image: "/img/George-costanza.jpg",
    //to be fetched
    level: "Analyst",
    skills: [{ skillName: "Angular", skillLevel: "Beginner" }, { skillName: "ReactJS", skillLevel: "Beginner" }, { skillName: "HTML5", skillLevel: "Intermediate" }],
    industries: ["Architecture", "Sports", "Real Estate", "Marine Biology"]
}

const UserProfile = () => {
    return (
        <>
            <div className="profileBanner py-10 bg-black bg-no-repeat bg-cover bg-blend-screen" style={{
                backgroundImage: "url(/img/profile-bg.png)",
            }}>
                <div className="profileImage text-center">
                    <Image
                        className="rounded-full"
                        src={currentUser.image}
                        alt={currentUser.firstName + currentUser.lastName + ".png"}
                        width="100"
                        height="100"
                    />
                </div>
                <div className="profileName text-5xl font-bold text-center text-white">{currentUser.firstName}</div>
                <div className="profileName text-2xl font-bold text-center text-white">{currentUser.lastName}</div>
            </div>
            <div className="profileInformation py-5 bg-slate-300">
                <BasicInformation
                    key={currentUser.id+10}
                    firstName={currentUser.firstName}
                    lastName={currentUser.lastName}
                    email={currentUser.email}
                    contactNo={currentUser.contactNo}
                />
                <Experience
                    key={currentUser.id-10}
                    level={currentUser.level}
                    skills={currentUser.skills}
                    industries={currentUser.industries}
                />
            </div>
        </>
    )
}



export default UserProfile;