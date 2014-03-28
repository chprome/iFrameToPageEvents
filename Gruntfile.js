function requireDeps(grunt) {
    require('load-grunt-tasks')(grunt);
}

function initConfig(grunt) {

    grunt.config('parallel', {
        main: {
            options: {
                stream: true,
                grunt: true
            },
            tasks: ['connect:main', 'connect:other']
        }
    });

    grunt.config('connect', {
        main: {
            options: {
                base: './main',
                port: 9000,
                hostname: '*',
                keepalive: true
            }
        },
        other: {
            options: {
                base: './other',
                port: 9001,
                hostname: '*',
                keepalive: true
            }
        }
    });
}

function registerTasks(grunt) {
    grunt.registerTask('default', ['parallel']);
}

module.exports = function(grunt) {
    requireDeps(grunt);
    initConfig(grunt);
    registerTasks(grunt);
};