// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      itemToBuyList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var itemToBuyList = wx.getStorageSync("itemToBuyList");
    if (itemToBuyList){
      this.setData({
        itemToBuyList: itemToBuyList
      })
    }
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

  },

  //跳转到详情页
  goToDetail: function (e) {
    wx.navigateTo({
      url: '../../pages/detail/detail?itemId=' + e.currentTarget.dataset.itemId
    })
  },

  //删除订单
  delOrder:function(e){
    var index2
    var orderId = e.target.dataset.orderId
    this.data.itemToBuyList.forEach(function(value,index){
      if (value.orderId == orderId){
        index2 = index;
      }
    })
    //注意不能在forEach里面splice
    this.data.itemToBuyList.splice(index2, 1);
    this.setData({
      itemToBuyList: this.data.itemToBuyList
    })
    //写回缓存
    wx.setStorageSync("itemToBuyList", this.data.itemToBuyList)
  },
})