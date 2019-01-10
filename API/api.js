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
  getShareImg: `${host}/getQRCode2`,
  fxfxList: `${host}/fxfx_list`,
  fxfxDetail: `${host}/fxfx_detail`,
  jlList: `${host}/jl_list`,
  orderList: `${host}/ddlb`,
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
  yhxq: `${host}/yhxq`
}
export default api
