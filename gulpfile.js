var gulp = require('gulp');
var paths = require('./config/gulp-tasks/paths');

require('./config/gulp-tasks/clean');
require('./config/gulp-tasks/html');
require('./config/gulp-tasks/css');
require('./config/gulp-tasks/js.js');
require('./config/gulp-tasks/test.js');

gulp.task('watch', function() {
  gulp.watch(paths.templates, ['html']);
  gulp.watch(paths.styles, ['css']);
  gulp.watch(paths.allScripts, ['js']);
});

gulp.task('default', function() {
  gulp.start('clean', 'html', 'css', 'js');
});
