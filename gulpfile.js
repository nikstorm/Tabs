var gulp = require('gulp'), 
sass = require('gulp-sass'); 
//Задачи 
gulp.task('sass',function(){ 
 gulp.src('./*.sass') 
	.pipe(sass()) 
	.pipe(gulp.dest(''));
//gulp.watch('sass/*.sass');	
});
gulp.task('default',function(){
 gulp.watch('./*.sass',['sass']);
});
