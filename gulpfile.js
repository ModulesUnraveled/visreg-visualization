var gulp = require('gulp'),
    del = require('del'),
    postcss = require('gulp-postcss'),
    cssnext = require('postcss-cssnext'),
    easy_import = require('postcss-easy-import'),
    watch = require('gulp-watch');
    browserSync = require('browser-sync').create();

gulp.task('clean', function() {
  return del(
    'dist/visreg.css'
  )
});

gulp.task('css', function () {
  var processors = [
    easy_import,
    cssnext,
  ];

  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

gulp.task('serve', gulp.series('css', function() {

  browserSync.init({
    server: "./"
  });

  gulp.watch('src/**/*.css')
    .on('change', gulp.series('css'));
  gulp.watch('*.html')
    .on('change', browserSync.reload);
}));

gulp.task('default',
  gulp.series('clean', gulp.parallel('serve'))
);
