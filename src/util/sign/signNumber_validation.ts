type SignUpValidationType = {
    birthDate: string;
    email: string;
    password: string;
};

type SignSettingValidationType = {
    sex: string;
    birthDate: string;
};

export const signUpValidation = ({ birthDate, email, password }: SignUpValidationType) => {
    if (email.trim() === "" && password.trim() === "" && birthDate === "") {
        alert("정확한 값이 입력되지 않았습니다.");
        return;
    }
};

export const signSettingValidation = ({ birthDate, sex }: SignSettingValidationType) => {
    const hasAllInput = sex == "" && birthDate === "";

    if (hasAllInput) {
        alert("모두 입력해 주세요");
        return;
    }
};
