import { paths, production, source } from '../config';
import browserSync from 'browser-sync';
import spriteSmith from 'gulp.spritesmith';
import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import cleanCss from 'gulp-clean-css';
import gulpIf from 'gulp-if';
import buffer from 'vinyl-buffer';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

const { src, dest } = require('gulp');

export const spritePNG = () => {
  let spriteData = src(paths.src.sprites.png)
    .pipe(plumber())
    .pipe(
      spriteSmith({
        imgName: 'sprite.png',
        cssName: '_sprite.scss',
        imgPath: '../img/sprites/png/sprite.png',
        retinaSrcFilter: '../img/sprites/png/*@2x.png',
        retinaImgName: 'sprite@2x.png',
        retinaImgPath: '../img/sprites/png/sprite@2x.png',
      })
    );
  spriteData.img
    .pipe(buffer())
    .pipe(
      gulpIf(
        production,
        imagemin([
          imageminPngquant({
            speed: 5,
            quality: [0.6, 0.8],
          }),
        ])
      )
    )
    .pipe(dest(paths.build.sprites.png))
    .pipe(
      debug({
        title: 'Sprite PNG IMG files',
      })
    );
  spriteData.css
    .pipe(dest(source + '/styles/abstracts/'))
    .pipe(
      gulpIf(
        production,
        cleanCss({
          level: 2,
        })
      )
    )
    .pipe(
      debug({
        title: 'Sprite PNG CSS files',
      })
    )
    .pipe(browserSync.stream());
  return spriteData;
};
