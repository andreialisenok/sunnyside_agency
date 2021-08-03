import { paths, production } from '../config';
import { src, dest } from 'gulp';
import { webpackConfig } from '../../webpack.config';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import gulpIf from 'gulp-if';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

export const scripts = () => {
  return src(paths.src.js)
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulpIf(production, rename({ suffix: '.min' })))
    .pipe(dest(paths.build.js))
    .pipe(
      debug({
        title: 'JavaScript files',
      })
    )
    .pipe(browserSync.stream());
};
