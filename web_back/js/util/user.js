// 1。模块化化开发
// 把所有用户相关的功能全部写在一个对象中
// 把这个js文件引入相关的页面


// 2.继续优化
// $.post(),$.get(),$.ajax()得到的都是一个对象
// 这个对象上有then()这个方法，then()的功能是获取返回的数据
// $.post().then(function(res){ res就是接口返回的数据 })

let user = {
    // 用户登录
    login: function(name, password) {
        return $.post(APILIST.user_login, {
                user_name: name,
                password: password
            })
            // .then()放到调用login这个方法的数据的后面,把上面代码return出去
            // .then(function(res) {
            //     // console.log(res);
            //     // （2）反馈的后续动作
            //     if (res.code === 200) {
            //         // 跳转页面
            //         window.location.href = "./index.html";
            //     } else {
            //         // 失败，直接打印失败错误
            //         alert(res.msg);
            //     }
            // })

    },
    // 用户退出
    logout: function() {
        return $.post(APILIST.user_logout)
            // .then(function(res) {
            //     console.log(res);
            //     if (res.code === 200) {
            //         alert("退出成功！")
            //         window.location.href = "./login.html";
            //     } else {
            //         alert(res.msg);
            //     }

        // })

    },
    // 获取信息
    getInfo: function() {

        //2.获取管理员信息并且显示
        return $.get(APILIST.user_getInfo)
            // .then(function(res) {
            //     console.log(res);
            //     // 用户名
            //     $("#username").html(res.data.nickname);
            //     // 图片地址
            //     $("#userImg").attr("src", res.data.user_pic);

        // })
    }


}