const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
var concat = require('gulp-concat');

var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');

gulp.task('styles', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(minify())
        .pipe(gulp.dest('build/styles/'));
});

gulp.task('clean', () => {
    return del([
        'css/style.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));