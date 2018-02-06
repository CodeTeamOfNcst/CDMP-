/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50710
Source Host           : localhost:3306
Source Database       : cdmp

Target Server Type    : MYSQL
Target Server Version : 50710
File Encoding         : 65001

Date: 2018-02-06 13:59:45
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of applies
-- ----------------------------
INSERT INTO `applies` VALUES ('1', '2018-01-28 11:37:10', '2018-01-28 11:37:10', '0', 'user1 想要用计算机系的仪器', '1', '2018-01-28 11:37:10', '2018-01-28 11:37:10', '1', '1');
INSERT INTO `applies` VALUES ('2', '2018-01-28 08:00:00', '2018-01-28 08:00:00', '0', 'user2 想要用化学系的仪器', '1', '2018-01-28 11:37:10', '2018-02-06 00:01:04', '2', '2');
INSERT INTO `applies` VALUES ('3', '2018-01-28 11:37:10', '2018-01-28 11:37:10', '0', 'user3 想要用冶金系的仪器', '1', '2018-01-28 11:37:10', '2018-01-28 11:37:10', '3', '3');
INSERT INTO `applies` VALUES ('4', '2018-01-04 08:00:00', '2018-01-04 08:00:00', '1', '需要进行大型实验。', '1', '2018-02-06 12:08:36', '2018-02-06 12:08:51', '2', '3');

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
INSERT INTO `devices` VALUES ('1', '原子吸收光谱仪', 'uploads/deviceImages/73b46370-041b-11e8-89a7-898d3de41d42.jpg', '这是计算机系的仪器', '2018-01-10 00:00:00', '0', '1', '1', '2018-01-28 11:37:10', '2018-02-05 23:55:01', '1');
INSERT INTO `devices` VALUES ('2', '电感耦合直读光谱仪', 'uploads/deviceImages/765bdcc0-041b-11e8-89a7-898d3de41d42.jpg', '这是化工系的仪器', '2018-01-23 00:00:00', '0', '1', '1', '2018-01-28 11:37:10', '2018-02-05 23:17:35', '2');
INSERT INTO `devices` VALUES ('3', '压样机', 'uploads/deviceImages/78fb66d0-041b-11e8-89a7-898d3de41d42.jpg', '这是冶金学院的超大号电冰箱（逃）', '2018-01-16 00:00:00', '0', '1', '1', '2018-01-28 11:37:10', '2018-02-05 23:53:36', '3');
INSERT INTO `devices` VALUES ('4', '全自动熔样机 ', 'uploads/deviceImages/0003c590-041d-11e8-89a7-898d3de41d42.jpg', '这是冶金学院的抽油烟机', '2018-01-10 00:00:00', '0', '1', '1', '2018-01-28 19:12:28', '2018-02-05 23:54:05', '3');
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
INSERT INTO `messages` VALUES ('1', '即将预约到期，请及时归还。', '2018-01-28 08:00:00', '0', '0', '1', '2018-01-28 11:37:08', '2018-02-06 00:23:53', '1', '1');
INSERT INTO `messages` VALUES ('2', '您已超出归还时间！', '2018-01-28 08:00:00', '0', '0', '1', '2018-01-28 11:37:08', '2018-02-06 00:24:29', '2', '2');

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
INSERT INTO `rules` VALUES ('1', '2017-11-01 08:00:00', '电子探针JXA-8230工程师培训时间安排 ', ' 2017年11月21日\n\n上午 基本原理：二次电子，反射电子，X 射线（包括空间分辨率）\n产品概要：基本构成，分光器的结构\n基礎操作实习\n试样更换、图像观察（SEI,BEI）、X 射线检测、分光器的结构和 X 射线强度等\n下午 全元素定性分析实习\n分析条件的设定（分光器条件的设定，电子光学条件的设定等）\n定性分析的应用实习\n微量元素检测分析（测定条件，检测界限）\n\n说明：本次培训班使用日本电子工厂准备的样品进行。', '1', '2018-01-28 11:37:07', '2018-02-05 23:36:33');
INSERT INTO `rules` VALUES ('2', '2017-10-20 08:00:00', '新添大型分析设备构成完备的微结构分析体系', ' 近日，新添大型分析设备——场发射透射电子显微镜（TEM，JEM 2800F）、电子探针（EPMA，JXA 8230）、场发射电子束/聚焦离子束双束系统（FIB，Scios）、三维计算机断层扫描设备（工业CT，X5000），已安装调试完成，同时现代技术教育中心展开了不同形式的业务学习，和其它现有设备一起构成了完备的微结构分析体系。\n\n', '1', '2018-01-28 11:37:07', '2018-02-05 23:35:42');
INSERT INTO `rules` VALUES ('3', '2017-12-15 08:00:00', '大型仪器使用流程培训', '为维护和保养仪器使用年限和快速投入使用，暂定2017年1月1号统一进行大型仪器的使用培训工作。', '1', '2018-01-28 11:37:07', '2018-02-06 00:06:38');
INSERT INTO `rules` VALUES ('4', '2018-01-16 08:00:00', '实验室放射源使用与管理办法', '\n\n    各实验室使用的放射源必须符合国家放射性同位素卫生防护管理的有关规定。\n\n    放射源的管理：实验室主任全面负责本实验室放射源的管理。放射源要放置在具有防护措施的固定场所，各实验室每学期期末填写放射源的使用登记表，与实验室管理科核对，保证账、物、卡一致。\n\n    放射源购买：放射源的购买应由主管教学的系副主任批准，报保卫处与教务处核实，由教务处统一采购。\n\n    放射源的使用：从事放射性工作人员使用放射物质时，要穿戴好防护用具，严格按照仪器操作说明执行。\n\n    放射源保管：放射源要专人保管，如果出现人员交替等问题，需在交接工作时，严格履行交接手续；放射源长期不用，应交校危险品库统一保管。\n\n   \n\n   ', '1', '2018-01-28 11:37:07', '2018-02-06 00:10:12');
INSERT INTO `rules` VALUES ('5', '2018-01-28 08:00:00', '分析测试中心安全管理制度', '\n\n水、电、气等设施必须按有关规定规范安装，不得乱拉、乱接临时线路。定期对实验室的电源、水源、火源等方面情况进行检查\n\n实验室要把安全知识、安全制度、操作规程等列为实验教学的内容之一，新进实验室人员必须先接受安全教育，掌握基本安全知识和技能。\n\n实验室工作人员下班时，必须关闭电源、水源、气源、门窗，剩余的化学试剂要保管好。\n', '1', '2018-01-28 11:37:07', '2018-02-06 00:07:43');
INSERT INTO `rules` VALUES ('6', '2018-01-28 08:00:00', ' 竞争性磋商中标公告', '暂无', '1', '2018-01-28 11:37:07', '2018-02-06 00:27:43');
INSERT INTO `rules` VALUES ('7', '2018-01-28 08:00:00', '原子吸收光谱分析中的干扰及消除实验', '暂无', '1', '2018-01-28 11:37:07', '2018-02-06 00:27:57');
INSERT INTO `rules` VALUES ('8', '2018-01-28 08:00:00', '原子发射光谱概述', '暂无', '1', '2018-01-28 11:37:08', '2018-02-06 00:28:37');
INSERT INTO `rules` VALUES ('9', '2018-01-28 08:00:00', '工业CT对电路板分析过程上线', '暂无', '1', '2018-01-28 11:37:08', '2018-02-06 00:28:46');
INSERT INTO `rules` VALUES ('10', '2018-01-28 08:00:00', '大型仪器设备维护教程', '1.需维护仪器在每月3号前将检修仪器送往维修站。\n2.按规定填写维修信息及获取取回仪器时间。\n3.对于维修中途仪器损坏且不再能进行正常使用一概不负责任。', '1', '2018-01-28 11:37:08', '2018-02-06 00:15:31');
INSERT INTO `rules` VALUES ('11', '2018-01-09 08:00:00', '针状铁素体3D结构首次被发现', '暂无', '1', '2018-01-28 11:37:08', '2018-02-06 00:28:03');
INSERT INTO `rules` VALUES ('12', '2018-01-16 00:00:00', '大型仪器培训事宜', '第十二条公告', '1', '2018-01-28 11:37:08', '2018-02-06 00:16:58');

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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'haoyiqing', '123456', '郝一擎', null, '1337074512@qq.com', '1', '2018-01-28 11:37:06', '2018-01-28 11:37:06', '1');
INSERT INTO `users` VALUES ('2', 'zhanglingxue', '123456', '张凌雪', null, 'zhanglingxue@qq.com', '1', '2018-01-28 11:37:06', '2018-01-28 11:37:06', '2');
INSERT INTO `users` VALUES ('3', 'wangyangyang', '123456', '王洋洋', null, 'wangyangyang@qq.com', '1', '2018-01-28 11:37:06', '2018-02-05 23:56:53', '3');
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
INSERT INTO `users` VALUES ('14', 'liuyishou', '123456', '刘一手', '12345678900', 'liuyishou@qq.com', '1', '2018-02-05 23:58:13', '2018-02-05 23:58:13', '2');
