module.exports = function (grunt) {
  grunt.initConfig({
     jshint: {
      all: [
        'btcquote-widget.js',
      ]
    },
    uglify: {
      options: {
        mangle: false
      },
      "btcquote-widget.min.js": {
        src: "btcquote-widget.js",
        dest: "btcquote-widget.min.js"
      },
    }});
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', [
    'jshint',
    'uglify'
  ]);
};