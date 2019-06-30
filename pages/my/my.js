// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList: ["我的收藏", "我的订单", "我的地址", "联系客服","关于我们"],
    myImage: "",
    myName: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
 
  //跳转
  goToUrl:function(e){
      var index = e.target.dataset.index;
      var url;
      switch(index){
        case 0: url = "../../pages/order/order"; break;
        case 1: url = "../../pages/order/order"; break;
        case 2: url = "../../pages/order/order"; break;
        case 3: url = "../../pages/order/order"; break;
        case 4: url = "../../pages/order/order"; break;
      }
      wx.navigateTo({
        url: url,
      })
  },
})