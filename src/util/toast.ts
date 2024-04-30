import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successNotify = ({ title }: { title: string }) => {
    toast.success(title, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
    });
};

export const infoNotify = ({ title }: { title: string }) => {
    toast.info(title, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
    });
};

export const warnNotify = ({ title }: { title: string }) => {
    toast.warn(title, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
    });
};
export const errorNotify = ({ title }: { title: string }) => {
    toast.error(title, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
    });
};
