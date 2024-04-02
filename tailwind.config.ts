import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropFilter: {
      },
      fontFamily: {
        spoqaBold: ['SpoqaHanSansNeo-Bold', 'sans-serif'],
        spoqaMedium: ['SpoqaHanSansNeo-Medium', 'sans-serif'],
        spoqaRegular: ['SpoqaHanSansNeo-Regular', 'sans-serif'],
        spoqaLight: ['SpoqaHanSanNeo-Light', 'sans-serif'],
      },
      fontSize: {
      },
      fontWeight: {
        'bold': '700',
        'medium': '500',
      },
      lineHeight: {
      },
      colors: {
        'gray': '#f1f1f1',
        'gray-black': '#202020',
        "primary": {
          500: "#0099ff"
        },
      },
    },
  },
  plugins: [],
};

export default config;
