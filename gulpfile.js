// Include gulp
var gulp        = require('gulp-help')(require('gulp'));
var gulp_clean  = require('gulp-clean');
var gulp_nodemon		= require('gulp-nodemon');

// Include build-tasks
//var browserify  = require('./build-tasks/browserify');

var clean       = require('./build-tasks/clean');

//var server      = require('./build-tasks/server');
var statics     = require('./build-tasks/statics');

var typescript  = require('./build-tasks/typescript');
//var uglify      = require('./build-tasks/uglify');

var child 		= require('child_process');

gulp.task('clean', "Cleans up the build environment", clean.clean);

gulp.task('node-compile', "Compile TypeScript", [
	'statics:compile',
	'typescript:compile'
]);

gulp.task('node-watch', false, [
	'statics:watch',
	'typescript:watch'
]);


gulp.task('statics:compile', "Compile statics (html, css) sources", statics.compile);
gulp.task('statics:watch', false, statics.watch);

gulp.task('typescript:compile', "Compile typescript sources", typescript.compile);
gulp.task('typescript:watch', false, typescript.watch);

gulp.task('nodemon-watch', ['node-compile'], function()
	{ 
		gulp_nodemon(
		{
			script: 'dist/main.js',
			ext: 'ts html css',
					//ignore: ['dist/', 'node_modules/'],
			watch: ['src/', 'res/'],
			tasks: ['node-compile']
		});
	});

// DEPRECATED
/*
gulp.task('start-node', function(callback)
	{
		child.exec('node dist/main.js', function(err, stdout, stderr) 
			{
				console.log(stdout);
				console.log(stderr);
				callback(err);
			});
	})
*/

gulp.task('node', ['start-node']);
gulp.task('stop-node',function()
	{
		child.kill()
	});

gulp.task('default', ['node-compile', 'node-watch']);
