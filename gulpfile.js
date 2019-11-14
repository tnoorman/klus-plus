'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const changed = require('gulp-changed');

// Settings
const settings = { 
    assets: './src/Assets',
    build: './public'
}

gulp.task('bundle', ['sass', 'css'], () => {
    browserSync.init({
        proxy: 'http://localhost:3000/',
        open: false,
        port: 3003
    });

    gulp.watch(`${settings.assets}/scss/**/*.scss`, ['sass']);
    gulp.watch(`${settings.assets}/scss/**/*.scss`).on('change', browserSync.reload)
    gulp.watch('./public/**/*').on('change', browserSync.reload)
});

gulp.task('sass', () => {
    return gulp.src(`${settings.assets}/scss/main.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCSS({ keepBreaks: true}))
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest(`${settings.build}/assets/css/`))
        .pipe(browserSync.stream());
});

gulp.task('css', () => {
    return gulp.src(`${settings.assets}/scss/**/*.scss`)
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(`${settings.build}/assets/css/`))
})

gulp.task('default', ['bundle'])
