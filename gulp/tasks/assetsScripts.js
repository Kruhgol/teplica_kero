'use strict'

var gulp = require('gulp');

module.exports = gulp.task('assetsScripts', function(){
    return gulp.src(config.src.scripts)
        .pipe(gulp.dest(config.build.scripts))
})