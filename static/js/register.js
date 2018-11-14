//注册验证
var ck_email = false;
var ck_uname = false;
var ck_upwd = false;
var ck_cpwd = false;
var ck_phone = false;
//邮箱验证
function email_blur(){
    var xhr = createXhr();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var res = xhr.responseText;
            console.log(res);
            if(res=="1"){
                $("email_e").innerHTML = "邮箱已被注册";
                ck_email=false;
            }else if(res=="0"){
                $("email_e").innerHTML = "";
                ck_email=true;
            }else if(res=="2"){
                $("email_e").innerHTML = "邮箱不能为空";
                ck_email=false;
            }else{
                $("email_e").innerHTML = "邮箱格式不正确";
                ck_email=false;
            }
        }
    }
    xhr.open("post","/user/checkemail",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var email = $("email").value;
    xhr.send("email="+email);
}
//用户名验证
function uname_blur(){
    var xhr = createXhr();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var res = xhr.responseText;
            console.log(res);
            if(res=="1"){
                $("uname_n").innerHTML = "用户名已被注册";
                ck_uname=false;
            }else if(res=="0"){
                $("uname_n").innerHTML = "";
                ck_uname=true;
            }else if(res=="2"){
                $("uname_n").innerHTML = "用户名不能为空";
                ck_uname=false;
            }else{
                $("uname_n").innerHTML = "用户名格式不正确";
                ck_uname=false;
            }
        }
    }
    xhr.open("post","/user/checkUname",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var uname = $("uname").value;
    xhr.send("uname="+uname);
}
//密码验证
function upwd_blur(){
    var upwd = $("upwd").value;
    if(upwd==""){
        $("upwd_p").innerHTML="密码不能为空";
        ck_upwd=false;
    }else if(upwd.length>=6){
        $("upwd_p").innerHTML="";
        ck_upwd=true;
    }
}
//重复密码验证
function cpwd_blur(){
    var cpwd = $("cpwd").value;
    var upwd = $("upwd").value;
    if(cpwd==""){
        $("cpwd_p").innerHTML = "密码不能为空";
        ck_cpwd = false;
    }else if(cpwd==upwd){
        $("cpwd_p").innerHTML = "";
        ck_cpwd = true;
    }else{
        $("cpwd_p").innerHTML = "密码不正确";
        ck_cpwd = false;
    }
}
//电话号码验证
function phone_blur(){
    var phone=$("phone").value;
    var reg=/^\d{11}$/;
    if(!reg.test(phone)){
        $("phone_p").innerHTML = "手机格式不正确";
        ck_phone=false;	
    }else{
        $("phone_p").innerHTML = "";
        ck_phone=true;
    }
}
//button按钮异步注册
function register(){
    if(ck_email&&ck_uname&&ck_upwd&&ck_cpwd&&ck_phone){
        //创建异步对象
        var xhr=createXhr();
        //绑定监听事件
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                var result=xhr.responseText;
                console.log(result);
                if(result=="1"){
                alert("注册成功")
                window.location.href="http://127.0.0.1:3000/homePage.html"
                }else{
                    alert(result);
                }
            }
        }
        //打开链接
        xhr.open("post","/user/register",true);
        //设置消息头
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        //发送请求
        var uname=$("uname").value;
        console.log(uname);
        var upwd= $("upwd").value;
        var email=$("email").value;
        var phone=$("phone").value;
        xhr.send("uname="+uname+"&upwd="+upwd+"&email="+email+"&phone="+phone);
    }else{
        alert("请检查注册信息");
    }
}		