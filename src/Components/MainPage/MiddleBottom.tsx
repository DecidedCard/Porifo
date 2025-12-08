const MiddleBottom = () => {
    return (
        <main>
            <div className="flex flex-col gap-4 pt-10 items-center justify-start sm:w-full sm:-mb-16 sm:-mt-5">
                <div className="flex items-center justify-center font-spoqaMedium text-black text-center text-H4_B sm:text-[18px] sm:w-full sm:h-[72px] sm:">
                    포리포로 제작된
                    <br />
                    개발자들의 포트폴리오를 확인해 보세요
                </div>
                <div className="flex items-center justify-center text-gray_4 text-center font-spoqaRegular self-stretch text-H4_B sm:text-[12px]">
                    자신이 만든 포트폴리오를 공유하고 커뮤니티 활동을 할 수 있습니다.
                    <br />
                    다른 개발자들의 포트폴리오에 참견하세요 😎
                </div>
            </div>
        </main>
    );
};

export default MiddleBottom;
