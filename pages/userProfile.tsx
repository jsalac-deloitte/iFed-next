import React from "react";
import Image from "next/image";
import BasicInformation from "./basicInformation"
import Experience from "./experience"

interface Profile extends Experience {
    id: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    resourceGroup: ProfileGroup;
    contactNo: string;
    email: string;
    status: ProfileStatus;
    image: string;
}

interface Experience {
    level: string;
    skills: object[];
    industries: string[];
}

type ProfileStatus = "active" | "inactive" | "new"
type ProfileGroup = "Digital Analytics" | "FED" | "Mobile" | "SFCC" | "Sitecore" | "UI/UX"

let currentUser: Profile = {
    id: 123,
    firstName: "George",
    lastName: "Costanza",
    email: "gcostanza@deloitte.com",
    contactNo: "0917-123-4567",
    resourceGroup: "Digital Analytics",
    status: "active",
    level: "Analyst",
    image: "/img/George-costanza.jpg",
    skills: [{ skillName: "Angular", skillLevel: 1 }, { skillName: "ReactJS", skillLevel: 1 }, { skillName: "HTML5", skillLevel: 2 }],
    industries: ["Architecture", "Sports", "Real Estate"]
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
                        width="80"
                        height="80"
                    />
                </div>
                <div className="profileName text-5xl font-bold text-center text-white">{currentUser.firstName}</div>
                <div className="profileName text-2xl font-bold text-center text-white">{currentUser.lastName}</div>
            </div>
            <div className="profileInformation py-10 bg-slate-300">
                <BasicInformation
                    key={currentUser.id}
                    firstName={currentUser.firstName}
                    lastName={currentUser.lastName}
                    email={currentUser.email}
                    contactNo={currentUser.contactNo}
                />
                <Experience
                    key={currentUser.id}
                    level={currentUser.level}
                    skills={currentUser.skills}
                    industries={currentUser.industries}
                />
            </div>
        </>
    )
}



export default UserProfile;