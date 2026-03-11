"use client";

import React, { useState } from "react";
import Image from "next/image";

import Input from "@/Components/Commen/Input";

type SignUpItemType = {
    setLabel: string;
    value?: string;
    name?: string;
    type?: string;
    helperText?: string;
    eyeClose?: string;
    eye?: string;
    maxLength?: number;
    placeholder?: string;
    pattern?: string;
    relative?: string;
    color?: string;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SignInputNonStarItem = ({
    setLabel,
    value,
    name,
    type,
    helperText,
    eyeClose,
    eye,
    maxLength,
    placeholder,
    pattern,
    relative,
    color,
    onChangeHandler,
}: SignUpItemType) => {
    const [showPassword, setShowPassword] = useState({ type: "password", visible: false });

    const handlePasswordVisible = () => {
        setShowPassword(() =>
            showPassword.visible ? { type: "password", visible: false } : { type: "text", visible: true },
        );
    };

    return (
        <div className={`${relative} mx-auto my-8 w-[350px] h-fit flex flex-col`}>
            <label className="mb-2 flex text-P7_M">{setLabel}</label>
            <Input
                type={type || showPassword.type}
                value={value}
                name={name}
                pattern={pattern}
                helperText={helperText}
                maxLength={maxLength}
                placeholder={placeholder}
                onChange={onChangeHandler}
                color={color !== undefined ? color : "gray2"}
                size="big"
            />
            {eyeClose ? (
                <div
                    className="absolute top-9 right-0 flex items-center pr-2 mt-2 text-[22px] cursor-pointer"
                    onClick={handlePasswordVisible}
                >
                    {showPassword.visible ? (
                        <Image
                            src={`${eye}`}
                            className="w-[25px] h-[25px]"
                            height={0}
                            width={0}
                            alt="password 확인 사진"
                        />
                    ) : (
                        <Image
                            src={`${eyeClose}`}
                            className="w-[25px] h-[25px]"
                            height={0}
                            width={0}
                            alt="password 가림 사진"
                        />
                    )}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default SignInputNonStarItem;
