// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        wHeight: 0,
        // Banner数据
        images:[
            "http://img.zcool.cn/community/014056564bd8596ac7251c94eb5559.jpg",
            "http://img.zcool.cn/community/01e03b58047e96a84a0e282b09e8fc.jpg",
            "http://img.zcool.cn/community/0132dd55800bc700000059ffbe83e9.jpg@1280w_1l_2o_100sh.jpg"
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    //页面跳转
    record(){
        wx.navigateTo({
          url: '../record/record',
        })
    },
    ceramic(){
        wx.navigateTo({
          url: '/pages/ceramic/ceramic',
        })
    },
    ware(){
        wx.navigateTo({
          url: '/pages/ware/ware',
        })
    },
    waterproof(){
        wx.navigateTo({
          url: '/pages/waterproof/waterproof',
        })
    },
    decoration(){
        wx.navigateTo({
          url: '/pages/decoration/decoration',
        })
    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})