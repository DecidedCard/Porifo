import { useEffect } from "react";
import Button from "@/Components/Commen/Button";

type InputValue = {
    email?: string;
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
    inputDisabled: boolean;
    onClick?: () => void;
    setInputDisabled: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignButton = ({
    email,
    findEmail,
    text,
    inputDisabled,
    setInputDisabled,
    password,
    loginPassword,
    confirmUserPassword,
    name,
    birthDate,
    onClick,
    firstNumber,
    middlePhoneNumber,
    lastPhoneNumber,
    sex,
}: InputValue) => {
    const signUp =
        email && password && birthDate && name && firstNumber && middlePhoneNumber && lastPhoneNumber && sex !== "";

    const confirmEmail = findEmail && password === undefined && birthDate === undefined;
    const confirmPassword = password && confirmUserPassword;

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
            /*이메일 확인*/
        }
        confirmEmail ? setInputDisabled(true) : setInputDisabled(false);
    }, [confirmEmail, setInputDisabled]);

    useEffect(() => {
        {
            /*비밀번호 확인*/
        }
        confirmPassword ? setInputDisabled(true) : setInputDisabled(false);
    }, [confirmPassword, setInputDisabled]);

    return (
        <div className="w-[350px] mt-8 mb-6 mx-auto">
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
