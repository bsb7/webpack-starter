const path = require("path");
// html plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
    devtool:"none",
    entry:{
        main:"./src/index.js",
        vendor:'./src/vendor.js'
    },
    // -dev version - no hash content, prod version - hash content   
    // output:{
    //     filename:"main.[contentHash].js",
    //     path: path.resolve(__dirname, 'dist')
    // },
    // plugins:[new HtmlWebpackPlugin({
    //     template:'./src/template.html'
    // })],
    module:{
        rules:[
            {
                test:/\.html$/,
                use:["html-loader"]
            },
            {
                test:/\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options:{
                        name:"[name].[ext]",
                        outputPath:'imgs'
                    }
                }
            },
        ]
     },
}