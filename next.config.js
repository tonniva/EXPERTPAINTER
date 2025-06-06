const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'picsum.photos',"images.unsplash.com"
        ],
    },
};

module.exports = withNextIntl(nextConfig)
