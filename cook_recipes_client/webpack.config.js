const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require('webpack');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "./dist"),
        // filename: "./dist/bundle.js"
        // path: path.join(__dirname, ""),
        filename: "bundle.js",
        publicPath: "/",
    },

    devServer: {
        static: "/dist",
        hot: true,
        port: 3001,
        open: true,
        headers: { 
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",           
            "Access-Control-Allow-Headers": "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization"
        },
        historyApiFallback: true,
        // historyApiFallback: {
            // index:'/dist/index.html'
        // },
    },

    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
        // fallback: { "stream": false },
        fallback: { "stream": require.resolve("stream-browserify") },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                // use: {
                //     loader: "awesome-typescript-loader"
                // }
                use: ["babel-loader", "ts-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ]

}