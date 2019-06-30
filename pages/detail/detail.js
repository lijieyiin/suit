// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    image: "../../image/icon-aixin1.png",
    btnText:"未收藏", 
    detailServer:"本产品由品牌商家发货服务",
    detailNewsIcon:"../../image/brand.png",
    detail_news_info:"蜜蜂",
    t1: "蜂之堂",
    t2: "湖南长沙",
    t3: "300g",
    t4: "12",
    t5: "2016/11/23",
    t6: "低温避光存储",
    t7:"老少皆宜",
    btn1:"../../image/car.png",
    numItem:0,
    itemsDetail: {}, /*商品信息*/
    height:0,
    screenWidth:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //加载详情信息
    try {
      const itemsList = wx.getStorageSync('itemsList');
      if (itemsList) {
        //查找出itemId为options的商品
        for(let i = 0; i < itemsList.length; i++){
          if (itemsList[i].itemId == options.itemId){
            this.setData({
              itemsDetail: itemsList[i]
            })
             break;
          }
        }
      }
    } catch (e) {}

    //让轮播图高度自适应
    //1.获取设备的宽高
    //2.计算图片宽高
    var _this = this;
    wx.getSystemInfo({
      success(res) {
        var width = res.windowWidth
        _this.screenWidth = width;
      }
    })

    //当前商品是否有收藏
    var collectItem = wx.getStorageSync("collectItem");
    if(collectItem){
      var itemId = this.data.itemsDetail.itemId;
      var index2 = 0;
      collectItem.forEach(function(value){
        if (value.itemId == itemId){
          index2 = 1;
        }
      })
      if(index2 == 1){
        this.setData({
          image:"../../image/icon-aixin.png",
          btnText: "已收藏",
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获取缓存中购物车列表的商品数
    try {
      const carItemList = wx.getStorageSync('carItemList')
      if (carItemList) {
        var num = carItemList.length;
        this.setData({
          numItem: num
        })
      }else{//不存在存入空数组
        wx.setStorageSync('carItemList', []);
      }
    } catch (e) {}
  },
 
  //加入购物车
  /*
  addItem: function (event) {
    //获取缓存中购物车列表的商品数
    try {
      const carItemList =  wx.getStorageSync('carItemList');
      // var numItem = carItemList.length > 0 ? carItemList.length + 1 : 1
      var numItem = carItemList.length;
      this.setData({ numItem: numItem});
      carItemList.unshift(this.data.itemsDetail);
      wx.setStorageSync('carItemList', carItemList);
    } catch (e) {}

    wx.showToast({
      title: '加入成功',
      icon: 'success',
      duration: 2000
    })
  },
  */
  //加入购物车
  addItem: function () {
    //获取缓存中购物车列表的商品数
    var itemId = this.data.itemsDetail.itemId;

    const carItemList = wx.getStorageSync('carItemList');
    if (!carItemList) {
      wx.setStorageSync('carItemList', []);
    }
    let dex = 0;
    let data
    const carItemList1 = wx.getStorageSync('carItemList');
    for (var i = 0; i < carItemList1.length; i++) {
      if (carItemList1[i].itemId == itemId) {//购物车中已有该商品
        //该商品的数量+1
        carItemList1[i].num++;
        dex = 1;
        break;
      }
    }
    if (dex == 0) {//购物车中没有该商品
      data = this.data.itemsDetail//添加的商品
      data.num = 1
      carItemList1.unshift(data);
      this.setData({ numItem: carItemList1.length });
    }
    wx.setStorageSync('carItemList', carItemList1);
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      duration: 2000
    })
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

  //改变
  loadImageSwiper:function(e){
        console.log("e=>", e)
        var height = this.screenWidth / e.detail.width * e.detail.height
    console.log("height=>", height)
        this.setData({
          height
        })
  },
  //前往商城
  goToShop:function(){
    wx.switchTab({
      url: '../../pages/index/index'
    })
  },
  goToCar:function(){
    wx.switchTab({
      url: '../../pages/car/car'
    })
  },
  //收藏
  collectItem:function(){
    var collectItem = wx.getStorageSync("collectItem");
    if (!collectItem){
      wx.setStorageSync("collectItem", []);
    }

    var collectItem = wx.getStorageSync("collectItem");
    var image;
    var btnText
    //判断当前是否收藏
    if(this.data.btnText == "未收藏"){
      image = "../../image/icon-aixin.png";
      btnText = "已收藏";
      collectItem.unshift(this.data.itemsDetail);
      wx.setStorageSync("collectItem", collectItem);
    }else{
      image = "../../image/icon-aixin1.png";
      btnText = "未收藏";
      var itemId = this.data.itemsDetail.itemId;
      var index1;
      collectItem.forEach(function(value,index){
        if (value.itemId == itemId){
          index1 = index;
        }
      })
      collectItem.splice(index1, 1)
      wx.setStorageSync("collectItem", collectItem);
    }
    this.setData({
      image: image,
      btnText: btnText
    })
  }
})