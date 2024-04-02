import React from "react";

import UserInfo from "@/Components/MyPageInput/UserInfo";
import URL from "@/Components/MyPageInput/URL";
import Project from "@/Components/MyPageInput/Project";
import Introduction from "@/Components/MyPageInput/Introduction";
import Buttons from "@/Components/MyPageInput/Buttons";

const myPage = () => {
    return (
        <div>
            <UserInfo />
            <URL />
            <Project />
            <Introduction />
            <Buttons />
        </div>
    );
};

export default myPage;
