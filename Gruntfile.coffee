config =
  browserify:
    options:
      transform: [ require('grunt-react').browserify ]
    files:
      expand: true,
      cwd: 'app/react/src',
      src: ['**/*.js'],
      dest: 'public/js',
      ext: '.js'

  clean:
    public: ['public/js']

  coffee:
    server:
      expand: true,
      cwd: 'server/src',
      src: ['**/*.coffee'],
      dest: 'server/gen/',
      ext: '.js'

  watch:
    server:
      files: ['server/**/*.coffee'],
      tasks: ['coffee']
    browserify:
      files: ['app/react/src/*.js'],
      tasks: ['browserify']

module.exports = (grunt) ->

  require('load-grunt-tasks')(grunt)

  grunt.initConfig(config)

  grunt.registerTask('default', ['coffee', 'clean', 'browserify'])
