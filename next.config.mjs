/** @type {import('next').NextConfig} */

const { RECAPTCHA_SITE_KEY, HOST } = process.env;

const nextConfig = {
  env: {
    RECAPTCHA_SITE_KEY,
    HOST,
  },
};

export default nextConfig;
