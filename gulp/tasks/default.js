'use strict'

var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = gulp.task('default', function(){
    runSequence('clear', ['assets','assetsFonts','images','styles','assetsScripts','assetsLib'], 'watch');
})