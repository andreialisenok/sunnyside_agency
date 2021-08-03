import { paths, production } from '../config';
import { src, dest } from 'gulp';
import changed from 'gulp-changed';
import gulpIf from 'gulp-if';
import imagemin from 'gulp-imagemin';
import imageminGifLossy from 'imagemin-giflossy';
import imageminPngquant from 'imagemin-pngquant';
import imageminZopFli from 'imagemin-zopfli';
import imageminMozJpeg from 'imagemin-mozjpeg';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

export const images = () => {
  return src(paths.src.img)
    .pipe(plumber())
    .pipe(changed(paths.build.img))
    .pipe(
      gulpIf(
        production,
        imagemin([
          imageminGifLossy({
            optimizationLevel: 3,
            optimize: 3,
            lossy: 2,
          }),
          imageminPngquant({
            speed: 5,
            quality: [0.6, 0.8],
          }),
          imageminZopFli({
            more: true,
          }),
          imageminMozJpeg({
            progressive: true,
            quality: 85,
          }),
          imagemin.svgo({
            plugins: [
              { removeViewBox: false },
              { removeUnusedNS: false },
              { removeUselessStrokeAndFill: false },
              { cleanupIDs: false },
              { removeComments: true },
              { removeEmptyAttrs: true },
              { removeEmptyText: true },
              { collapseGroups: true },
            ],
          }),
        ])
      )
    )
    .pipe(dest(paths.build.img))
    .pipe(
      debug({
        title: 'Images JPEG & PNG files',
      })
    )
    .pipe(browserSync.stream());
};
