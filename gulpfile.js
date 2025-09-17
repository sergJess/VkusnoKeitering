import gulp, { src, series, dest, parallel, watch } from "gulp";
import { fileURLToPath } from "url"; // Для получения абсолютного пути к текущему файл
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import importCss from "postcss-import";
import cleanCSS from "gulp-clean-css";
import path from "path";
import webpack from "webpack";
import webpackStream from "webpack-stream";
import { config, configProd } from "./webpack.config.js";
import browserSync, { stream } from "browser-sync";
const browserS = browserSync.create();

gulp.task("scripts", function () {
  return gulp
    .src("./src/js/index.js") // Entry point(s) for webpack
    .pipe(webpackStream(config, webpack)) // Pass webpack config and the webpack instance
    .pipe(gulp.dest(__dirname + "/src/build-js/")); // Output directory for bundled files
});

gulp.task("scripts-build", function () {
  return gulp
    .src("./src/js/index.js") // Entry point(s) for webpack
    .pipe(webpackStream(configProd, webpack)) // Pass webpack config and the webpack instance
    .pipe(gulp.dest(__dirname + "/src/build-js/")); // Output directory for bundled files
});

gulp.task("styles", function () {
  return src("src/styles/pages/**/*.css")
    .pipe(
      postcss([
        importCss(), // Обрабатывает @import
        autoprefixer({
          overrideBrowserslist: ["> 0.1%"], // Список браузеров, которые нужно поддерживать
        }),
      ])
    )
    .pipe(dest("src/build-css"));
});
gulp.task("server", function () {
  browserS.init({
    server: {
      baseDir: "./src",
    },
  });
  watch("./src/styles/**/*.css").on(
    "change",
    series("styles", browserS.reload)
  );
  watch("./src/js/**/*.js").on("change", series("scripts", browserS.reload));
  watch("./src/**/*.html").on("change", browserS.reload);
});
gulp.task("styles-build", function () {
  return src("src/styles/pages/**/*.css")
    .pipe(
      postcss([
        importCss(), // Обрабатывает @import
        autoprefixer({
          overrideBrowserslist: ["> 0.1%"], // Список браузеров, которые нужно поддерживать
        }),
      ])
    )
    .pipe(cleanCSS())
    .pipe(dest("src/build-css"));
});
