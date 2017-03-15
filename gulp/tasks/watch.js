'use strict'

var gulp = require('gulp');

module.exports = gulp.task('watch', function(){
    gulp.watch(config.src.styles, ['styles']);
    gulp.watch(config.src.imeg, ['images']);
    gulp.watch(config.src.fonts, ['assetsFonts']);
    gulp.watch(config.src.index, ['assets']);
    gulp.watch(config.src.templates, ['templates']);
    gulp.watch(config.src.scripts, ['assetsScripts']);

})