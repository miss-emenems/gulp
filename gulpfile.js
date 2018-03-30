var gulp = require('gulp');
var sass = require('gulp-sass');
var sass = require('browser-sync').create();

gulp.task('sass', function(){
	console.log('compile sass');
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('browserSync', function(){
	browserSync.init( null, {
		server: {
			baseDir: 'app',
			options: {
    		port: 3002,
			}
		},
	});
});

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
});



