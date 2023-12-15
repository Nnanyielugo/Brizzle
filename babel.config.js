module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          _assets: './assets',
          src: './src',
        },
      },
    ],
  ],
};
