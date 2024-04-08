import Link from "next/link";
import Button from "../Commen/Button";

const Cover = () => {
    return (
        <main className="min-h-screen w-full animate-fadein">
            <div className="flex justify-center bg-gray h-auto md:h-[530px] relative">
                <div className="flex flex-col items-center justify-center top-[170px] absolute">
                    <p className="text-gray-black text-center font-bold text-[65px] leading-[100px] font-spoqaBold">
                        For Your Career, PORIFO
                    </p>
                    <p className="text-gray-black text-center font-bold text-[30px] font-spoqaMedium-bold">
                        포리포에서 당신의 커리어를 넓혀보세요.
                    </p>
                    <div className="pt-[85px] flex flex-col gap-2 items-center justify-center">
                        <div>
                            <Button text="이력서 등록하기" size="m" fontSize="m" color="primary" border="none" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Cover;
