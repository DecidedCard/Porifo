import Image from "next/image";

import Card from "./Card";

const MiddleRight = () => {
    return (
        <main>
            <div className="flex flex-col gap-24 items-start justify-start sm:p-5 sm:gap-20 sm:mt-14">
                {/* 1번 */}
                <Card
                    image1="/assets/image/mainImage1.svg"
                    image2="/assets/image/mainpeple1.png"
                    text1={["짧은 시간을 투자해도", "그럴싸한 포트폴리오가 완성되더라고요"]}
                    text2="3년차 프론트엔드 개발자"
                    stack="React / Vue.js / Angular"
                />

                {/* 2번 */}
                <Card
                    image1="/assets/image/mainImage2.svg"
                    image2="/assets/image/mainpeple2.png"
                    text1={["취업에 포트폴리오는 필수잖아요!", "저는 포리포에서 만들었어요"]}
                    text2="주니어 벡엔드 개발자"
                    stack="Java / Spring Boot / MySQL"
                />

                {/* 3번 */}
                <Card
                    image1="/assets/image/mainImage3.svg"
                    image2="/assets/image/mainpeple3.png"
                    text1={["개발자 전용 포트폴리오 사이트라", "포트폴리오 구성이 깔끔해요"]}
                    text2="2년차 풀 스택 개발자"
                    stack="Flutter / Node.js / SQL"
                />
            </div>
        </main>
    );
};

export default MiddleRight;
