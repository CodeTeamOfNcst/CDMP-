/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : cdmp

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2018-01-28 19:33:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for applies
-- ----------------------------
DROP TABLE IF EXISTS `applies`;
CREATE TABLE `applies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `startDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `isAgree` tinyint(1) NOT NULL DEFAULT '0',
  `vioReason` varchar(255) DEFAULT NULL,
  `isUse` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `apply_user` int(11) DEFAULT NULL,
  `apply_device` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `apply_user` (`apply_user`),
  KEY `apply_device` (`apply_device`),
  CONSTRAINT `applies_ibfk_1` FOREIGN KEY (`apply_user`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `applies_ibfk_2` FOREIGN KEY (`apply_device`) REFERENCES `devices` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of applies
-- ----------------------------
INSERT INTO `applies` VALUES ('1', '2018-01-28 11:37:10', '2018-01-28 11:37:10', '0', 'user1 想要用计算机系的仪器', '1', '2018-01-28 11:37:10', '2018-01-28 11:37:10', '1', '1');
INSERT INTO `applies` VALUES ('2', '2018-01-28 11:37:10', '2018-01-28 11:37:10', '0', 'user2 想要用化学系的仪器', '1', '2018-01-28 11:37:10', '2018-01-28 11:37:10', '2', '2');
INSERT INTO `applies` VALUES ('3', '2018-01-28 11:37:10', '2018-01-28 11:37:10', '0', 'user3 想要用冶金系的仪器', '1', '2018-01-28 11:37:10', '2018-01-28 11:37:10', '3', '3');

-- ----------------------------
-- Table structure for devices
-- ----------------------------
DROP TABLE IF EXISTS `devices`;
CREATE TABLE `devices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `imgFilePath` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `purchaseDate` datetime DEFAULT NULL,
  `needRepair` tinyint(1) NOT NULL DEFAULT '0',
  `canReserve` tinyint(1) NOT NULL DEFAULT '1',
  `isUse` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `device_type` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `Devices_name_unique` (`name`),
  KEY `device_type` (`device_type`),
  CONSTRAINT `devices_ibfk_1` FOREIGN KEY (`device_type`) REFERENCES `devicetypes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of devices
-- ----------------------------
INSERT INTO `devices` VALUES ('1', '煤气灶', 'uploads/deviceImages/73b46370-041b-11e8-89a7-898d3de41d42.jpg', '这是计算机系的仪器', '2018-01-10 00:00:00', '0', '1', '1', '2018-01-28 11:37:10', '2018-01-28 19:08:20', '1');
INSERT INTO `devices` VALUES ('2', '大型机床', 'uploads/deviceImages/765bdcc0-041b-11e8-89a7-898d3de41d42.jpg', '这是化工系的仪器', '2018-01-23 00:00:00', '0', '1', '1', '2018-01-28 11:37:10', '2018-01-28 19:11:25', '2');
INSERT INTO `devices` VALUES ('3', '大概是个电冰箱吧', 'uploads/deviceImages/78fb66d0-041b-11e8-89a7-898d3de41d42.jpg', '这是冶金学院的超大号电冰箱（逃）', '2018-01-16 00:00:00', '0', '1', '1', '2018-01-28 11:37:10', '2018-01-28 19:23:52', '3');
INSERT INTO `devices` VALUES ('4', '抽油烟机', 'uploads/deviceImages/0003c590-041d-11e8-89a7-898d3de41d42.jpg', '这是冶金学院的抽油烟机', '2018-01-10 00:00:00', '0', '1', '1', '2018-01-28 19:12:28', '2018-01-28 19:18:43', '1');
INSERT INTO `devices` VALUES ('5', ' 场发射扫描电子显微镜', 'uploads/deviceImages/4f7a06c0-041d-11e8-b831-17dfe56dc192.jpg', '\n场发射扫描电子显微镜', '2018-01-11 00:00:00', '1', '1', '1', '2018-01-28 19:19:35', '2018-01-28 19:28:28', '2');
INSERT INTO `devices` VALUES ('6', '激光拉曼光谱仪', 'uploads/deviceImages/6fcd7a60-041d-11e8-b831-17dfe56dc192.jpg', '激光拉曼光谱仪', '2018-01-16 00:00:00', '0', '1', '1', '2018-01-28 19:21:37', '2018-01-28 19:28:14', '1');
INSERT INTO `devices` VALUES ('7', '聚焦离子束场发射扫描电子显微镜', 'uploads/deviceImages/d618ce40-041e-11e8-b831-17dfe56dc192.jpg', '聚焦离子束场发射扫描电子显微镜\n', '2018-01-08 00:00:00', '0', '1', '1', '2018-01-28 19:29:23', '2018-01-28 19:31:52', '2');
INSERT INTO `devices` VALUES ('8', ' 离子溅射仪', 'uploads/deviceImages/a3f43260-041e-11e8-b831-17dfe56dc192.jpg', '\n离子溅射仪', '2018-01-01 00:00:00', '0', '1', '1', '2018-01-28 19:29:51', '2018-01-28 19:30:28', '1');
INSERT INTO `devices` VALUES ('9', '高温激光共聚焦显微镜', 'uploads/deviceImages/9fcf19c0-041e-11e8-b831-17dfe56dc192.jpg', '高温激光共聚焦显微镜', '2018-01-09 00:00:00', '0', '1', '1', '2018-01-28 19:30:14', '2018-01-28 19:30:21', '2');
INSERT INTO `devices` VALUES ('10', '场发射透射式电子显微镜', 'uploads/deviceImages/d9263550-041e-11e8-b831-17dfe56dc192.jpg', '场发射透射式电子显微镜', '2018-01-31 00:00:00', '0', '1', '1', '2018-01-28 19:30:57', '2018-01-28 19:31:57', '1');
INSERT INTO `devices` VALUES ('11', ' 显微和宏观维氏硬度计', 'uploads/deviceImages/fd0f79e0-041e-11e8-b831-17dfe56dc192.jpg', '\n显微和宏观维氏硬度计', '2018-01-23 00:00:00', '0', '1', '1', '2018-01-28 19:31:29', '2018-01-28 19:32:57', '2');

-- ----------------------------
-- Table structure for devicetypes
-- ----------------------------
DROP TABLE IF EXISTS `devicetypes`;
CREATE TABLE `devicetypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `isUse` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `DeviceTypes_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of devicetypes
-- ----------------------------
INSERT INTO `devicetypes` VALUES ('1', '计算机系', '1', '2018-01-28 11:37:10', '2018-01-28 11:37:10');
INSERT INTO `devicetypes` VALUES ('2', '化学系', '1', '2018-01-28 11:37:10', '2018-01-28 11:37:10');
INSERT INTO `devicetypes` VALUES ('3', '冶金系', '1', '2018-01-28 11:37:10', '2018-01-28 11:37:10');

-- ----------------------------
-- Table structure for messageklasses
-- ----------------------------
DROP TABLE IF EXISTS `messageklasses`;
CREATE TABLE `messageklasses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `isUse` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `MessageKlasses_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of messageklasses
-- ----------------------------
INSERT INTO `messageklasses` VALUES ('1', '1', '成功消息', '2018-01-28 11:37:08', '2018-01-28 11:37:08');
INSERT INTO `messageklasses` VALUES ('2', '1', '普通消息', '2018-01-28 11:37:08', '2018-01-28 11:37:08');
INSERT INTO `messageklasses` VALUES ('3', '1', '失败消息', '2018-01-28 11:37:08', '2018-01-28 11:37:08');

-- ----------------------------
-- Table structure for messages
-- ----------------------------
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text,
  `publishDate` datetime DEFAULT NULL,
  `isPublished` tinyint(1) DEFAULT '0',
  `isRead` tinyint(1) DEFAULT '0',
  `isUse` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `message_type` int(11) DEFAULT NULL,
  `message_user` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `message_type` (`message_type`),
  KEY `message_user` (`message_user`),
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`message_type`) REFERENCES `messageklasses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`message_user`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of messages
-- ----------------------------
INSERT INTO `messages` VALUES ('1', '这是一条成功的消息', '2018-01-28 11:37:08', '0', '0', '1', '2018-01-28 11:37:08', '2018-01-28 11:37:08', '1', '1');
INSERT INTO `messages` VALUES ('2', '这是一条普通的消息', '2018-01-28 11:37:08', '0', '0', '1', '2018-01-28 11:37:08', '2018-01-28 11:37:08', '2', '2');
INSERT INTO `messages` VALUES ('3', '这是一条有生之年系列失败的消息', '2018-01-28 11:37:08', '0', '0', '1', '2018-01-28 11:37:08', '2018-01-28 11:37:08', '3', '3');
INSERT INTO `messages` VALUES ('4', '这是一条活久见成功的消息', '2018-01-28 11:37:08', '0', '0', '1', '2018-01-28 11:37:08', '2018-01-28 11:37:09', '1', '1');
INSERT INTO `messages` VALUES ('5', '这是一条2333普通的消息', '2018-01-28 11:37:09', '0', '0', '1', '2018-01-28 11:37:09', '2018-01-28 11:37:09', '2', '2');
INSERT INTO `messages` VALUES ('6', '这是一条红红红火火晃晃呼呼失败的消息', '2018-01-28 11:37:09', '0', '0', '1', '2018-01-28 11:37:09', '2018-01-28 11:37:09', '3', '3');
INSERT INTO `messages` VALUES ('7', '这是一条失踪人口回归成功的消息', '2018-01-28 11:37:09', '0', '0', '1', '2018-01-28 11:37:09', '2018-01-28 11:37:09', '1', '1');
INSERT INTO `messages` VALUES ('8', '这是一条高产似母猪的消息', '2018-01-28 11:37:09', '0', '0', '1', '2018-01-28 11:37:09', '2018-01-28 11:37:09', '2', '2');
INSERT INTO `messages` VALUES ('9', '这是一条您预约的设备成功被别人抢走了失败的消息', '2018-01-28 11:37:09', '0', '0', '1', '2018-01-28 11:37:09', '2018-01-28 11:37:09', '3', '3');
INSERT INTO `messages` VALUES ('10', '这是一条立浮华之世失败的消息', '2018-01-28 11:37:09', '0', '0', '1', '2018-01-28 11:37:09', '2018-01-28 11:37:09', '3', '3');
INSERT INTO `messages` VALUES ('11', '这是一条奏天籁之音的消息', '2018-01-28 11:37:09', '0', '0', '1', '2018-01-28 11:37:09', '2018-01-28 11:37:09', '3', '3');
INSERT INTO `messages` VALUES ('12', '这是一条你关注的微博推送了新的消息', '2018-01-28 11:37:09', '0', '0', '1', '2018-01-28 11:37:09', '2018-01-28 11:37:09', '3', '3');
INSERT INTO `messages` VALUES ('13', '这是一条我实在想不出来编什么好的消息', '2018-01-28 11:37:09', '0', '0', '1', '2018-01-28 11:37:09', '2018-01-28 11:37:09', '3', '3');
INSERT INTO `messages` VALUES ('14', '这是一条您已被思特沃科学院录取的消息', '2018-01-28 11:37:09', '0', '0', '1', '2018-01-28 11:37:09', '2018-01-28 11:37:10', '3', '3');
INSERT INTO `messages` VALUES ('15', '这是一条考试永远不挂科的好消息', '2018-01-28 11:37:10', '0', '0', '1', '2018-01-28 11:37:10', '2018-01-28 11:37:10', '3', '3');

-- ----------------------------
-- Table structure for rules
-- ----------------------------
DROP TABLE IF EXISTS `rules`;
CREATE TABLE `rules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `publishDate` datetime DEFAULT NULL,
  `title` text,
  `content` text,
  `isUse` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rules
