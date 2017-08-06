（一） 非 angular-cli 搭建项目
1、angular2 采用TyperScript编写，编写的时候采用 TypeScript编写。
2、此demo 使用webStorm 工具编写，可以同步将 .ts 文件编译成 .js 文件。
3、如果希望 单个测试编译，可以使用 npm install -g typescript typings,然后编译（tsc hello.ts）。
4、运行此demo,需要安装node.js 以及 打包工具 webpack,   node.js 用于下载相应的lib js，webpack用于打包生产运行文件。
5、打包文件好后，会生产 bundle.js，然后依次使用 npm install，npm start 启动服务器，     http://localhost:30000/ 访问。

（二）使用 angular-cli 搭建项目
1、angularCLI 文件夹，需要使用 npm install -g @angular/cli 安装angular CLI 进行搭建。    是否安装成功，可以使用 ng version 查看版本。   2、使用 ng new ProjectName --skip-install,初始化项目文件（包括packjson等依赖）。
3、进入项目目录，使用 npm install 下载安装。
4、ng server,编译启动服务，http://localhost:4200/ 访问。

