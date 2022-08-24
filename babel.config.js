module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      ["module:react-native-dotenv", {
        "mo": "@env",
        "path": ".env",
        "blocklist": null,
        "allowlist": null,
        "safe": true,
        "allowUndefined": true
      }]
    ]
  };
};
