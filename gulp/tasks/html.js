import { paths } from '../config';
import { src, dest } from 'gulp';
import pug from 'gulp-pug';
import bemValidator from 'gulp-html-bem-validator';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

export const html = () => {
  return src(paths.src.html)
    .pipe(plumber())
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(bemValidator())
    .pipe(dest(paths.build.html))
    .pipe(
      debug({
        title: 'HTML files',
      })
    )
    .pipe(browserSync.stream());
};
