import { series, parallel } from 'gulp';

import { html } from './gulp/tasks/html';
import { styles } from './gulp/tasks/styles';
import { scripts } from './gulp/tasks/scripts';
import { fonts } from './gulp/tasks/fonts';
import { images } from './gulp/tasks/images';
import { imagesWebp } from './gulp/tasks/imagesWebp';
import { favicons } from './gulp/tasks/favicons';
import { spritePNG } from './gulp/tasks/spritePNG';
import { spriteSVG } from './gulp/tasks/spriteSVG';
import { clean } from './gulp/tasks/clean';
import { gzip } from './gulp/tasks/gzip';
import { buildZip } from './gulp/tasks/zip';
import { serve } from './gulp/tasks/serve';

export const development = series(
  clean,
  parallel(html, styles, scripts, fonts, imagesWebp, images, favicons, spritePNG, spriteSVG),
  serve
);
export const production = series(
  clean,
  parallel(html, styles, scripts, fonts, imagesWebp, images, favicons, spritePNG, spriteSVG, gzip)
);

export const del = clean;
export const zip = buildZip;
