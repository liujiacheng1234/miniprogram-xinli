// pages/person/person.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo:"",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let user = wx.getStorageSync('user')
        this.setData({
            userInfo:user,
        })

        wx.cloud.callFunction({
            name:'getOpenid',
        })
        .then(res=>{
            console.log('云函数调用成功',res)
            // this.setData({
            //     id:res.result.openid
            // })
            if(res.result.openid=='ooIkW5OZUx5z68G7JjrLSPgLGEDU'){
                console.log('cheng',res.result.openid)
                this.setData({
                    manage:true
                })
            }
            else{
                this.setData({
                    manage:false
                })
            }
        })
        .catch(err=>{
            console.log('云函数调用失败',err)
        })
    },
    login(){
        wx.getUserProfile({
          desc: '用于查看点赞',
          success:res=>{
            wx.setStorageSync('user', res.userInfo)
            console.log('用户信息',res.userInfo)
            this.setData({
                userInfo:res.userInfo,
            })
          },
          fail:err=>{
              console.log('授权失败', err)
          }
        })
    },
    outLogin(){
        this.setData({
            userInfo:'',
        })
        wx.setStorageSync('user', '')
    },
    tap(){
        wx.navigateTo({
            url: '/pages/person/add/add',
          })
    },
    tapLove(){
        wx.navigateTo({
            url: '/pages/person/love/love',
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