type SignUpValidationType = {
    birthDate: string;
    email: string;
    name: string;
    password: string;
    personalInfoAgree: boolean;
};

type SignSettingValidationType = {
    sex: string;

    birthDate: string;
    personalInfoAgree: boolean;
};

export const signUpValidation = ({ birthDate, email, name, password, personalInfoAgree }: SignUpValidationType) => {
    if (email.trim() === "" && password.trim() === "" && birthDate === "" && name.trim() === "") {
        alert("정확한 값이 입력되지 않았습니다.");
        return;
    }

    if (!personalInfoAgree) {
        alert("개인정보 수집 및 이용에 동의해 주셔야 합니다!");
        return;
    }
};

export const signSettingValidation = ({
    birthDate,

    sex,
    personalInfoAgree,
}: SignSettingValidationType) => {
    const hasAllInput = sex === "" && birthDate === "";
    if (hasAllInput) {
        alert("모두 입력해 주세요");
        return;
    }
    if (!personalInfoAgree) {
        alert("개인정보 수집 및 이용에 동의해 주셔야 합니다!");
        return;
    }
};
