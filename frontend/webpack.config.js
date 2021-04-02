const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: [
    	path.join(process.cwd(), 'src/index.tsx'), // or whatever the path of your root file is
    ],
    mode: "development",
    module: {
        rules: [
		{
			test: /\.tsx?$/,
			loader: 'awesome-typescript-loader'
		}			
	]
    },
    resolve: {
       alias: {
             Components: path.resolve(__dirname, 'src/components/')
       },
       extensions: ['.js', '.jsx', '.react.js', '.ts', '.tsx'] 
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true,
        historyApiFallback: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
