import { RefObject, SetStateAction } from "react";

export const mouseClickModalClose = (
    e: MouseEvent,
    modal: boolean,
    ref: RefObject<HTMLDivElement>,
    set: (value: SetStateAction<boolean>) => void,
) => {
    const { target } = e;
    if (modal && ref.current && !ref.current.contains(target as Node)) {
        set(false);
    }
};
