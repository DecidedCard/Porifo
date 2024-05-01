import useMouseClickClose from "@/hooks/useMouseClickClose";
import Image from "next/image";
import React, { RefObject, SetStateAction, useEffect, useRef } from "react";

const CheckImage = ({
    image,
    checkImage,
    setCheckImage,
}: {
    image: string;
    checkImage: number;
    setCheckImage: (value: number | null) => void;
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const mouseClickModalClose = (
        e: MouseEvent,
        modal: boolean,
        ref: RefObject<HTMLDivElement>,
        set: (value: number | null) => void,
    ) => {
        const { target } = e;
        if (modal && ref.current && !ref.current.contains(target as Node)) {
            set(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", (e) =>
            mouseClickModalClose(e, checkImage !== null, modalRef, setCheckImage),
        );
    }, [checkImage, setCheckImage]);

    return (
        <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-80 z-10">
            <div ref={modalRef}>
                <Image src={image} alt="포트폴리오" width={600} height={600} />
            </div>
        </div>
    );
};

export default CheckImage;
