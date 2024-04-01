import React from "react";
import UserInfo from "@/Components/MyPageInput/UserInfo";
import URL from "@/Components/MyPageInput/URL";
import Project from "@/Components/MyPageInput/Project";
import Introduction from "@/Components/MyPageInput/Introduction";

const myPage = () => {
    return (
        <div>
            <UserInfo />
            <URL />
            <Project />
            <Introduction />
        </div>
    );
};

export default myPage;
