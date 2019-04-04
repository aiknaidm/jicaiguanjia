import wepy from 'wepy'
const formatTime = function (d = 0) {
  var date = new Date(); 
  if (d) {
    date.setTime(d * 1000); 
  }

  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatDate = function (d = 0) {
  var date = new Date(); 
  if (d) {
    date.setTime(d * 1000); 
  }

  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}
const formatNumber = function (n) {
  n = n.toString()
  return n[1]?n:'0' + n
}
const getStartTime = function () {
  var nowdates = new Date(); 
  var year = nowdates.getFullYear()
  var month = nowdates.getMonth() + 1
  var date = "01"
  if (month < 10)
    month = "0" + month
  return year + "-" + month + "-" + date
}
// orderId 订单id redirectUrl 跳转url failUrl 失败跳转
// 支付
const wxpay1 = async function (orderId) {
  //   let remark = "在线充值";
  //   let nextAction = {};
  //   if (orderId != 0) {
  //    let remark = "支付订单 ：" + orderId;
  //    let nextAction = {
  //       type: 0,
  //       id: orderId
  //     };
  //   }
  var res0 = await wepy.login()
  var code = res0.code
  if ( ! code) {
    return {
      code:0, 
      msg:"登录失败"
    }; 
  }
  var res = await wepy.request( {
    url:'https://lmbge.com/wxapi/jicai/wxpay1',
data: {
      weixin:res0.code, 
      id:orderId
    }, 
  })
  var result = res.data.data; 
  if (res.data.code == 0) {
    //  通知用
    var prepay_id = result.package.replace("prepay_id=", ""); 
    // 发起支付

    try {
      var payres = await wepy.requestPayment( {
        timeStamp:result.timeStamp, 
        nonceStr:result.nonceStr, 
        package:result.package, 
        signType:result.signType, 
        paySign:result.paySign, 

      })
      wepy.request( {
        url:'https://lmbge.com/wxapi/jicai/paysuccess',
data: {
          id:orderId
        }, 
      })

      // wx.redirectTo({
      //     url: redirectUrl
      // });
      return {

        code:1, 
        msg:"支付成功"
      }; 

    }catch (err) {
      // 取消支付 
      return {
        code:2, 
        msg:"取消支付"
      }; 

    }
  }else {
    return {
      code:3, 
      msg:"服务器忙"
    }; 
  }
}
// 提现到零钱
const wxpay3 = async function (user_id) {

  var res0 = await wepy.login()
  var code = res0.code
  if ( ! code) {
    return {
      code:0, 
      msg:"登录失败"
    }; 
  }
  var res = await wepy.showModal( {
    title:'提示', //提示的标题,
content:"你确定要提现吗", //提示的内容,
showCancel:true, //是否显示取消按钮,
cancelText:'取消', //取消按钮的文字，默认为取消，最多 4 个字符,
cancelColor:'#000000', //取消按钮的文字颜色,
confirmText:'确定', //确定按钮的文字，默认为取消，最多 4 个字符,
confirmColor:'#e500012', //确定按钮的文字颜色,

  }); 

  if (res.cancel) {
    return {

      code:3, 
      msg:"取消提现"
    }; 
    return
  }
  wx.showLoading( {
    title:'提现中'
  }); 
  try {
    var res = await wepy.request( {
      url:'https://lmbge.com/wxapi/jcgj/wxpay3',
data: {
        weixin:res0.code, 
        user_id, 
        desc:"提现"
      }, 
    })
    var result = res.data.data; 
    if (res.data.code == 0) {

      return {

        code:0, 
        msg:"提现成功"
      }; 


    }else {
      return {
        code:1, 
        msg:"提现失败"
      }; 
    }
  }catch (error) {
    return {

      code:2, 
      msg:"提现失败"
    }; 

  }
}

// 服务费缴费
const fwfwxpay = async function (user_id, suppliers_id, data, pid) {
  wx.showLoading( {
    title:'支付中...', //提示的内容,
mask:true, //显示透明蒙层，防止触摸穿透,
success:res =>  {}
  }); 
  var res0 = await wepy.login()
  var code = res0.code
  if ( ! code) {
    return {
      code:0, 
      msg:"登录失败"
    }; 
  }
  var res = await wepy.request( {
    url:'https://lmbge.com/wxapi/jcgj/fwfwxpay',
data: {
      user_id:user_id, 
      suppliers_id:suppliers_id, 
      weixin:res0.code, 
      goods_id:data.id, 
      goods_name:data.goods_name, 
      goods_price:data.isHasShareCode == "0"?data.goods_price:data.youhui_price, 
      months:data.months
    }, 
  })
  wx.hideLoading(); 
  var result = res.data.data; 
  if (res.data.code == 0) {
    //  通知用
    var prepay_id = result.package.replace("prepay_id=", ""); 
    // 发起支付
    try {
      var payres = await wepy.requestPayment( {
        timeStamp:result.timeStamp, 
        nonceStr:result.nonceStr, 
        package:result.package, 
        signType:result.signType, 
        paySign:result.paySign, 
      })
      wepy.request( {
        url:'https://lmbge.com/wxapi/jcgj/fwfpaysuccess',
data: {
          id:res.data.orderId, 
          months:data.months, 
          user_id:user_id, 
          suppliers_id:suppliers_id, 
          share_code:pid
        }, 
      })
      return {
        code:1, 
        msg:"支付成功"
      }; 

    }catch (err) {
      // 取消支付 
      return {
        code:2, 
        msg:"取消支付"
      }; 

    }
  }else {
    return {
      code:3, 
      msg:"服务器忙"
    }; 
  }
}

// 会员缴费 
const pay = async function (data, data2, url, sucessUrl) {
  wx.showLoading( {
    title:'支付中...', //提示的内容,
mask:true, //显示透明蒙层，防止触摸穿透,
success:res =>  {}
  }); 

  var res = await wepy.request( {
    url, 
    data, 
  })
  wx.hideLoading(); 
  var result = res.data.data; 

  if (res.data.code == 0) {
    //  通知用
    var prepay_id = result.package.replace("prepay_id=", ""); 
    // 发起支付
    try {
      var payres = await wepy.requestPayment( {
        timeStamp:result.timeStamp, 
        nonceStr:result.nonceStr, 
        package:result.package, 
        signType:result.signType, 
        paySign:result.paySign, 
      })


    }catch (err) {
      // 取消支付 
      return {
        code:2, 
        msg:"取消支付"
      }; 

    }
    wepy.request( {
      url:sucessUrl, 
      data:data2, 
    })
    return {
      code:1, 
      msg:"支付成功"
    }; 
  }else {
    return {
      code:3, 
      msg:"服务器忙"
    }; 
  }
}

// 收集formid
const submitFormId = function (userId, formId) {
  if (formId == "the formId is a mock one") {
    return
  }
  wx.request( {
    url:'https://lmbge.com/wxapi/jcgj/add_form',
data: {
      user_id:userId, 
      form_id:formId, 

    }
  })
}
const html_decode = function (str) {
  var s = ""; 
  if (str.length == 0)return ""; 
  // s = str.replace(/&gt;/g, "&");

  s = str.replace(/& amp; /g, "&"); 
  s = s.replace(/& amp; /g, "&"); 
  s = s.replace(/& amp; /g, "&"); 
  s = s.replace(/& lt; /g, "<"); 
  s = s.replace(/& gt; /g, ">"); 
  s = s.replace(/\/>/g, '></img>'); 

  s = "<p>" + s + "</p>"

  // if (s.substr(s.length - 5, 5) == "/img>") {
  // }
  s = s.replace(/< img/g, '</p><img'); 
  s = s.replace(/< \/img >/g, '<\/img><p>'); 

  s = s.replace(/\/>/g, '/></p>'); 
  s = s.replace(/\/>< \/p >/g, '/>'); 
  s = s.replace(/< \/p >< \/p >/g, '</p>'); 
  s = s.replace(/< \/p > \/n < \/p >/g, '</p>'); 
  s = s.replace(/< \/p > \/r < \/p >/g, '</p>'); 
  s = s.replace(/< \/p > \/n\/r < \/p >/g, '</p>'); 
  s = s.replace(/< \/p > \/r\/n < \/p >/g, '</p>'); 
  s = s.replace(/< p >< \/p >/g, ''); 
  // s = s.replace(/>\/n<p><\/p><img/g, '><img');
  // s = s.replace(/>\/r<p><\/p><img/g, '><img');
  // s = s.replace(/>\/r\/n<p><\/p><img/g, '><img');
  // s = s.replace(/>\/n\/r<p><\/p><img/g, '><img');
  s = s.replace(/< p >< p/g, '<p'); 



  s = s.replace(/& nbsp; /g, " "); 
  s = s.replace(/& #39; /g, "\'"); 
  s = s.replace(/& quot; /g, "\"");
  s = s.replace(/<br>/g, "\n");
  s = s.replace(/<p/g, '<p class="xing - p"');
  s = s.replace(/<img/g, '<img class="xing - img"');
  s = s.replace(/src="\/images/g, 'src="http://maijia.jicaizx.com/images');

  s = s.replace(/ >< \/img >/g, ' _uploaded="true"></img>'); 
  return s; 
}
//邮箱以及手机的正则表达式
const regexConfig = function () {
  var reg =  {
    email:/^(\w -  * \. * ) + @(\w -?) + (\.\w {2, }) + $/, 
    phone:/^1(3 | 4 | 5 | 6 | 7 | 8 | 9)\d {9}$/
  }
  return reg; 
}
const showLoading = function (title = '加载中') {
  wx.showLoading( {
    title:title, //提示的内容,
mask:true, //显示透明蒙层，防止触摸穿透,
}); 
}
const hideLoading = function () {
  wx.hideLoading(); 
}
const showToast = async function (title, icon = 'none', duration = 2000) {
  wx.showToast( {
    title:title, //提示的内容,
icon:'none', //图标,
duration:2000, //延迟时间,
mask:true, //显示透明蒙层，防止触摸穿透,
}); 
}
const showModal = async function (content, title = '提示') {
  let res = await wepy.showModal( {
    title:title, //提示的标题,
content:content, //提示的内容,
showCancel:false, //是否显示取消按钮,
confirmText:'确定', //确定按钮的文字，默认为取消，最多 4 个字符,
confirmColor:'#e50012', //确定按钮的文字颜色,
}); 
  return res; 
}
const showModalBig = async function (content, title = '提示') {
  let res = await wepy.showModal( {
    title:title, //提示的标题,
content:content, //提示的内容,
showCancel:true, //是否显示取消按钮,
cancelText:'取消', //取消按钮的文字，默认为取消，最多 4 个字符,
cancelColor:'#000000', //取消按钮的文字颜色,
confirmText:'确定', //确定按钮的文字，默认为取消，最多 4 个字符,
confirmColor:'#e50012'//确定按钮的文字颜色,
}); 
  return res; 
}
const showActionSheet = async function (itemList) {
  return new Promise((resolve, reject) =>  {
    wx.showActionSheet( {
      itemList:itemList, 
      success:function (res) {
        resolve(res); 
      }, 
      fail:function (res) {
        console.log('用户取消'); 
      }
    }); 
  })
}
export default {
  formatTime, 
  formatDate, 
  formatNumber, 
  wxpay1, 
  wxpay3, 
  fwfwxpay, 
  regexConfig, 
  submitFormId, 
  html_decode, 
  pay, 
  getStartTime, 
  showLoading, 
  hideLoading, 
  showToast, 
  showModal, 
  showModalBig, 
  showActionSheet, 
}
