import type { PortfolioInfo } from "@/types/PortfolioInfo";
import Image from "next/image";

const Top = ({ portfolio, pdf }: { portfolio: PortfolioInfo; pdf?: boolean }) => {
    const userInfo = {
        name: portfolio.name,
        job: portfolio.job,
        tel: portfolio.tel,
        email: portfolio.email,
        profileImage: portfolio.profileImage,
        oneLineIntroduce: portfolio.oneLineIntroduce,
    };

    return (
        <main className="mt-10">
            <div className="flex flex-col gap-8 items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex justify-center items-center rounded-full mr-5 w-[200px] h-[200px] overflow-hidden sm:w-40 sm:h-40 sm:mr-0">
                        <Image src={userInfo.profileImage!} alt="프로필 사진" width={200} height={200} />
                    </div>

                    <div className="flex flex-col gap-5 items-center justify-center w-80 min-w-[320px] max-w-xs">
                        <h1 className="mt-5 flex items-center justify-start text-H5_B sm:text-[22px] sm:w-[360px] sm:justify-center">
                            {userInfo.oneLineIntroduce}
                        </h1>

                        <div className="flex flex-col gap-4 items-center justify-center">
                            <div className="flex flex-col items-center justify-center">
                                <h2 className="flex items-center justify-center text-H7_B sm:text-[16px]">
                                    {userInfo.name}
                                </h2>
                                <div className="bg-gray_3 w-[60px] h-[1px] my-3 sm:w-[54px]"></div>
                                <p className="flex items-center justify-center text-P7_M sm:text-[12px]">
                                    {userInfo.job}
                                </p>
                            </div>

                            <address className="flex flex-row items-center justify-center text-gray_5 text-P7_R sm:text-[12px]">
                                <div className="flex flex-row items-center justify-start sm:justify-center">
                                    {userInfo.tel && (
                                        <p className="flex items-center justify-center w-[200px] sm:w-[150px]">
                                            <Image
                                                src="/assets/image/tel.svg"
                                                alt="전화"
                                                width={24}
                                                height={24}
                                                className={`object-cover w-6 h-6 mr-1 ${pdf && "pt-2 h-fit"}`}
                                            />
                                            {userInfo.tel}
                                        </p>
                                    )}

                                    <p className="flex items-center justify-center">
                                        <Image
                                            src="/assets/image/mail.svg"
                                            alt="메일"
                                            width={24}
                                            height={24}
                                            className={`object-cover w-6 h-6 mr-1 ${pdf && "pt-2 h-fit"}`}
                                        />
                                        {userInfo.email}
                                    </p>
                                </div>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Top;
