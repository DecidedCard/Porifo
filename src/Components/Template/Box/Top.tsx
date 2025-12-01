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
        <div className="sm:w-full sm:p-4">
            <div className="flex flex-col items-center justify-center w-[932px] h-[454px] bg-blue sm:w-full sm:min-h-[511px] ">
                <div className="flex flex-col items-center justify-center py-[50px]">
                    <div className="flex justify-center items-center rounded-2xl w-[170px] h-[170px] overflow-hidden sm:w-[150px] sm:h-[150px] sm:mb-2">
                        <Image src={userInfo.profileImage!} alt="프로필 사진" width={170} height={170} />
                    </div>

                    <div className="flex flex-col items-center justify-center w-80 min-w-[320px] max-w-xs sm:w-[316px]">
                        <h1 className="w-[500px] my-5 flex items-center justify-center text-black text-H5_B sm:text-[22px] sm:w-[316px]">
                            {userInfo.oneLineIntroduce}
                        </h1>

                        <div className="flex flex-col gap-4 items-center justify-center sm:mt-3">
                            <div className="flex flex-col items-center justify-center">
                                <h2 className="flex items-center justify-center sm:text-[16px] sm:font-medium">
                                    {userInfo.name}
                                </h2>
                                <div className="bg-gray_3 w-[60px] h-[1px] my-3"></div>
                                <p className="flex items-center justify-center text-black text-P7_M sm:text-[12px]">
                                    {userInfo.job}
                                </p>
                            </div>

                            <address className="flex flex-row items-center justify-center gap-5 text-gray_5 text-P7_R sm:flex-col">
                                <div className="flex flex-row items-center justify-start sm:flex-col">
                                    {userInfo.tel && (
                                        <p className="flex items-center justify-center mr-2 w-[200px]">
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

                                    <p className="text-center flex items-center justify-center">
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
        </div>
    );
};

export default Top;
