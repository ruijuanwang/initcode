// 把所有与文章相关的操作写在这里
var article = {
    // 获取文章列表数据

    // page:就是当前要获取的第几页数据
    // type:就是当前文章的类型编号
    // status:就是当前文章的状态
    get: function(page, type, status) {
        return $.get(APILIST.article_get, { 'page': page, 'type': type, 'state': status })
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