import { build } from '../config';
import { src, dest } from 'gulp';
import zip from 'gulp-zip';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

export const buildZip = () => {
  return src(build + '/**/*')
    .pipe(plumber())
    .pipe(zip('archive.zip'))
    .pipe(dest(build))
    .pipe(
      debug({
        title: 'ZIP files',
      })
    );
};
