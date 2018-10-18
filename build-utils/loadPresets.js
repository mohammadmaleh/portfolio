const webpackMerge = require("webpack-merge");

const applyPreset = env => {
  const { presets } = env;
  /**@type { string[] }:*/
  if (!presets)
    return false
  const mergedPresets = [].concat(...[presets]);
  const mergedConfig = mergedPresets.map(presetName =>
    require(`./presets/webpack.${presetName}`)(env)
  );

  return webpackMerge({}, ...mergedConfig);
};
module.exports = applyPreset;
