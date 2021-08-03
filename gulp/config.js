import { webpackConfig } from '../webpack.config';
import yargs from 'yargs';
const argv = yargs.argv;
export const production = !!argv.production;

webpackConfig.mode = production ? 'production' : 'development';
webpackConfig.devtool = production ? false : 'source-map';

export const source = 'src';
export const build = 'build';

export const paths = {
  src: {
    html: source + '/view/index.pug',
    css: source + '/styles/styles.scss',
    js: source + '/js/script.js',
    fonts: source + '/fonts/*.{ttf,otf,eot,woff,woff2,svg}',
    img: source + '/img/content/**/*.{jpg,jpeg,png,gif,ico,svg,webp}',
    favicons: source + '/img/favicons/*.{jpg,jpeg,png,gif,tiff}',
    sprites: {
      png: source + '/img/sprites/png/*.{png,jpg,jpeg}',
      svg: source + '/img/sprites/svg/*.svg',
    },
    gzip: source + '/.htaccess',
  },
  build: {
    html: build + '/',
    css: build + '/styles/',
    js: build + '/js/',
    img: build + '/img/content/',
    favicons: build + '/img/favicons/',
    sprites: {
      png: build + '/img/sprites/png/',
      svg: build + '/img/sprites/svg/',
    },
    fonts: build + '/fonts/',
    gzip: build,
  },
  watch: {
    html: source + '/**/*.pug',
    css: source + '/**/*.scss',
    js: source + '/**/*.js',
    img: source + '/img/content/**/*.{jpg,jpeg,png,gif,ico,svg,webp}',
    favicons: source + '/img/favicons/*.{jpg,jpeg,png,gif,tiff}',
    sprites: {
      png: source + '/img/sprites/png/*.{jpg,jpeg,png,gif,webp}',
      svg: source + '/img/sprites/svg/*.{svg}',
    },
    fonts: source + '/fonts/*.{ttf,otf,eot,woff,woff2,svg}',
  },
  clean: build,
};
