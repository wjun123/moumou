const express = require('express');
const pool = require('../pool.js');
var router = express.Router();


//checkUname 验证用户名
router.post("/checkUname",(req,res)=>{
	var $uname = req.body.uname;
	if(!$uname){
		res.send("2");//用户名不能为空
		return;
	}
	var reg=/^([\u4e00-\u9fa5]|\w){3,12}$/;
	if(reg.test($uname)){
	var sql = "SELECT * FROM lin_user WHERE uname=?";
	pool.query(sql,[$uname],(err,result)=>{
		console.log(result);
		if(result.length>0){
			res.send("1");//用户名已被占用
		}else{
			res.send("0");//用户名可用
		}
	});
  }else{
	  res.send("3");//用户名格式不正确
  }
})
//验证邮箱
router.post("/checkemail",(req,res)=>{
	var $email = req.body.email;
	if(!$email){
		res.send("2");//邮箱不能为空
		return;
	}
	var reg=/^[^.@]+@[^.@]+\.(com|cn|net)(\.cn)?$/;
	if(reg.test($email)){
	var sql = "SELECT * FROM lin_user WHERE email=?";
	pool.query(sql,[$email],(err,result)=>{
		if(result.length>0){
			res.send("1");//邮箱已被占用
		}else{
			res.send("0");//邮箱可用
		}
	})
   }else{
	   res.send("3");//邮箱格式不正确
   }
});
//注册
router.post('/register',(req,res)=>{
	 var obj = req.body;
	 var uname = obj.uname;
	 var upwd = obj.upwd;
	 var email = obj.email;
	 var phone = obj.phone;
     console.log(obj);
	if(uname==null){
		res.send("用户名不能为空");
		return;
	}
	if(upwd==null){
		res.send("密码不能为空");
		return;
	}
	if(email==null){
		res.send("邮箱不能为空");
		return;
	}
	if(phone==null){
		res.send("手机号不能为空");
		return;
	}
	 var sql = 'insert into lin_user values(null,?,?,?,?,null,null)';
	 pool.query(sql,[uname,upwd,email,phone],(err,result)=>{
			console.log(result);
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		}
	 });
});


//登录
router.post('/login',(req,res)=>{
	var obj = req.body;
	var uname = obj.uname;
	var upwd = obj.upwd;
	if(!uname){
		res.send("2");
		return;
	}
	if(!upwd){
		res.send("2");
		return;
	}
	var sql = 'select * from lin_user where uname=? and upwd=?';
	pool.query(sql,[uname,upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('1'); //登录成功
		}else{
			res.send('0'); //有户名或者密码不正确
		}
	});
});

//导出路由
module.exports = router;