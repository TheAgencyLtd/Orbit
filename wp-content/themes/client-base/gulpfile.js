/*jslint node: true */
"use strict";

var $ = require('gulp-load-plugins')();
var argv = require('yargs').argv;
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var merge = require('merge-stream');
var sequence = require('run-sequence');
var colors = require('colors');
var dateFormat = require('dateformat');
var del = require('del');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var imagemin = require("imagemin"),    // The imagemin module.
    webp = require("imagemin-webp");
var postcss = require("postcss-foft-classes");


// Enter URL of your local server here
// Example: 'http://localwebsite.dev'
//var URL = 'http://foundation.client.local';

// Check for --production flag
var isProduction = !!(argv.production);



// Browsers to target when prefixing CSS.
var COMPATIBILITY = [
  'last 2 versions',
  'ie >= 9',
  'Android >= 2.3'
];

// File paths to various assets are defined here.
var PATHS = {
  sass: [
    'assets/components/foundation-sites/scss',
    //'assets/components/motion-ui/src',
    //'assets/components/fontawesome/scss',
  ],
  javascript: [
    //'assets/components/what-input/what-input.js',
    //'assets/components/foundation-sites/js/foundation.core.js',
    //'assets/components/foundation-sites/js/foundation.util.*.js',

    // Paths to individual JS components defined below
    //'assets/components/foundation-sites/js/foundation.abide.js',
    //'assets/components/foundation-sites/js/foundation.accordion.js',
    //'assets/components/foundation-sites/js/foundation.accordionMenu.js',
    //'assets/components/foundation-sites/js/foundation.drilldown.js',
    //'assets/components/foundation-sites/js/foundation.dropdown.js',
    //'assets/components/foundation-sites/js/foundation.dropdownMenu.js',
    //'assets/components/foundation-sites/js/foundation.equalizer.js',
    //'assets/components/foundation-sites/js/foundation.interchange.js',
    //'assets/components/foundation-sites/js/foundation.magellan.js',
    //'assets/components/foundation-sites/js/foundation.offcanvas.js',
    //'assets/components/foundation-sites/js/foundation.orbit.js',
    //'assets/components/foundation-sites/js/foundation.responsiveMenu.js',
    //'assets/components/foundation-sites/js/foundation.responsiveToggle.js',
    //'assets/components/foundation-sites/js/foundation.reveal.js',
    //'assets/components/foundation-sites/js/foundation.slider.js',
    //'assets/components/foundation-sites/js/foundation.sticky.js',
    //'assets/components/foundation-sites/js/foundation.tabs.js',
    //'assets/components/foundation-sites/js/foundation.toggler.js',
    //'assets/components/foundation-sites/js/foundation.tooltip.js',

    // Motion UI
    //'assets/components/motion-ui/motion-ui.js',

    // Include your own custom scripts (located in the custom folder)
    'assets/javascript/custom/*.js',
  ],
  detect: [
    'assets/javascript/detect/*.js'
  ],
  phpcs: [
    '**/*.php',
    '!wpcs',
    '!wpcs/**',
  ],
  pkg: [
    '**/*',
    '!**/node_modules/**',
    '!**/components/**',
    '!**/scss/**',
    '!**/bower.json',
    '!**/gulpfile.js',
    '!**/package.json',
    '!**/composer.json',
    '!**/composer.lock',
    '!**/codesniffer.ruleset.xml',
    '!**/packaged/*',
  ]
};

// Browsersync task
gulp.task('browser-sync', ['build'], function() {

  var files = [
    '**/*.php',
    'assets/images/**/*.{png,jpg,gif}',
  ];

  browserSync.init(files, {
    // Proxy address
    proxy: URL,

    // Port #
    // port: PORT
  });
});

gulp.task('convert-webp', function() {
    return imagemin(['assets/images/*.{png,jpg,gif}'], 'assets/images/webp', {
        plugins: [webp({
            lossless: true, // Losslessly encode images
            quality: 60
        })]
    });
});

// Compile Sass into CSS
// In production, the CSS is compressed
gulp.task('sass', function() {
  return gulp.src('assets/scss/foundation.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: PATHS.sass
    }))
    .on('error', $.notify.onError({
      message: "<%= error.message %>",
      title: "Sass Error"
    }))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    // Minify CSS if run with --production flag
    .pipe(cleanCSS())
    .pipe($.if(!isProduction, $.sourcemaps.write('.')))
    .pipe(gulp.dest('assets/stylesheets'))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }));
});

gulp.task('form-sass', function() {
  return gulp.src('assets/scss/form.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: PATHS.sass
    }))
    .on('error', $.notify.onError({
      message: "<%= error.message %>",
      title: "Sass Error"
    }))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    // Minify CSS if run with --production flag
    .pipe(cleanCSS())
    .pipe($.if(!isProduction, $.sourcemaps.write('.')))
    .pipe(gulp.dest('assets/stylesheets'))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }));
});


gulp.task('critical-css', function() {
  return gulp.src('assets/scss/critical.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: PATHS.sass
    }))
    .on('error', $.notify.onError({
      message: "<%= error.message %>",
      title: "Sass Error"
    }))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    // Minify CSS if run with --production flag
    .pipe(cleanCSS())
    .pipe(rename({
      extname: '.php'
    }))
    //.pipe($.if(!isProduction, $.sourcemaps.write('.')))
    .pipe(gulp.dest('assets/stylesheets'))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }))

  ;
  //.pipe(gulp.dest("./dist"));

});


