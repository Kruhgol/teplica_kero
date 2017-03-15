global.SRC_FOLDER = 'src';
global.BUILD_FOLDER = 'teplici';

global.config = {
    src:{
        index: SRC_FOLDER + '/index.html',
        templates: SRC_FOLDER + '/templates/*.html',
        styles: SRC_FOLDER + '/styles/*.scss',
        images: SRC_FOLDER + '/img/*.{gpeg,png,gif,svg,jpg}',
        fonts: SRC_FOLDER + '/fonts/**/*.{otf,ttf,eot,svg,woff,woff2}',
        scripts: SRC_FOLDER + '/js/*.js',
        lib: SRC_FOLDER + '/lib/*.*',
    },
    build:{
        index: BUILD_FOLDER +'/templates',
        templates: BUILD_FOLDER + '/content/templates',
        styles:  BUILD_FOLDER + '/static/css',
        images: BUILD_FOLDER +'/static/img',
        fonts: BUILD_FOLDER + '/static/fonts',
        scripts: BUILD_FOLDER + '/static/js'
    }
}