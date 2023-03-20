module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@interfaces": "./src/interfaces",
            "@assets": "./src/assets",
            "@lib": "./src/lib",
            "@components": "./src/components",
            "@pages": "./src/pages",
            "@storage": "./src/storage",
            "@utils": "./src/utils",
            "@services": "./src/services",
            "@hooks": "./src/hooks",
            "@contexts": "./src/contexts",
            "@routes": "./src/routes",
          },
        },
      ],
    ],
  };
};
