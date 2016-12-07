var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports ={
	entry:  ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
	resolve:{/*
		alias:{
			"react":pathToReact//试图去匹配压缩过的react.js
		},*/
		 extensions: ['', '.js', '.jsx','.scss']
	},
	output:{
		path:path.resolve(__dirname,'build'),
		filename: 'index.js',
	},
	 devServer: {
      inline: true,
      port: 6868
    },
	module:{
			noParse:[pathToReact],//禁止解析压缩的react.js
			loaders:[
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
			    loader: 'babel',
				query:{ 
					presets:['es2015','react']
				}
			},{
				test: /\.css$/,
      			loader: 'style!css'
			},{
				test: /\.less$/,
      			loader: 'style!css!less'
			},{
				test: /\.scss$/,
				 loader:'style!css!sass?sourceMap'
      			//loader:ExtractTextPlugin.extract("style-loader","css-loader","sass-loader?sourceMap")
			},{
				test: /\.(png|jpg)$/, 
     			loader: 'url?limit=8192' 
			}
			]
		},
	plugins:[
	 new webpack.BannerPlugin("合并的模块都在此该文件下包括了js css 图片"),	//添加注释，内置插件，第三方需要自己npm install
	 //new ExtractTextPlugin('styles.css')
	]
}