import { PortfolioInfo } from "@/types/PortfolioInfo";

const Middle = ({ portfolio, pdf }: { portfolio: PortfolioInfo; pdf?: boolean }) => {
    const userSkillTag = portfolio.skillTag as string[];

    return (
        <div>
            {userSkillTag.length > 0 && (
                <div className="flex flex-col items-start justify-start mt-10 sm:items-center sm:justify-center">
                    <p className="font-medium text-[20px] w-[804px] sm:w-[370px] sm:font-medium sm:text-[20px]">
                        기술스택
                    </p>
                    <div className="flex flex-wrap text-primary text-[12px] sm:w-[370px]">
                        {userSkillTag.map((tag, index) => (
                            <span
                                key={index}
                                className={`flex items-center mt-4 mr-2 px-3 bg-gray-200 rounded-lg bg-black text-white h-9 ${
                                    pdf && "pb-2"
                                }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="bg-deepgray w-[804px] h-[1px] my-10 sm:w-[370px]"></div>
                </div>
            )}

            <div className="flex flex-col items-start justify-start whitespace-pre-wrap sm:items-center sm:justify-center">
                <p className="font-medium text-[20px] mb-4 sm:w-[370px] sm:font-medium sm:text-[20px]">자기소개</p>
                <p className="text-[14px] w-[804px] tracking-wide leading-normal sm:w-[370px] sm:text-gray4">
                    {portfolio.introduce}
                </p>
                <div className="bg-deepgray w-[804px] h-[1px] my-10 sm:w-[370px]"></div>
            </div>
        </div>
    );
};

export default Middle;
