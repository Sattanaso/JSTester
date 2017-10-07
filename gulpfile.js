const gulp = require('gulp');

// sass watcher
const sass = require('gulp-sass');
gulp.task('sass:compile', function () {
    return gulp.src(['./app/client/ui/**/*.scss', '!./app/client/node_modules/**/'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/client/ui/css'));
});

const concatCss = require('gulp-concat-css');
gulp.task('css:concat', function () {
    return gulp.src('./app/client/ui/css/**/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest('./app/client/ui'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/client/ui/**/*.scss', ['sass:compile', 'css:concat']);
});

// linters
const eslint = require('gulp-eslint');
gulp.task('lint:js', () => {
    gulp
        .src(['./app/client/**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

const sasslint = require('gulp-sass-lint');
gulp.task('lint:sass', () => {
    return gulp.src('./app/client/**/*.s+(a|c)ss')
        .pipe(sasslint())
        .pipe(sasslint.format())
        .pipe(sasslint.failOnError())
});

gulp.task('linter', ['lint:js', 'lint:sass']);

// final
const clean = require('gulp-clean');
gulp.task('clean', function () {
    return gulp
        .src('build', {
            read: false,
        })
        .pipe(clean());
});

gulp.task('html:copy', () => {
    return gulp
        .src(['./app/client/**/*.html', '!./app/client/node_modules/**/', '!./app/client/test/**/'])
        .pipe(gulp.dest('./build/client'));
});

const uglifyCss = require('gulp-uglifycss');
gulp.task('css:compress', function () {
    gulp.src('./app/client/ui/bundle.css')
        .pipe(uglifyCss({
            'maxLineLen': 80,
            'uglyComments': true
        }))
        .pipe(gulp.dest('./build/client/ui'))
});

const uglify = require('gulp-uglify');
gulp.task('uglify:js', () => {
    gulp.src("./app/client/business/**/*.js")
        .pipe(
            uglify()
        )
        .pipe(
            gulp.dest('./app/client/ui/js') // gulp.dest('build')
        )
});

gulp.task('final', ['html:copy', 'css:compress']);