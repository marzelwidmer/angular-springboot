'use strict';
import * as gulp from 'gulp';
import * as iconfont from 'gulp-iconfont';
import * as consolidate from 'gulp-consolidate';

const disticonfont = './src/fonts/icons';
const srcDirectory = './src/iconfont';

console.log(gulp.task);
gulp.task('iconfont', function () {
  return gulp.src(`${srcDirectory}/icons/*.svg`)
    .pipe(iconfont({
      fontName: 'Helsana_Iconfont',
      formats: ['woff'],
      appendCodepoints: true,
      prependUnicode: true,
      normalize: true,
      fontHeight: 1000,
      centerHorizontally: true
    }))
    .on('glyphs', function (glyphs, options) {
      const style = gulp.src(`${srcDirectory}/_iconfont.scss`)
        .pipe(consolidate('underscore', {
          glyphs: glyphs,
          fontName: options.fontName,
          fontDate: new Date().getTime()
        }))
        .pipe(gulp.dest('./src/styles'));

      const icon = gulp.src(`${srcDirectory}/icons.ts`)
        .pipe(consolidate('underscore', {
          glyphs: glyphs,
          fontName: options.fontName,
          fontDate: new Date().getTime()
        }))
        .pipe(gulp.dest('./src/app/common'));

      return [style, icon];
    })
    .pipe(gulp.dest(disticonfont));
});
