module.exports = (grunt) => {
    require('load-grunt-tasks')(grunt)
    grunt.initConfig({
        sass:{
            dist:{
            files:{
                'css/styles.css':'sass/index.scss',
            },
            options:{
                implementation: require('node-sass')
            }
            }
        },
        watch:{
            scss:{
            files:'sass/**.scss',
            tasks:['sass'],
            options:{
                livereload:true
            }
        }
        }
    })
    grunt.registerTask('default',['sass','watch']);

}