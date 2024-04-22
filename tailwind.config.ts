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
                slider: {
                    "0%": {
                        transform: "translateX(0px)",
                    },
                    "100%": {
                        transform: "translateX(-1400px)",
                    },
                },
            },
            animation: {
                fadein: "fadein 3s ease-in-out",
                slider: "slider 30s linear infinite",
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
                gray: "#F1F1F1",
                gray2: "#DBDBDB",
                gray3: "#9A9A9A",
                gray4: "#565656",
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
                sm: { min: "350px", max: "450px" },
                lg: { min: "1200px", max: "1500px" },
            },
        },
    },
    plugins: [],
};

export default config;
