'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./app/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 3 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/sass/**/*.scss', ['sass']);
});