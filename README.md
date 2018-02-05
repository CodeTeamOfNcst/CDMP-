# nuxt-cdmp(实验设备预约平台<u>精简版</u>)

> Node.js(v9.4.0) + koa(2.4.1) + vue(2.5) + vuex + sequelize(4.32.2) + （NUXT）SSR
## 前言 

*本项目纯属个人框架学习阶段练习所用，数据并非真实。

github: https://github.com/CodeTeamOfNcst/CDMP-

本平台仿照现有平台进行技术重构，仍在开发阶段，今后会持续进行功能扩充和完善，目前仅完成了部分功能。在此过程中

项目持续进行中~

为什么选用 NUXT 

优点1：就是我们无需为了路由划分而烦恼，你只需要按照对应的文件夹层级创建 .vue 文件就行

优点2：无需考虑数据传输问题，nuxt 会在模板输出之前异步请求数据（需要引入 axios 库），而且对 vuex 有进一步的封装

优点3：内置了 webpack，省去了配置 webpack 的步骤，nuxt 会根据配置打包对应的文件



## 部署 <img src="https://img.shields.io/project/deploy-v1.0.0-blue.svg"/>

腾讯云ECS服务器 ubuntu 

0. 安装 yarn

      ```bash
       1. windows 
           （1）首先安装 chocolaty （cmd 管理员模式下输入以下代码） 

               @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

           （2）安装yarn 

               choco install yarn
       2.linux
       	 （1）添加apt仓库
       	 
       	 	curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -			echo "deb https://dl.yarnpkg.com/debian/ stable main" |
              sudo tee /etc/apt/sources.list.d/yarn.list

      	 （2）安装

      	 	sudo apt-get update && sudo apt-get install yarn
      	 	
      ```

1.  项目使用 node 版本必须在 **9.0** 以上，所以使用 nvm 安装 node，首先安装 nvm

        1. windows

       		choco install nvm   

        2.  linux

        	curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash

2. 使用 nvm 安装 node 9.4.0

        nmv install node-9.4.0

3. 安装项目所需环境

        1. 进入项目文件夹

            cd ./CDMP
        
        2. 安装所需环境

            yarn install 

3. 项目使用 mysql 作为数据库，需要先导入数据
4. 运行
    
        1. 项目文件夹下打开 bash 运行

            yarn run dev

5. 

## 完成功能 <img src="https://img.shields.io/badge/complete-v1.0.0-origin.svg"/>

1. 首页渲染
2. 课程的分类搜索
3. 课程 按 （智能排序 价格最高 价格最低 老师好评 人气最高） 排序
4. 课程 按 （班级类型 活动优惠 上课时间（周一到周日） 具体时间（上午下午晚上） 价格区间） 筛选
5. 完成课程列表的下拉加载更多 
6. 登录（注册暂无）
7. 腾讯云部署

## 预计功能 <img src="https://img.shields.io/badge/estimate-v1.0.0-ff69b4.svg"/>
1. 客服

（有些页面没有在此处写，根据项目进度往上加~）
## 个人 <img src="https://img.shields.io/oneself/my-ff69b4.svg"/>

爱生活 爱技术 爱折腾

## Build Setup <img src="https://img.shields.io/badge/build-v1.0.0-blue.svg"/>

``` bash
# install dependencies
$ npm install or yarn install

# serve with hot reload at localhost:3000
$ npm run dev




```