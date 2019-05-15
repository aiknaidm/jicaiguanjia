import wepy from 'wepy';
const host = "https://lmbge.com/wxapi/jcgj2"
const host_chk = "https://lmbge.com/wxapi/jcgjchk"
const host_pay = "https://lmbge.com/wxapi/jcgjpay"
const newapi = {
    login: (data) => fetch(`${host}/denglu`, 'GET', data), //登录
    message: () => fetch(`${host}/zixun`, 'GET'), //资讯
    carousel: () => fetch(`${host}/lunbo`, 'GET'), //轮播图
    newsKind: () => fetch(`${host}/ggfl`, 'GET'),
    newsList: (data) => fetch(`${host}/gglb`, 'GET', data),
    articleDetail: (data) => fetch(`${host}/ggnr`, 'GET', data),

    fwfwxpay: (data) => fetch(`${host_pay}/fwfwxpay`, 'GET', data),
    fwfpaysuccess: (data) => fetch(`${host_pay}/fwfpaysuccess`, 'GET', data),
    kthypay: (data) => fetch(`${host_pay}/kthypay`, 'GET', data),
    kthypaysuccess: (data) => fetch(`${host_pay}/kthypaysuccess`, 'GET', data),
    wxpay3: (data) => fetch(`${host_pay}/wxpay3`, 'GET', data),

    add_form: (data) => fetch(`${host_chk}/add_form`, 'GET', data),
    getUserInfo: (data) => fetch(`${host_chk}/get_user_info`, 'GET', data), //用户信息
    upUserInfo: (data) => fetch(`${host_chk}/up_user_info`, 'GET', data),
    getYizhanInfo: (data) => fetch(`${host_chk}/jlxx`, 'GET', data),
    yzm: (data) => fetch(`${host_chk}/yzm`, 'GET', data),
    renzheng: (data) => fetch(`${host_chk}/renzheng`, 'POST', data),
    yizhanIndex: (data) => fetch(`${host_chk}/wdyz`, 'GET', data), //商城首页
    yizhanBanner: (data) => fetch(`${host_chk}/yzgg`, 'GET', data), //首页广告
    getQRCodeImg: (data) => fetch(`${host_chk}/getQRCode1`, 'GET', data),
    getShareImg: (data) => fetch(`${host_chk}/getQRCode2`, 'GET', data),
    fxfxList: (data) => fetch(`${host_chk}/fxfx_list`, 'GET', data),
    fxfxDetail: (data) => fetch(`${host_chk}/fxfx_detail`, 'GET', data),
    jlList: (data) => fetch(`${host_chk}/jl_list`, 'GET', data),
    orderList: (data) => fetch(`${host_chk}/ddlb`, 'GET', data),
    orderDetail: (data) => fetch(`${host_chk}/ddxq`, 'GET', data),
    serviceList: (data) => fetch(`${host_chk}/kefu_list`, 'GET', data),
    addService: (data) => fetch(`${host_chk}/kefu_add`, 'GET', data),
    delService: (data) => fetch(`${host_chk}/kefu_del`, 'GET', data),
    // yhlb: (data) => fetch(`${host_chk}/yhlb`, 'GET', data), //会员管理
    yhlb: (data) => fetch(`${host_chk}/yhlb_new`, 'GET', data),
    jcgx: (data) => fetch(`${host_chk}/jcgx`, 'GET', data),
    yhsh: (data) => fetch(`${host_chk}/yhsh`, 'GET', data),
    find_users: (data) => fetch(`${host_chk}/find_users`, 'GET', data),
    find_users_c: (data) => fetch(`${host_chk}/find_users_c`, 'GET', data),
    addMember: (data) => fetch(`${host_chk}/tjhy`, 'GET', data),
    addManager: (data) => fetch(`${host_chk}/manager_add`, 'GET', data),
    delManager: (data) => fetch(`${host_chk}/manager_del`, 'GET', data),
    yhxq: (data) => fetch(`${host_chk}/yhxq`, 'GET', data),
    findManagers: (data) => fetch(`${host_chk}/find_managers`, 'GET', data),
    verifyCode: (data) => fetch(`${host_chk}/chk_share_code`, 'GET', data),
    renewList: () => fetch(`${host_chk}/fuwufei`, 'GET'),
    fwfpaylist: (data) => fetch(`${host_chk}/fwfpaylist`, 'GET', data),
    supplier_upd: (data) => fetch(`${host_chk}/supplier_upd`, 'POST', data),
    findSalesman: (data) => fetch(`${host_chk}/findSalesman`, 'GET', data),
    delSalesman: (data) => fetch(`${host_chk}/delSalesman`, 'GET', data),
    addSalesman: (data) => fetch(`${host_chk}/addSalesman`, 'GET', data),
    add_categorys: (data) => fetch(`${host_chk}/add_categorys`, 'GET', data), //添加分类
    del_categorys: (data) => fetch(`${host_chk}/del_categorys`, 'GET', data), //删除分类
    del_brands: (data) => fetch(`${host_chk}/del_brands`, 'GET', data), //删除品牌
    brands: (data) => fetch(`${host_chk}/brands`, 'GET', data),
    upload: (data) => fetch(`${host_chk}/upload`, 'GET', data), //上传图片
    categorys: (data) => fetch(`${host_chk}/categorys`, 'GET', data), //分类列表
    addGoodsInfo: (data) => fetch(`${host_chk}/add_goods`, 'POST', data),
    search: (data) => fetch(`${host_chk}/search`, 'GET', data), // 
    allcats: (data) => fetch(`${host_chk}/allcats`, 'GET', data),
    goodinfo: (data) => fetch(`${host_chk}/goodinfo`, 'GET', data),
    changePrice: (data) => fetch(`${host_chk}/xgjg`, 'POST', data), //修改价格
    changeNum: (data) => fetch(`${host_chk}/xgkc`, 'POST', data), //修改价格
    fahuodan: (data) => fetch(`${host_chk}/fahuodan`, 'GET', data),
    fahuo: (data) => fetch(`${host_chk}/fahuo`, 'GET', data),
    shuju: (data) => fetch(`${host_chk}/shuju`, 'GET', data),
    jyjl: (data) => fetch(`${host_chk}/jyjl`, 'GET', data),
    del_goods: (data) => fetch(`${host_chk}/del_goods`, 'POST', data),
    xgbt: (data) => fetch(`${host_chk}/xgbt`, 'GET', data),
    supplier_detail: (data) => fetch(`${host_chk}/supplier_detail`, 'GET', data),
    upload_goodimg: (data) => fetch(`${host_chk}/upload_goodimg`, 'GET', data),
    //管理员
    suppliers_list: (data) => fetch(`${host_chk}/suppliers_list`, 'GET', data),
    kthy_price: () => fetch(`${host_chk}/kthy_price`, 'GET'),
    card_add: (data) => fetch(`${host_chk}/card_add`, 'POST', data),
    card_list: (data) => fetch(`${host_chk}/card_list`, 'GET', data),
    card_stop: (data) => fetch(`${host_chk}/card_stop`, 'GET', data),
    card_rules: (data) => fetch(`${host_chk}/card_rules`, 'GET', data),
    cardbg: (data) => fetch(`${host_chk}/cardbg`, 'GET', data),
    card_bg: (data) => fetch(`${host_chk}/card_bg`, 'GET', data),
    cardrules: (data) => fetch(`${host_chk}/cardrules`, 'GET', data),
    hycz: (data) => fetch(`${host_chk}/hycz`, 'GET', data),
    czjl: (data) => fetch(`${host_chk}/czjl`, 'GET', data),
    czqr: (data) => fetch(`${host_chk}/czqr`, 'GET', data),
    czdqr: (data) => fetch(`${host_chk}/czdqr`, 'GET', data),
    czphb: (data) => fetch(`${host_chk}/czphb`, 'GET', data),
    zcjl: (data) => fetch(`${host_chk}/zcjl`, 'GET', data),
    suppliers_hdky: (data) => fetch(`${host_chk}/suppliers_hdky`, 'GET', data),
    hd_goods_list: (data) => fetch(`${host_chk}/hd_goods_list`, 'GET', data),
    goods_hdky: (data) => fetch(`${host_chk}/goods_hdky`, 'POST', data),
    set_unionid: (data) => fetch(`${host_chk}/set_unionid`, 'GET', data),
    fxgz_get: () => fetch(`${host_chk}/fxgz_get`, 'GET'),
    orderNum: (data) => fetch(`${host_chk}/order_num`, 'GET', data), //订单数量
    up_endtime: (data) => fetch(`${host_chk}/up_endtime`, 'GET', data),
    copy_goods: (data) => fetch(`${host_chk}/copy_goods`, 'GET', data),
    swyz: (data) => fetch(`${host_chk}/swyz`, 'GET', data),
    copeCartList: (data) => fetch(`${host_chk}/cat_copy_chk`, 'GET', data),
    bossList: (data) => fetch(`${host_chk}/boss_list`, 'GET', data),
    anli_list: (data) => fetch(`${host_chk}/anli_list`, 'GET', data),
    yh_num: (data) => fetch(`${host_chk}/yh_num`, 'GET', data),
    anli_detail: (data) => fetch(`${host_chk}/anli_detail`, 'GET', data),
    edit_anli: (data) => fetch(`${host_chk}/edit_anli`, 'GET', data),
    del_anli: (data) => fetch(`${host_chk}/del_anli`, 'GET', data),
    add_anli: (data) => fetch(`${host_chk}/add_anli`, 'GET', data),
    kehu: (data) => fetch(`${host_chk}/kehu`, 'GET', data),
    kehu_read: (data) => fetch(`${host_chk}/kehu_read`, 'GET', data),


}
const fetch = async function(url, method, data) {
    return new Promise((resolve, reject) => {
        let token = wx.getStorageSync('Token');
        wx.request({
            url,
            method,
            data,
            header: {
                'content-type': 'application/json',
                'Token': token,
            },
            success(res) {
                if (!res.data) {
                    wx.clearStorageSync();
                    wx.hideLoading();
                    wx.showModal({
                        title: '提示', //提示的标题,
                        content: '登录超时，请关闭后重试', //提示的内容,
                    });
                    return;
                }
                if (res.statusCode < 400) {
                    resolve(res);
                } else {
                    wx.hideLoading();
                    wx.showModal({
                        title: '提示', //提示的标题,
                        content: '未知错误', //提示的内容,
                    });
                }
            },
            // complete(res) {
            //   if (res.statusCode != 200) {
            //     reject(res.statusCode);
            //   }
            // }
        });
    });
}
export default newapi