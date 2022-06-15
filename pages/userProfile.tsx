interface Profile {
    id: number;
    firstName: string;
    middleInitial?: string;
    lastName: string;
    position: string;
    resourceGroup: ProfileGroup;
    professionalLevel: string;
    status: ProfileStatus
}

type ProfileStatus = "active" | "inactive" | "new"
type ProfileGroup = "Digital Analytics" | "FED" | "Mobile" | "SFCC" | "Sitecore" | "UI/UX"


function clone<T>(source: T): T {
    return Object.apply(source);
}



export {clone};