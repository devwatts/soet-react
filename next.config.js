/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: true,
  
 
}

module.exports = nextConfig


/*

webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
     new webpack.ProvidePlugin({
     $: "jquery",
     jQuery: "jquery",
     "window.jQuery": "jquery",
  }))
  return config;
},
*/ 