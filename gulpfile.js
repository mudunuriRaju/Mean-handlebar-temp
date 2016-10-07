/**
 * Created by admin on 10/6/2016.
 */
var gulp = require('gulp');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var gls = require('gulp-live-server');

gulp.task('bower', function () {
    // place code for your default task here
    var files = [
        './bower_components/angular/angular.js',
        './bower_components/angular-material/angular-material.js',
        './bower_components/angular-animate/angular-animate.js',
        './bower_components/angular-aria/angular-aria.js',
        './bower_components/angular-route/angular-route.js',
        './bower_components/angular-cookies/angular-cookies.js',
        './bower_components/angular-resource/angular-resource.js',
        './bower_components/angular-messages/angular-message.js',
        './bower_components/jquery/jquery.js',
        './bower_components/mediaelement/build/mediaelement.js',
        './bower_components/moment/moment.js',
    ];
    gulp.src(files)
        .pipe(concat('allbower_components.js'))
        .pipe(minify({
            ext: {
                src: '.js',
                min: '-min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: []
        }))
        .pipe(gulp.dest('public/javascripts/'));
});

gulp.task('javascript', function () {
    // place code for your default task here
    gulp.src('public/views/**/*.js')
        .pipe(concat('allCtrls.js'))
        .pipe(minify({
            ext: {
                src: '.js',
                min: '-min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: []
        }))
        .pipe(gulp.dest('public/javascripts/'));
});

gulp.task('css', function () {

    var files = [
        './bower_components/dist/css/bootstrap.css',
        './bower_components/font-awesome/css/font-awesome.css',
        './bower_components/angular-material/angular-material.css'
    ];

    gulp.src(files)
        .pipe(concat('lib.css'))
        .pipe(minify({
            ext: {
                src: '.css',
                min: '-min.css'
            },
            exclude: ['tasks'],
            ignoreFiles: []
        }))
        .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('server', function () {
    // place code for your default task here
    //1. run your script as a server
    //var server = gls.new('bin/www');
    //server.start();

    //2. run script with cwd args, e.g. the harmony flag
    var server = gls.new(['--harmony', 'bin/www']);
    //this will achieve `node --harmony myapp.js`
    //you can access cwd args in `myapp.js` via `process.argv`
    server.start();

    //use gulp.watch to trigger server actions(notify, start or stop)
    gulp.watch(['public/**/*.css', 'public/**/*.html', 'public/**/*.scss', 'routes/*.js', 'views/*.hbs'], function (file) {
        server.notify.apply(server, [file]);
    });
    gulp.watch('bin/www', server.start.bind(server)); //restart my server

    // Note: try wrapping in a function if getting an error like `TypeError: Bad argument at TypeError (native) at ChildProcess.spawn`
    gulp.watch('bin/www', function () {
        server.start.bind(server)()
    })

});

gulp.task('default', ['bower', 'javascript', 'css', 'server']);
