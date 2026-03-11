import type { PortfolioInfo } from "@/types/PortfolioInfo";
import Image from "next/image";

const Top = ({ portfolio, pdf }: { portfolio: PortfolioInfo; pdf?: boolean }) => {
    const userInfo = {
        name: portfolio.name,
        job: portfolio.job,
        tel: portfolio.tel,
        email: portfolio.email,
        profileImage: portfolio.profileImage || "",
        oneLineIntroduce: portfolio.oneLineIntroduce,
    };

    return (
        <main className="mt-16 mb-10 sm:py-10">
            <div className="flex flex-col gap-8 items-center justify-center sm:w-full">
                <div className="flex flex-row items-start justify-center sm:ml-5 sm:w-full sm:gap-5">
                    <div className="flex justify-center items-center rounded-full mr-8 w-[200px] h-[200px] overflow-hidden sm:w-32 sm:h-32 sm:mr-0">
                        <Image src={userInfo.profileImage} alt="프로필 사진" width={200} height={200} />
                    </div>

                    <div className="flex flex-col gap-5 items-start justify-center w-80 min-w-[320px] max-w-xs sm:min-w-[200px] sm:max-w-0">
                        <h1 className="text-left flex items-center justify-start text-black text-H5_B sm:text-[22px] sm:w-[190px]">
                            {userInfo.oneLineIntroduce}
                        </h1>

                        <div className="flex flex-col gap-4 items-start justify-start">
                            <div className="flex flex-col items-start justify-start">
                                <h2 className="flex items-center justify-center text-black text-H7_B sm:text-[16px] sm:font-medium">
                                    {userInfo.name}
                                </h2>
                                <div className="bg-gray_3 w-[60px] h-[1px] my-3 sm:w-[45px]"></div>
                                <p className="flex items-center justify-center text-black text-P7_M sm:text-[12px] sm:font-normal">
                                    {userInfo.job}
                                </p>
                            </div>

                            <address className="flex flex-col items-start justify-start text-gray_5 text-P8_R h-[44px] sm:text-[10px]">
                                <div className="flex flex-col items-start justify-start gap-2">
                                    {userInfo.tel && (
                                        <p className="flex items-center justify-center mr-2">
                                            <Image
                                                src="/assets/image/tel.svg"
                                                alt="전화"
                                                width={24}
                                                height={24}
                                                className={`w-6 h-6 mr-1 object-cover sm:w-5 sm:h-5 ${
                                                    pdf && "pt-2 h-fit"
                                                }`}
                                            />
                                            {userInfo.tel}
                                        </p>
                                    )}

                                    <p className="flex items-center justify-center mr-2">
                                        <Image
                                            src="/assets/image/mail.svg"
                                            alt="메일"
                                            width={24}
                                            height={24}
                                            className={`w-6 h-6 mr-1 object-cover sm:w-5 sm:h-5 ${pdf && "pt-2 h-fit"}`}
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
