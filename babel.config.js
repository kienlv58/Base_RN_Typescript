module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          actions: './src/actions',
          httpClient: './src/httpClient',
          services: './src/services',
          components: './src/components',
          constants: './src/constants',
          screens: './src/screens',
          hooks: './src/hooks',
          locale: './src/locale',
          reducers: './src/reducers',
          selectors: './src/selectors',
          store: './src/store',
          utils: './src/utils',
          navigators: './src/navigators',
          validations: './src/validations',
        },
      },
    ],
  ],
};
