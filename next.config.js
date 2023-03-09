/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// Startup funcs
const mongoDBConnect = require('./app/lib/mongodb');
mongoDBConnect();

