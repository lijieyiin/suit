// pages/car/car.js
var formatteTime = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carList: [],
    carNewsMoney: "100",
    carBottomItemSum: 0,
    selectAllStatus: true,
    calX: 100000000,
    howMoney:800,
    leftMoney:0,
  },
  // 删除商品
  delItem: function(event) {
    //获取索引值
    var index = event.target.dataset.index;

    //去除数组下标为index的数据
    this.data.carList.splice(index, 1);
    this.setData({
      carList: this.data.carList
    });

    //更改缓存
    wx.setStorageSync("carItemList", this.data.carList);

    //计算总价
    var calMoney = 0;
    var calX = this.data.calX;
    this.data.carList.forEach(function (value) {
      if (value.isCheck1) {
        calMoney += (value.num * calX * value.itemPrice * calX) / (calX * calX)
      }
    })
    this.data.leftMoney = this.data.howMoney - calMoney

    //设置回去
    this.setData({
      carBottomItemSum: calMoney.toFixed(2),
      leftMoney: this.data.leftMoney
    })
  }, 

  // 减少商品
  reduceItem: function(event) {
    var index = event.target.dataset.index;
    //获取当前索引列的数量
    var num = this.data.carList[index].num;
    num--;
    if (num <= 0) {
      num = 1;
    }
    //创建对象
    var obj = {};
    //设置对象名 index下的 carItemNum
    var key = "carList[" + index + "].num";
    //设置对象值
    obj[key] = num;
    //改变页面的值
    this.setData(obj);

    //将数量写入缓存
    var carItemList = wx.getStorageSync("carItemList")
    carItemList[index].num = num;
    wx.setStorageSync("carItemList", carItemList)

    //计算总价
    var calMoney = 0;
    var calX = this.data.calX;
    this.data.carList.forEach(function (value) {
      if (value.isCheck1) {
        calMoney += (value.num * calX * value.itemPrice * calX) / (calX * calX)
      }
    })
    this.data.leftMoney = this.data.howMoney - calMoney

    //设置回去
    this.setData({
      carBottomItemSum: calMoney.toFixed(2),
      leftMoney: this.data.leftMoney
    })
    //======================
  },

  // 增加商品
  addItem: function(event) {
    var index = event.target.dataset.index;
    //获取当前索引列的数量
    var num = this.data.carList[index].num;
    num++;

    //创建对象
    var obj = {};
    //设置对象名 index下的 carItemNum
    var key = "carList[" + index + "].num";
    //设置对象值
    obj[key] = num;
    //改变页面的值
    this.setData(obj);

    //将数量写入缓存
    var carItemList = wx.getStorageSync("carItemList")
    carItemList[index].num = num;
    wx.setStorageSync("carItemList", carItemList)

    //计算总价
    var calMoney = 0;
    var calX = this.data.calX;
    this.data.carList.forEach(function (value) {
      if (value.isCheck1) {
        calMoney += (value.num * calX * value.itemPrice * calX) / (calX * calX)
      }
    })
    this.data.leftMoney = this.data.howMoney - calMoney

    //设置回去
    this.setData({
      carBottomItemSum: calMoney.toFixed(2),
      leftMoney: this.data.leftMoney
    })
    //=====================
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //加载购物车
    const carItemList = wx.getStorageSync('carItemList');
    this.setData({
      carList: carItemList
    })
    //=============

    //进行全选
    if (this.data.carList.length == 0) return;
    this.data.carList.forEach(function(value) {
      //isCheck1-->往第一条{}中添加一个isCheck1的对象
      value.isCheck1 = true;
    })
    this.setData({
      carList: this.data.carList,
      selectAllStatus:true
    })
    //=================

    //计算总价
    var calMoney = 0;
    var calX = this.data.calX;
    this.data.carList.forEach(function (value) {
      if (value.isCheck1) {
        calMoney += (value.num * calX * value.itemPrice * calX) / (calX * calX)
      }
    })
    this.data.leftMoney = this.data.howMoney - calMoney

    //设置回去
    this.setData({
      carBottomItemSum: calMoney.toFixed(2),
      leftMoney: this.data.leftMoney
    })
    //===================
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    //重新加载购物车
    const carItemList = wx.getStorageSync('carItemList');
    this.setData({
      carList: carItemList
    })
    if (this.data.carList.length == 0) return;
    this.data.carList.forEach(function(value) {
      //isCheck1-->往第一条{}中添加一个isCheck1的对象
      value.isCheck1 = true;
    })
    this.setData({
      carList: this.data.carList,
      selectAllStatus: true

    })
    //====================
    
    //计算总价
    var calMoney = 0;
    var calX = this.data.calX;
    this.data.carList.forEach(function (value) {
      if (value.isCheck1) {
        calMoney += (value.num * calX * value.itemPrice * calX) / (calX * calX)
      }
    })
    this.data.leftMoney = this.data.howMoney - calMoney

    //设置回去
    this.setData({
      carBottomItemSum: calMoney.toFixed(2),
      leftMoney: this.data.leftMoney
    })
    //===================
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  //全选
  checkAllItem: function(e) {
    //当前为true 选择之后为false
    var checked = this.data.selectAllStatus ? false : true
    this.setData({
      selectAllStatus: checked
    })

    if (checked) { //true -->全选
      this.data.carList.forEach(function(value) {
        //isCheck1-->往第一条{}中添加一个isCheck1的对象
        value.isCheck1 = true;
      })
    } else { //全都不选
      this.data.carList.forEach(function(value) {
        //isCheck1-->往第一条{}中添加一个isCheck1的对象
        value.isCheck1 = false;
      })
    }
    this.setData({
      carList: this.data.carList,
      selectAllStatus: false
    })

    //计算总价
    var calMoney = 0;
    var calX = this.data.calX;
    this.data.carList.forEach(function (value) {
      if (value.isCheck1) {
        calMoney += (value.num * calX * value.itemPrice * calX) / (calX * calX)
      }
    })
    this.data.leftMoney = this.data.howMoney - calMoney

    //设置回去
    this.setData({
      carBottomItemSum: calMoney.toFixed(2),
      leftMoney: this.data.leftMoney
    })
    //===================

  },
  //单选check
  singleChecked: function(e) {
    var index = e.target.dataset.indexCheck;
    //注意 是因为点了全选才添加了对象isCheck1，所以在页面加载的时候就应该有全选操作
    var boolOld = this.data.carList[index].isCheck1
    // var boolNew = boolOld ? false : true;
    var carList = this.data.carList;
    this.data.carList[index].isCheck1 = !boolOld;
    this.setData({ //先设置回去
      carList: this.data.carList
    })
    if (boolOld) { //没选中
      //让全选按钮为false
      this.setData({
        selectAllStatus: !boolOld
      })
    } else {
      //看看其他的是不是都选上了
      var count = 0; //若最后为0 --> 全选上了
      this.data.carList.forEach(function(value) {
        if (!value.isCheck1) {
          count++
        }
      })
      if (count == 0) {
        //让全选按钮为true
        this.setData({
          selectAllStatus: true
        })
      }
    }

    //计算总价
    var calMoney = 0;
    var calX = this.data.calX;
    this.data.carList.forEach(function(value) {
      if (value.isCheck1) {
        calMoney += (value.num * calX * value.itemPrice * calX) / (calX * calX)
      }
    })
    this.data.leftMoney = this.data.howMoney - calMoney

    //设置回去
    this.setData({
      carBottomItemSum: calMoney.toFixed(2),
      leftMoney: this.data.leftMoney
    })
  },
  //下单
  goToOrder:function(){
    //将购物车中勾选的商品存入订单表中
    //追加订单编号
    //下单时间

    //存放勾选的商品
    var itemToBuy=[];
    var itemToBuyList={} ;
    var index1 = 0;//标记是否有勾选商品
    var arr = [];//过滤勾选的商品
    //判断是否有勾选的商品
    this.data.carList.forEach(function (value) {
        if(value.isCheck1){//有勾选的商品
          itemToBuy.push(value)
          index1 = 1;
        }else{
          arr.push(value)//没有勾选的商品
        }
    })
    
    if(index1 == 0) {
      wx.showToast({
        title: '请选择商品',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    //订单编号生成
    var orderId = new Date().getTime();
    //下单时间
    var orderTime = formatteTime.formatTime(new Date());
    itemToBuyList.orderId = orderId;
    itemToBuyList.orderTime = orderTime;
    itemToBuyList.totalSum = this.data.carBottomItemSum
    itemToBuyList.itemToBuy = itemToBuy;

    
    //获取缓存
    var itemToBuyListTest = wx.getStorageSync("itemToBuyList")
    if (!itemToBuyListTest){
      wx.setStorageSync("itemToBuyList", []);
    }
    var itemToBuyListTest1 = wx.getStorageSync("itemToBuyList")
    itemToBuyListTest1.unshift(itemToBuyList)
    wx.setStorageSync("itemToBuyList", itemToBuyListTest1);
    
    //将勾选的商品从购物车中移除
   
    this.setData({
      carList: arr
    })
    
    wx.setStorageSync("carItemList", arr);
    

    //取消全选
    if (this.data.carList.length == 0) return;
    this.data.carList.forEach(function (value) {
      //isCheck1-->往第一条{}中添加一个isCheck1的对象
      value.isCheck1 = false;
    })
    this.setData({
      carList: this.data.carList,
      carBottomItemSum:0
    })
    wx.showToast({
      title: '下单成功',
      icon: 'success',
      duration: 2000
    })
  },
})