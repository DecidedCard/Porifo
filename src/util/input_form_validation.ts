import { Career } from "@/types/Career";
import type { PortfolioInfo } from "@/types/PortfolioInfo";
import type { Project } from "@/types/Project";

// portfolio input form validation
export const portfolioInputFormValidation = (info: PortfolioInfo) => {
    if (!info.profileImage) {
        return true;
    }

    if (!info.name) {
        return true;
    }

    if (!info.englishName) {
        return true;
    }

    if (!info.birthday) {
        return true;
    }

    if (!info.email) {
        return true;
    }

    if (!info.job) {
        return true;
    }

    if (!info.introduce) {
        return true;
    }

    const career = info.career as Career[];

    const careerCheck = career.map((careerItem) => {
        if (!careerItem.company) {
            return true;
        }

        if (!careerItem.department) {
            return true;
        }

        if (!careerItem.position) {
            return true;
        }

        if (!careerItem.date) {
            return true;
        }

        if (!careerItem.comment) {
            return true;
        }

        return false;
    });

    if (careerCheck.find((item) => item === true)) {
        return true;
    }

    const project = info.project as Project[];

    const projectCheck = project.map((projectItem) => {
        if (!projectItem.name) {
            return true;
        }

        if (!projectItem.images) {
            return true;
        }

        if (!projectItem.introduce) {
            return true;
        }

        if (!projectItem.date) {
            return true;
        }

        if (!projectItem.githubLink) {
            return true;
        }
    });

    if (projectCheck.find((item) => item === true)) {
        return true;
    }

    return false;
};
