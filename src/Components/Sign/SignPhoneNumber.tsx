import React from "react";
import Input from "@/Components/Commen/Input";

type PhoneNumber = {
    onClickPhoneNumber: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onChangeMiddlePhoneNumber: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onChangeLastPhoneNumber: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    middlePhoneNumber: string;
    lastPhoneNumber: string;
};

const clickNumber = ["010", "011"];

const SignPhoneNumber = ({
    onClickPhoneNumber,
    onChangeMiddlePhoneNumber,
    onChangeLastPhoneNumber,
    middlePhoneNumber,
    lastPhoneNumber,
}: PhoneNumber) => {
    return (
        <div className="mx-auto w-fit h-fit flex flex-col">
            <label className="mb-5">핸드폰 번호</label>
            <div className="flex flex-row gap-2">
                <select
                    id="number"
                    className="flex-1 border border-solid size-14 border-zinc-300 rounded-lg w-[110px] p-2 text-sm font-nomal"
                    onChange={onClickPhoneNumber}
                >
                    {clickNumber.map((item: string, idx: number) => {
                        return (
                            <option key={idx} className="text-zinc-300 mt-2 text-sm">
                                {item}
                            </option>
                        );
                    })}
                </select>
                <div className="w-[110px]">
                    <Input
                        type="text"
                        pattern="[0-9]{4}"
                        maxLength={4}
                        size="big"
                        value={middlePhoneNumber}
                        onChange={onChangeMiddlePhoneNumber}
                    />
                </div>
                <div className="w-[110px]">
                    <Input
                        type="text"
                        pattern="[0-9]{4}"
                        size="big"
                        maxLength={4}
                        value={lastPhoneNumber}
                        onChange={onChangeLastPhoneNumber}
                    />
                </div>
            </div>
        </div>
    );
};

export default SignPhoneNumber;
