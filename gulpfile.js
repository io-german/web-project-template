var gulp = require('gulp');
var paths = require('./gulp-tasks/paths');

require('./gulp-tasks/clean');
require('./gulp-tasks/html');
require('./gulp-tasks/css');
require('./gulp-tasks/js.js');
require('./gulp-tasks/test.js');

gulp.task('watch', function() {
  gulp.watch(paths.templates, ['html']);
  gulp.watch(paths.styles, ['css']);
  gulp.watch(paths.allScripts, ['js']);
});

gulp.task('default', function() {
  gulp.start('clean', 'html', 'css', 'js');
});
