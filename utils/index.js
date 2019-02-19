import wepy from 'wepy'
const formatTime = function(time, fmt) {
        var o = {
            "M+": time.getMonth() + 1, //月份 
            "d+": time.getDate(), //日 
            "h+": time.getHours(), //小时 
            "m+": time.getMinutes(), //分 
            "s+": time.getSeconds(), //秒 
            "q+": Math.floor((time.getMonth() + 3) / 3), //季度 
            "S": time.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }
    // orderId 订单id redirectUrl 跳转url failUrl 失败跳转
    // 支付
const wxpay1 = async function(orderId) {
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
        if (!code) {
            return {
                code: 0,
                msg: "登录失败"
            };
        }
        var res = await wepy.request({
            url: 'https://lmbge.com/wxapi/jicai/wxpay1',
            data: {
                weixin: res0.code,
                id: orderId
            },
        })
        var result = res.data.data;
        console.log(res.data)
        if (res.data.code == 0) {
            //  通知用
            var prepay_id = result.package.replace("prepay_id=", "");
            // 发起支付

            try {
                var payres = await wepy.requestPayment({
                    timeStamp: result.timeStamp,
                    nonceStr: result.nonceStr,
                    package: result.package,
                    signType: result.signType,
                    paySign: result.paySign,

                })
                wepy.request({
                    url: 'https://lmbge.com/wxapi/jicai/paysuccess',
                    data: {
                        id: orderId
                    },
                })

                // wx.redirectTo({
                //     url: redirectUrl
                // });
                return {

                    code: 1,
                    msg: "支付成功"
                };

            } catch (err) {
                // 取消支付 
                console.log("取消支付")
                return {
                    code: 2,
                    msg: "取消支付"
                };

            }
        } else {
            return {
                code: 3,
                msg: "服务器忙"
            };
        }
    }
    // 提现到零钱
const wxpay3 = async function(user_id) {

    var res0 = await wepy.login()
    var code = res0.code
    if (!code) {
        return {
            code: 0,
            msg: "登录失败"
        };
    }
    var res = await wepy.showModal({
        title: '提示', //提示的标题,
        content: "你确定要提现吗", //提示的内容,
        showCancel: true, //是否显示取消按钮,
        cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
        cancelColor: '#000000', //取消按钮的文字颜色,
        confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
        confirmColor: '#e500012', //确定按钮的文字颜色,

    });

    if (res.cancel) {
        console.log('用户点击取消')
        return {

            code: 3,
            msg: "取消提现"
        };
        return
    }
    wx.showLoading({
        title: '提现中'
    });
    try {
        var res = await wepy.request({
            url: 'https://lmbge.com/wxapi/jcgj/wxpay3',
            data: {
                weixin: res0.code,
                user_id,
                desc: "提现"
            },
        })
        var result = res.data.data;
        console.log(res.data)
        if (res.data.code == 0) {

            return {

                code: 0,
                msg: "提现成功"
            };


        } else {
            return {
                code: 1,
                msg: "提现失败"
            };
        }
    } catch (error) {
        return {

            code: 2,
            msg: "提现失败"
        };

    }
}

// 服务费缴费
const fwfwxpay = async function(user_id, suppliers_id, data, pid) {
        wx.showLoading({
            title: '支付中...', //提示的内容,
            mask: true, //显示透明蒙层，防止触摸穿透,
            success: res => {}
        });
        var res0 = await wepy.login()
        var code = res0.code
        if (!code) {
            return {
                code: 0,
                msg: "登录失败"
            };
        }
        var res = await wepy.request({
            url: 'https://lmbge.com/wxapi/jcgj/fwfwxpay',
            data: {
                user_id: user_id,
                suppliers_id: suppliers_id,
                weixin: res0.code,
                goods_id: data.id,
                goods_name: data.goods_name,
                goods_price: data.isHasShareCode == "0" ? data.goods_price : data.youhui_price,
                months: data.months
            },
        })
        wx.hideLoading();
        var result = res.data.data;
        console.log(res.data)
        if (res.data.code == 0) {
            //  通知用
            var prepay_id = result.package.replace("prepay_id=", "");
            // 发起支付
            try {
                var payres = await wepy.requestPayment({
                    timeStamp: result.timeStamp,
                    nonceStr: result.nonceStr,
                    package: result.package,
                    signType: result.signType,
                    paySign: result.paySign,
                })
                console.log("payres", payres)
                wepy.request({
                    url: 'https://lmbge.com/wxapi/jcgj/fwfpaysuccess',
                    data: {
                        id: res.data.orderId,
                        months: data.months,
                        user_id: user_id,
                        suppliers_id: suppliers_id,
                        share_code: pid
                    },
                })
                return {
                    code: 1,
                    msg: "支付成功"
                };

            } catch (err) {
                // 取消支付 
                console.log("取消支付")
                return {
                    code: 2,
                    msg: "取消支付"
                };

            }
        } else {
            return {
                code: 3,
                msg: "服务器忙"
            };
        }
    }
    // 收集formid
const submitFormId = function(userId, formId) {
    if (formId == "the formId is a mock one") {
        return
    }
    wx.request({
        url: 'https://lmbge.com/wxapi/jcgj/add_form',
        data: {
            user_id: userId,
            form_id: formId,

        }
    })
}
const html_decode = function(str) {
        var s = "";
        if (str.length == 0) return "";
        // s = str.replace(/&gt;/g, "&");

        s = str.replace(/&amp;/g, "&");
        s = s.replace(/&amp;/g, "&");
        s = s.replace(/&amp;/g, "&");
        s = s.replace(/&lt;/g, "<");
        s = s.replace(/&gt;/g, ">");
        s = s.replace(/\/>/g, '></img>');

        s = "<p>" + s + "</p>"

        // if (s.substr(s.length - 5, 5) == "/img>") {
        //     console.log(s);
        // }
        s = s.replace(/<img/g, '</p><img');
        s = s.replace(/<\/img>/g, '<\/img><p>');

        s = s.replace(/\/>/g, '/></p>');
        s = s.replace(/\/><\/p>/g, '/>');
        s = s.replace(/<\/p><\/p>/g, '</p>');
        s = s.replace(/<\/p>\/n<\/p>/g, '</p>');
        s = s.replace(/<\/p>\/r<\/p>/g, '</p>');
        s = s.replace(/<\/p>\/n\/r<\/p>/g, '</p>');
        s = s.replace(/<\/p>\/r\/n<\/p>/g, '</p>');
        s = s.replace(/<p><\/p>/g, '');
        // s = s.replace(/>\/n<p><\/p><img/g, '><img');
        // s = s.replace(/>\/r<p><\/p><img/g, '><img');
        // s = s.replace(/>\/r\/n<p><\/p><img/g, '><img');
        // s = s.replace(/>\/n\/r<p><\/p><img/g, '><img');
        s = s.replace(/<p><p/g, '<p');



        s = s.replace(/&nbsp;/g, " ");
        s = s.replace(/&#39;/g, "\'");
        s = s.replace(/&quot;/g, "\"");
        s = s.replace(/<br>/g, "\n");
        s = s.replace(/<p/g, '<p class="xing-p"');
        s = s.replace(/<img/g, '<img class="xing-img"');
        s = s.replace(/src="\/images/g, 'src="http://maijia.jicaizx.com/images');

        s = s.replace(/ ><\/img>/g, ' _uploaded="true"></img>');
        return s;
    }
    //邮箱以及手机的正则表达式
const regexConfig = function() {
    var reg = {
        email: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
        phone: /^1(3|4|5|7|8)\d{9}$/
    }
    return reg;
}
export default {
    formatTime,
    wxpay1,
    wxpay3,
    fwfwxpay,
    regexConfig,
    submitFormId,
    html_decode
}