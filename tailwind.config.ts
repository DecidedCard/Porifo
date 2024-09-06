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
            fontSize: {
                "headline/H1_B": ["80px", { lineHeight: "100px", fontWeight: 700 }],
                "headline/H2_B": ["60px", { lineHeight: "80px", fontWeight: 700 }],
                "headline/H3_B": ["50px", { lineHeight: "72px", fontWeight: 700 }],
                "headline/H4_B": ["40px", { lineHeight: "62px", fontWeight: 700 }],
                "headline/H5_B": ["30px", { lineHeight: "46px", fontWeight: 700 }],
                "headline/H6_B": ["26px", { lineHeight: "40px", fontWeight: 700 }],
                "headline/H7_B": ["22px", { lineHeight: "36px", fontWeight: 700 }],
                "headline/H1_L": ["80px", { lineHeight: "100px", fontWeight: 300 }],
                "headline/H2_L": ["60px", { lineHeight: "80px", fontWeight: 300 }],
                "headline/H3_L": ["50px", { lineHeight: "72px", fontWeight: 300 }],
                "headline/H4_L": ["40px", { lineHeight: "62px", fontWeight: 300 }],
                "headline/H5_L": ["30px", { lineHeight: "46px", fontWeight: 300 }],
                "subhead/SH1": ["40px", { lineHeight: "56px", fontWeight: 500 }],
                "subhead/SH2": ["30px", { lineHeight: "42px", fontWeight: 500 }],
                "subhead/SH3": ["24px", { lineHeight: "34px", fontWeight: 500 }],
                "subhead/SH4": ["20px", { lineHeight: "28px", fontWeight: 500 }],
                "subhead/SH5": ["16px", { lineHeight: "24px", fontWeight: 500 }],
                "body/P1_M": ["36px", { lineHeight: "64px", fontWeight: 500, letterSpacing: "-0.4px" }],
                "body/P1_R": ["36px", { lineHeight: "64px", fontWeight: 400, letterSpacing: "-0.4px" }],
                "body/P2_M": ["32px", { lineHeight: "60px", fontWeight: 500, letterSpacing: "-0.4px" }],
                "body/P2_R": ["32px", { lineHeight: "60px", fontWeight: 400, letterSpacing: "-0.4px" }],
                "body/P3_M": ["28px", { lineHeight: "54px", fontWeight: 500, letterSpacing: "-0.4px" }],
                "body/P3_R": ["28px", { lineHeight: "54px", fontWeight: 400, letterSpacing: "-0.4px" }],
                "body/P4_M": ["24px", { lineHeight: "48px", fontWeight: 500, letterSpacing: "-0.4px" }],
                "body/P4_R": ["24px", { lineHeight: "48px", fontWeight: 400, letterSpacing: "-0.4px" }],
                "body/P5_M": ["20px", { lineHeight: "38px", fontWeight: 500, letterSpacing: "-0.4px" }],
                "body/P5_R": ["20px", { lineHeight: "38px", fontWeight: 400, letterSpacing: "-0.4px" }],
                "body/P6_M": ["16px", { lineHeight: "32px", fontWeight: 500, letterSpacing: "-0.4px" }],
                "body/P6_R": ["16px", { lineHeight: "32px", fontWeight: 400, letterSpacing: "-0.4px" }],
                "body/P7_M": ["14px", { lineHeight: "22px", fontWeight: 500, letterSpacing: "-0.4px" }],
                "body/P7_R": ["14px", { lineHeight: "22px", fontWeight: 400, letterSpacing: "-0.4px" }],
                "body/P8_M": ["12px", { lineHeight: "16.8px", fontWeight: 500, letterSpacing: "-0.4px" }],
                "body/P8_R": ["12px", { lineHeight: "16.8px", fontWeight: 400, letterSpacing: "-0.4px" }],
                "body/P9_M": ["10px", { lineHeight: "14px", fontWeight: 500, letterSpacing: "-0.4px" }],
                "body/P9_R": ["10px", { lineHeight: "14px", fontWeight: 400, letterSpacing: "-0.4px" }],
                "body/P10_M": ["8px", { lineHeight: "14 px", fontWeight: 500, letterSpacing: "-0.4px" }],
                "body/P10_R": ["8px", { lineHeight: "14 px", fontWeight: 400, letterSpacing: "-0.4px" }],
            },
            colors: {
                primary: {
                    1: "#0099FF",
                    2: "#33ADFF",
                    3: "#66C2FF",
                    4: "#99D6FF",
                    5: "#CCEBFF",
                },
                secondary: {
                    1: "#00D0ED",
                    2: "#33DAF0",
                    3: "#66E3F4",
                    4: "#99ECF8",
                    5: "#CCF6FB ",
                },
                success: "#07CF57",
                info: "#0B79E7",
                alert: "#F13131",
                warning: "#FF8039",
                favorite: "#FFD645",
                disabled: "#D9D9D9",
                gray: {
                    1: "#FAFAFA",
                    2: "#F1F1F1",
                    3: "#DBDBDB",
                    4: "#9A9A9A",
                    5: "#565656",
                },
                background: {
                    blue: "#F1F9FF",
                    skyBlue: "#E1FFFF",
                    green: "#E0FFEC",
                    red: "#FFF1F1",
                },
            },
            screens: {
                sm: { max: "790px" },
                lg: { min: "791px", max: "1500px" },
            },
        },
    },
    plugins: [],
};

export default config;
