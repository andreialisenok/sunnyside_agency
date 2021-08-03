import { paths } from '../config';
import { src, dest } from 'gulp';
import browserSync from 'browser-sync';
import gulpFavicons from 'gulp-favicons';
import debug from 'gulp-debug';
import plumber from 'gulp-plumber';

export const favicons = () => {
  return src(paths.src.favicons)
    .pipe(plumber())
    .pipe(
      gulpFavicons({
        icons: {
          appleIcon: true,
          favicons: true,
          online: false,
          appleStartup: false,
          android: false,
          firefox: false,
          yandex: false,
          windows: false,
          coast: false,
        },
      })
    )
    .pipe(dest(paths.build.favicons))
    .pipe(
      debug({
        title: 'Favicon files',
      })
    )
    .pipe(browserSync.stream());
};
