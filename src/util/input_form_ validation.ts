import { PortfolioInfo } from "@/types/PortfolioInfo";

export const inputFormValidation = (info: PortfolioInfo) => {
    if (!info.profileImage) {
        alert("프로필 사진을 넣어주시기 바랍니다.");
        return true;
    }

    if (!info.name) {
        alert("이름을 작성해주시기 바랍니다.");
        return true;
    }

    if (!info.birthday) {
        alert("생년월일을 작성해주시기 바랍니다.");
        return true;
    }

    if (!info.tel) {
        alert("전화버호를 작성해주시기 바랍니다.");
        return true;
    }

    // if (!info.) {
    //     alert("이메일을 입력해주시기 바랍니다.");
    //     return true;
    // }

    if (!info.school) {
        alert("학교를 작성해주시기 바랍니다.");
        return true;
    }

    if (!info.job) {
        alert("직무를 선택해주시기 바랍니다.");
        return true;
    }

    if (!info.project) {
        alert("project를 작성해주시기 바랍니다.");
        return true;
    }

    return false;
};
