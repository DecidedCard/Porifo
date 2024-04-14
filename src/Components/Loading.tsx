import React from "react";
import LoadingLottie from "../../public/poripo_loading.json";
import Lottie from "react-lottie";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingLottie,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const Loading = () => {
    return (
        <div>
            <Lottie options={defaultOptions} />
        </div>
    );
};

export default Loading;
