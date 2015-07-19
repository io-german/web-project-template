var gulp = require('gulp');
var open = require('gulp-open');
var karma = require('karma');
var paths = require('./paths');

var config = {
  configFile: __dirname + '/../karma.conf.js'
};

gulp.task('test', function() {
  karma.server.start(config, function() {
    gulp.src(paths.tmp + 'test-report.html')
      .pipe(open());
  });
});
