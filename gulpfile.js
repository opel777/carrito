
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";
    
const sass = gulpSass(nodeSass);


function css() {
    return gulp
    .src('scss/app.scss')
    .src('css/app.css')
    .pipe(autoprefixer({
        overrideBrowserslist : ['last 2 versins'],
        cascade : false,
    }))
    .pipe(sass({
        outputStyle: 'expanded',// nested, compact, compressed
    }))
    .pipe(gulp.dest('css'))
}
function watchfiles() {
     gulp.watch('scss/*scss', css);
     gulp.watch('index.html');
}



//Registrar funciones como tareas

gulp.task('css',css);
gulp.task('watch', gulp.parallel(watchfiles));