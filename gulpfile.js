var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('stylus', function() {
    return gulp.src('./source/stylus/*.styl')
        .pipe(stylus({compress: true}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./source/css'));
});

gulp.task('default', ['stylus'], function() {
    gulp.watch('./source/stylus/partial/*.stylus', ['stylus']);
    gulp.watch('./source/stylus/*.stylus', ['stylus']);
});