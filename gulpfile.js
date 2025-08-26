const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const mergeStreams = require('merge-stream');

// === ŚCIEŻKI ===
const paths = {
  styles: {
    src: 'sass/**/*.scss',
    dest: 'build/'
  },
  scripts: {
    src: 'js/*.js',
    dest: 'build/'
  }
};

// === KOMPILACJA SCSS ===
gulp.task('styles', () => {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest));
});

// === MINIFIKACJA JS z Babel + Terser ===
gulp.task('min-js', () => {
  const original = gulp.src(paths.scripts.src)
    .pipe(gulp.dest(paths.scripts.dest)); // kopiujemy oryginał

  const minified = gulp.src(paths.scripts.src)
    .pipe(babel({
      presets: [['@babel/preset-env', { targets: "defaults" }]]
    }))
    .pipe(terser())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(paths.scripts.dest));

  return mergeStreams(original, minified);
});

// === CLEAN CSS ===
gulp.task('clean-scss', () => {
  return gulp.src('build/*.css', { read: false, allowEmpty: true })
    .pipe(clean());
});

// === CLEAN JS === 
gulp.task('clean-js', () => {
  return gulp.src('build/*.js', { read: false, allowEmpty: true })
    .pipe(clean());
});

// === WATCH ===
gulp.task('watch', () => {
  gulp.watch(paths.styles.src, gulp.series('clean-scss', 'styles'));
  gulp.watch(paths.scripts.src, gulp.series('clean-js', 'min-js'));
});

// === DOMYŚLNE ZADANIE ===
gulp.task('default', gulp.series('clean-scss', 'styles', 'clean-js', 'min-js'));
