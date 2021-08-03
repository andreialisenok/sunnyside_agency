import { paths, production } from '../config';
import { src, dest } from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import gulpIf from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import cleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

export const styles = () => {
  return src(paths.src.css)
    .pipe(plumber())
    .pipe(gulpIf(!production, sourcemaps.init()))
    .pipe(sass())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 3 versions'],
        cascade: false,
        grid: true,
      })
    )
    .pipe(
      gulpIf(
        production,
        cleanCss({
          level: 2,
        })
      )
    )
    .pipe(gulpIf(production, rename({ suffix: '.min' })))
    .pipe(gulpIf(!production, sourcemaps.write('./')))
    .pipe(dest(paths.build.css))
    .pipe(
      debug({
        title: 'CSS files',
      })
    )
    .pipe(browserSync.stream());
};
