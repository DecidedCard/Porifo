const MiddleBottom = () => {
    return (
        <main>
            <div className="flex flex-col gap-4 items-center justify-start sm:w-full">
                <div className="flex items-center justify-center tracking-wider leading-normal font-spoqaMedium text-black text-center font-bold text-[40px] sm:text-[18px]">
                    포리포로 제작된
                    <br />
                    개발자들의 포트폴리오를 확인해 보세요
                </div>
                <div className="flex items-center justify-center text-gray3 leading-normal tracking-wide text-center font-spoqaRegular self-stretch text-[20px] sm:text-[10px]">
                    자신이 만든 포트폴리오를 공유하고 커뮤니티 활동을 할 수 있습니다.
                    <br />
                    다른 개발자들의 포트폴리오에 참견하세요 😎
                </div>
            </div>
        </main>
    );
};

export default MiddleBottom;
