import { PortfolioInfo } from "@/types/PortfolioInfo";

const Middle = ({ portfolio, pdf }: { portfolio: PortfolioInfo; pdf?: boolean }) => {
    const userSkillTag = portfolio.skillTag as string[];

    return (
        <main>
            <div className="my-10 ml-5 gap-14 flex flex-row items-start justify-start sm:ml-0 sm:gap-10">
                <div className="flex flex-col items-start justify-start sm:w-[170px]">
                    <p className="text-black text-H7_B sm:w-[170px] sm:font-medium sm:text-[20px]">기술스택</p>
                    <div className="bg-gray_3 w-[370px] h-[1px] my-5 sm:w-[170px]"></div>
                    <div className="flex flex-row flex-wrap text-primary_1 text-P8_M w-[382px] h-fit gap-4 sm:w-[200px]">
                        {userSkillTag.map((tag, index) => (
                            <span
                                key={index}
                                className={`flex items-center justify-center py-1 px-3 bg-gray-200 rounded-lg border border-primary_1 border-solid h-9 ${
                                    pdf && "pb-3"
                                }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-start justify-start whitespace-pre-wrap sm:w-[170px]">
                    <p className="text-left text-black text-H7_B sm:w-[170px] sm:font-medium sm:text-[20px]">
                        자기소개
                    </p>
                    <div className="bg-gray_3 w-[370px] h-[1px] my-5 sm:w-[170px]"></div>
                    <p className="w-[382px] text-gray_5 text-P7_R sm:w-[170px] sm:text-gray4">{portfolio.introduce}</p>
                    <div className="flex flex-row gap-2 items-start justify-start self-stretch shrink-0"></div>
                </div>
            </div>
        </main>
    );
};

export default Middle;
