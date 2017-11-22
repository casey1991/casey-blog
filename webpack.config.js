var path = require("path");
var webpack = require('webpack');
module.exports = {
    entry:'./client/src/index.js',
    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname,'public/js')
    },
    devtool: 'inline-source-map',
    module:{
        rules:[
                {test:/.vue$/,loader:'vue-loader'},
                {test:/.scss/,use:['css-loader','style-loader','sass-loader']},
                {test:/.js$/,exclude:/node_modules/,loader:'babel-loader'}
            ]
    },
    plugins:[
            new webpack.ProvidePlugin({
                $:'jquery',
                jQuery:'jquery',
                Vue:['vue/dist/vue.esm.js','default']
            })
        ]
}