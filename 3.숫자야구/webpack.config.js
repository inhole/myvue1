// node 환경
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    mode: 'development', // 개발 : development, 배포 : production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'], // 확장자 처리
    },
    entry: {
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules:[{
            test: /\.vue$/,
            loader: 'vue-loader',
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    },
}