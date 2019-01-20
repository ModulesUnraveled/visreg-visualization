var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssnext = require('postcss-cssnext'),
    easy_import = require('postcss-easy-import'),
    watch = require('gulp-watch');
    browserSync = require('browser-sync').create();

gulp.task('css', function () {
  var processors = [
    easy_import,
    cssnext,
  ];

  browserSync.init({
    server: "./"
  });

  return watch('src/**/*.css', function() {
    gulp.src('./src/*.css')
      .pipe(postcss(processors))
      .pipe(gulp.dest('.'))
      .pipe(browserSync.stream());
  });
});
