hutaoer's tools 
=======

这是我个人常用的一些小工具，呵呵呵！

### git_tool：主要是对git操作的一些封装，方便平时的git使用，目前包含批量删除本地分支和远程分支功能。
  
#### git_tool/git-delLocalBr：删除本地分支
  * 将该文件下载到本地，然后放到git的安装目录下。比如windows用户的话，可以放到"C:\Program Files (x86)\Git\cmd"	目录下，然后在你的本地仓库中，运行git delLocalBr即可。
  * 注意，本命令在使用的时候，会过滤掉master,demo,和当前分支。

#### git_tool/git-delRemoteBr：删除对应参数的远程分支
  * 文件的放置同上。
  * 注意，本命令在使用的时候，需要添加一个参数，这个参数应该是用户名
  * 比如，我们按照规则建一个分支，分支名为"zuoyu.ht/daily"，再新建一个分支为“zuoyu.ht/button”，再建一个“zuoyu.ht/layout”之类，然后push到对应远程分支。
  * 那么如果要删除对应的远程分支，您需要输入：“git delRemoteBr zuoyu.ht”，那么该命令会将远程分支下，所有的带有“zuoyu.ht/”的分支删除掉。

### grunt_tool：针对grunt写的一些工具函数，目前包含针对单个less文件进行编译的功能。
  * 获取您需要这个一次只编译某个less文件的功能。 	
  * 其实很多的编辑器都支持了less的编译，比如Sublime。
  * 如果你喜欢在命令行中对less进行编译，那么您来尝试一下吧。
  * 如果您的grunt已经配置好了less插件，那么您只要将grunt_tool/grunt.js中的内容放到项目grunt/Gruntfile.js的底部即可。
  * 如何使用？假设您的css目录是这样的：root/src/base/layout.less 或者
  root/components/button/index.less，然后我们要编译这两个less文件。先从根目录cd到grunt，然后输入grunt less2css:src/base/layout 或者grunt less2css:components/button/index。
  * 感谢@陈泽宇 同学的细心指导。

