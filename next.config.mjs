/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"t3.ftcdn.net",
                protocol: "https"
            }
        ]
    }
};

export default nextConfig;
