// gulp 및 패키지 모듈 호출
var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    sourcemaps  = require('gulp-sourcemaps'), 
    scss        = require('gulp-sass')(require('sass')),
    livereload  = require('gulp-livereload'); 

var src   = 'project/src';
var dist  = 'project/dist';
var paths = {
    js : src + '/js/**/*.js',
    scss : src + '/sass/**/*.scss'
};

gulp.task('html', function () {
    return gulp
        .src('./**/*.html')
        .pipe(livereload());
});

gulp.task('js:combine', function () {
    return gulp
        .src(paths.js)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(dist+'/js'))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest(dist+'/js'))
        .pipe(livereload());
});

var scssOptions = {
    outputStyle : "expanded",
    indentType : "tab",
    indentWidth : 1,
    precision: 6,
    sourceComments: false
};

gulp.task('scss:compile', function () {
    return gulp
        .src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(scss(scssOptions).on('error', scss.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dist + '/css'))
        .pipe(livereload());
});

gulp.task('live', gulp.series(['html', 'js:combine', 'scss:compile']), function () {
     livereload.listen(
         { basePath: dist }
     );

});

gulp.task('watch', function () {
    gulp.watch('./**/*.html', gulp.series('html')); // html task 를 watch 에 등록
    gulp.watch(paths.js, gulp.series('js:combine'));
    gulp.watch(paths.scss, gulp.series('scss:compile'));

});

gulp.task('default', gulp.parallel(['live','watch']));