import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successNotify = ({ title }: { title: string }) => {
    toast.success("회원가입이 완료되었습니다!", {
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
