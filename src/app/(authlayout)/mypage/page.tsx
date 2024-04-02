import React from "react";

import UserInfo from "@/Components/MyPageComponents/UserInfo";
import URL from "@/Components/MyPageComponents/URL";
import Project from "@/Components/MyPageComponents/Project";
import Introduction from "@/Components/MyPageComponents/Introduction";
import Buttons from "@/Components/MyPageComponents/Buttons";
import Navigation from "@/Components/MyPageComponents/Navigation";

const myPage = () => {
    return (
        <div className="flex gap-10 w-fit mx-auto">
            <Navigation />
            <div className="w-fit">
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
