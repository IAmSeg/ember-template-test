// gulpfile to test the test
const  gulp = require('gulp');
const htmlbars = require('gulp-htmlbars-compiler');
const concat = require('gulp-concat');

// path to your htmlbars templates
const templatesPath = './fixtures/templates/**';
const compiledTemplatesPath = './fixtures';
const compilerPath = '';

// path to your ember version-specific compiler
const compiler = require('./bower_components/ember/ember-template-compiler');

gulp.task('templates', () => {
  return gulp.src(templatesPath)
    .pipe(htmlbars({
      compiler: compiler
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(compiledTemplatesPath));
});

gulp.task('default', ['templates']);
