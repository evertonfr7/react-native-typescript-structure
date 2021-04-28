module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        alias: {
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@routes': './src/routes',
          '@services': './src/services',
          '@views': './src/views',
        }
      }]
    ],
    ignore: [
      '**/*.spec.ts'
    ]
  };
};