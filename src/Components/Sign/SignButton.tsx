import Button from "@/Components/Commen/Button";

type InputValue = {
    email?: string;
    text: string;
    password?: string;
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
    text,
    inputDisabled,
    setInputDisabled,
    password,
    name,
    age,
    onClick,
    firstNumber,
    middlePhoneNumber,
    lastPhoneNumber,
    sex,
}: InputValue) => {
    const signUp = email && password && name && age && firstNumber && middlePhoneNumber && lastPhoneNumber && sex;
    const siginIn = email && password;
    const confirmEmail = email;
    const confirmPassword = password;

    if (signUp) setInputDisabled(true);
    if (siginIn && name === undefined) setInputDisabled(true);
    if (confirmEmail && password === undefined) setInputDisabled(true);
    if (confirmPassword && email === undefined) setInputDisabled(true);
    return (
        <>
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
        </>
    );
};

export default SignButton;
