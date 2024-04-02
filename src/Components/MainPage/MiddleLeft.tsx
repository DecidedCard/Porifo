import Link from "next/link";

const MiddleLeft = () => {
    return (
        <main className="flex items-center justify-center">
            <div className="flex items-center flex-row gap-52 justify-center shrink-0 relative">
                <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative">
                    <p className="font-spoqaMedium text-black text-left font-bold text-3xl leading-normal relative flex items-center justify-start">
                        왜, 많은 개발자들이 <br /> 포리포로부터 시작할까요?
                    </p>
                    <p className="font-spoqaLight text-zinc-400 text-left leading-tight relative self-stretch flex items-center justify-start">
                        우리는 누구나 쉽게 나만의 포트폴리오를 만들고 <br /> 공유할 수 있게 합니다.
                    </p>
                    <div>
                        <button className="text-xs rounded-lg border border-primary px-2 py-1 flex items-center justify-center w-44 h-12 text-primary font-medium text-base leading-snug">
                            더 많은 포트폴리오 확인하기
                        </button>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default MiddleLeft;