-- ----------------------------
INSERT INTO `rules` VALUES ('1', '2018-01-28 11:37:07', '第一条公告', '第一条公告', '1', '2018-01-28 11:37:07', '2018-01-28 11:37:07');
INSERT INTO `rules` VALUES ('2', '2018-01-28 11:37:07', '第二条公告', '第二条公告', '1', '2018-01-28 11:37:07', '2018-01-28 11:37:07');
INSERT INTO `rules` VALUES ('3', '2018-01-28 11:37:07', '第三条公告', '第三条公告', '1', '2018-01-28 11:37:07', '2018-01-28 11:37:07');
INSERT INTO `rules` VALUES ('4', '2018-01-28 11:37:07', '第四条公告', '第四条公告', '1', '2018-01-28 11:37:07', '2018-01-28 11:37:07');
INSERT INTO `rules` VALUES ('5', '2018-01-28 11:37:07', '第五条公告', '第五条公告', '1', '2018-01-28 11:37:07', '2018-01-28 11:37:07');
INSERT INTO `rules` VALUES ('6', '2018-01-28 11:37:07', '第六条公告', '第六条公告', '1', '2018-01-28 11:37:07', '2018-01-28 11:37:07');
INSERT INTO `rules` VALUES ('7', '2018-01-28 11:37:07', '第七条公告', '第七条公告', '1', '2018-01-28 11:37:07', '2018-01-28 11:37:07');
INSERT INTO `rules` VALUES ('8', '2018-01-28 11:37:08', '第八条公告', '第八条公告', '1', '2018-01-28 11:37:08', '2018-01-28 11:37:08');
INSERT INTO `rules` VALUES ('9', '2018-01-28 11:37:08', '第九条公告', '第九条公告', '1', '2018-01-28 11:37:08', '2018-01-28 11:37:08');
INSERT INTO `rules` VALUES ('10', '2018-01-28 11:37:08', '第十条公告', '第十条公告', '1', '2018-01-28 11:37:08', '2018-01-28 11:37:08');
INSERT INTO `rules` VALUES ('11', '2018-01-28 11:37:08', '第十一条公告', '第十一条公告', '1', '2018-01-28 11:37:08', '2018-01-28 11:37:08');
INSERT INTO `rules` VALUES ('12', '2018-01-28 11:37:08', '第十二条公告', '第十二条公告', '1', '2018-01-28 11:37:08', '2018-01-28 11:37:08');

