module.exports = function (grunt) {
  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: 'src/lib'
        }
      }
    },
    concat: {
      "btcquote-widget": {
       "src": [
         "src/*.js",
         "src/lib/odometer/odometer.js"
       ],
        "dest": "build/btcquote-widget.js"
      }
    },
    jshint: {
      all: [
        'src/*.js',
      ]
    },
    uglify: {
      "btcquote-widget.min.js": {
        src: "build/btcquote-widget.js",
        dest: "build/btcquote-widget.min.js"
      },
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', [
    'jshint',
    'concat',
    'uglify'
  ]);
};