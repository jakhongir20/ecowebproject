var pug = require('gulp-pug');

module.exports = (gulp, callback) => {
    const distpug = function () {
        return gulp.src('src/pugs/*.+(jade|pug)')
            .pipe(pug({pretty: '\t'}))
            .pipe(gulp.dest('dist/'))
    }


    return {
        pug: distpug
    }
}