import withSvgr from 'next-plugin-svgr';

/** @type {import('next').NextConfig} */
const nextConfig = {
    fileLoader: true,
};

export default withSvgr(nextConfig);
