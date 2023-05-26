module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@assets": "./src/assets",
            "@utils": "./src/utils",
            "@navigation": "./src/store",
            "@intarfaces": "./src/interfaces",
            "@hooks": "./src/hooks",
            "@constants": "./src/constants",
            "@data": "./src/data.json",
          },
        },
      ],
    ],
  };
};
