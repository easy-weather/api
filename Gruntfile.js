module.exports = function(grunt) {
   'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compile: {
        files: {
          'bin/app.js': 'src/app.coffee',
        }
      }
    },
    jshint: {
      all: ['bin/app.js']
    },
    david: {
      all: {
        options: {
          update: false
        }
      }
    }
  });

  grunt.registerTask('default', ['david', 'coffee', 'jshint']);

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-david');
};
