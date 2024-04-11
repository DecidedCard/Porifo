import Button from "@/Components/Commen/Button";
import { useEffect } from "react";

type InputValue = {
    email?: string;
    findEmail?: string;
    text: string;
    password?: string;
    loginPassword?: string;
    confirmUserPassword?: string;
    name?: string;
    age?: string;
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
    age,
    onClick,
    firstNumber,
    middlePhoneNumber,
    lastPhoneNumber,
    sex,
}: InputValue) => {
    const signUp =
        email && password && name && age && firstNumber && middlePhoneNumber && lastPhoneNumber && sex !== "";
    const siginIn = email && loginPassword;
    const confirmEmail = findEmail && password === undefined;
    const confirmPassword = password && confirmUserPassword;

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
