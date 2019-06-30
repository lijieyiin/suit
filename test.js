let express= require('express');
let app = express();
app.use(express.static('public'));
app.get('/', (req, res)=>{
  var url = "http://127.0.0.1:10000/"
  var data = [
    {
      itemId:"001",
      itemImage:url+"image/aaaa.jpg",
      itemName:"连衣裙",
      itemAddress:"广州",
      itemPrice:"199.00",
      itemHotPrice: '145.00',
      isHot:false,
      itemDescription: "超级好看",
      itemDetailImages: [url + "image/aaaa.jpg", url + "image/aaaa.jpg", url + "image/aaaa.jpg"]
      },
    {
      itemId: "002",
      itemImage: url +"image/bbb.jpg",
      itemName: "爱心手镯",
      itemAddress: "杭州",
      itemPrice: "525.00",
      itemHotPrice: '145.00',
      isHot: false,
      itemDescription: "给对方最好的",
      itemDetailImages: [url + "image/bbb.jpg"]
      },
    {
      itemId: "003",
      itemImage: url +"image/ccc.jpg",
      itemName: "茶壶",
      itemAddress: "东莞",
      itemPrice: "100.00",
      itemHotPrice: '68.00',
      isHot: false,
      itemDescription: "手环好",
      itemDetailImages: [url + "image/ccc.jpg", url + "image/ccc.jpg"]

      },
    {
      itemId: "004",
      itemImage: url +"image/xxx.jpg",
      itemName: "帆布鞋",
      itemAddress: "惠州",
      itemPrice: "100.00",
      itemHotPrice: '68.00',
      isHot: false,
      itemDescription: "异常耐穿",
      itemDetailImages: [url + "image/xxx.jpg", url + "image/xxx.jpg", url + "image/xxx.jpg"]
    },
    {
      itemId: 'shuihu0001',
      itemName: "滤水壶滤芯三支装",
      itemImage: url+"image/shuihu1.jpg",
      itemAddress: "深圳",
      itemPrice: '99.00',
      itemDescription: '高效过滤，享安心好水 / 有效滤除余氯，减少水垢、重金属等有害物质 / 360°进水流道设计 / 甄选优质滤材，保证过滤效果',
      itemHotPrice: '78.00',
      isHot: true,
      itemDetailImages: [url+'image/detail_shuihu1.jpg']
    },
    {
      itemId: 'shuihu0002',
      itemName: "滤水壶",
      itemImage: url+"image/shuihu2.png",
      itemAddress: "深圳",
      itemPrice: '68.00',
      itemDescription: '多效滤芯，可有效去除余氯及水垢 / 储水量大，可满足多人使用 / 进口食品级材质',
      itemHotPrice: '54.00',
      isHot: false,
      itemDetailImages: [url+'image/detail_shuihu2.png']
    },
    {
      itemId: 'shuihu0003',
      itemName: "滤水壶滤芯15芯（赠滤水壶1只）",
      itemImage: url+"image/shuihu3.jpg",
      itemAddress: "深圳",
      itemPrice: '495.00',
      itemDescription: '高效过滤，享安心好水',
      itemHotPrice: '398.00',
      isHot: true,
      itemDetailImages: [url+'image/detail_shuihu3.jpg']
    },
    {
      itemId: 'shuihu0004',
      itemName: "滤水壶一壶4芯套装",
      itemImage: url+"image/shuihu4.jpg",
      itemAddress: "深圳",
      itemPrice: '198.00',
      itemDescription: '高效过滤，享安心好水',
      itemHotPrice: '187.00',
      isHot: true,
      itemDetailImages: [url+'image/detail_shuihu4.jpg']
    },
    {
      itemId: 'wurenji0001',
      itemName: "无人机4K版套装",
      itemImage: url+"image/wurenji1.jpg",
      itemAddress: "深圳",
      itemPrice: '2999.00',
      itemDescription: '易上手 / 高品质影像 / 安全 / 小巧便携',
      itemHotPrice: '2888.00',
      isHot: false,
      itemDetailImages: [url+'image/detail_wurenji1.jpg']
    },
    {
      itemId: 'luoxuanjiang0001',
      itemName: "无人机快拆式螺旋桨4K版",
      itemImage: url+"image/luoxuanjiang.jpg",
      itemAddress: "深圳",
      itemPrice: '49.00',
      itemDescription: '尺寸大 / 气动效率高 / 惯量低',
      itemHotPrice: '26.00',
      isHot: false,
      itemDetailImages: [url+'image/detail_luoxuanjiang.jpg']
    },
    {
      itemId: 'baohujia0001',
      itemName: "无人机保护架",
      itemImage: url+"image/baohujia.jpg",
      itemAddress: "深圳",
      itemPrice: '39.00',
      itemDescription: '一组四片，专为小米无人机设计，有效保护螺旋桨，让飞行更放心',
      itemHotPrice: '36.00',
      isHot: true,
      itemDetailImages: [url+'image/detail_baohujia.jpg']
    },
    {
      itemId: 'dianchi0001',
      itemName: "无人机电池（零售版）",
      itemImage: url+"image/dianchi.jpg",
      itemAddress: "深圳",
      itemPrice: '499.00',
      itemDescription: '5100mAh大电量 / 抽屉式电池仓 / 8重智能保护',
      itemHotPrice: '486.00',
      isHot: true,
      itemDetailImages: [url+'image/detail_dianchi.jpg']
    },
    {
      itemId: 'erji0001',
      itemName: "头戴式耳机 轻松版",
      itemImage: url+"image/erji1.jpg",
      itemAddress: "深圳",
      itemPrice: '199.00',
      itemDescription: '洁净外观设计 / 封闭式音腔 / 舒适佩戴 / 手机直推 / 青春配色',
      itemHotPrice: '176.00',
      isHot: false,
      itemDetailImages: [url+'image/detail_erji1.jpg']
    },
    {
      itemId: 'erji0002',
      itemName: "头戴式耳机 轻松版",
      itemImage: url+"image/erji2.jpg",
      itemAddress: "深圳",
      itemPrice: '199.00',
      itemDescription: '石墨烯发声振膜 / 被动低频辐射器设计 / 封闭式音腔设计 / 手机直推高保真音质',
      itemHotPrice: '165.00',
      isHot: true,
      itemDetailImages: [url+'image/detail_erji2.jpg']
    },
    {
      itemId: 'erji0003',
      itemName: "头戴式耳机 轻松版",
      itemImage: url+"image/erji3.jpg",
      itemAddress: "深圳",
      itemPrice: '419.00',
      itemDescription: '7.1 虚拟环绕立体声引擎 ／ LED 炫彩游戏光效 ／ 40mm创新喇叭单元设计 ／ 双麦克风 ENC 环境降噪技术 ／ 双接口可拆换技术',
      itemHotPrice: '388.00',
      isHot: false,
      itemDetailImages: [url+'image/detail_erji3.jpg']
    },
    {
      itemId: 'erji0004',
      itemName: "头戴式耳机 轻松版",
      itemImage: url+"image/erji4.jpg",
      itemAddress: "深圳",
      itemPrice: '329.00',
      itemDescription: '一键美音 / 一键变声 / 原唱消音 / 耳返',
      itemHotPrice: '298.00',
      isHot: false,
      itemDetailImages: [url+'image/detail_erji4.jpg']
    },
    {
      itemId: 'erji0005',
      itemName: "双单元半入耳式耳机",
      itemImage: url+"image/erji5.jpg",
      itemAddress: "深圳",
      itemPrice: '129.00',
      itemDescription: '半入耳式舒适佩戴 / 动圈+陶瓷喇叭双单元声学架构 / 高韧性线材+微机电麦克风线控 / 90°贴心插头',
      itemHotPrice: '112.00',
      isHot: true,
      itemDetailImages: [url+'image/detail_erji5.jpg']
    },
    {
      itemId: 'erji0006',
      itemName: "蓝牙耳机Air",
      itemImage: url+"image/erji6.jpg",
      itemAddress: "深圳",
      itemPrice: '165.00',
      itemDescription: '真无线设计 / 单双耳佩戴 / AAC 高清音质 / 降噪通话 / 触控操作',
      itemHotPrice: '123.00',
      isHot: true,
      itemDetailImages: [url+'image/detail_erji6.jpg']
    }
  ]

  //res.send(data);
   res.send({name:"liu"})
})
app.listen(10000,()=>{
  console.log('okkkkkkkk')
})
