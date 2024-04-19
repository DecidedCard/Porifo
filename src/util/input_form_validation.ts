import type { PortfolioInfo } from "@/types/PortfolioInfo";
import type { Project } from "@/types/Project";

// portfolio input form validation
export const portfolioInputFormValidation = (info: PortfolioInfo) => {
    if (!info.profileImage) {
        console.log("profileImage");
        return true;
    }

    if (!info.name) {
        console.log("name");

        return true;
    }

    if (!info.email) {
        console.log("email");

        return true;
    } else {
        const regex = /[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*/;

        if (!regex.test(info.email)) {
            return true;
        }
    }

    if (info.job === "default") {
        console.log("job");

        return true;
    }

    if (!info.oneLineIntroduce) {
        return true;
    }

    if (!info.introduce) {
        return true;
    }

    const skillTag = info.skillTag as string[];

    if (skillTag.length === 0) {
        return true;
    }

    const project = info.project as Project[];

    const projectCheck = project.map((projectItem) => {
        if (!projectItem.name) {
            return true;
        }

        if (!projectItem.introduce) {
            return true;
        }

        if (projectItem.date.length !== 23) {
            return true;
        }
    });

    if (projectCheck.find((item) => item === true)) {
        return true;
    }

    return false;
};
