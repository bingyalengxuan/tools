module.exports = function (grunt) {
 
    /** 
        前提是您已经配置好了less插件
    **/

    grunt.registerTask('less2css', function() {
        if (arguments.length == 3) {
            var dirName = arguments[1];
            var lessFileName = arguments[2];
            var outDirName = arguments[0] == 'src' ? 'src' : 'components';
            var files={};

            var lessPath = '../' + outDirName + '/' + dirName + '/' + lessFileName + '.less';

            if(!grunt.file.exists(lessPath)) {
                grunt.log.writeln("出错！该文件目录" + lessPath + "不存在！请检查后重新输入！");
                return;
            }

            var cssPath = '../' + outDirName + '/' + dirName + '/' + lessFileName + '.css';

            files[cssPath] = lessPath;
            grunt.config.init({
                less: {
                    compile: {
                        files: files
                    }
                }
            });

        } else {
            grunt.log.writeln('出错！请输入三个参数。第一个是外层目录，例如src或components，第二个是less所在文件目录，第三个是less文件名。');
            return;
        }
        grunt.task.run(['less:compile']);

    });
};