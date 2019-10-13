const path = require("path");
const productionConfig = require("./webpack/production");
const developmentConfig = require("./webpack/development");

module.exports = env => {
  if (env.NODE_ENV === "production")
    return productionConfig(env, path.resolve(__dirname));

  if (env.NODE_ENV === "development")
    return developmentConfig(env, path.resolve(__dirname));
};
