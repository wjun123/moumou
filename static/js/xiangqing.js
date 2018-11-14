//商品详情 累计评价 切换功能
document.getElementById("evaluate2").style.display="none";
var gz = document.querySelectorAll("[data-toggle=sp]");
for(var g of gz){
    g.onclick=function(){
        var g=this;
        var gls = document.querySelectorAll("#evalu>div");
        //console.log(gls);
        for(var gl of gls){
        // console.log(gl);
            gl.style.display="none";
        }
        var id=g.getAttribute("data-target");
        document.querySelector(id).style.display="block";
    }
}
//字体切换变色
$(".pp").click(function(e){ 
   // e.preventDefault();
    var $tar=$(e.target)
    if($tar.is("[data-toggle=sp]")){
      $tar.addClass("active")
          .siblings() //其余li
          .removeClass("active")    
    }
  })


//放大镜
var $lgDiv=$("#d-lg");
var $mask=$("#mask"),$smask=$("#super-mask");
var MSIZE=208,SMSIZE=420,MAX=SMSIZE-MSIZE;
$smask.hover(function(){
    //toggle:鼠标移入移出效果
  $mask.toggleClass("d-none");
  $lgDiv.toggleClass("d-none");
}).mousemove(function(e){
  var top=e.offsetY-MSIZE/2;
  var left=e.offsetX-MSIZE/2;
  if(top<0) top=0;else if(top>MAX) top=MAX;
  if(left<0) left=0;else if(left>MAX) left=MAX;
  $mask.css({top,left});
  $lgDiv.css("backgroundPosition",`${-475/210*left}px ${-475/210*top}px`)
})









  