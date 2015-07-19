var gulp = require('gulp');
var lint = require('gulp-coffeelint');
var paths = require('./paths');
var plumber = require('gulp-plumber');
var webpack = require('gulp-webpack');

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
  gulp.src(paths.allScripts)
    .pipe(lint(__dirname + '/coffeelint.json'))
    .pipe(lint.reporter());

  gulp.src(paths.script)
    .pipe(plumber())
    .pipe(webpack(config))
    .pipe(gulp.dest(paths.dest + 'js/'));
});
