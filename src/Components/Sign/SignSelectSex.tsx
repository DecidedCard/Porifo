import React from "react";

type SeletSexType = { onClickSelectSex: (sex: string) => void };

const clickSex = ["남자", "여자"];

const SignSelectSex = ({ onClickSelectSex }: SeletSexType) => {
    return (
        <>
            <p className="mt-5 mx-9">성별</p>
            <div className="mx-9 mt-[9px] mb-8 h-fit flex flex-row ">
                {clickSex.map((item: string, idx: number) => {
                    return (
                        <div key={idx} className="flex flex-row my-auto mr-4">
                            <label className="mr-1">{item}</label>
                            <input
                                type="radio"
                                name="sex"
                                value={item}
                                id={item}
                                onClick={() => onClickSelectSex(item)}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SignSelectSex;
