import type { PortfolioInfo } from "@/types/PortfolioInfo";
import type { Project } from "@/types/Project";

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

    if (!info.school) {
        alert("학교를 작성해주시기를 바랍니다.");
        return true;
    }

    if (!info.job) {
        alert("직무를 선택해주시기 바랍니다.");
        return true;
    }

    if (!info.introduce) {
        alert("직무를 선택해주시기 바랍니다.");
        return true;
    }

    if (!info.project) {
        alert("project를 작성해주시기를 바랍니다.");
        return true;
    }

    return false;
};

// project input form validation
export const projectInputFormValidation = (info: Project) => {
    if (!info.name) {
        alert("프로젝트 이름을 작성해주시기를 바랍니다.");
        return true;
    }

    if (!info.date) {
        alert("프로젝트 기간을 작성해주시기를 바랍니다.");
        return true;
    }

    if (!info.introduce) {
        alert("프로젝트 소개를 작성해주시기를 바랍니다.");
        return true;
    }

    if (!info.images) {
        alert("프로젝트 사진을 추가해 주시기를 바랍니다.");
        return true;
    }

    if (!info.deployLink && !info.githubLink) {
        alert("프로젝트 배포링크 또는 Github링크를 작성해주시기를 바랍니다.");
        return true;
    }

    return false;
};
