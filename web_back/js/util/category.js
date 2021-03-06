// 把所有与文章分类相关的操作写在这里
var category = {
    // 获取文章类别数据
    get: function() {
        return $.get(APILIST.category_get)
    },
    // 获取文章添加分类
    add: function(name, slug) {
        return $.post(APILIST.category_add, { 'name': name, 'slug': slug })
    },
    // 删除文章分类
    del: function(id) {
        return $.post(APILIST.category_del, { 'id': id });
    },
    edit: function(id, name, slug) {
        return $.post(APILIST.category_edit, { 'id': id, 'name': name, 'slug': slug })
    }


}