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
    permission_pay: (data) => fetch(`${host_pay}/permission_pay`, 'POST', data),
    permission_paysuccess: (data) => fetch(`${host_pay}/permission_paysuccess`, 'POST', data),
    wxpay3: (data) => fetch(`${host_pay}/wxpay3`, 'GET', data),

    add_form: (data) => fetch(`${host_chk}/add_form`, 'GET', data),
    getUserInfo: (data) => fetch(`${host_chk}/get_user_info`, 'GET', data), //用户信息
    upUserInfo: (data) => fetch(`${host_chk}/up_user_info`, 'GET', data),
    getYizhanInfo: (data) => fetch(`${host_chk}/managers_permission`, 'GET', data),
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
    addManager: (data) => fetch(`${host_chk}/manager_add`, 'GET', data), //添加管理员
    delManager: (data) => fetch(`${host_chk}/manager_del`, 'GET', data), //删除管理员
    editManager: (data) => fetch(`${host_chk}/manager_edit`, 'GET', data), //编辑管理员
    managers_detail: (data) => fetch(`${host_chk}/managers_detail`, 'GET', data), //权限
    // 判断管理员显示权限功能的接口   managers_permission  参数  suppliers_id店铺ID
    managers_permission: (data) => fetch(`${host_chk}/managers_permission`, 'GET', data), //权限

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
    add_brands: (data) => fetch(`${host_chk}/add_brands`, 'GET', data),
    all_brands: (data) => fetch(`${host_chk}/all_brands`, 'GET', data),
    brands: (data) => fetch(`${host_chk}/brands`, 'GET', data),
    joinfee_list: (data) => fetch(`${host_chk}/joinfee_list`, 'GET', data),
    add_joinfee: (data) => fetch(`${host_chk}/add_joinfee`, 'GET', data),
    del_joinfee: (data) => fetch(`${host_chk}/del_joinfee`, 'GET', data),
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
    yizhan_join_list: (data) => fetch(`${host_chk}/yizhan_join_list`, 'GET', data),
    //管理员
    suppliers_list: (data) => fetch(`${host_chk}/suppliers_list`, 'GET', data),
    permission_detail: (data) => fetch(`${host_chk}/permission_detail`, 'GET', data),
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

    yh_num: (data) => fetch(`${host_chk}/yh_num`, 'GET', data),

    kehu: (data) => fetch(`${host_chk}/kehu`, 'GET', data),
    kehu_read: (data) => fetch(`${host_chk}/kehu_read`, 'GET', data),
    cat_manage: (data) => fetch(`${host_chk}/cat_manage`, 'GET', data),
    up_categorys: (data) => fetch(`${host_chk}/up_categorys`, 'GET', data),
    promotion_add: (data) => fetch(`${host_chk}/promotion_add`, 'GET', data),
    promotion_stop: (data) => fetch(`${host_chk}/promotion_stop`, 'GET', data),
    promotion_list: (data) => fetch(`${host_chk}/promotion_list`, 'GET', data),
    suppliers_permission: (data) => fetch(`${host_chk}/suppliers_permission`, 'GET', data),
    edit_permission: (data) => fetch(`${host_chk}/edit_permission`, 'GET', data),
    suppliers_join_list: (data) => fetch(`${host_chk}/suppliers_join_list`, 'GET', data), //加入易站
    shenhe_suppliers_join: (data) => fetch(`${host_chk}/shenhe_suppliers_join`, 'GET', data), //加入易站
    suppliers_join: (data) => fetch(`${host_chk}/suppliers_join`, 'GET', data), //加入易站
    admin_permission: (data) => fetch(`${host_chk}/admin_permission`, 'GET', data), //权限
    // 吉采管家易站站长分配商品  fenpei     参数 rec_id 多个ID用 1,2,3字符串方式    suppliers_id 分配的店铺ID
    fenpei: (data) => fetch(`${host_chk}/fenpei`, 'GET', data), //权限
    // 易站和加盟店铺发货接口  yizhan_fahuo   参数 rec_id 多个ID用 1,2,3字符串方式    order_id 订单ID  peisongyuan   yujisongda     fahuodan
    yizhan_fahuo: (data) => fetch(`${host_chk}/yizhan_fahuo`, 'GET', data), //权限
    add_lunbotu: (data) => fetch(`${host_chk}/add_lunbotu`, 'POST', data), //权限
    lunbotu: (data) => fetch(`${host_chk}/lunbotu`, 'GET', data), //权限
    del_lunbotu: (data) => fetch(`${host_chk}/del_lunbotu`, 'GET', data), //权限
    add_slides: (data) => fetch(`${host_chk}/add_slides`, 'POST', data), //权限
    slides: (data) => fetch(`${host_chk}/slides`, 'POST', data), //权限
    slides_module_list: (data) => fetch(`${host_chk}/slides_module_list`, 'POST', data), //推荐品牌列表
    slides_brand_list: (data) => fetch(`${host_chk}/slides_brand_list`, 'POST', data), //推荐品牌列表
    slides_module_add: (data) => fetch(`${host_chk}/slides_module_add`, 'POST', data), //推荐品牌列表
    slides_module_del: (data) => fetch(`${host_chk}/slides_module_del`, 'POST', data), //推荐品牌列表
    addDesigner: (data) => fetch(`${host_chk}/adddesigner`, 'POST', data), //添加设计师
    finddesigner: (data) => fetch(`${host_chk}/finddesigner`, 'POST', data), //设计师列表
    deldesigner: (data) => fetch(`${host_chk}/deldesigner`, 'POST', data), //删除设计师
    edit_designer: (data) => fetch(`${host_chk}/edit_designer`, 'POST', data), //编辑简历
    designer_resume: (data) => fetch(`${host_chk}/designer_resume`, 'POST', data), //修改基础信息
    designer_detail: (data) => fetch(`${host_chk}/designer_detail`, 'POST', data), //修改基础信息
    edit_anli: (data) => fetch(`${host_chk}/edit_anli`, 'GET', data),
    del_anli: (data) => fetch(`${host_chk}/del_anli`, 'GET', data),
    add_anli: (data) => fetch(`${host_chk}/add_anli`, 'GET', data),
    anli_style: (data) => fetch(`${host_chk}/anli_style`, 'POST', data), //修改基础信息
    anli_detail: (data) => fetch(`${host_chk}/anli_detail`, 'GET', data),
    anli_list: (data) => fetch(`${host_chk}/anli_list`, 'GET', data),
    edit_suppliers_bili: (data) => fetch(`${host_chk}/edit_suppliers_bili`, 'GET', data),
    qianbao: (data) => fetch(`${host_chk}/qianbao`, 'GET', data),
    addka: (data) => fetch(`${host_chk}/addka`, 'GET', data),
    bankname: (data) => fetch(`${host_chk}/bankname`, 'GET', data),
    kalist: (data) => fetch(`${host_chk}/kalist`, 'GET', data),
    tixian: (data) => fetch(`${host_chk}/tixian`, 'GET', data),

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
                    if (res.data.code != 0 && res.data.code != 4) {
                        wx.showToast({
                            title: res.data.message, //提示的内容,
                            icon: 'none', //图标,
                        });
                        resolve(res)
                    } else
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