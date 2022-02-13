module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "components": "@/components",
        "router": "@/router",
        "views": "@/views",
        "common": "@/common",
        "network": "@/network",
      }
    }
  }
}