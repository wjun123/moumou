//用户登录
function login(){
    var xhr = createXhr();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var res = xhr.responseText;
            console.log(res);
            if(res=="2"){
                $("uname_n").innerHTML = "用户名不能为空";
            }else if(res=="1"){
                alert("登录成功");
                window.location.href="homePage.html";
            }else{
                $("uname_n").innerHTML = "用户名或密码错误";
            }
   }
} 
    xhr.open("post","/user/login",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var uname = $("uname").value;
    var upwd = $("upwd").value;
    console.log(uname);
    xhr.send("uname="+uname+"&upwd="+upwd);
}


