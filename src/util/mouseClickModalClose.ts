import { RefObject, SetStateAction } from "react";

export const mouseClickModalClose = (
    e: MouseEvent,
    modal: boolean,
    ref: RefObject<HTMLDivElement>,
    set: (value: SetStateAction<boolean>) => void,
) => {
    const { target } = e;
    console.log("target", target);
    console.log("ref.current", ref.current);
    if (modal && ref.current && !ref.current.contains(target as Node)) {
        set(false);
    }
};
