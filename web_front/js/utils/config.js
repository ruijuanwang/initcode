// 配置文件
// 把这个项目中的所有用到的接口地址全放在这里


// BASEUPL变量 存放所有接口的基地址
// var BASEUPL = 'http://192.168.2.103:8000';
// var BASEUPL = 'http://localhost:8000';
var BASEUPL = 'http://39.99.130.177:8000';

// APILIST对象 用来保存所有的接口信息
var APILIST = {


    // 获取文章类别管理信息
    category_get: BASEUPL + "/category",

    // 获取文章焦点图
    article_get: BASEUPL + "/search",

    // 获取文章热门排行
    article_rank: BASEUPL + "/rank",



}