// pages/change/change.js
const app = getApp()
Page({
  data: {
    currentLang: {},
    langList: app.globalData.langList,
  },
  onTapItem: function(e){
    console.log('app.globalData.currentLang')
    console.log(app.globalData.currentLang)
    let object = e.currentTarget.dataset
    this.setData({currentLang: object})
    app.globalData.currentLang = object
    wx.switchTab({ url: '/pages/index/index'})
    console.log('this.data.currentLang')
    console.log(this.data.currentLang)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    this.setData({ currentLang: app.globalData.currentLang })
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