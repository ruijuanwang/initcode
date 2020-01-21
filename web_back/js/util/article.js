// 把所有与文章相关的操作写在这里
var article = {
    // 获取文章列表数据

    // page:就是当前要获取的第几页数据
    get: function(page) {
        return $.get(APILIST.article_get, { 'page': page })
    },
    // // 获取文章添加分类
    // add: function(name, slug) {
    //     return $.post(APILIST.category_add, { 'name': name, 'slug': slug })
    // },
    // // 删除文章分类
    // del: function(id) {
    //     return $.post(APILIST.category_del, { 'id': id });
    // },
    // edit: function(id, name, slug) {
    //     return $.post(APILIST.category_edit, { 'id': id, 'name': name, 'slug': slug })
    // }


}