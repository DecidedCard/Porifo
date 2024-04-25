import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successNotify = ({ title }: { title: string }) => {
    toast.success(title, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
    });
};
