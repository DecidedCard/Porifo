import React from "react";
import Input from "@/Components/Commen/Input";

type SignUpItemType = {
    setLabel: string;
    placeholder?: string;
    pattern?: string;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SignUpItem = ({ setLabel, placeholder, pattern, onChangeHandler }: SignUpItemType) => {
    return (
        <div className="mx-auto my-8 w-[350px] h-fit flex flex-col">
            <label className="mb-2">{setLabel}</label>
            <Input
                type="email"
                pattern={pattern}
                placeholder={placeholder}
                onChange={onChangeHandler}
                color="black"
                size="big"
            />
        </div>
    );
};

export default SignUpItem;
