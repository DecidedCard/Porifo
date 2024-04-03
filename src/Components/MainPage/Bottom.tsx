import Link from "next/link";

const Bottom = () => {
    return (
        <main className="">
            <div className="flex flex-col gap-2.5 items-center justify-center shrink-0 relative">
                <img
                    className="rounded-2xl shrink-0 w-[700px] h-[388px] relative"
                    src="33.png"
                />
                <div className="p-6 flex flex-col gap-2 items-start justify-start shrink-0 relative">
                    <div className="mr-80 flex flex-col gap-2 items-start justify-start shrink-0 relative">
                        <p className="text-secondary text-left font-spoqaBold font-semibold leading-normal relative flex items-center justify-start">
                            포토샵을 몰라도
                        </p>
                        <p className="text-left font-spoqaBold font-bold leading-normal text-xl relative flex items-center justify-start">
                            디자인 경험이 없어도
                            <br />
                            감각적인 포트폴리오 사이트가 만들어져요
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-20 flex flex-col gap-2.5 items-center justify-center shrink-0 relative">
                <img
                    className="rounded-2xl shrink-0 w-[600px] h-[300px] relative"
                    src="22.png"
                />
                <div className="p-6 mr-52 flex flex-col gap-2 items-start justify-start shrink-0 relative">
                    <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                        <p className="text-secondary text-left font-spoqaBold font-semibold leading-normal relative flex items-center justify-start">
                            나의 포트폴리오를 공유하고
                        </p>
                        <p className="text-left font-spoqaBold font-bold leading-normal text-xl relative flex items-center justify-start">
                            다른 동료 개발자들과의 커뮤니티를 통해
                            <br />
                            나의 포트폴리오에 피드백을 받을 수 있어요
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-20 flex flex-col gap-2.5 items-center justify-center shrink-0 relative">
                <img
                    className="rounded-2xl shrink-0 w-[500px] h-[300px] relative"
                    src="11.png"
                />
                <div className="p-6 mr-80 flex flex-col gap-2 items-start justify-start shrink-0 relative">
                    <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                        <p className="text-secondary text-left font-spoqaBold font-semibold leading-normal relative flex items-center justify-start">
                            무슨 내용을
                        </p>
                        <p className="text-left font-spoqaBold font-bold leading-normal text-xl relative flex items-center justify-start">
                            넣어볼까요?
                        </p>
                    </div>
                </div>
            </div>

            <Link href={"/community"} className="flex items-center justify-center mt-20">
                <div className="bg-primary rounded-lg flex gap-2 items-center justify-center shrink-0 w-[200px] h-[45px] relative">
                    <button className="text-white text-center text-xs leading-[32px] flex items-center justify-center">
                        더 많은 피드를 커뮤니티에서 보기
                    </button>
                </div>
            </Link>

        </main>
    );
};

export default Bottom;