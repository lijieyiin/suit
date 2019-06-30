Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 100,
    width: 0,
    startIndex:0,
    endIndex:0,
    numIndex:3,//刚开始加载的数量
    sumIndex:5,//上拉加载的数量
    "indicatorDots": true,
    "autoplay": true,
    "imageSrc": [
      "../../image/swiper1.jpg",
      "../../image/test.jpg",
      "../../image/swiper1.jpg"
    ],
    "iconType": [{
        "iconUrl": "../../image/icon-qiandao.png",
        "iconText": "签到"
      },
      {
        "iconUrl": "../../image/icon-fujin.png",
        "iconText": "附近"
      },
      {
        "iconUrl": "../../image/icon-fuli.png",
        "iconText": "福利"
      },
      {
        "iconUrl": "../../image/icon-qinzi.png",
        "iconText": "亲子"
      },
      {
        "iconUrl": "../../image/icon-zhanhui.png",
        "iconText": "展会"
      },
      {
        "iconUrl": "../../image/icon-tiyu.png",
        "iconText": "体育"
      },
      {
        "iconUrl": "../../image/icon-muma.png",
        "iconText": "游乐"
      },
      {
        "iconUrl": "../../image/icon-xingxing.png",
        "iconText": "周边"
      }
    ],
    movieList: [{
        movieText: "唐人街探案",
        movieSrc: "../../image/movie01.jpg"
      },
      {
        movieText: "羞羞的铁拳",
        movieSrc: "../../image/movie02.jpg"
      },
      {
        movieText: "乘风破浪",
        movieSrc: "../../image/movie03.jpg"
      },
      {
        movieText: "炉得水",
        movieSrc: "../../image/movie04.jpg"
      }
    ],
    itemsList: null,
    code:0
    /*商品信息*/
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setStorageSync('itemsList', []);//不加再次编译时会把上一次的缓存一起加上，会有重复
    this.loadLazyData(0,this.data.numIndex);//0, 3
    this.data.code = 1;
    //获取当前设备的宽度
    var _this = this;
    wx.getSystemInfo({
      success: function(res) {
        _this.setData({
          width: res.screenWidth
        })
      },
    })
  },
  //懒加载
  
  loadLazyData: function (startIndex, sumIndex) {
    if(this.data.code == 1) {
      this.data.code = 0;
      return;
    }
    wx.showToast({
      title: '正在加载..',
      icon: 'none',
      duration: 2000
    })
    //请求数据
    var _this = this;
    wx.request({
      url: 'http://127.0.0.1:10000/', // 借助全局js文件 test.js来获取test.js返回的数据 test.js改变后要$ node test.js
      method: 'get',
      success(res) {
        //懒加载 
        var list = res.data.slice(startIndex, startIndex+sumIndex);
        var dex = 0;
        var itemList;
        var value = wx.getStorageSync('itemsList');
        if(!value){
          wx.setStorageSync('itemsList', []);
          dex = 1;
        }
        if (list.length == 0) {
          wx.showToast({
            title: '加载完毕',
            duration: 2000
          })
          return;
        }
        if (dex == 1){
          value = wx.getStorageSync('itemsList');
        }
        list.forEach(function (value1) {//list是个对象obj不能直接被unshift
          value.push(value1);
        })
        _this.setData({
          itemsList: value,
          startIndex: startIndex + sumIndex
        })
        //缓存数据
        wx.setStorageSync('itemsList', value)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //懒加载
    this.loadLazyData(this.data.startIndex,this.data.sumIndex)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log("1111")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("222")
    //懒加载
    this.loadLazyData(this.data.startIndex, this.data.sumIndex)
  },
  
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //加入购物车
  addItem: function(event) {
    //获取缓存中购物车列表的商品数
    var index = event.target.dataset.itemIndex;
    var itemId = event.target.dataset.itemId;
    const carItemList = wx.getStorageSync('carItemList');
    if (!carItemList) {
      wx.setStorageSync('carItemList', []);
    }
    let dex = 0;
    let data
    const carItemList1 = wx.getStorageSync('carItemList');
    for (var i = 0; i < carItemList1.length; i++) {
      if (carItemList1[i].itemId == itemId) { //购物车中已有该商品
        //该商品的数量+1
        carItemList1[i].num++;
        dex = 1;
        break;
      }
    }
    if (dex == 0) { //购物车中没有该商品
      data = this.data.itemsList[index] //添加的商品
      data.num = 1
      carItemList1.unshift(data);
    }
    wx.setStorageSync('carItemList', carItemList1);
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      duration: 2000
    })
  },
  //跳转到详情页
  goToDetail: function(e) {
    wx.navigateTo({
      url: '../../pages/detail/detail?itemId=' + e.currentTarget.dataset.itemId
    })
  },

  //改变轮播图的高度
  imageAuto: function(e) {
    // console.log("e=>", e)
    var height = this.data.width / e.detail.width * e.detail.height;
    this.setData({
      height: height
    })
  }

})