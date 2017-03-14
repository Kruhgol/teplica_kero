'use strict'

var gulp = require('gulp');

module.exports = gulp.task('assetsLib', function(){
    return gulp.src(config.src.lib)
        .pipe(gulp.dest(config.build.styles))
})