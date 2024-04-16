import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: ["border-red-400"],
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
                primary: "#0099ff",
                secondary: "#00D0ED",
                success: "#07CF57",
                info: "#0B79E7",
                alert: "#F13131",
                warning: "#FF8039",
                favorite: "#FFD645",
                disabled: "#D9D9D9",
                gray: "#f1f1f1",
                gray2: "#DBDBDB",
                gray3: "#9A9A9A",
                hihigray: "#FAFAFA",
                middlegray: "#bdbebd",
                deepgray: "#DCDDDF",
                grayblack: "#202020",
                nonegray: "#9A9A9A",
                black: "#101010",
                blue: "#F1F9FF",
                sky_blue: "#E1FFFF",
                green: "#E0FFEC",
                realblack: "#000000",
            },
            screens: {
                lg: { min: "1200px", max: "1500px" },
            },
        },
    },
    plugins: [],
};

export default config;
