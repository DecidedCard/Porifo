import Image from "next/image";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <Image
                src="assets/image/404.svg"
                alt="404 이미지"
                width={600}
                height={442}
                className="flex items-center justify-center w-[600px] h-[442.5px]"
            />
        </div >
    );
}