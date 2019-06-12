import wepy from 'wepy'
import newapi from '../API/newapi';
const formatTime = function(d = 0) {
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
const formatDate = function(d = 0) {
    var date = new Date();
    if (d) {
        date.setTime(d * 1000);
    }

    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    return [year, month, day].map(formatNumber).join('-')
}
const formatNumber = function(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}
const getStartTime = function() {
        var date = new Date();

        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = 1

        return [year, month, day].map(formatNumber).join('-')
    }
    // 提现到零钱
const wxpay3 = async function() {
    let mRes = await showModalBig('你确定要提现吗');
    if (mRes.cancel) {
        return {
            code: 3,
            msg: "取消提现"
        };
    }
    showLoading('提现中');
    try {
        let data = {
            desc: "提现"
        };
        let res = await newapi.wxpay3(data);
        var result = res.data.data;
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
const fwfwxpay = async function(suppliers_id, data, pid) {
    showLoading('支付中...');
    let data1 = {
        suppliers_id: suppliers_id,
        goods_id: data.id,
        goods_name: data.goods_name,
        goods_price: data.isHasShareCode == "0" ? data.goods_price : data.youhui_price,
        months: data.months
    };
    let res = await newapi.fwfwxpay(data1);
    wx.hideLoading();
    var result = res.data.data;
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
        } catch (err) {
            // 取消支付 
            return {
                code: 2,
                msg: "取消支付"
            };
        }
        let data2 = {
            id: res.data.orderId,
            months: data.months,
            suppliers_id: suppliers_id,
            share_code: pid
        };
        newapi.fwfpaysuccess(data2);
        return {
            code: 1,
            msg: "支付成功"
        };
    } else {
        return {
            code: 3,
            msg: "服务器忙"
        };
    }
}

// 会员缴费 
const pay = async function(data, data2) {
    showLoading('支付中...');
    let res = await newapi.permission_pay(data);
    wx.hideLoading();
    var result = res.data.data;
    var order_id = res.data.orderId
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
        } catch (err) {
            // 取消支付 
            return {
                code: 2,
                msg: "取消支付"
            };
        }
        data2.order_id = order_id;
        newapi.permission_paysuccess(data2);
        return {
            code: 1,
            msg: "支付成功"
        };
    } else {
        return {
            code: 3,
            msg: "服务器忙"
        };
    }
}

// 收集formid
const submitFormId = function(formId) {
    if (formId == "the formId is a mock one") {
        return
    }
    let data = {
        form_id: formId,
    };
    newapi.add_form(data);
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
        // s = s.replace(/\/>/g, '></img>');

        // s = "<p>" + s + "</p>"

        // if (s.substr(s.length - 5, 5) == "/img>") {
        // }
        // s = s.replace(/<img/g, '</p><img');
        // s = s.replace(/<\/img>/g, '<\/img><p>');

        // s = s.replace(/\/>/g, '/></p>');
        // s = s.replace(/\/><\/p>/g, '/>');
        // s = s.replace(/<\/p><\/p>/g, '</p>');
        // s = s.replace(/<\/p>\/n<\/p>/g, '</p>');
        // s = s.replace(/<\/p>\/r<\/p>/g, '</p>');
        // s = s.replace(/<\/p>\/n\/r<\/p>/g, '</p>');
        // s = s.replace(/<\/p>\/r\/n<\/p>/g, '</p>');
        // s = s.replace(/<p><\/p>/g, '');
        // s = s.replace(/>\/n<p><\/p><img/g, '><img');
        // s = s.replace(/>\/r<p><\/p><img/g, '><img');
        // s = s.replace(/>\/r\/n<p><\/p><img/g, '><img');
        // s = s.replace(/>\/n\/r<p><\/p><img/g, '><img');
        // s = s.replace(/<p><p/g, '<p');



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
        phone: /^1[2345789]\d{9}$/
    }
    return reg;
}
const showLoading = function(title = '加载中') {
    wx.showLoading({
        title: title, //提示的内容,
        mask: true, //显示透明蒙层，防止触摸穿透,
    });
}
const hideLoading = function() {
    wx.hideLoading();
}
const showToast = async function(title, icon = 'none', duration = 2000) {
    await wx.showToast({
        title: title, //提示的内容,
        icon: icon, //图标,
        duration: duration, //延迟时间,
        mask: true, //显示透明蒙层，防止触摸穿透,
    });
}
const showModal = async function(content, title = '提示') {
    let res = await wepy.showModal({
        title: title, //提示的标题,
        content: content, //提示的内容,
        showCancel: false, //是否显示取消按钮,
        confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
        confirmColor: '#e50012', //确定按钮的文字颜色,
    });
    return res;
}
const showModalBig = async function(content, title = '提示') {
    let res = await wepy.showModal({
        title: title, //提示的标题,
        content: content, //提示的内容,
        showCancel: true, //是否显示取消按钮,
        cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
        cancelColor: '#000000', //取消按钮的文字颜色,
        confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
        confirmColor: '#e50012' //确定按钮的文字颜色,
    });
    return res;
}
const showActionSheet = async function(itemList) {
    return new Promise((resolve, reject) => {
        wx.showActionSheet({
            itemList: itemList,
            success: function(res) {
                resolve(res);
            },
            fail: function(res) {
                console.log('用户取消');
            }
        });
    })
}
export default {
    formatTime,
    formatDate,
    formatNumber,
    wxpay3,
    fwfwxpay,
    pay,
    regexConfig,
    submitFormId,
    html_decode,
    getStartTime,
    showLoading,
    hideLoading,
    showToast,
    showModal,
    showModalBig,
    showActionSheet,
}