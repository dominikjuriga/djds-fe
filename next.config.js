/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "default",
    domains: [
      "images.unsplash.com",
      "localhost",
      "djds-be-55tqe.ondigitalocean.app"
    ]
  },
  compress: true
}

module.exports = nextConfig
