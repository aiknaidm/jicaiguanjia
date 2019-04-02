import wepy from 'wepy';
const host = "https://lmbge.com/wxapi/jcgj"
const host_test = "https://lmbge.com/wxapi"
const newapi = {
  login: (data) => fetch(`${host}/denglu`, 'GET', data), //登录
  getUserInfo: (data) => fetch(`${host}/get_user_info`, 'GET', data), //用户信息
  upUserInfo: (data) => fetch(`${host}/up_user_info`, 'GET', data),
  getYizhanInfo: (data) => fetch(`${host}/jlxx`, 'GET', data),
  yzm: (data) => fetch(`${host}/yzm`, 'GET', data),
  renzheng: (data) => fetch(`${host}/renzheng`, 'POST', data),
  message: () => fetch(`${host}/zixun`, 'GET'), //资讯
  carousel: () => fetch(`${host}/lunbo`, 'GET'), //轮播图
  yizhanIndex: (data) => fetch(`${host}/wdyz`, 'GET', data), //商城首页
  yizhanBanner: (data) => fetch(`${host}/yzgg`, 'GET', data), //首页广告
  articleDetail: (data) => fetch(`${host}/ggnr`, 'GET', data),
  newsKind: () => fetch(`${host}/ggfl`, 'GET'),
  newsList: (data) => fetch(`${host}/gglb`, 'GET', data),
  getQRCodeImg: (data) => fetch(`${host}/getQRCode1`, 'GET', data),
  getShareImg: (data) => fetch(`${host}/getQRCode2`, 'GET', data),
  fxfxList: (data) => fetch(`${host}/fxfx_list`, 'GET', data),
  fxfxDetail: (data) => fetch(`${host}/fxfx_detail`, 'GET', data),
  jlList: (data) => fetch(`${host}/jl_list`, 'GET', data),
  orderList: (data) => fetch(`${host}/ddlb`, 'GET', data),
  orderDetail: (data) => fetch(`${host}/ddxq`, 'GET', data),
  serviceList: (data) => fetch(`${host}/kefu_list`, 'GET', data),
  addService: (data) => fetch(`${host}/kefu_add`, 'GET', data),
  delService: (data) => fetch(`${host}/kefu_del`, 'GET', data),
  yhlb: (data) => fetch(`${host}/yhlb`, 'GET', data), //会员管理
  jcgx: (data) => fetch(`${host}/jcgx`, 'GET', data),
  yhsh: (data) => fetch(`${host}/yhsh`, 'GET', data),
  find_users: (data) => fetch(`${host}/find_users`, 'GET', data),
  find_users_c: (data) => fetch(`${host}/find_users_c`, 'GET', data),
  addMember: (data) => fetch(`${host}/tjhy`, 'GET', data),
  addManager: (data) => fetch(`${host}/manager_add`, 'GET', data),
  delManager: (data) => fetch(`${host}/manager_del`, 'GET', data),
  yhxq: (data) => fetch(`${host}/yhxq`, 'GET', data),
  findManagers: (data) => fetch(`${host}/find_managers`, 'GET', data),
  verifyCode: (data) => fetch(`${host}/chk_share_code`, 'GET', data),
  renewList: () => fetch(`${host}/fuwufei`, 'GET'),
  fwfwxpay: (data) => fetch(`${host}/fwfwxpay`, 'GET', data),
  fwfpaysuccess: (data) => fetch(`${host}/fwfpaysuccess`, 'GET', data),
  fwfpaylist: (data) => fetch(`${host}/fwfpaylist`, 'GET', data),
  supplier_upd: (data) => fetch(`${host}/supplier_upd`, 'POST', data),
  fwfwxpay: (data) => fetch(`${host}/fwfwxpay`, 'GET', data),
  fwfpaysuccess: (data) => fetch(`${host}/fwfpaysuccess`, 'GET', data),
  findSalesman: (data) => fetch(`${host}/findSalesman`, 'GET', data),
  delSalesman: (data) => fetch(`${host}/delSalesman`, 'GET', data),
  addSalesman: (data) => fetch(`${host}/addSalesman`, 'GET', data),
  add_categorys: (data) => fetch(`${host}/add_categorys`, 'GET', data), //添加分类
  del_categorys: (data) => fetch(`${host}/del_categorys`, 'GET', data), //删除分类
  del_brands: (data) => fetch(`${host}/del_brands`, 'GET', data), //删除品牌
  brands: (data) => fetch(`${host}/brands`, 'GET', data),
  upload: (data) => fetch(`${host}/upload`, 'GET', data), //上传图片
  categorys: (data) => fetch(`${host}/categorys`, 'GET', data), //分类列表
  addGoodsInfo: (data) => fetch(`${host}/add_goods`, 'POST', data),
  search: (data) => fetch(`${host}/search`, 'GET', data), // https://lmbge.com/wxapi/gztai/search
  allcats: (data) => fetch(`${host}/allcats`, 'GET', data),
  goodinfo: (data) => fetch(`${host}/goodinfo`, 'GET', data),
  changePrice: (data) => fetch(`${host}/xgjg`, 'POST', data), //修改价格
  changeNum: (data) => fetch(`${host}/xgkc`, 'POST', data), //修改价格
  fahuodan: (data) => fetch(`${host}/fahuodan`, 'GET', data),
  fahuo: (data) => fetch(`${host}/fahuo`, 'GET', data),
  shuju: (data) => fetch(`${host}/shuju`, 'GET', data),
  jyjl: (data) => fetch(`${host}/jyjl`, 'GET', data),
  del_goods: (data) => fetch(`${host}/del_goods`, 'POST', data),
  xgbt: (data) => fetch(`${host}/xgbt`, 'GET', data),
  supplier_detail: (data) => fetch(`${host}/supplier_detail`, 'GET', data),
  upload_goodimg: (data) => fetch(`${host}/upload_goodimg`, 'GET', data),
  //管理员
  suppliers_list: (data) => fetch(`${host}/suppliers_list`, 'GET', data),
  kthypay: (data) => fetch(`${host}/kthypay`, 'GET', data),
  kthy_price: () => fetch(`${host}/kthy_price`, 'GET'),
  kthypaysuccess: (data) => fetch(`${host}/kthypaysuccess`, 'GET', data),
  card_add: (data) => fetch(`${host}/card_add`, 'POST', data),
  card_list: (data) => fetch(`${host}/card_list`, 'GET', data),
  card_stop: (data) => fetch(`${host}/card_stop`, 'GET', data),
  card_rules: (data) => fetch(`${host}/card_rules`, 'GET', data),
  cardbg: (data) => fetch(`${host}/cardbg`, 'GET', data),
  card_bg: (data) => fetch(`${host}/card_bg`, 'GET', data),
  cardrules: (data) => fetch(`${host}/cardrules`, 'GET', data),
  hycz: (data) => fetch(`${host}/hycz`, 'GET', data),
  czjl: (data) => fetch(`${host}/czjl`, 'GET', data),
  czqr: (data) => fetch(`${host}/czqr`, 'GET', data),
  czdqr: (data) => fetch(`${host}/czdqr`, 'GET', data),
  czphb: (data) => fetch(`${host}/czphb`, 'GET', data),
  zcjl: (data) => fetch(`${host}/zcjl`, 'GET', data),
  suppliers_hdky: (data) => fetch(`${host}/suppliers_hdky`, 'GET', data),
  hd_goods_list: (data) => fetch(`${host}/hd_goods_list`, 'GET', data),
  goods_hdky: (data) => fetch(`${host}/goods_hdky`, 'POST', data),
  set_unionid: (data) => fetch(`${host}/set_unionid`, 'GET', data),
}
const fetch = async function (url, method, data) {
  let ret = await wepy.request({
    url,
    method,
    data,
    header: {
      'content-type': 'application/json',
      'Token': 'waiting_for_set',
    },
  });
  return ret;
}
export default newapi
