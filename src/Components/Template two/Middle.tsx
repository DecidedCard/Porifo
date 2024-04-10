const Middle = () => {
    return (
        <main>

            <div className="my-10 gap-16 flex flex-row items-start justify-start self-stretch shrink-0">

                <div className="flex flex-col items-start justify-start self-stretch shrink-0" >
                    <p className="font-bold text-[22px] w-[] h-[]">
                        기술스택
                    </p>
                    <div className="bg-deepgray w-[370px] h-[1px] my-5"></div>
                </div>

                <div className="flex flex-col items-start justify-start">
                    <p className="font-bold text-[22px] w-[] h-[] text-left">
                        자기소개
                    </p>
                    <div className="bg-deepgray w-[370px] h-[1px] my-5"></div>
                    <div className="flex flex-row gap-2 items-start justify-start self-stretch shrink-0">

                    </div>
                </div>
            </div>

        </main>
    );
};

export default Middle;
