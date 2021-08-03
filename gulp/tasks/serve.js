import { build, paths } from '../config';
import { watch } from 'gulp';
import { html } from './html';
import { styles } from './styles';
import { scripts } from './scripts';
import { fonts } from './fonts';
import { images } from './images';
import { imagesWebp } from './imagesWebp';
import { favicons } from './favicons';
import { spritePNG } from './spritePNG';
import { spriteSVG } from './spriteSVG';
import browserSync from 'browser-sync';

export const serve = () => {
  browserSync.init({
    server: {
      baseDir: './' + build + '/',
    },
    port: 5000,
    ui: {
      port: 5001,
    },
    notify: true,
  });
  watch(paths.watch.html, html);
  watch(paths.watch.css, styles);
  watch(paths.watch.js, scripts);
  watch(paths.watch.fonts, fonts);
  watch(paths.watch.img, images);
  watch(paths.watch.img, imagesWebp);
  watch(paths.watch.favicons, favicons);
  watch(paths.watch.sprites.png, spritePNG);
  watch(paths.watch.sprites.svg, spriteSVG);
};
