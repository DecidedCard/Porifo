type SignUpValidationType = {
    phoneNumber: string;
    birthDate: string;
    email: string;
    password: string;
};

type SignSettingValidationType = {
    phoneNumber: string;
    sex: string;
    birthDate: string;
};

export const signUpValidation = ({ phoneNumber, birthDate, email, password }: SignUpValidationType) => {
    if (phoneNumber.length !== 11) {
        alert("핸드폰 번호를 정확히 입력해 주세요.");
        return;
    }

    if (email.trim() === "" && password.trim() === "" && birthDate === "") {
        alert("정확한 값이 입력되지 않았습니다.");
        return;
    }
};

export const signSettingValidation = ({ phoneNumber, birthDate, sex }: SignSettingValidationType) => {
    if (phoneNumber.length !== 11) {
        alert("핸드폰 번호를 정확히 입력해 주세요.");
        return;
    }

    const hasAllInput = sex == "" && phoneNumber.trim() !== "" && birthDate === "";

    if (hasAllInput) {
        alert("모두 입력해 주세요");
        return;
    }
};
