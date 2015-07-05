var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var webpack = require('gulp-webpack');
var plumber = require('gulp-plumber');
var clean = require('gulp-clean');
var karma = require('karma');
var open = require('gulp-open');

var paths = {
  allScripts: 'src/scripts/**/*.coffee',
  dest: 'dest/',
  script: 'src/scripts/main.coffee',
  styles: 'src/styles/**/*.stylus',
  templates: 'src/templates/**/*.jade',
  tmp: 'tmp/',
  unitTests: 'test/unit/'
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
  },
  karma: {
    configFile: __dirname + '/karma.conf.js'
  }
}

gulp.task('clean', function() {
  gulp.src(paths.dest)
    .pipe(clean());

  gulp.src(paths.tmp)
    .pipe(clean());
});

gulp.task('html', function() {
  gulp.src(paths.templates)
    .pipe(plumber())
    .pipe(jade(config.jade))
    .pipe(gulp.dest(paths.dest))
});

gulp.task('css', function() {
  gulp.src(paths.styles)
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest(paths.dest + 'css/'));
});

gulp.task('js', function() {
  gulp.src(paths.script)
    .pipe(plumber())
    .pipe(webpack(config.webpack))
    .pipe(gulp.dest(paths.dest + 'js/'));
});

gulp.task('test', function() {
  karma.server.start(config.karma, function() {
    gulp.src(paths.tmp + 'test-report.html')
      .pipe(open());
  });
});

gulp.task('watch', function() {
  gulp.watch(paths.templates, ['html']);
  gulp.watch(paths.styles, ['css']);
  gulp.watch(paths.allScripts, ['js']);
});

gulp.task('default', function() {
  gulp.start('clean', 'html', 'css', 'js');
});
