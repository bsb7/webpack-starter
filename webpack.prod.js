const path = require("path");
const common = require('./webpack.common');
const merge = require('webpack-merge');
module.exports = merge(common, {
    mode:"production",
    devtool:"none",
    entry:"./src/index.js",
    output:{
        filename:"main.[contentHash].js",
        path: path.resolve(__dirname, 'dist')
    },
    // plugins:[new HtmlWebpackPlugin({
    //     template:'./src/template.html'
    // })],
    // module:{
    //     rules:[
    //         {
    //             test:/\.scss$/,
    //             use:["style-loader",
    //                 "css-loader", 
    //                 "sass-loader"]
    //         }
    //     ]
    //  },
})