-- ----------------------------
-- Table structure for userklasses
-- ----------------------------
DROP TABLE IF EXISTS `userklasses`;
CREATE TABLE `userklasses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `isUse` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `UserKlasses_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userklasses
-- ----------------------------
INSERT INTO `userklasses` VALUES ('1', '1', '管理员', '2018-01-28 11:37:06', '2018-01-28 11:37:06');
INSERT INTO `userklasses` VALUES ('2', '1', '用户', '2018-01-28 11:37:06', '2018-01-28 11:37:06');
INSERT INTO `userklasses` VALUES ('3', '1', '关系用户', '2018-01-28 11:37:06', '2018-01-28 11:37:06');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `isUse` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_type` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `account` (`account`),
  UNIQUE KEY `Users_account_unique` (`account`),
  KEY `user_type` (`user_type`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`user_type`) REFERENCES `userklasses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'haoyiqing', '123456', '郝一擎', null, '1337074512@qq.com', '1', '2018-01-28 11:37:06', '2018-01-28 11:37:06', '1');
INSERT INTO `users` VALUES ('2', 'zhanglingxue', '123456', '张凌雪', null, 'zhanglingxue@qq.com', '1', '2018-01-28 11:37:06', '2018-01-28 11:37:06', '2');
INSERT INTO `users` VALUES ('3', 'huiliyi', '123456', '上杉绘梨衣', null, 'shangshanhuiliyi@qq.com', '1', '2018-01-28 11:37:06', '2018-01-28 11:37:06', '3');
INSERT INTO `users` VALUES ('4', 'lumingfei', '123456', '路明非', null, 'lumingfei@qq.com', '1', '2018-01-28 11:37:06', '2018-01-28 11:37:06', '2');
INSERT INTO `users` VALUES ('5', 'chenwenwen', '123456', '陈雯雯', null, 'chenwenwen@qq.com', '1', '2018-01-28 11:37:07', '2018-01-28 11:37:07', '3');
INSERT INTO `users` VALUES ('6', 'chenmotong', '123456', '陈墨瞳', null, 'chenmotong@qq.com', '1', '2018-01-28 11:37:07', '2018-01-28 11:37:07', '2');
INSERT INTO `users` VALUES ('7', 'kaisa', '123456', '凯撒', null, 'kaisa@qq.com', '1', '2018-01-28 11:37:07', '2018-01-28 11:37:07', '3');
INSERT INTO `users` VALUES ('8', 'chuzihang', '123456', '楚子航', null, 'chuzihang@qq.com', '1', '2018-01-28 11:37:07', '2018-01-28 11:37:07', '2');
INSERT INTO `users` VALUES ('9', 'lumingze', '123456', '路明泽', null, 'lumingze@qq.com', '1', '2018-01-28 11:37:07', '2018-01-28 11:37:07', '3');
INSERT INTO `users` VALUES ('10', 'liuzhenhan', '123456', '刘震撼', null, 'liuzhenhan@qq.com', '1', '2018-01-28 11:37:07', '2018-01-28 11:37:07', '2');
INSERT INTO `users` VALUES ('11', 'hailun', '123456', '海伦', null, 'hailun@qq.com', '1', '2018-01-28 11:37:07', '2018-01-28 11:37:07', '3');
INSERT INTO `users` VALUES ('12', 'halibote', '123456', '哈利珀特', null, 'halibote@qq.com', '1', '2018-01-28 11:37:07', '2018-01-28 11:37:07', '2');
INSERT INTO `users` VALUES ('13', 'ningyu', '123456', '凝玉', null, 'ningyu@qq.com', '1', '2018-01-28 11:37:07', '2018-01-28 11:37:07', '3');
