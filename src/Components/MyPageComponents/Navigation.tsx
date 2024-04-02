import React from "react";

const Navigation = () => {
    return (
        <nav className="flex flex-col justify-evenly border border-solid border-slate-800">
            <button>기본정보</button>
            <button>소개</button>
            <button>프로젝트</button>
            <button>URL</button>
        </nav>
    );
};

export default Navigation;
