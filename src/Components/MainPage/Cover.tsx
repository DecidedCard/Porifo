const Cover = () => {
    return (
        <main>
            <div className="bg-graytext-2 h-[540px] relative">
                <div className="flex flex-col gap-4 items-center justify-center absolute left-20 top-[130px] w-[1280px]">
                    <div className="text-gray-black text-center font-bold text-[60px] leading-[100px]">
                        For Your Career, PORIFO
                    </div>
                    <div className="text-gray-black text-center font-bold text-[30px] leading-[62px]">
                        포리포에서 당신의 커리어를 넓혀보세요.
                    </div>
                    <div className="pt-[100px] flex flex-col gap-2 items-center justify-center">
                        <div className="bg-primary-1 rounded-lg pt-1 pr-3 pb-1 pl-3 flex flex-row gap-2 items-center justify-center w-[150px] h-[50px]">
                            <div className="text-white text-center font-medium text-[13px] leading-[32px] flex items-center justify-center">
                                이력서 등록하기
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Cover;