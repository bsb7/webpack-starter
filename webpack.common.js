const path = require("path");
// html plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
    devtool:"none",
    entry:"./src/index.js",
    // -dev version - no hash content, prod version - hash content   
    // output:{
    //     filename:"main.[contentHash].js",
    //     path: path.resolve(__dirname, 'dist')
    // },
    plugins:[new HtmlWebpackPlugin({
        template:'./src/template.html'
    })],
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:["style-loader",
                    "css-loader", 
                    "sass-loader"]
            },
            {
                test:/\.html$/,
                use:["html-loader"]
            },
            {
                test:/\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options:{
                        name:"[name].[hash][ext]",
                        outputPath:'imgs'
                    }
                }
            }
        ]
     },
}