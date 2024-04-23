
import type { PortfolioInfo } from "@/types/PortfolioInfo";
import Image from "next/image";

const Top = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    const userInfo = {
        name: portfolio.name,
        job: portfolio.job,
        tel: portfolio.tel,
        email: portfolio.email,
        profileImage: portfolio.profileImage || "",
        oneLineIntroduce: portfolio.oneLineIntroduce,
    };

    return (
        <main className="mt-16 mb-10">
            <div className="flex flex-col gap-8 items-center justify-center">
                <div className="flex flex-row items-start justify-center">
                    <Image
                        className="rounded-full mr-8 w-[200px] h-[200px] object-cover"
                        src={userInfo.profileImage}
                        alt="프로필 사진"
                        width={200}
                        height={200}
                    />

                    <div className="flex flex-col gap-5 items-start justify-center w-80 min-w-[320px] max-w-xs">
                        <h1 className="leading-normal text-[30px] text-left font-bold flex items-center justify-start">
                            {userInfo.oneLineIntroduce}
                        </h1>

                        <div className="flex flex-col gap-4 items-start justify-start">
                            <div className="flex flex-col items-start justify-start">
                                <h2 className="text-[22px] font-bold flex items-center justify-center">
                                    {userInfo.name}
                                </h2>
                                <div className="bg-deepgray w-[60px] h-[1px] my-3"></div>
                                <p className="text-[14px] flex items-center justify-center font-medium">
                                    {userInfo.job}
                                </p>
                            </div>

                            <address className="text-[14px] text-gray4 flex flex-col items-start justify-start h-[44px]">
                                <div className="flex flex-col items-start justify-start gap-2">
                                    {userInfo.tel && (
                                        <p className="flex items-center justify-center mr-2">
                                            <Image
                                                src="/assets/image/tel.svg"
                                                alt="전화"
                                                width={24}
                                                height={24}
                                                className="w-6 h-6 mr-1 object-cover"
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
                                            className="w-6 h-6 mr-1 object-cover"
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