import React from "react";

import Lottie from "react-lottie-player";

import LoadingLottie from "../../public/poripo_loading.json";

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
            <Lottie loop animationData={LoadingLottie} play />
        </div>
    );
};

export default Loading;
