// 配置文件
// 把这个项目中的所有用到的接口地址全放在这里


// BASEUPL变量 存放所有接口的基地址
var BASEUPL = 'http://192.168.2.105:8000';

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
    article_get: BASEUPL + "/admin/search"

}