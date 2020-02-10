// 和评论有关的
// 添加文章评论
let comment = {
    add: function(name, content, aritcle_id) {
        return $.post(APILIST.comment_add, {
            'name': name,
            'content': content,
            'aritcle_id': aritcle_id,

        })
    },
    //   获取文章的评论
    get: function(id) {
        return $.get(APILIST.comment_get, { 'article_id': id })
    }
}