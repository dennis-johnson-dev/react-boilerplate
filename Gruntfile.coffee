config =
  jsx:
    client:
      src: 'app/react/src/components.jsx'
      dest: 'public/js/components.js'

  coffee:
    app:
      expand: true,
      cwd: 'server/src',
      src: ['**/*.coffee'],
      dest: 'server/gen/',
      ext: '.js'

  watch:
    scripts:
      files: ['server/**/*.coffee'],
      tasks: ['coffee']

module.exports = (grunt) ->

  require('load-grunt-tasks')(grunt)

  grunt.initConfig(config)

  grunt.registerTask('default', ['jsx', 'coffee'])
