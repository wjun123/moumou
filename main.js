const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user.js');
const homePage = require('./routes/homePage.js');
var app = express();
app.listen(3000,()=>{
	console.log('ok');
});
//托管静态资源
app.use(express.static('./static'));
//接收客户端传递的数据
app.use(bodyParser.urlencoded({
	extended:false
}));
//1111
//挂载到user下
app.use('/user',user);
app.use('/homePage',homePage);







