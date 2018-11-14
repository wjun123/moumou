//获取轮播图数据
$.ajax({
    type:"get",
    url:"http://127.0.0.1:3000/homePage/lb",
    success: function(res) {
        var html="";
        for(var i=0;i<res.length;i++){
           var img_url=res[i].img_url; 
           html+=`
           <img src="${img_url}">
           `;
        }
    var div=document.getElementById("list");
    div.innerHTML=html;
    }
})
//热卖
$.ajax({
    type:"get",
    url:'http://127.0.0.1:3000/homePage',
    success:function(res){
        //console.log(res);
        var html = "";
        for(var i=0;i<res.length;i++){
            var img_url = res[i].img_url;
            var title = res[i].title;
            var price = res[i].price;
            html+=`<div>
            <a href="../xiangqing.html"><img src="${img_url}"></a>
            <p>${title}</p>
            <span>￥${price}</span>
       </div>
   `;
        };
        var div = document.getElementById("rm");
        console.log(rm);
        div.innerHTML = html;
    }
})




