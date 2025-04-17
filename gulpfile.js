const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCss = require("gulp-clean-css");
const sourceMaps = require("gulp-sourcemaps");

function compilaSass() {
    // return gulp.src('./source/styles/*.scss')
    return gulp.src('./source/styles/main.scss')
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(sourceMaps.write('./maps'))
        .pipe(cleanCss())
        .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback) {
    setTimeout(function() {
        console.log("Executando via Gulp!");
        callback();
    }, 2000) 
}

function dizOi(callback) {
    console.log("Oi!");
    dizTchau();
    callback();
}

function dizTchau() {
    console.log("Tchau!");
}

// exports.default = gulp.series(funcaoPadrao, dizOi);
exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;
exports.watch = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
}