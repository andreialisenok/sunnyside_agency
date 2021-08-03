import { paths } from '../config';
import { src, dest } from 'gulp';
import changed from 'gulp-changed';
import webp from 'gulp-webp';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

export const imagesWebp = () => {
  return src(paths.src.img)
    .pipe(plumber())
    .pipe(changed(paths.build.img))
    .pipe(
      webp({
        quality: 70,
      })
    )
    .pipe(dest(paths.build.img))
    .pipe(
      debug({
        title: 'Images WEBP files',
      })
    )
    .pipe(browserSync.stream());
};
