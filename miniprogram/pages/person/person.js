// pages/person/person.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        
    },
    login(){
        wx.getUserProfile({
          desc: '用于查看点赞',
          success(res){
            console.log('授权成功', res)
          },
          fail(err){
            console.log('授权失败', err)
          }
        })
    },
    tap(){
        wx.cloud.callFunction({
            name:'getOpenid',
        })
        .then(res=>{
            console.log('云函数调用成功',res)
            this.setData({
                id:res.result.openid
            })
            if(res.result.openid=='ooIkW5OZUx5z68G7JjrLSPgLGEDU'){
                console.log('cheng',res.result.openid)
                wx.navigateTo({
                  url: '/pages/person/add/add',
                })
            }
            else{
                wx.showToast({
                    icon:'error',
                  title: '你不是管理员',
                })
            }
        })
        .catch(err=>{
            console.log('云函数调用失败',err)
        })
        
        
    },
    tapLove(){

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