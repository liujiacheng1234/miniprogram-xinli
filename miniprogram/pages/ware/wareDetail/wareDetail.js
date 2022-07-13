// pages/ware/wareDetail/wareDetail.js
let lit = []
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods :[],
    },

    onLoad(options) {
        console.log('携带的参数',options)
        var i = options.id
        console.log('id',i)
        wx.cloud.database().collection('ware').where({
            _id:i,
        })
         .get().then(res =>{
            console.log('请求成功',res)
            this.setData({
                goods:res.data
            })
            lit = res.data
            console.log('请求',lit)
            
        })
        .catch(err => {
            console.log('请求失败',err)
        })
    },
    //查看大图片
    showDetailed(){
        wx.previewImage({
          urls: [lit[0].img],
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        console.log('下拉触底了')
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})