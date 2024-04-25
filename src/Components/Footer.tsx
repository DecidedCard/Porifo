import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-hihigray -z-10 h-[172px] px-[190px] py-[60px] flex flex-row gap-6 items-start sm:w-[480px] sm:-ml-44 sm:flex-col">
            <Image
                className="flex flex-col items-start justify-start w-[104px] h-[34.5px] overflow-visible"
                src="../porifo.svg"
                alt="포리포 로고"
                width={80}
                height={80}
            />
            <div className="w-[1410px] h-[52px] flex flex-col gap-3 items-start justify-start text-sm text-gray3 sm:text-[12px] sm:w-[470px]">
                <p className="w-[622px] h-[20px] sm:w-[470px]">
                    (주)포리포 | 대표 : 먼작귀 | 개인정보보호책임자 : 금상호 | 생성일 : 2024년 3월 26일
                </p>
                <p className="w-[410px] h-[22px]">경상북도 안동시 육사로 333 | ©️PORIFO. All rights reverved.</p>
            </div>
        </div>
    );
};

export default Footer;
