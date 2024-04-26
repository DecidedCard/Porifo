import { useEffect } from "react";
import Button from "@/Components/Commen/Button";

type InputValue = {
    email?: string;
    loginPassword?: string;
    password?: string;
    OTPNumber?: string;
    confirmOTP?: string;
    findEmail?: string;
    text: string;
    name?: string;
    birthDate?: string;
    confirmUserPassword?: string;
    sex?: string;
    personalInfoCheck?: boolean;

    firstNumber?: string;
    middlePhoneNumber?: string;
    lastPhoneNumber?: string;
    inputDisabled: boolean;
    onClick?: () => void;
    setInputDisabled: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignButton = ({
    email,
    OTPNumber,
    text,
    inputDisabled,
    findEmail,
    setInputDisabled,
    password,
    loginPassword,
    confirmUserPassword,
    name,
    birthDate,
    onClick,
    personalInfoCheck,
    sex,
}: InputValue) => {
    const siginIn = email && loginPassword;

    const signUp = email && password && OTPNumber;

    const confirmResetEmail = findEmail && !name;

    const signUpUserMetaData = name && birthDate && sex !== "" && personalInfoCheck === true;

    const confirmPassword = password && confirmUserPassword;

    const socialSettingConfirm = birthDate && sex !== "" && personalInfoCheck === true;

    useEffect(() => {
        {
            /*로그인*/
        }

        siginIn ? setInputDisabled(true) : setInputDisabled(false);
    }, [siginIn, setInputDisabled]);

    useEffect(() => {
        {
            /*회원가입*/
        }
        signUp ? setInputDisabled(true) : setInputDisabled(false);
    }, [signUp, setInputDisabled]);

    useEffect(() => {
        {
            /*비밀번호 찾기*/
        }
        confirmResetEmail ? setInputDisabled(true) : setInputDisabled(false);
    }, [confirmResetEmail, setInputDisabled]);

    useEffect(() => {
        {
            /*회원가입 후 메타데이터 확인*/
        }
        signUpUserMetaData ? setInputDisabled(true) : setInputDisabled(false);
    }, [signUpUserMetaData, setInputDisabled]);

    useEffect(() => {
        {
            /*소셜로그인 확인*/
        }
        socialSettingConfirm ? setInputDisabled(true) : setInputDisabled(false);
    }, [socialSettingConfirm, setInputDisabled]);

    useEffect(() => {
        {
            /*비밀번호 확인*/
        }
        confirmPassword ? setInputDisabled(true) : setInputDisabled(false);
    }, [confirmPassword, setInputDisabled]);

    return (
        <div className="w-[350px] mt-6 mb-6 mx-auto">
            <Button
                text={text}
                border="none"
                size="m"
                onClick={onClick}
                color={inputDisabled ? "primary" : ""}
                disabled={!inputDisabled}
            />
        </div>
    );
};

export default SignButton;
