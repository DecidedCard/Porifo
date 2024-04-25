type SignType = { email: string; setEmailRegValid: React.Dispatch<React.SetStateAction<boolean>> };

type PasswordType = {
    password: string;
    setWordRegValid: React.Dispatch<React.SetStateAction<boolean>>;
    setNumberRegValid: React.Dispatch<React.SetStateAction<boolean>>;
    setSpecialRegValid: React.Dispatch<React.SetStateAction<boolean>>;
    setLengthRegValid: React.Dispatch<React.SetStateAction<boolean>>;
};

type NameType = {
    name: string;
    setNameRegValid: React.Dispatch<React.SetStateAction<boolean>>;
};

export const emailValidate = ({ email, setEmailRegValid }: SignType) => {
    const emailRegValid = /[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*/;

    emailRegValid.test(email) ? setEmailRegValid(true) : setEmailRegValid(false);
};

export const passwordValidate = ({
    password,
    setWordRegValid,
    setNumberRegValid,
    setSpecialRegValid,
    setLengthRegValid,
}: PasswordType) => {
    const wordReg = /(?=.*?[a-z])/;
    const specialReg = /(?=.*?[#?!@$%^&*-])/;
    const numberReg = /(?=.*?[0-9])/;
    const lengthReg = /^.{8,20}$/;

    wordReg.test(password) ? setWordRegValid(true) : setWordRegValid(false);

    numberReg.test(password) ? setNumberRegValid(true) : setNumberRegValid(false);

    specialReg.test(password) ? setSpecialRegValid(true) : setSpecialRegValid(false);

    lengthReg.test(password) ? setLengthRegValid(true) : setLengthRegValid(false);
};

export const nameValidate = ({ name, setNameRegValid }: NameType) => {
    const nameReg = /[ㄱ-ㅣ가-힣]/;
    nameReg.test(name) ? setNameRegValid(true) : setNameRegValid(false);
};
