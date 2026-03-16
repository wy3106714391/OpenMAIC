import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: undefined ,
  transpilePackages: ['mathml2omml', 'pptxgenjs'],
  serverExternalPackages: [],
  experimental: {
    proxyClientMaxBodySize: '200mb',
  },
};

export default nextConfig;
