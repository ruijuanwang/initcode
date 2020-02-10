// 配置文件
// 把这个项目中的所有用到的接口地址全放在这里


// BASEUPL变量 存放所有接口的基地址
// var BASEUPL = 'http://192.168.2.103:8000';
// var BASEUPL = 'http://local/host:8000';
const BASEUPL = 'http://39.99.130.177:8000';

// APILIST对象 用来保存所有的接口信息
const APILIST = {


    // 获取文章类别管理信息
    category_get: BASEUPL + "/category",

    // 获取文章焦点图
    article_get: BASEUPL + "/search",

    // 获取文章热门排行
    article_rank: BASEUPL + "/rank",

    // 获取最新的资讯
    article_last: BASEUPL + '/lastest',


    // 获取文章详情
    article_detail: BASEUPL + '/article',

    // 添加评论
    comment_add: BASEUPL + '/post_comment',

    // 获取评论
    comment_get: BASEUPL + '/get_comments'


}