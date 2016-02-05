# Ember template test

A [mocha](https://mochajs.org) and [chai](http://chaijs.com) test to make sure your compilation tasks generate a non-empty templates file and contain all the expected templates.

## Requirements

The only node requirements are `chai`, `walk-sync` and `chai-fs`. You will have to have ember as well to perform the test.

## How to use
Take the [test/templates](https://github.com/mrdoctorj/ember-template-test/test/templates.js) file and modify the variables to use your paths to your ember files and your compiled templates. The `walker helper` spec is optional, the `templates task` spec is what you want. The walker will walk your templates directory and form an array of what your template names should be. Then spec will then check the `Ember.TEMPLATES` for each template property and fail is any are missing.

## fixtures

The `fixtures` directory and `gulpfile` are there only for testing. The only thing you need is the [test/templates](https://github.com/mrdoctorj/ember-template-test/test/templates.js) file.
