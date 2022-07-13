// pages/ceramic/ceramic.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getlist()
        // wx.cloud.callFunction({
        //     name:'getDatabase',
        // })
        // .then(res=>{
        //     console.log('云函数调用成功',res)
        //     this.setData({
        //         openid:res.result.openid,
        //         list:res.result.data
        //     })
        // })
        // .catch(err=>{
        //     console.log('云函数调用失败',err)
        // })
    },
    getlist(){
        let len = this.data.list.length
        console.log('当前list长度',len)
        //加载数据
        wx.cloud.database().collection('ceramic')
        .skip(len)
        .get().then(res =>{
            console.log('请求成功',res)
            let dataList= res.data
            if(dataList.length<=0){
                wx.showToast({
                  title: '没有更多数据了',
                })
            }
            this.setData({
                list:this.data.list.concat(res.data)
            })
        })
        .catch(err => {
            console.log('请求失败',err)
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
        this.getlist()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})