import Link from "next/link";

const Cover = () => {
    return (
        <main className="min-h-screen w-full">
            <div className="flex justify-center bg-gray h-auto md:h-[530px] relative">
                <div className="flex flex-col items-center justify-center top-[170px] absolute">
                    <p className="text-gray-black text-center font-bold text-[65px] leading-[100px] font-spoqaBold">
                        For Your Career, PORIFO
                    </p>
                    <p className="text-gray-black text-center font-bold text-[30px] font-spoqaMedium-bold">
                        포리포에서 당신의 커리어를 넓혀보세요.
                    </p>
                    <div className="pt-[85px] flex flex-col gap-2 items-center justify-center">
                        <div className="bg-primary rounded-lg pt-1 pr-3 pb-1 pl-3 flex flex-row gap-2 items-center justify-center w-[150px] h-[50px]">
                            <button className="text-white text-center font-medium text-[14px] leading-[32px] flex items-center justify-center">
                                이력서 등록하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Cover;