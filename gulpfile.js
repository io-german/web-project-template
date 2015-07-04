var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var babel = require('gulp-babel');

var paths = {
  templates: 'src/templates/**/*.jade',
  styles: 'src/styles/**/*.stylus',
  scripts: 'src/scripts/main.js',
  allScripts: 'src/scripts/**/*.js'
}

gulp.task('html', function() {
  gulp.src(paths.templates)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('dest/'))
});

gulp.task('css', function() {
  gulp.src(paths.styles)
    .pipe(stylus())
    .pipe(gulp.dest('dest/css/'));
});

gulp.task('js', function() {
  gulp.src(paths.scripts)
    .pipe(babel())
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
