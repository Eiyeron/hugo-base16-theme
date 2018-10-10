const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const sourcemaps = require('gulp-sourcemaps');
const env = require('postcss-preset-env');

const paths = {
  css: {
    src: 'src/css/style.scss',
    dest: 'static/css/',
  },
};

function build() {
  gulp.src(paths.css.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.css.dest));
}

gulp.task('build', build);

gulp.task('watch', () => watch(paths.css.src).pipe(gulp.dest('build')));
