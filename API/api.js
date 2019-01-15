const host = "https://lmbge.com/wxapi/jcgj"
const host_test = "https://lmbge.com/wxapi"
const api = {
    login: `${host}/denglu`, //登录
    getUserInfo: `${host}/get_user_info`, //用户信息
    upUserInfo: `${host}/up_user_info`,
    getYizhanInfo: `${host}/jlxx`,
    yzm: `${host}/yzm`,
    renzheng: `${host}/renzheng`,
    message: `${host}/zixun`, //资讯
    carousel: `${host}/lunbo`, //轮播图
    yizhanIndex: `${host}/wdyz`, //商城首页
    yizhanBanner: `${host}/yzgg`, //首页广告
    getQRCodeImg: `${host}/getQRCode1`,
    getShareImg: `${host}/getQRCode2`,
    fxfxList: `${host}/fxfx_list`,
    fxfxDetail: `${host}/fxfx_detail`,
    jlList: `${host}/jl_list`,
    orderList: `${host}/ddlb`,
    orderDetail: `${host}/ddxq`,
    serviceList: `${host}/kefu_list`,
    addService: `${host}/kefu_add`,
    delService: `${host}/kefu_del`,
    yhlb: `${host}/yhlb`,
    jcgx: `${host}/jcgx`,
    yhsh: `${host}/yhsh`,
    find_users: `${host}/find_users`,
    find_users_c: `${host}/find_users_c`,
    addMember: `${host}/tjhy`,
    addManager: `${host}/manager_add`,
    delManager: `${host}/manager_del`,
    yhxq: `${host}/yhxq`,
    findManagers: `${host}/find_managers`,
    verifyCode: `${host}/chk_share_code`,
    renewList: `${host}/fuwufei`,
    fwfwxpay: `${host}/fwfwxpay`,
    fwfpaysuccess: `${host}/fwfpaysuccess`,
    fwfpaylist: `${host}/fwfpaylist`,
    supplier_upd: `${host}/supplier_upd`,
    fwfwxpay: `${host}/fwfwxpay`,
    fwfpaysuccess: `${host}/fwfpaysuccess`,
    findSalesman: `${host}/findSalesman`,
    delSalesman: `${host}/delSalesman`,
    addSalesman: `${host}/addSalesman`,
    add_categorys: `${host}/add_categorys`, //添加分类
    del_categorys: `${host}/del_categorys`, //删除分类
    del_brands: `${host}/del_brands`, //删除品牌
    brands: `${host}/brands`,
    upload: `${host}/upload`, //上传图片
    categorys: `${host}/categorys`, //分类列表
    addGoodsInfo: `${host}/add_goods`,
    search: `${host}/search`, // https://lmbge.com/wxapi/gztai/search
    allcats: `${host}/allcats`,
    goodinfo: `${host}/goodinfo`,
    changePrice: `${host}/xgjg`, //修改价格
    changeNum: `${host}/xgkc`, //修改价格
    fahuodan: `${host}/fahuodan`,
    fahuo: `${host}/fahuo`,
    shuju: `${host}/shuju`,
    jyjl: `${host}/jyjl`,
    del_goods: `${host}/del_goods`,
    xgbt: `${host}/xgbt`
}
export default api