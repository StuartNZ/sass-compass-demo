/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    files: {
      root: '.',
      style: {
        css: '<%= files.root %>/css',
        scss: '<%= files.style.css %>/scss'
      },
      js: {
        src: 'js/src',
        dist: 'js/dist'
      }
    },
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },
     connect: {
      server: {
        options: {
          port: 9001,
          base: '.'
        }
      }
    },
    compass: {
      files: ['<%= files.style.scss %>/**/*.scss'],
      dev: {
        options: {
          basePath: '.',
          config: 'config.rb'
        }
      }
    },
   watch:{
      options: {
        livereload: 9998
      },
      jshint: {
        files: ['gruntfile.js', '<%= files.js.src %>'],
        tasks: ['jshint']
      },
      html: {
        files: 'index.html'
      },
      compass: {
        files: '<%= compass.files %>',
        tasks: ['compass:dev']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // If you want a server running at http://localhost:9001
  //grunt.registerTask('connect', ['connect', 'watch']);

  // Default task. Just runs `watch` task
  grunt.registerTask('default', ['jshint', 'watch']);

};
