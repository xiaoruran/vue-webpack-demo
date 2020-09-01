
const path=require('path')
const htmlWebapckPlugin=require('html-webpack-plugin')


module.exports={
    entry: path.join(__dirname,'./src/main.js'),
    output:{
        path: path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
            new htmlWebapckPlugin({
                template:'./src/index.html',
                filename:'index.html'
            })
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader'] },
            {test:/\.(jpg|png|gif|bmp|ipeg)$/,use:'url-loader'},
            {test:/\.(eot|svg|ttf|woff|woff2)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.js"
        }
    }
}