type SignUpValidationType = {
    phoneNumber: string;
    age: string;
    email: string;
    password: string;
};

type SignSettingValidationType = {
    phoneNumber: string;
    sex: string;
    birthDate: string;
};

export const signUpValidation = ({ phoneNumber, age, email, password }: SignUpValidationType) => {
    if (phoneNumber.length !== 11) {
        alert("핸드폰 번호를 정확히 입력해 주세요.");
        return;
    }
    if (Number.isNaN(age) && Number.isNaN(phoneNumber)) {
        alert("나이를 입력해주세요.");
        return;
    }

    if (email.trim() === "" && password.trim() === "" && age?.trim() === "") {
        alert("정확한 값이 입력되지 않았습니다.");
        return;
    }
};

export const signSettingValidation = ({ phoneNumber, birthDate, sex }: SignSettingValidationType) => {
    if (phoneNumber.length !== 11) {
        alert("핸드폰 번호를 정확히 입력해 주세요.");
        return;
    }

    if (birthDate?.length !== 8) {
        alert("생년월일을 정확히 입력해 주세요.");
        return;
    }

    const hasAllInput = sex == "" && phoneNumber.trim() !== "" && birthDate === "";

    if (hasAllInput) {
        alert("모두 입력해 주세요");
        return;
    }
};
