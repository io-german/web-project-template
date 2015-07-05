var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var webpack = require('gulp-webpack');

var paths = {
  templates: 'src/templates/**/*.jade',
  styles: 'src/styles/**/*.stylus',
  script: 'src/scripts/main.coffee',
  allScripts: 'src/scripts/**/*.coffee'
}

var config = {
  jade: {
    pretty: true
  },
  webpack: {
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
  }
}

gulp.task('html', function() {
  gulp.src(paths.templates)
    .pipe(jade(config.jade))
    .pipe(gulp.dest('dest/'))
});

gulp.task('css', function() {
  gulp.src(paths.styles)
    .pipe(stylus())
    .pipe(gulp.dest('dest/css/'));
});

gulp.task('js', function() {
  gulp.src(paths.script)
    .pipe(webpack(config.webpack))
    .pipe(gulp.dest('dest/js/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.templates, ['html']);
  gulp.watch(paths.styles, ['css']);
  gulp.watch(paths.allScripts, ['js']);
});

gulp.task('default', function() {
  gulp.start('html', 'css', 'js');
});
