import { useEffect } from "react";
import Button from "@/Components/Commen/Button";

type InputValue = {
    email?: string;
    OTPNumber?: string;
    confirmOTP?: string;
    findEmail?: string;
    text: string;
    password?: string;
    loginPassword?: string;
    confirmUserPassword?: string;
    name?: string;
    birthDate?: string;
    firstNumber?: string;
    middlePhoneNumber?: string;
    lastPhoneNumber?: string;
    sex?: string;
    personalInfoCheck?: boolean;
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
    const signUp = email && password && OTPNumber;

    const confirmPassword = password && confirmUserPassword;

    const socialSettingConfirm = findEmail && birthDate && sex !== "" && personalInfoCheck === true;

    const signUpUserMetaData = name && birthDate && sex !== "" && personalInfoCheck === true;

    useEffect(() => {
        {
            /*로그인*/
        }
        const siginIn = email && loginPassword;
        siginIn ? setInputDisabled(true) : setInputDisabled(false);
    }, [email, loginPassword, setInputDisabled]);

    useEffect(() => {
        {
            /*회원가입*/
        }
        signUp ? setInputDisabled(true) : setInputDisabled(false);
    }, [signUp, setInputDisabled]);

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
