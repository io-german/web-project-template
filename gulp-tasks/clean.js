var gulp = require('gulp');
var clean = require('gulp-clean');
var paths = require('./paths');

gulp.task('clean', function() {
  gulp.src(paths.dest)
    .pipe(clean());

  gulp.src(paths.tmp)
    .pipe(clean());
});
