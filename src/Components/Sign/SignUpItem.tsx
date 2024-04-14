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

const SignUpItem = ({
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
            <label className="mb-2">{setLabel}</label>
            <Input
                type={type || showPassword.type}
                value={value}
                name={name}
                pattern={pattern}
                helperText={helperText}
                maxLength={maxLength}
                placeholder={placeholder}
                onChange={onChangeHandler}
                color={color !== undefined ? color : "black"}
                size="big"
            />
            {eyeClose ? (
                <div
                    className="absolute inset-y-0 right-0 mt-[15px] mx-2 h-[22px] text-[22px] cursor-pointer"
                    onClick={handlePasswordVisible}
                >
                    {showPassword.visible ? (
                        <Image
                            src={`${eye}`}
                            className="mt-6 w-[25px] h-[25px]"
                            height={0}
                            width={0}
                            alt="password 확인 사진"
                        />
                    ) : (
                        <Image
                            src={`${eyeClose}`}
                            className="mt-6 w-[25px] h-[25px]"
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

export default SignUpItem;
