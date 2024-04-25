type SignUpValidationType = {
    email: string;

    password: string;
};

type SignSettingValidationType = {
    sex: string;
    name?: string;
    birthDate: string;
    personalInfoAgree: boolean;
};

export const signUpValidation = ({ email, password }: SignUpValidationType) => {
    if (email.trim() === "" && password.trim() === "") {
        alert("정확한 값이 입력되지 않았습니다.");
        return;
    }
};

export const signSettingValidation = ({ birthDate, name, sex, personalInfoAgree }: SignSettingValidationType) => {
    const hasAllInput = sex === "" && name?.trim() === "" && birthDate === "";
    if (hasAllInput) {
        alert("모두 입력해 주세요");
        return;
    }
    if (!personalInfoAgree) {
        alert("개인정보 수집 및 이용에 동의해 주셔야 합니다!");
        return;
    }
};
