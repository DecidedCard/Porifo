import { PortfolioInfo } from "@/types/PortfolioInfo";

const Middle = ({ portfolio, pdf }: { portfolio: PortfolioInfo; pdf?: boolean }) => {
    const userSkillTag = portfolio.skillTag as string[];

    return (
        <div>
            <div className="my-10 ml-5 gap-14 flex flex-row items-start justify-start sm:gap-5 sm:w-[370px]">
                <div className="flex flex-col items-start justify-start sm:w-[170px]">
                    <p className="font-medium text-[22px] sm:w-[150px] sm:font-medium sm:text-[20px]">기술스택</p>
                    <div className="bg-deepgray w-[370px] h-[1px] my-5 sm:w-[170px]"></div>
                    <div className="flex flex-row flex-wrap text-primary text-[12px] w-[382px] h-fit gap-4 sm:w-[170px]">
                        {userSkillTag.map((tag, index) => (
                            <span
                                key={index}
                                className={`flex items-center justify-center py-1 px-3 bg-gray-200 rounded-lg bg-black text-white h-9 ${
                                    pdf && "pb-3"
                                }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-start justify-start whitespace-pre-wrap sm:w-[170px]">
                    <p className="font-medium text-[22px] sm:w-[150px] sm:font-medium sm:text-[20px]">자기소개</p>
                    <div className="bg-deepgray w-[370px] h-[1px] my-5 sm:w-[170px]"></div>
                    <p className="text-[14px] w-[382px] tracking-wide leading-normal sm:w-[170px] sm:text-gray4">
                        {portfolio.introduce}
                    </p>
                    <div className="flex flex-row gap-2 items-start justify-start"></div>
                </div>
            </div>
        </div>
    );
};

export default Middle;
