import type { PortfolioInfo } from "@/types/PortfolioInfo";
import Image from "next/image";
import Link from "next/link";

const URL = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    const userInfo = {
        blogLink: portfolio.blogLink,
        githubLink: portfolio.githubLink,
    };

    return (
        <main className="flex my-5">
            <div className="flex flex-row items-start justify-start">
                <div className="flex flex-col gap-2  items-start justify-start flex-1 sm:items-center sm:justify-center">
                    {(userInfo.blogLink || userInfo.githubLink) && (
                        <>
                            <div className="text-black text-H7_B sm:w-[370px] sm:font-medium sm:text-[20px]">URL</div>
                            <div className="bg-gray_3 w-[804px] h-[1px] my-5 sm:w-[370px]"></div>
                        </>
                    )}

                    <div className="flex flex-col gap-2 items-start justify-start sm:w-[370px]">
                        <div className="flex flex-col gap-1 items-start justify-start">
                            {userInfo.blogLink && (
                                <div className="flex items-center text-gray_4 text-P8_R">
                                    <Image
                                        src="/assets/image/link.svg"
                                        alt="link"
                                        width={24}
                                        height={24}
                                        className="mr-1"
                                    />
                                    <Link href={userInfo.blogLink}>{userInfo.blogLink}</Link>
                                </div>
                            )}
                            {userInfo.githubLink && (
                                <div className="flex items-center text-gray_4 text-P8_R">
                                    <Image
                                        src="/assets/image/link.svg"
                                        alt="link"
                                        width={24}
                                        height={24}
                                        className="mr-1"
                                    />
                                    <Link href={userInfo.githubLink}>{userInfo.githubLink}</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default URL;
