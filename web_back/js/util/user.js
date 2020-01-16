// 模块化化开发
// 把所有用户相关的功能全部写在一个对象中
// 把这个js文件引入相关的页面
var user = {
    // 用户登录
    login: function(name, password) {
        $.post("http://192.168.1.105:8000/admin/login", {
            user_name: name,
            password: password
        }).then(function(res) {
            // console.log(res);
            // （2）反馈的后续动作
            if (res.code === 200) {
                // 跳转页面
                window.location.href = "./index.html";
            } else {
                // 失败，直接打印失败错误
                alert(res.msg);
            }
        })

    },
    // 用户退出
    logout: function() {
        $.post("http:///192.168.1.105:8000/admin/logout").then(function(res) {
            console.log(res);
            if (res.code === 200) {
                alert("退出成功！")
                window.location.href = "./login.html";
            } else {
                alert(res.msg);
            }

        })

    },
    // 获取信息
    getInfo: function() {

        //2.获取管理员信息并且显示
        $.get("http://192.168.1.105:8000/admin/getuser").then(function(res) {
            console.log(res);
            // 用户名
            $("#username").html(res.data.nickname);
            // 图片地址
            $("#userImg").attr("src", res.data.user_pic);

        })
    },


}