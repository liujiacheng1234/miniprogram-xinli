// pages/ceramic/detailed/detailed.js
let li
let id
let dianzhan = false
let namel
let imgU
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        imgUrl: '../../../image/zNoo.png'
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log('携带的参数', options)
        id = options.id
        wx.cloud.database().collection('ceramic').doc(id)
            .get().then(res => {
                console.log('请求成功', res)
                this.setData({
                    list: res.data
                })
                li = res.data
                imgU = res.data.img
                namel = res.data.name
            })
            .catch(err => {
                console.log('请求失败', err)
            })
        //查询喜欢表是否存在
        wx.cloud.database().collection('love').doc(id)
            .get().then(res => {
                console.log('love请求成功', res)
                this.setData({
                    imgUrl: "../../../image/z.png",
                })
                dianzhan = true
            })
            .catch(err => {
                console.log('love请求失败', err)
                this.setData({
                    imgUrl: "../../../image/zNoo.png"
                })
            })

    },

    //查看大图片
    showDetailed() {
        wx.previewImage({
            urls: [li.img],
        })
    },
    z() {
        if (dianzhan) {
            wx.cloud.database().collection('love').doc(id)
            .remove()
            .then(res=>{
                console.log('移除收藏成功')
                wx.showToast({
                    title: '移除收藏成功',
                })
            })
            .catch(err=>{
                console.log('收藏失败')
            })
            this.setData({
                imgUrl: "../../../image/zNoo.png"
            })
            dianzhan = false
        } else {
            wx.cloud.database().collection('love')
            .add({
                data:{
                    name:namel,
                    img:imgU,
                    _id:id
                }
            })
            .then(res=>{
                console.log('收藏成功')
                wx.showToast({
                    title: '收藏成功',
                })
            })
            .catch(err=>{
                console.log('收藏失败')
            })
            this.setData({
                imgUrl: "../../../image/z.png"
            })
            dianzhan = true
        }
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