// Lint all JS files in custom directory
gulp.task('lint', function() {
  return gulp.src('assets/javascript/custom/*.js')
    .pipe($.jshint())
    .pipe($.notify(function(file) {
      if (file.jshint.success) {
        return false;
      }

      var errors = file.jshint.results.map(function(data) {
        if (data.error) {
          return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
        }
      }).join("\n");
      return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
    }));
});

// Combine JavaScript into one file
// In production, the file is minified
gulp.task('javascript', function() {
  var uglify = $.uglify()
    .on('error', $.notify.onError({
      message: "<%= error.message %>",
      title: "Uglify JS Error"
    }));

  return gulp.src(PATHS.javascript)
    //.pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.concat('foundation.js', {
      newLine: '\n;'
    }))
    .pipe(uglify)
    //.pipe($.if(isProduction, uglify))
    //.pipe($.if(!isProduction, $.sourcemaps.write()))
    .pipe(gulp.dest('assets/javascript'))
    .pipe(browserSync.stream());
});


/**
 * To add js for performance
 * @return {[type]} [description]
 */
// Lint all JS files in detect directory
gulp.task('lint-detect', function() {
  return gulp.src('assets/javascript/detect/*.js')
    .pipe($.jshint())
    .pipe($.notify(function(file) {
      if (file.jshint.success) {
        return false;
      }

      var errors = file.jshint.results.map(function(data) {
        if (data.error) {
          return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
        }
      }).join("\n");
      return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
    }));
});
// Combine JavaScript into one file
// In production, the file is minified
gulp.task('javascript-detect', function() {
  var uglify = $.uglify()
    .on('error', $.notify.onError({
      message: "<%= error.message %>",
      title: "Uglify JS Error"
    }));

  return gulp.src(PATHS.detect)
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.concat('detect.js', {
      newLine: '\n;'
    }))
    .pipe(uglify)
    .pipe(gulp.dest('assets/javascript'))
    .pipe(browserSync.stream());
});

/*
gulp.task('fonts-loaded', function() {
    return ().pipe(
      postcss([
        foftLoadedClasses({
          groups: [
            {
              families: ["Roboto"],
              classNames: ["fonts-loaded"]
            }
          ]
        })
      ])
    );
});
*/


// Copy task
gulp.task('copy', function() {
  // Font Awesome
  var fontAwesome = gulp.src('assets/components/fontawesome/fonts/**/*.*')
    .pipe(gulp.dest('assets/fonts'));

  return merge(fontAwesome);
});

// Package task
gulp.task('package', ['build'], function() {
  var fs = require('fs');
  var time = dateFormat(new Date(), "yyyy-mm-dd_HH-MM");
  var pkg = JSON.parse(fs.readFileSync('./package.json'));
  var title = pkg.name + '_' + time + '.zip';

  return gulp.src(PATHS.pkg)
    .pipe($.zip(title))
    .pipe(gulp.dest('packaged'));
});

// Build task
// Runs copy then runs sass & javascript in parallel
gulp.task('build', ['clean'], function(done) {
  sequence('copy', ['sass', 'critical-css', 'form-sass', 'javascript', 'lint', 'javascript-detect', 'lint-detect', 'convert-webp'],
    done);
});

// PHP Code Sniffer task
gulp.task('phpcs', function() {
  return gulp.src(PATHS.phpcs)
    .pipe($.phpcs({
      bin: 'wpcs/vendor/bin/phpcs',
      standard: './codesniffer.ruleset.xml',
      showSniffCode: true,
    }))
    .pipe($.phpcs.reporter('log'));
});

// PHP Code Beautifier task
gulp.task('phpcbf', function() {
  return gulp.src(PATHS.phpcs)
    .pipe($.phpcbf({
      bin: 'wpcs/vendor/bin/phpcbf',
      standard: './codesniffer.ruleset.xml',
      warningSeverity: 0
    }))
    .on('error', $.util.log)
    .pipe(gulp.dest('.'));
});

// Clean task
gulp.task('clean', function(done) {
  sequence(['clean:javascript', 'clean:css'],
    done);
});

// Clean JS
gulp.task('clean:javascript', function() {
  return del([
    'assets/javascript/foundation.js'
  ]);
});

gulp.task('clean:javascript-detect', function() {
  return del([
    'assets/javascript/detect.js',
  ]);
});

// Clean CSS
gulp.task('clean:css', function() {
  return del([
    'assets/stylesheets/foundation.css',
    'assets/stylesheets/foundation.css.map',
    'assets/stylesheets/critical.php',
    'assets/stylesheets/critical.css',
  ]);
});

// Default gulp task
// Run build task and watch for file changes
gulp.task('default', ['build'], function() {
  // Log file changes to console
  function logFileChange(event) {
    var fileName = require('path').relative(__dirname, event.path);
    console.log('[' + 'WATCH'.green + '] ' + fileName.magenta + ' was ' + event.type + ', running tasks...');
  }

  // Sass Watch
  gulp.watch(['assets/scss/**/*.scss'], ['clean:css', 'sass', 'critical-css', 'form-sass'])
    .on('change', function(event) {
      logFileChange(event);
    });


  // JS Watch
  gulp.watch(['assets/javascript/custom/**/*.js'], ['clean:javascript', 'javascript', 'lint'])
    .on('change', function(event) {
      logFileChange(event);
    });

  // JS Detect Watch
  gulp.watch(['assets/javascript/detect/**/*.js'], ['clean:javascript-detect', 'javascript-detect', 'lint-detect'])
    .on('change', function(event) {
      logFileChange(event);
    });

  gulp.watch(['assets/images/*.{jpg,png,gif}'], ['convert-webp'])
    .on('change', function(event) {
      logFileChange(event);
    });
});
