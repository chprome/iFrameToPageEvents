function requireDeps(grunt) {
    require('load-grunt-tasks')(grunt);
}

function initConfig(grunt) {
    grunt.config('connect', {
        main: {
            options: {
                base: './main',
                port: 9000,
                hostname: '*',
                keepalive: true
            }
        }
    });
}

function registerTasks(grunt) {
    grunt.registerTask('default', ['connect']);
}

module.exports = function(grunt) {
    requireDeps(grunt);
    initConfig(grunt);
    registerTasks(grunt);
};