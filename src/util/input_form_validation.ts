import { Career } from "@/types/Career";
import type { PortfolioInfo } from "@/types/PortfolioInfo";
import type { Project } from "@/types/Project";
import { Education } from "@/types/education";

// portfolio input form validation
export const portfolioInputFormValidation = (info: PortfolioInfo) => {
    if (!info.profileImage) {
        alert("프로필 사진을 넣어주시기를 바랍니다.");
        return true;
    }

    if (!info.name) {
        alert("이름을 작성해주시기를 바랍니다.");
        return true;
    }

    if (!info.englishName) {
        alert("영문이름을 작성해주시기를 바랍니다.");
        return true;
    }

    if (!info.birthday) {
        alert("생년월일을 작성해주시기를 바랍니다.");
        return true;
    }

    if (!info.tel) {
        alert("전화버호를 작성해주시기를 바랍니다.");
        return true;
    }

    if (!info.email) {
        alert("이메일을 작성해주시기를 바랍니다.");
        return true;
    }

    if (!info.job) {
        alert("직군를 선택해주시기 바랍니다.");
        return true;
    }

    if (!info.introduce) {
        alert("소개를 작성해주시기를 바랍니다.");
        return true;
    }

    const education = info.education as Education[];

    const educationCheck = education.map((educationItem) => {
        if (!educationItem.school) {
            return true;
        }

        if (!educationItem.class) {
            return true;
        }

        if (!educationItem.date) {
            return true;
        }

        return false;
    });

    if (educationCheck.find((item) => item === true)) {
        alert("학력을 작성해주시기를 바랍니다.");
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
        alert("경력을 작성해주시기를 바랍니다");
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
        alert("프로젝트를 작성해주시기 바랍니다.");
        return true;
    }

    return false;
};
