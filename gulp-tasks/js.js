var gulp = require('gulp');
var plumber = require('gulp-plumber');
var webpack = require('gulp-webpack');
var paths = require('./paths');

var config = {
  entry: './src/scripts/main.coffee',
  output: {
    filename: 'main.js'
  },
  module: {
    loaders: [{
      test: /\.coffee$/,
      loader: 'coffee-loader'
      }]
  }
};

gulp.task('js', function() {
  gulp.src(paths.script)
    .pipe(plumber())
    .pipe(webpack(config))
    .pipe(gulp.dest(paths.dest + 'js/'));
});
