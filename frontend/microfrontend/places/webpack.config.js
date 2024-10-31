const packageJson =  require('./package.json');
const  HtmlWebpackPlugin =  require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const svgToMiniDataURI = require('mini-svg-data-uri');
module.exports = {
  optimization: {
    splitChunks: false,
  },
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'user-bundle.js',
    publicPath: 'auto'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3001,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}]],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
        generator: {
          dataUrl: content => {
            content = content.toString();
            return svgToMiniDataURI(content);
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      publicPath: '/'
    }),
    new ModuleFederationPlugin({
      name: 'places',
      filename: 'placesRemoteEntry.js',
      exposes: {
        './EntryPoint': '/src/MkfModuleInit.js',
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          eager: true,
          requiredVersion: packageJson.dependencies.react
        },
        'react-router-dom': {
          eager: true,
          requiredVersion: packageJson.dependencies['react-router-dom']
        },
        'react-dom': {
          eager: true,
          requiredVersion: packageJson.dependencies["react-dom"]
        }
      }
    }),
  ],
}