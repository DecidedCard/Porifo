import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // 여기에 추가적인 경로를 포함시키지 않습니다. 기존 설정이 이미 충분합니다.
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'spoqaBold': ['SpoqaHanSansNeo-Bold', 'sans-serif'],
        'spoqaMedium': ['SpoqaHanSansNeo-Medium', 'sans-serif'],
        "subhead-sh5-font-family": "SpoqaHanSansNeo-Medium, sans-serif",
        "body-p8m-font-family": "SpoqaHanSansNeo-Medium, sans-serif",
      },
      fontSize: {
        'h1b': '80px',
        'h4b': '40px',
        'p6m': '16px',
        "subhead-sh5-font-size": "16px",
        "body-p8m-font-size": "12px",
      },
      fontWeight: {
        'bold': '700',
        'medium': '500',
        "subhead-sh5-font-weight": "500",
        "body-p8m-font-weight": "500",
      },
      lineHeight: {
        'h1b': '100px',
        'h4b': '62px',
        'p6m': '32px',
        "subhead-sh5-line-height": "24px",
        "body-p8m-line-height": "24px",
      },
      colors: {
        'graytext-2': '#f1f1f1',
        'gray-black': '#202020', // 기존 'graytext-black'와 중복되므로, 이를 대체합니다.
        'primary-1': '#0099ff', // 기존 primary[500]와 동일한 값으로, 이를 대체합니다.
        'graytext-white': '#ffffff',
        "primary": {
          500: "#0099ff"
        },
      },
      // 기타 필요한 설정들은 여기에 추가합니다.
    },
  },
  plugins: [],
};

export default config;
