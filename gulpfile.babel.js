import browsersync from "browser-sync";
import del from "del";
import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import babel from "gulp-babel";
import cleanCSS from "gulp-clean-css";
import concat from "gulp-concat";
import eslint from "gulp-eslint";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import sass from "gulp-sass";
import uglify from "gulp-uglify";

browsersync.create();

sass.compiler = require("node-sass");

const paths = {
  styles: {
    src: "./src/assets/styles/**/*.scss",
    dest: "./wp-content/themes/default_theme/dist/assets/styles",
  },
  scripts: {
    src: "./src/assets/scripts/**/*.js",
    dest: "./wp-content/themes/default_theme/dist/assets/scripts",
  },
  images: {
    src: "./src/assets/images/**/*",
    dest: "./wp-content/themes/default_theme/dist/assets/images",
  },
};

export const clean = () =>
  del(["/wp-content/themes/default_theme/dist/assets"]);

function browserSync(done) {
  browsersync.init({
    notify: false,
    proxy: "http://localhost/wordpress/",
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function images() {
  return gulp
    .src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: false,
              collapseGroups: true,
            },
          ],
        }),
      ])
    )
    .pipe(gulp.dest(paths.images.dest));
}

function styles() {
  return gulp
    .src(paths.styles.src, { sourcemaps: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest(paths.styles.dest));
}

function scriptsLint() {
  return gulp
    .src([paths.scripts.src, "./gulpfile.babel.js"])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function scripts() {
  return gulp
    .src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(gulp.dest(paths.scripts.dest));
}

function watchFiles() {
  gulp.watch(
    paths.scripts.src,
    gulp.series(scriptsLint, scripts, browserSyncReload)
  );
  gulp.watch(paths.styles.src, gulp.series(styles, browserSyncReload));
  gulp.watch(paths.images.src, gulp.series(images, browserSyncReload));
}

const build = gulp.series(clean, gulp.parallel(images, styles, scripts));

const watch = gulp.parallel(build, browserSync, watchFiles);

exports.build = build;
exports.watch = watch;
exports.default = build;
