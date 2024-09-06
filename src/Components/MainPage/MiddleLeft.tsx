import Link from "next/link";
import Button from "../Commen/Button";

const MiddleLeft = () => {
    return (
        <main className="flex justify-center mr-40 sm:mx-10">
            <div className="flex flex-row gap-4 justify-center">
                <div className="flex flex-col gap-4 items-start justify-start sm:gap-6">
                    <p className="tracking-wider text-headline/H4_B text-black text-left  sm:text-[22px]">
                        왜, 많은 개발자들이 <br /> 포리포로부터 시작할까요?
                    </p>
                    <p className="self-stretch text-subhead/SH4 text-gray-4 sm:text-[12px]">
                        우리는 누구나 쉽게 나만의 포트폴리오를 만들고 <br /> 공유할 수 있게 합니다.
                    </p>
                    <div>
                        <Link href={"/community"} className="text-body/P6_M">
                            <Button text="더 많은 포트폴리오 확인하기" size="extra" color="primary" border />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MiddleLeft;
