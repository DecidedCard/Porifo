/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cyhvfqdzonehvongdtow.supabase.co",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "heurm-tutorial.vlpt.us",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "k.kakaocdn.net",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
