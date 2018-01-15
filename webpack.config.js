
// plugins
const path = require('path'), 
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      HTMLWebpackPlugin = require('html-webpack-plugin'),
      webpack = require('webpack'),
      UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
      OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin')
      CleanWebpackPlugin = require('clean-webpack-plugin');

// paths
var DEV = path.resolve(__dirname, 'dev'),
	DIST = path.resolve(__dirname, 'dist');


// begin config
const config = {
// this is where webpack will look in the index.js
 entry: {
   main:   DEV + '/index.js',
   project: DEV + '/assets/js/projects-js/projectPage.js',
   projectCalc: DEV + '/assets/js/projects-js/project-calc/project-calculator.js',
 },
 
 // the dist folder will created with a bundle.js file
 output: {
   path: __dirname + '/dist',
   filename: "[name].bundle.js"
 }, 
 // shortens the paths so we don't need long names to get to a file
 resolve: {
   extensions: ['.js', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png' ],
   alias: {
   		images: DEV + '/assets/images',
   		stylesheets: DEV + '/assets/stylesheets',
   		sounds: DEV + '/assets/audio',
         js: DEV + '/assets/js' 
   }
 },
 module: {
   rules: [

   		{
   			test: /\.js$/,
   			exclude: /node_modules/, 
   			use: [{
   				loader: 'babel-loader',
   				query: {
   					presets: ['env']
   				}

   			}]
         },
         {
         	test: /\.scss$/,
         	exclude: /node_modules/,
         	use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
         		fallback: 'style-loader',
         		use: [
         			'css-loader',
         			{
         				loader: 'postcss-loader',
         				options: {
         					plugins: () => [require('autoprefixer')]
         			}},
         			'sass-loader']
         		}))
         },
         {
            test: /.*\.(gif|png|jpe?g)$/i,
            use: [
            {
               loader: 'url-loader',
               options: {
                  limit: 5000,
                  name: 'assets/images/[name].[ext]'
               }
             }  

            ]
         }




   ]	 // end rules array 
 },
 plugins: [
 	new ExtractTextPlugin('main.css'),
 	new HTMLWebpackPlugin({
 		title: 'oscar rodriguez|web developer',
 		template: DEV + '/index.html'
 	}),
   new HTMLWebpackPlugin({  // Also generate a test.html
      filename: 'project-accordion.html',
      template: DEV + '/assets/pages/project-accordion.html',
      chunks: ['project']
    }),
   new HTMLWebpackPlugin({  // Also generate a test.html
      filename: 'project-calculator.html',
      template: DEV + '/assets/pages/project-calculator.html',
      chunks: ['project', 'projectCalc']
    }),
   new CleanWebpackPlugin(['dist']) 
 ],

 devServer: {
 	contentBase: DIST,
 	historyApiFallback: true,
 	inline: true,
 	open: true,
 	hot: true
 },
 devtool: 'eval-source-map',
  

};


module.exports = config; 



if (process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			warnings: false,
			mangle: true 
		}),
		new OptimizeCSSAssets()
     
  ); 	
}