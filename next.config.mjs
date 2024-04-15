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
        ],
    },
};

export default nextConfig;
