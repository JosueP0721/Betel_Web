const { src, dest, watch, parallel } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');


function css(done) {

    src('src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/css'))
        
    done();
}

function js() {

    return src('src/js/**/*.js')
            .pipe(dest('build/js'))

}

function images() {

    return src('src/img/**/*.svg')
            .pipe(dest('build/img'))

}

function video() {

    return src('src/video/**/*.mp4')
            .pipe(dest('build/video'))

}

function optimages() {

    return src('src/img/**/*.{jpg,png}')
            .pipe(cache(imagemin({optimizationLevel: 3})))
            .pipe(dest('build/img'))

}

function convertirWebp() {

    const opciones = {
        quality: 50
    }

    return src('src/img/**/*.{png,jpg}')
            .pipe(webp(opciones))
            .pipe(dest('build/img'))

}

function convertirAvif() {

    const opciones = {
        quality: 50
    }

    return src('src/img/**/*.{png,jpg}')
            .pipe(avif(opciones))
            .pipe(dest('build/img'))

}

function dev(done) {

    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', js);
    watch('src/img/**/*', optimages, images, convertirWebp, convertirAvif);
    watch('src/video/**/*.mp4', video);

    done();
}


exports.css = css;
exports.js = js;
exports.optimages = optimages;
exports.images = images;
exports.video = video;
exports.convertirWebp = convertirWebp;
exports.convertirAvif = convertirAvif;
exports.dev = parallel(css, js, optimages, images, video, convertirWebp, convertirAvif, dev);