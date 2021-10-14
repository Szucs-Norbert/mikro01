const {src, dest, series} = require('gulp');
const ts= require('gulp-typescript');
const uglify= require('gulp-uglify');
const rename= require('gulp-rename');

function streamTs(){
    return src('src/**/*.ts')
    .pipe(ts()).js
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(dest('public'));
}

function streamHtml(){
    return src('src/*.html')
    .pipe(dest('public'));
}

//exports.html= streamHtml;
exports.default= series(streamTs, streamHtml);