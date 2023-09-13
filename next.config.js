const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
           {
            hostname: 'asset.cloudinary.com',
            protocol:'https'
           }
           
        ]
    }
}

module.exports = nextConfig
