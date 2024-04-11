const Recommendation = () => {
    return (
        <main className="">
            <div className="flex flex-col justify-center items-center h-[450px] w-screen bg-hihigray">
                <div className="flex flex-col gap-6 items-start justify-start">
                    <p className="flex items-start justify-start font-spoqaBold leading-normal font-bold text-[30px] mb-5">
                        포리포 추천, HOT🔥 개발자
                    </p>
                </div>
                <div className="flex flex-row gap-6 items-start justify-start shrink-0 relative">

                    {/* 1번 */}
                    <div className="flex pl-6 pr-6 pt-4 bg-white rounded-2xl border-solid border border-gray w-[270px] h-[180px]">
                        {/* <div className="flex flex-row gap-2 items-center justify-center shrink-0 relative">
                            <img
                                className="rounded-[50%] shrink-0 w-10 h-10 relative"
                                src="4.png"
                            />
                            <p className="text-left font-spoqaMedium leading-normal relative flex items-center justify-start">
                                이재상
                            </p>
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                            <img
                                className="w-[100px] h-[45px] rounded-lg flex-1 h-[82px] relative"
                                src="22.png"
                            />
                            <img
                                className="w-[100px] h-[45px] rounded-lg flex-1 h-[82px] relative"
                                src="22.png"
                            />
                        </div> */}
                    </div>

                    {/* 2번 */}
                    <div className="pl-6 pr-6 pt-4 bg-white rounded-2xl border-solid border border-gray flex flex-col gap-4 items-start justify-start shrink-0 w-[270px] h-[180px] relative">
                        <div className="flex flex-row gap-2 items-center justify-center shrink-0 relative">
                            <img
                                className="rounded-[50%] shrink-0 w-10 h-10 relative"
                                src="5.png"
                            />
                            <p className="text-left font-spoqaMedium leading-normal relative flex items-center justify-start">
                                윤창식
                            </p>
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                            <img
                                className="w-[100px] h-[45px] rounded-lg flex-1 h-[82px] relative"
                                src="22.png"
                            />
                            <img
                                className="w-[100px] h-[45px] rounded-lg flex-1 h-[82px] relative"
                                src="22.png"
                            />
                        </div>
                    </div>

                    {/* 3번 */}
                    <div className="pl-6 pr-6 pt-4 bg-white rounded-2xl border-solid border border-gray flex flex-col gap-4 items-start justify-start shrink-0 w-[270px] h-[180px] relative">
                        <div className="flex flex-row gap-2 items-center justify-center shrink-0 relative">
                            <img
                                className="rounded-[50%] shrink-0 w-10 h-10 relative"
                                src="6.png"
                            />
                            <p className="text-left font-spoqaMedium leading-normal relative flex items-center justify-start">
                                최원장
                            </p>
                        </div>
                        <div
                            className="flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                            <img
                                className="w-[100px] h-[45px] rounded-lg flex-1 h-[82px] relative"
                                src="22.png"
                            />
                            <img
                                className="w-[100px] h-[45px] rounded-lg flex-1 h-[82px] relative"
                                src="22.png"
                            />
                        </div>
                    </div>

                    {/* 4번 */}
                    <div className="pl-6 pr-6 pt-4 bg-white rounded-2xl border-solid border border-gray flex flex-col gap-4 items-start justify-start shrink-0 w-[270px] h-[180px] relative">
                        <div className="flex flex-row gap-2 items-center justify-center shrink-0 relative">
                            <img
                                className="rounded-[50%] shrink-0 w-10 h-10 relative"
                                src="7.png"
                            />
                            <p className="text-left font-spoqaMedium leading-normal relative flex items-center justify-start">
                                권혁우
                            </p>
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                            <img
                                className="w-[100px] h-[45px] rounded-lg flex-1 h-[82px] relative"
                                src="22.png"
                            />
                            <img
                                className="w-[100px] h-[45px] rounded-lg flex-1 h-[82px] relative"
                                src="22.png"
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-20">
                <p className="flex items-center justify-center font-bold text-[40px] leading-normal">
                    동료들이 올린 양질의 정보를
                    <br />
                    손쉽게 확인할 수 있어요
                </p>
                <p className="text-gray3 leading-normal flex items-start justify-start mt-5 pr-24 text-[20px]">
                    우리 옆의 동료도 이걸 쓰고 있을 수 있어요!
                </p>
            </div>


        </main>
    );
};

export default Recommendation;