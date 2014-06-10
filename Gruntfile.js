module.exports = function(grunt) {
	"use strict";

	pkg: grunt.file.readJSON('package.json'),

	// carregando plugins
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks('grunt-contrib-less');

	// Project configuration.
	grunt.initConfig ({

		// Watch
		watch: {
			css: {
				files: [ 'less/*.less' ],
				tasks: [ 'less' ]
			},
			js: {
				files: 'js/*.js',
				tasks: ['uglify'] 
			}
		},

		//Lint, compile and concat 
		less: {
    		development: {
        		options: {
            		compile: true,
            		compress: true
        		},
        		files: {
            		'css/style.min.css': 
            		['less/style.less']
       			}
    		}
    	},

    	uglify: {
    		options: {
      			mangle: false,
      			compress: true
    		},
    		dist: {
      			files: {
        			'js/functions.min.js': 
        			['js/functions.js']
      			}
    		}
    	}
	});

	// registrando tarefas
	grunt.registerTask('default', ['watch'] );
};