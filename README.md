# nuxt-cdmp(实验设备预约平台)

> Node.js(v9.4.0) + koa(2.4.1) + vue(2.5) + vuex + sequelize(4.32.2)+ element-ui(2.1.0) + （NUXT）SSR
## 前言 

本项目纯属个人框架学习阶段练习所用，数据并非真实。

github: https://github.com/CodeTeamOfNcst/CDMP-

本平台仿照[现有平台](http://fxcszx.ncst.edu.cn/)进行技术重构，仍在开发阶段，今后会持续进行功能扩充和完善，目前仅完成了部分功能。

项目持续进行中~

为什么选用 NUXT 

优点1：就是我们无需为了路由划分而烦恼，你只需要按照对应的文件夹层级创建 .vue 文件就行

优点2：无需考虑数据传输问题，nuxt 会在模板输出之前异步请求数据（需要引入 axios 库），而且对 vuex 有进一步的封装

优点3：内置了 webpack，省去了配置 webpack 的步骤，nuxt 会根据配置打包对应的文件，方便使用各种模板语言

重点4：nuxt集成了前后端，采用vue编写前台页面，koa编写后台页面（虽然使用koa踩了一个不小的坑。。），ES6编写异步代码，使得逻辑更加清晰。项目使用了较新的ES标准，所以要求于运行node版本在9.0以上。



## 项目截图 







## 部署 <img src="https://img.shields.io/project/deploy-v1.0.0-blue.svg"/>

腾讯云 ECS 服务器 ubuntu 16.04，[访问这里](http://123.207.72.192/)

0、安装node 9.0以上版本

​	（1）首先安装 nvm 

​		linux（ubuntu）下：

​			sudo apt-get install git     

​			curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash

​		windows（10）下:

​			首先安装chocolaty，cmd(管理员模式下)

​			@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

​			然后使用 chocolatey 安装  nvm

​			choco install nvm

​		(2)使用nvm安装 node 9.4.0

​			nvm install node v9.4.0

1、安装yarn（方便node包的兼容安装）

​		(1) linux 下

​			curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

​			sudo apt-get update && sudo apt-get install yarn

​		（2）windows（10） 下

​			 choco install yarn

2、bash 下进入到项目文件夹内

​		cd CDMP

3、yarn install（npm install由于兼容性的问题，可能会报错）

4、配置数据库配置文件（使用mysql 数据库，linux 和 windows 稍有不同，默认已经安装完成[mysql数据库](https://www.mysql.com/downloads/)）

​		找到项目文件夹下的数据文件 cdmp.sql 利用navicat 新建本地数据库

​		(1)linux 下， 由于 sequelize 的创建数据库的小bug（也可能是我文档没读完整），创建的数据库table名称与定义名称在大小写方面并不相同，所以需要关闭linux下mysql数据库的大小写识别，方式如下

​			nano 	/etc/mysql/mysql.conf.d/mysqld.cnf

​			\#修改数据库大小写识别，增加一行输入：

​			lower_case_table_names=1

​			\#保存退出

​			ctrl + c

​		(2)windows10下 mysql默认不区分数据库table名称大小写 ，可不做修改，直接导入数据文件

​	        (3)修改数据库配置

​			进入数据库配置文件

​		

6、开发环境测试

​		项目文件夹下运行

​			yarn install && yarn run dev

7、npm run build

8、上面忘记安装pm2， yarn add pm2 （开启 node server 使用）

9、pm2 start build/mian.js

10、查看 pm2 list 列表，查看启动状态

11、pm2 monit  监视所有进程

12、开启 ./nginx

13、如果一切正常，但是访问不通，可以pm2 logs 查看是否报错？

## 功能完成情况 <img src="https://img.shields.io/badge/complete-v1.0.0-origin.svg"/>

1. 首页渲染
2. 课程的分类搜索
3. 课程 按 （智能排序 价格最高 价格最低 老师好评 人气最高） 排序
4. 课程 按 （班级类型 活动优惠 上课时间（周一到周日） 具体时间（上午下午晚上） 价格区间） 筛选
5. 完成课程列表的下拉加载更多 
6. 课程详情
7. 预约试听 
8. 分类页面
9. 我的页面
10. 提交订单
11. 登录（注册暂无）
12. 设置页面
13. 优惠券页面
14. 钱包页面
15. 购物车 （添加购物车 删除购物车 结算购物车 购物车批量提交订单）
16. 我的订单 （全部订单 待付款 交易成功）
17. redis (首页缓存 分页缓存）
18. 阿里云部署

## 技术难点<img src="https://img.shields.io/badge/estimate-v1.0.0-ff69b4.svg"/>
1. 客服

（有些页面没有在此处写，根据项目进度往上加~）
## 团队 <img src="https://img.shields.io/oneself/my-ff69b4.svg"/>

爱生活 爱技术 爱折腾

## 
