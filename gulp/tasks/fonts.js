import { paths } from '../config';
import { src, dest } from 'gulp';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

export const fonts = done => {
  src(paths.src.fonts)
    .pipe(plumber())
    .pipe(ttf2woff())
    .pipe(dest(paths.build.fonts))
    .pipe(
      debug({
        title: 'Fonts WOFF',
      })
    )
    .pipe(browserSync.stream());
  src(paths.src.fonts)
    .pipe(plumber())
    .pipe(ttf2woff2())
    .pipe(dest(paths.build.fonts))
    .pipe(
      debug({
        title: 'Fonts WOFF2',
      })
    )
    .pipe(browserSync.stream());
  done();
};
