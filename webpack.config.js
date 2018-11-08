var path = require("path");

module.exports = {
    entry :"./src/index.js",
    mode: "development",
    output : {
        filename: "main.js",
        path : path.resolve(__dirname, "dist")
    },
    devServer : {
        contentBase : "dist",
        overlay : true
    },
    module: {
        rules : [
            {
                test: /\.js$/,
                use :[
                    {
                        loader : "babel-loader"
                    }
                ],
                exclude: /node_modules/
            },
            {
                test : /\.css$/,
                use : [
                    {loader : "style-loader"},
                    {loader : "css-loader"}
                ]
            },
            {
                test : /\.html$/,
                use : [
                    {
                        loader : "file-loader",
                        options: {
                            name : "[name].html"
                        }
                    },
                    {loader : "extract-loader"},
                    {
                        loader : "html-loader",
                        options : {
                            attrs : ["img:src"]
                        }
                    }
                ]
            },
            {
                test : /\.(jpg|png|gif)$/,
                use : [
                    {
                        loader : "file-loader",
                        options: {
                            name : "images/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    }
}

