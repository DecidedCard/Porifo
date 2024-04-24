
import { PortfolioInfo } from "@/types/PortfolioInfo";

const Middle = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    const userInfo = {
        introduce: portfolio.introduce,
    };

    const userSkillTag = portfolio.skillTag as string[];


    return (
        <main>
            <div className="my-10 ml-5 gap-16 flex flex-row items-start justify-start sm:gap-5">

                <div className="flex flex-col items-start justify-start sm:w-[200px]">
                    <p className="font-bold text-[22px] sm:w-[200px] sm:font-medium sm:text-[20px]">기술스택</p>
                    <div className="bg-deepgray w-[370px] h-[1px] my-5 sm:w-[200px]"></div>
                    <div className="flex flex-row flex-wrap text-primary text-[12px] w-[382px] h-fit gap-4 sm:w-[200px]">
                        {userSkillTag.map((tag, index) => (
                            <span key={index} className="flex items-center justify-center py-1 px-3 bg-gray-200 rounded-lg border border-primary border-solid h-9">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-start justify-start sm:w-[200px]">
                    <p className="font-bold text-[22px] text-left sm:font-medium sm:text-[20px]">자기소개</p>
                    <div className="bg-deepgray w-[370px] h-[1px] my-5 sm:w-[200px]"></div>
                    <p className="text-[14px] w-[382px] tracking-wide leading-normal sm:w-[200px]">{userInfo.introduce}</p>
                    <div className="flex flex-row gap-2 items-start justify-start self-stretch shrink-0"></div>
                </div>
            </div>
        </main>
    );
};

export default Middle;
