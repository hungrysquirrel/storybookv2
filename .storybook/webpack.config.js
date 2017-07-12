
const path = require('path');
const srcPath = path.join(__dirname, '../src');
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);
  config.module.rules.push({
    test: /\.svg$/,
    include: path.join(srcPath, 'icons'),
    loaders: [
      'svg-sprite-loader?' + JSON.stringify({
        name: '[name].[hash]',
        prefixize: true
      }),
      'svgo-loader?' + JSON.stringify({
        plugins: [
          { removeTitle: true },
          { convertPathData: false },
          { removeUselessStrokeAndFill: true }
        ]
      })
    ]
  });
  config.resolve.extensions.push('.svg');
  return config;
}