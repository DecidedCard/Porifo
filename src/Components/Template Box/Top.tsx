import type { PortfolioInfo } from "@/types/PortfolioInfo";
import Image from "next/image";

const Top = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    const userInfo = {
        name: portfolio.name,
        job: portfolio.job,
        tel: portfolio.tel,
        email: portfolio.email,
        profileImage: portfolio.profileImage,
        oneLineIntroduce: portfolio.oneLineIntroduce,
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center w-[932px] h-[454px] bg-blue sm:w-full sm:min-h-[511px] sm:mt-4">
                <div className="flex flex-col items-center justify-center py-[50px]">
                    <Image
                        className="rounded-2xl w-[170px] h-[170px] object-cover sm:w-[150px] sm:h-[150px] sm:mb-2"
                        src={userInfo.profileImage!}
                        alt="프로필 사진"
                        width={170}
                        height={170}
                    />

                    <div className="flex flex-col items-center justify-center w-80 min-w-[320px] max-w-xs sm:w-[316px]">
                        <h1 className="leading-normal text-[30px] w-[932px] h-[92px] font-bold flex items-center justify-center sm:text-[22px] sm:w-[316px]">
                            {userInfo.oneLineIntroduce}
                        </h1>

                        <div className="flex flex-col gap-4 items-center justify-center sm:mt-3">
                            <div className="flex flex-col items-center justify-center">
                                <h2 className="text-[22px] font-bold flex items-center justify-center sm:text-[16px] sm:font-medium">
                                    {userInfo.name}
                                </h2>
                                <div className="bg-deepgray w-[60px] h-[1px] my-3"></div>
                                <p className="text-[14px] font-medium flex items-center justify-center sm:text-[12px]">
                                    {userInfo.job}
                                </p>
                            </div>

                            <address className="text-[14px] text-gray4 flex flex-row items-center justify-center gap-5 sm:flex-col">
                                <div className="flex flex-row items-center justify-start sm:flex-col">
                                    {userInfo.tel && (
                                        <p className="flex items-center justify-center mr-2 w-[200px]">
                                            <Image
                                                src="/assets/image/tel.svg"
                                                alt="전화"
                                                width={24}
                                                height={24}
                                                className="object-cover w-6 h-6 mr-1"
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
                                            className="object-cover w-6 h-6 mr-1"
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
