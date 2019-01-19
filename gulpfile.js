var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var easy_import = require('postcss-easy-import');

gulp.task('css', function () {
  var processors = [
    easy_import,
    cssnext,
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('.'));
});
