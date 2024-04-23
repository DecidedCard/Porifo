
import { PortfolioInfo } from "@/types/PortfolioInfo";

const Middle = ({ portfolio }: { portfolio: PortfolioInfo }) => {

    const userInfo = {
        introduce: portfolio.introduce,
    };

    const userSkillTag = portfolio.skillTag as string[];

    return (
        <div>

            {userSkillTag.length > 0 && (
                <div className="flex flex-col items-start justify-start mt-10">
                    <p className="font-medium text-[20px] w-[804px]">기술스택</p>
                    <div className="flex flex-wrap text-primary text-[12px]">
                        {userSkillTag.map((tag, index) => (
                            <span
                                key={index}
                                className="mt-4 mr-2 p-3 bg-gray-200 rounded-lg bg-black text-white h-9"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="bg-deepgray w-[804px] h-[1px] my-10"></div>
                </div>
            )}


            <div className="flex flex-col items-start justify-start">
                <p className="font-medium text-[20px] mb-4">자기소개</p>
                <p className="text-[14px] w-[804px] tracking-wide leading-normal">{userInfo.introduce}</p>
                <div className="bg-deepgray w-[804px] h-[1px] my-10"></div>
            </div>
        </div>
    );
};

export default Middle;