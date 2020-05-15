const withSass = require("@zeit/next-sass");
const withTM = require("next-plugin-transpile-modules");

module.exports = withTM(
  withSass({
    transpileModules: ["react-bulma-components"], // Tell next to transpile the react-bulma-components module
    // NOTE: this also allow to use abolute import from this folder not only for the _variables.sass file
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.resolve.modules.push("./pages"); // Add to webpack configuration the folder where you put the _variables file
      return config;
    },
  })
);
