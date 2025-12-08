import Cards from "@/Components/Community/Cards";
import Carousel from "@/Components/Community/Carousel";
import JobFilter from "@/Components/Community/JobFilter";
import Filter from "@/Components/Community/Filter";

const CommunityPage = () => {
    return (
        <div className="flex flex-col items-center sm:w-full sm:mt-0 sm:pt-4 sm:pb-10 sm:px-4 overflow-hidden">
            <div className="flex w-full">
                <div className="font-spoqaMedium text-black text-SH3_M relative mt-8 mb-3 ml-[15%] sm:hidden">
                    포리포 추천, HOT🔥 개발자
                </div>
            </div>
            <Carousel />
            <div className="flex gap-32 lg:gap-20">
                <Filter />
                <div>
                    <JobFilter />
                    <Cards />
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;
