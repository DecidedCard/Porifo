import Image from "next/image";

const image = [
    "/assets/image/slide1.svg",
    "/assets/image/slide2.svg",
    "/assets/image/slide3.svg",
    "/assets/image/slide4.svg",
    "/assets/image/slide5.svg",
    "/assets/image/slide6.svg",
    "/assets/image/slide7.svg",
];

const MiddleImage = () => {
    return (
        <main className="overflow-hidden w-full sm:w-full">
            <div className="flex flex-row gap-8 items-start justify-start animate-slider">
                {image.map((item, idx) => (
                    <Image
                        key={idx}
                        className="rounded-2xl sm:w-[250px] sm:h-[274px]"
                        src={item}
                        alt="슬라이드 이미지"
                        width={370}
                        height={400}
                    />
                ))}
            </div>
        </main>
    );
};

export default MiddleImage;
