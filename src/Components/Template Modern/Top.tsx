
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
        <div className="flex justify-between items-center w-[932px] h-[306px] bg-gray">
            <div className="flex flex-col gap-5 ml-[66px] items-start justify-start w-[500px]">
                <h1 className="leading-normal text-[30px] font-bold flex items-center justify-center">
                    {userInfo.oneLineIntroduce}
                </h1>

                <div className="flex flex-row items-center justify-center gap-12">
                    <div className="flex flex-col items-start justify-start">
                        <h2 className="text-[22px] font-bold flex items-start justify-start">
                            {userInfo.name}
                        </h2>
                        <div className="bg-deepgray w-[60px] h-[1px] my-3"></div>
                        <p className="text-[14px] flex items-center justify-center">
                            {userInfo.job}
                        </p>
                    </div>

                    <address className="text-[12px] text-grayblack flex flex-col items-start justify-start">
                        <div className="flex flex-col items-start justify-start gap-3">
                            {userInfo.tel && (
                                <p className="flex items-center justify-center">
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
                            <p className="flex items-center justify-center">
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
            <Image
                className="mr-[66px] w-[200px] h-[200px] relative object-cover"
                src={userInfo.profileImage}
                alt="프로필 사진"
                width={200}
                height={200}
            />
        </div>
    );
};

export default Top;