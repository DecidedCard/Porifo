type SignUpValidationType = {
    birthDate: string;
    email: string;
    phoneNumber: string;
    password: string;
};

type SignSettingValidationType = {
    sex: string;
    phoneNumber: string;
    birthDate: string;
};

export const signUpValidation = ({ birthDate, email, phoneNumber, password }: SignUpValidationType) => {
    if (email.trim() === "" && password.trim() === "" && phoneNumber === "" && birthDate === "") {
        alert("정확한 값이 입력되지 않았습니다.");
        return;
    }
};

export const signSettingValidation = ({ birthDate, phoneNumber, sex }: SignSettingValidationType) => {
    const hasAllInput = sex === "" && birthDate === "" && phoneNumber === "";

    if (hasAllInput) {
        alert("모두 입력해 주세요");
        return;
    }
};
