import { paths } from '../config';
import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

export const gzip = () => {
  return src(paths.src.gzip)
    .pipe(plumber())
    .pipe(dest(paths.build.gzip))
    .pipe(
      debug({
        title: 'GZIP files',
      })
    );
};
