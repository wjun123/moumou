function next_pic(wrap) {
    index++;
    if (index > 3) {
        index = 0;
    }
    showCurrentDot(wrap);
	wrap.style.left = -index*1903 + "px";
}
// 上一页
function prev_pic(wrap) {
    index--;
    if (index < 0) {
        index = 3;
    }
    showCurrentDot(wrap);
    wrap.style.left = -index*1903 + "px";
}
// 定时器 --- 自动播放

let timer = null;
function autoPlay(wrap) {
    timer = setInterval(function () {
        next_pic(wrap);
    }, 2000);
}

// 圆点导航
let index = 0;
let dots = document.getElementsByTagName("span");
// 显示当前是第几张图片
function showCurrentDot(wrap) {
    for (var i = 0, len = dots.length; i < len; i++) {
        dots[i].className = "";
    }
    dots[index].className = "on";
}
//最开始和最后的照片修整
for (var i = 0, len = dots.length; i < len; i++) {
    (function (i) {
        let wrap = document.querySelector(".wrap");
        dots[i].onclick = function () {
            wrap.style.left = -1903*i + "px";
            index = i;
            showCurrentDot(wrap);
        }
    })(i);
}
function init() {
    var wrap = document.querySelector(".wrap");
    var next = document.querySelector(".arrow_right");
    var prev = document.querySelector(".arrow_left");
    // 当鼠标点击上下箭头
    next.onclick = function () {
        next_pic(wrap);
    }
    prev.onclick = function () {
        prev_pic(wrap);
	}
	wrap.style.left = 0;
    //启动定时器
    autoPlay(wrap);
    // 鼠标滑过 取消自动播放
    var container = document.querySelector(".container");
    container.onmouseenter = function () {
        clearInterval(timer);
    }
    container.onmouseleave = function () {
        autoPlay(wrap);
    }
}
window.addEventListener('load', init, false);


    new Vue({
        el:"#jqd",
        data:{
           res:[]
        },
        created(){
             (async function(self){
                var res = await ajax({
                    url:"http://127.0.0.1:3000/homePage/home",
                    type:"get",
                    dataType:"json"
                })
                self.res=res;
            })(this)
        }
    })
    



