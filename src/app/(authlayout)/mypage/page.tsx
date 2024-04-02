import React from "react";

import UserInfo from "@/Components/MyPageComponents/UserInfo";
import URL from "@/Components/MyPageComponents/URL";
import Project from "@/Components/MyPageComponents/Project";
import Introduction from "@/Components/MyPageComponents/Introduction";
import Buttons from "@/Components/MyPageComponents/Buttons";

const myPage = () => {
    return (
        <div>
            <div className="mx-auto w-fit">
                <UserInfo />
                <URL />
                <Project />
                <Introduction />
                <Buttons />
            </div>
        </div>
    );
};

export default myPage;
