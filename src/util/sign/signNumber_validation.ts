export const signUpValidation = ({
    phoneNumber,
    age,
    email,
    password,
}: {
    phoneNumber: string;
    age: string;
    email: string;
    password: string;
}) => {
    if (phoneNumber.length !== 11) {
        alert("핸드폰 번호를 정확히 입력해 주세요");
        return;
    }
    if (Number.isNaN(age) && Number.isNaN(phoneNumber)) {
        alert("숫자를 넣어주세요");
        return;
    }
    if (email.trim() === "" && password.trim() === "" && age.trim() === "") {
        alert("정확한 값이 입력되지 않았습니다.");
        return;
    }
};

export const signSettingValidation = ({ phoneNumber, age, sex }: { phoneNumber: string; age: string; sex: string }) => {
    if (phoneNumber.length !== 11) {
        alert("핸드폰 번호를 정확히 입력해 주세요");
        return;
    }

    if (Number.isNaN(age) && Number.isNaN(phoneNumber)) {
        alert("숫자를 넣어주세요");
        return;
    }

    const hasAllInput = sex == "" || age.trim() !== "" || phoneNumber.trim() !== "";

    if (hasAllInput) {
        alert("모두 입력해 주세요");
        return;
    }
};
