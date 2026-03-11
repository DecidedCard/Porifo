import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-gray_1 -z-10 h-[172px] px-[190px] py-[60px] flex flex-row gap-6 items-start sm:items-center sm:justify-center sm:w-full sm:h-[318px] sm:py-10 sm:px-9 sm:flex-col">
            <div className="sm:hidden">
                <Image
                    className="flex flex-col items-start justify-start w-[104px] h-[34.5px] overflow-visible mb-5"
                    src="../porifo.svg"
                    alt="포리포 로고"
                    width={80}
                    height={80}
                />
                <div className="w-[1410px] h-[52px] flex flex-col gap-1 items-start justify-start text-P7_R text-gray_4">
                    <p className="w-[622px] h-[20px] sm:w-full">
                        (주)포리포 | 대표 : 먼작귀 | 개인정보보호책임자 : 금상호 | 생성일 : 2024년 3월 26일
                    </p>
                    <p className="w-[410px] h-[22px] sm:w-full">©️PORIFO. All rights reverved.</p>
                </div>
            </div>

            <div className="hidden sm:flex sm:justify-center sm:items-center sm:flex-col sm:w-full sm:text-gray_4 sm:gap-3 sm:text-P8_R">
                <Image
                    className="flex flex-col items-center justify-center overflow-visible sm:mb-4"
                    src="../porifo.svg"
                    alt="포리포 로고"
                    width={80}
                    height={80}
                />
                <p>(주)포리포</p>
                <p>대표 : 먼작귀</p>
                <p>개인정보보호책임자 : 금상호</p>
                <p>생성일 : 2024년 3월 26일</p>
                <p>©️PORIFO. All rights reverved.</p>
            </div>
        </div>
    );
};

export default Footer;
