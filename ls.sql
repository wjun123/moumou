CREATE DATABASE lin charset=utf8;
USE lin;
#轮播图
CREATE TABLE lin_imagelist(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(255),
    title VARCHAR(50)
);
INSERT INTO lin_imagelist VALUES(null,'img/sy/1.jpg','图片1');
INSERT INTO lin_imagelist VALUES(null,'img/sy/2.jpg','图片2');
INSERT INTO lin_imagelist VALUES(null,'img/sy/3.jpg','图片3');
INSERT INTO lin_imagelist VALUES(null,'img/sy/4.jpg','图片4');

#热卖表
CREATE TABLE remai(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(255),
    title VARCHAR(50),
    price DECIMAL(10,2)
);
INSERT INTO remai VALUES(null,'img01/18.png','全实木地柜',3760);
INSERT INTO remai VALUES(null,'img01/19.png','头靠可调节北方情沙发',3860);
INSERT INTO remai VALUES(null,'img01/21.png','可拆洗带扶手茶盘沙发',3660);
INSERT INTO remai VALUES(null,'img01/20.png','清新米黄布皮沙发',3960);

#注册
CREATE TABLE lin_user(  
  `uid` int(11) PRIMARY KEY NOT NULL auto_increment,
  `uname` varchar(32) default NULL,
  `upwd` varchar(32) default NULL,
  `email` varchar(64) default NULL,
  `phone` varchar(16) default NULL,
  `user_name` varchar(32) default NULL,
  `gender` int(11) default NULL
);
INSERT INTO lin_user VALUES(null,'haha','123456','123@qq.com','15093159256','哈哈',1);
INSERT INTO lin_user VALUES(null,'hehe','123456','123@qq.com','15093159256','呵呵',0);


#家清单
CREATE TABLE inventory(
     id INT PRIMARY KEY AUTO_INCREMENT,
     img_url1 VARCHAR(255),
     img_url2 VARCHAR(255),
     img_url3 VARCHAR(255),
     img_url4 VARCHAR(255),
     title VARCHAR(50)
);
INSERT INTO inventory VALUES(null,'img01/26.jpg','img01/30.jpg','img01/31.jpg','img01/29.jpg','二胎时代不意味着要压缩孩子的成长空间，选对儿童床，给孩子一个更美好的成长空间。');
INSERT INTO inventory VALUES(null,'img01/27.jpg','img01/32.jpg','img01/33.jpg','img01/34.jpg','拥有一张男友力爆棚的沙发是怎样的体验，我想它会让你有恋爱的感觉...');
INSERT INTO inventory VALUES(null,'img01/28.jpg','img01/35.jpg','img01/36.jpg','img01/37.jpg','茶几不只是用于储物、搁脚、搭配沙发，选对茶几，让你的客厅颜值翻倍。');



