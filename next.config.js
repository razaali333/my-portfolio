/** @type {import('next').NextConfig} */
// .env file:


const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_BLACKLIST_COUNTRIES: process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES,
  }
}

module.exports = nextConfig