/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Necesario cuando el sitio se sirve en https://userbyterex.github.io/ALPHA/
  basePath: process.env.GITHUB_ACTIONS ? '/ALPHA' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/ALPHA' : '',
  trailingSlash: true,
}

module.exports = nextConfig
