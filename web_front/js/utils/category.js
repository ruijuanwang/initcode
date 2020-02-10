// 把所有与文章分类相关的操作写在这里
let category = {
    // 获取文章类别数据
    get: function() {
        return $.get(APILIST.category_get)
    },
    // 获取文章添加分类
    add: function(name, slug) {
        return $.post(APILIST.category_add, { 'name': name, 'slug': slug })
    },
    // 获取文章详情
    // id：文章编号
    getDetail: function(id) {
        return $.get(APILIST.article_detail, { 'id': id })
    }


}