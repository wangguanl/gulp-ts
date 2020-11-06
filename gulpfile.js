const gulp = require('gulp'),
	ts = require("gulp-typescript"),
	tsProject = ts.createProject("tsconfig.json");

gulp.task("build", function() {
	return tsProject.src()
		.pipe(tsProject())
		.js.pipe(gulp.dest("src"));
});
gulp.task("default", function() {
	gulp.watch(['./src/**.ts'], gulp.series('build'), done => done())
});

