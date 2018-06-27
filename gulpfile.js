var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', function () {
	gulp.src('./www/')
		.pipe(webserver({
			livereload: true,
			directoryListing: false,
			open: false,
			port: 3000
		}));
});
