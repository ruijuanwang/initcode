// 和评论有关的
var comment = {
    add: function(name, content, aritcle_id) {
        return $.post(APILIST.comment_add, {
            'name': name,
            'content': content,
            'aritcle_id': aritcle_id,

        })
    }
}