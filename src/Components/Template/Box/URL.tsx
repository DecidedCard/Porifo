import type { PortfolioInfo } from "@/types/PortfolioInfo";
import Image from "next/image";
import Link from "next/link";

const URL = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    const userInfo = {
        blogLink: portfolio.blogLink,
        githubLink: portfolio.githubLink,
    };

    return (
        <div className="sm:w-full">
            <div className="flex flex-row items-start justify-start ">
                <div className="flex flex-col gap-2 items-start justify-start flex-1 sm:items-center sm:justify-center sm:w-full">
                    {(userInfo.blogLink || userInfo.githubLink) && (
                        <>
                            <div className="text-black text-SH4_M sm:w-[370px] sm:font-medium sm:text-[20px]">URL</div>
                            <div className="bg-white w-[804px] h-[1px] sm:w-full"></div>
                        </>
                    )}

                    <div className="flex flex-col gap-2 items-start justify-start sm:w-[370px]">
                        <div className="flex flex-col gap-2 items-start justify-start">
                            {userInfo.blogLink && (
                                <div className="flex items-center rounded-lg border border-solid border-disabled p-4 text-gray_4 text-P8_R">
                                    <Image
                                        src="/assets/image/link.svg"
                                        alt="link"
                                        width={16}
                                        height={16}
                                        className="mr-1"
                                    />
                                    <Link href={userInfo.blogLink}>{userInfo.blogLink}</Link>
                                </div>
                            )}
                            {userInfo.githubLink && (
                                <div className="flex items-center rounded-lg border border-solid border-disabled p-4 text-gray_4 text-P8_R">
                                    <Image
                                        src="/assets/image/link.svg"
                                        alt="link"
                                        width={16}
                                        height={16}
                                        className="mr-1"
                                    />
                                    <Link href={userInfo.githubLink}>{userInfo.githubLink}</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default URL;
