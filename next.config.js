/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HYGRAPH_ENDPOINT: process.env.HYGRAPH_ENDPOINT,
    NEXT_PUBLIC_SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
    NEXT_PUBLIC_TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
    NEXT_PUBLIC_EMAILJS_KEY: process.env.NEXT_PUBLIC_EMAILJS_KEY,
  }
}

module.exports = nextConfig
