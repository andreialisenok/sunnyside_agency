import { paths } from '../config';
import { src, dest } from 'gulp';
import browserSync from 'browser-sync';
import svg from 'gulp-svg-sprite';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

export const spriteSVG = () => {
  return src(paths.src.sprites.svg)
    .pipe(plumber())
    .pipe(
      svg({
        mode: {
          symbol: {
            sprite: '../sprite.svg',
          },
        },
      })
    )
    .pipe(dest(paths.build.sprites.svg))
    .pipe(
      debug({
        title: 'Sprite SVG files',
      })
    )
    .pipe(browserSync.stream());
};
