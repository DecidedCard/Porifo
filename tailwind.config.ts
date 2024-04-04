import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                fadein: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideRight: {
                    // 여기에 slideRight 애니메이션을 추가합니다.
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-50%)" },
                },
            },
            animation: {
                fadein: "fadein 2s ease-in-out",
                "slide-right": "slideRight 20s linear infinite", // 여기에 애니메이션 속성을 추가합니다.
            },
            backdropFilter: {},
            fontFamily: {
                spoqaBold: ["SpoqaHanSansNeo-Bold", "sans-serif"],
                spoqaMedium: ["SpoqaHanSansNeo-Medium", "sans-serif"],
                spoqaRegular: ["SpoqaHanSansNeo-Regular", "sans-serif"],
                spoqaLight: ["SpoqaHanSanNeo-Light", "sans-serif"],
            },
            fontSize: {},
            fontWeight: {
                bold: "700",
                medium: "500",
            },
            lineHeight: {},
            colors: {
                gray: "#f1f1f1",
                hihigray: "#FAFAFA",
                middlegray: "#bdbebd",
                deepgray: "#DCDDDF",
                grayblack: "#202020",
                primary: "#0099ff",
                secondary: "#00D0ED",
                black: "#101010",
            },
        },
    },
    plugins: [],
};

export default config;
