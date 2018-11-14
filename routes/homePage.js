const express = require('express');
const pool = require('../pool.js');
var router = express.Router();
//轮播图
router.get('/lb',(req,res)=>{
    var sql = 'SELECT * FROM lin_imagelist';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
})
//热卖商品
router.get('/',(req,res)=>{
    var sql = 'SELECT * FROM remai';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});

//家清单
router.get('/home',(req,res)=>{
    var sql = 'SELECT * FROM inventory';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
})
module.exports = router;