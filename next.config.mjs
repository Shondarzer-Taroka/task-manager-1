
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    reactStrictMode: true,

    experimental: {
        serverActions: true, // Enable Server Actions
    },
};

export default nextConfig;