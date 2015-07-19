var gulp = require('gulp');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var paths = require('./paths');

gulp.task('css', function() {
  gulp.src(paths.styles)
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest(paths.dest + 'css/'));
});
