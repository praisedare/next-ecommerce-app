const mongoDBConnect = require('./lib/mongodb')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// Startup funcs
mongoDBConnect();

