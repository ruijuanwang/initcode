// 配置文件
// 把这个项目中的所有用到的接口地址全放在这里


// BASEUPL变量 存放所有接口的基地址
// var BASEUPL = 'http://192.168.2.103:8000';
// var BASEUPL = 'http://localhost:8000';
var BASEUPL = 'http://39.99.130.177:8000';

// APILIST对象 用来保存所有的接口信息
var APILIST = {
    // 登录
    user_login: BASEUPL + "/admin/login",
    // 退出
    user_logout: BASEUPL + "/admin/logout",
    // 获取用户信息
    user_getInfo: BASEUPL + "/admin/getuser",

    // 获取文章类别管理信息
    category_get: BASEUPL + "/admin/category_search",
    // 添加文章分类
    category_add: BASEUPL + "/admin/category_add",
    // 删除文章分类
    category_del: BASEUPL + "/admin/category_delete",
    // 编辑文章分类
    category_edit: BASEUPL + "/admin/category_edit",
    // 获取文章列表
    article_get: BASEUPL + "/admin/search",
    // 删除文章
    article_del: BASEUPL + "/admin/article_delete",
    // 添加文章
    article_add: BASEUPL + "/admin/article_publish",


    // 保存修改的文章
    article_edit: BASEUPL + "/admin/article_edit",



}