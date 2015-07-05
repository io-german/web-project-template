var gulp = require('gulp');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var paths = require('./paths');

var config = {
  pretty: true
};

gulp.task('html', function() {
  gulp.src(paths.templates)
    .pipe(plumber())
    .pipe(jade(config))
    .pipe(gulp.dest(paths.dest))
});
