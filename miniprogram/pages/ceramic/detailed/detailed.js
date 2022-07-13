// pages/ceramic/detailed/detailed.js
let li
Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        list :[],
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log('携带的参数',options)
        var id = options.id
        
        wx.cloud.database().collection('ceramic').doc(id)
         .get().then(res =>{
            console.log('请求成功',res)
            this.setData({
                list:res.data
            })
            li = res.data
            console.log('请求',li)
            
        })
        .catch(err => {
            console.log('请求失败',err)
        })
    },
    //查看大图片
    showDetailed(){
        wx.previewImage({
          urls: [li.img],
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

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})