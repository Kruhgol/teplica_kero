global.SRC_FOLDER = 'src';
global.BUILD_FOLDER = 'build';

global.config = {
    src:{
        index: SRC_FOLDER + '/*.html',
        styles: SRC_FOLDER + '/styles/*.scss',
        images: SRC_FOLDER + '/img/*.{gpeg,png,gif,svg,jpg}',
        fonts: SRC_FOLDER + '/fonts/**/*.{otf,ttf,eot,svg,woff,woff2}',
        scripts: SRC_FOLDER + '/js/*.js',
        lib: SRC_FOLDER + '/lib/*.*',
    },
    build:{
        index: BUILD_FOLDER,
        styles:  BUILD_FOLDER + '/css',
        images: BUILD_FOLDER +'/img',
        fonts: BUILD_FOLDER + '/fonts',
        scripts: BUILD_FOLDER + '/js'
    }
}