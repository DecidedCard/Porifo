type PropsType = {
    password: string;
    setWordRegValid: React.Dispatch<React.SetStateAction<boolean>>;
    setNumberRegValid: React.Dispatch<React.SetStateAction<boolean>>;
    setSpecialRegValid: React.Dispatch<React.SetStateAction<boolean>>;
    setLengthRegValid: React.Dispatch<React.SetStateAction<boolean>>;
};

export const passwordValidate = ({
    password,
    setWordRegValid,
    setNumberRegValid,
    setSpecialRegValid,
    setLengthRegValid,
}: PropsType) => {
    const wordReg = /(?=.*?[a-z])/;
    const specialReg = /(?=.*?[#?!@$%^&*-])/;
    const numberReg = /(?=.*?[0-9])/;
    const lengthReg = /^.{8,20}$/;

    if (wordReg.test(password)) {
        setWordRegValid(true);
    } else {
        setWordRegValid(false);
    }

    if (numberReg.test(password)) {
        setNumberRegValid(true);
    } else {
        setNumberRegValid(false);
    }

    if (specialReg.test(password)) {
        setSpecialRegValid(true);
    } else {
        setSpecialRegValid(false);
    }

    if (lengthReg.test(password)) {
        setLengthRegValid(true);
    } else {
        setLengthRegValid(false);
    }
};
