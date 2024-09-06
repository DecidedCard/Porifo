import React from "react";
import Image from "next/image";

type Props = {
    image1: string;
    image2: string;
    text1: string[];
    text2: string;
    stack: string;
};

const Card = ({ image1, image2, stack, text1, text2 }: Props) => {
    return (
        <div className="flex flex-col gap-6 items-start justify-start sm:justify-center sm:items-center">
            <Image
                className="rounded-2xl sm:w-[448px] sm:h-[320px]"
                src={image1}
                alt="이미지"
                width={630}
                height={550}
            />
            <div className="flex flex-col gap-4 items-start justify-start">
                <div className="relative flex items-center justify-start text-headline/H6_B text-black sm:text-[18px]">
                    {text1[0]} <br /> {text1[1]}
                </div>
                <div className="pr-2 pl-2 flex flex-row gap-2 items-center justify-center sm:flex-row">
                    <div className="flex items-center sm:flex-row">
                        <div className="w-12 h-12 relative overflow-hidden">
                            <div className="w-12 h-12 absolute left-0 top-0 overflow-hidden sm:w-8 sm:h-8">
                                <Image
                                    className="left-[calc(50%_-_24px)] top-[calc(50%_-_24px)] overflow-visible sm:w-8 sm:h-8 sm:rounded-full"
                                    src={image2}
                                    alt="이미지"
                                    width={48}
                                    height={48}
                                />
                            </div>
                        </div>
                        <div className="ml-1 flex items-center justify-start text-subhead/SH4 sm:text-[14px] sm:font-medium">
                            {text2}
                        </div>
                    </div>

                    <div className="flex items-center justify-start text-body/P6_M text-gray-3 sm:text-[10px]">
                        {stack}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
