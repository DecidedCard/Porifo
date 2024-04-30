type SignType = { email: string };

type PasswordType = {
    password: string;
};

type NameType = {
    name: string;
};

export const emailValidate = ({ email }: SignType) => {
    const emailRegValid = /[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*/;

    return emailRegValid.test(email);
};

export const passwordValidate = ({ password }: PasswordType) => {
    const wordReg = /(?=.*?[a-z])/;
    const specialReg = /(?=.*?[#?!@$%^&*-])/;
    const numberReg = /(?=.*?[0-9])/;
    const lengthReg = /^.{8,20}$/;

    return {
        wordRegBoolean: wordReg.test(password),
        numberRegBoolean: numberReg.test(password),
        specialRegBoolean: specialReg.test(password),
        lengthRegBoolean: lengthReg.test(password),
    };
};

export const nameValidate = ({ name }: NameType) => {
    const nameReg = /[ㄱ-ㅣ가-힣]/;

    return nameReg.test(name);
};
