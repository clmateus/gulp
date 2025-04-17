const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCss = require("gulp-clean-css");
const sourceMaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imageMin = require("gulp-imagemin");

function compilaSass() {
    // return gulp.src('./source/styles/*.scss')
    return gulp.src('./source/styles/main.scss')
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(sourceMaps.write('./maps'))
        .pipe(cleanCss())
        .pipe(gulp.dest('./build/styles'));
}

function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', gulp.series(comprimeImagens));
}