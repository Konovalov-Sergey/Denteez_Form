'use strict';

const path = require('path');

module.exports = {
    entry: './src/App.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['react-hot-loader', 'babel-loader']
            },
			{
				test: /\.(png|jpg|gif)$/,
				use: [
				  {
					loader: 'url-loader',
					options: {
					  limit: 8192
					}  
				  }
				]
			}
        ],
		loaders: [
			{
				test:  /\.css$/, 
				loader: "style-loader!css-loader!postcss-loader"
			}
		]
    },

    devServer: {
        proxy: {
            '/api': 'http://localhost:3000'
        }
    },

    devtool: 'cheap-module-eval-source-map',
    
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    },

};