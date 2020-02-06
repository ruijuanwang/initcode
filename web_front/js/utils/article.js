// 把所有与文章相关的操作写在这里
var article = {
    // 主页五张焦点图数据

    // page:就是当前要获取的第几页数据

    getFouceFive: function() {
        // 因为只要五条数据，所以直接设置只获取五条
        return $.get(APILIST.article_get, { 'perpage': 5 })
    },

    /**
     * 根据id去获取文章的详情
     * @param {Number}} id 
     */
    getById: function(id) {
        return $.get(APILIST.article_get, { 'id': id })
    },

    // 获取文章热门排行
    getRank: function(type) {
        return $.get(APILIST.article_rank, { 'type': type });
    },

      // 获取最新资讯
        getLastest: function() {
        return $.get(APILIST.article_last)
    },
    //获取文章列表
    // type: 文章类型编号
    // page: 当前第几页
    getList: function(type, page) {
        return $.get(APILIST.article_get, { 'type': type, 'page': page })
    },


}