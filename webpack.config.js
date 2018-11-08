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
                    {loader : "html-loader"}
                ]
            }
        ]
    }
}

