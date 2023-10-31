const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      title: "Zhansdu"
    }
  },
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "~": path.resolve(__dirname, "./nodemodules")
      },
      extensions: [".js", ".vue", ".json"]
    }
  }
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `
  //         @import "@/scss/_variables.scss";
  //       `
  //     }
  //   }
  // }
});
