import gulp from "gulp";
import { src, dest, parallel, watch } from "gulp";
import browserSync from "browser-sync";
const browserS = browserSync.create();

gulp.task("server", function () {
  browserS.init({
    server: {
      baseDir: "./src",
    },
  });
  watch("./src/**/*.css").on("change", browserS.reload);
  watch("./src/**/*.js").on("change", browserS.reload);
  watch("./src/**/*.html").on("change", browserS.reload);
});
