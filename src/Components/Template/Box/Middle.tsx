import { PortfolioInfo } from "@/types/PortfolioInfo";

const Middle = ({ portfolio, pdf }: { portfolio: PortfolioInfo; pdf?: boolean }) => {
    const userSkillTag = portfolio.skillTag as string[];

    return (
        <div>
            {userSkillTag.length > 0 && (
                <div className="flex flex-col items-start justify-start mt-10 sm:items-center sm:justify-center">
                    <p className="w-[804px] text-black text-SH4_M sm:w-[370px] sm:font-medium sm:text-[20px]">
                        기술스택
                    </p>
                    <div className="flex flex-wrap text-white text-P8_M sm:w-[370px]">
                        {userSkillTag.map((tag, index) => (
                            <span
                                key={index}
                                className={`flex items-center mt-4 mr-2 px-3 rounded-lg bg-black h-9 ${pdf && "pb-2"}`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="bg-gray_3 w-[804px] h-[1px] my-10 sm:w-[370px]"></div>
                </div>
            )}

            <div className="flex flex-col items-start justify-start whitespace-pre-wrap sm:items-center sm:justify-center">
                <p className="mb-4 sm:w-[370px] text-black text-SH4_M sm:font-medium sm:text-[20px]">자기소개</p>
                <p className="w-[804px] text-gray_5 text-P7_R sm:w-[370px] sm:text-gray4">{portfolio.introduce}</p>
                <div className="bg-gray_3 w-[804px] h-[1px] my-10 sm:w-[370px]"></div>
            </div>
        </div>
    );
};

export default Middle;
