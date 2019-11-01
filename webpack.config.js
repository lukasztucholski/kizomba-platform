const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'script.js',
  },

  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
  ],

  devServer: {
    port: 3000,
    contentBase: './src',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
                indentedSyntax: true, // optional
              },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      // This is resolve of error:
      // "You are using the runtime-only build of Vue where the template compiler is not available.
      // Either pre-compile the templates into render functions, or use the compiler-included build."
      vue: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname),
      '~': path.resolve(__dirname, 'src'),
      plugins: path.resolve(__dirname, 'src/utils/plugins'),
      store: path.resolve(__dirname, 'src/store'),
      router: path.resolve(__dirname, 'src/router'),
    },
    extensions: ['.js', '.vue'],
  },
};
