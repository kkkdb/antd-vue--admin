// vue.config.js for less-loader@6.0.0
const path = require("path"); // 引入path模块
function resolve(dir) {
  return path.join(__dirname, dir); //path.join(_dirname)设置绝对路径
}
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#1DA57A",
            "link-color": "#1DA57A",
            "border-radius-base": "2px"
          },
          javascriptEnabled: true
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      //第一个参数：别名 第二个参数：路径
      .set("@components", resolve("src/components"))
      .set("@assets", resolve("src/assets"))
      .set("@common", resolve("src/common"))
      .set("@views", resolve("src/views"));
  }
};
