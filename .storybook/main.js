module.exports = {
   stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
   addons: [
      // {
      //    name: '@storybook/preset-scss',
      //    options: {
      //       cssLoaderOptions: {
      //          modules: true,
      //          localIdentName: '[name]__[local]--[hash:base64:5]',
      //       },
      //    },
      // },
      '@storybook/preset-scss',
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      '@storybook/addon-interactions',
      '@storybook/preset-create-react-app',
      '@storybook/preset-typescript',
   ],
   framework: '@storybook/react',
   core: {
      builder: '@storybook/builder-webpack5',
   },
}
