import login_img from './img/1e97c2268d18bd0231fb5b0a512b8d7f.png';
import boshimao from './img/icon1.png';
export const imgs = {
    login_img,
    boshimao,
    youzanicon: 'https://img.yzcdn.cn/wsc-pc-v4/dashboard/watermark/wsc.png'
}


import icon1 from "./icons/icon1.png"


export const icons = {
    icon1,
}

export const orders = {
    OrderSearch: [{ label: "外部单号", value1: '选项1' }, { label: "订单号" }, { label: "外部单号", value1: '选项2' }, { label: "收货人姓名", value1: '选项3' }, { label: "收货人手机号", value1: '选项4' }, { label: "收货人手机号后四位", value1: '选项5' }],


    OrderType: [{ label: "全部", value: '选项1' }, { label: "普通订单", value: '选项2' }, { label: "代付订单", value: '选项3' }, { label: "送礼订单", value: '选项4' }, { label: "送礼社群版订单", value: '选项5' }, { label: "心愿订单", value: '选项6' }, { label: "分销供货订单", value: '选项7' }, { label: "扫码收款", value: '选项8' }, { label: "酒店订单", value: '选项9' }, { label: "维权订单", value: '选项10' }, { label: "周期购订单", value: '选项11' }, { label: "多人拼团订单", value: '选项12' }, { label: "知识付费订单", value: '选项13' }, { label: "抽奖拼团订单", value: '选项14' }, { label: "储值卡/礼品卡订单", value: '选项15' }, { label: "分销买家订单", value: '选项16' }, { label: "定金预售订单", value: '选项17' }, { label: "F码订单", value: '选项18' }, { label: "砍价0元购订单", value: '选项19' }, { label: "堂食店餐订单", value: '选项20' }, { label: "海淘订单", value: '选项21' }, { label: "积分兑换订单", value: '选项22' }, { label: "社区团购订单", value: '选项23' }],


    activistState: [
        { label: "全部", value: '选项1' }, { label: "退款处理中", value: '选项2' }, { label: "退款结束", value: '选项3' }
    ],


    OrderStatus: [{ label: "全部", value: '选项1' }, { label: "待付款", value: '选项2' }, { label: "代发货", value: '选项3' }, { label: "已发货", value: '选项4' }, { label: "已完成", value: '选项5' }, { label: "已关闭", value: '选项6' }, { label: "退款中", value: '选项7' }],


    distribution: [{ label: "全部", value: '选项1' }, { label: "快递发货", value: '选项2' }, { label: "上门自提", value: '选项3' }, { label: "同城配送", value: '选项4' }],


    paymentWay: [
        { label: "全部", value: '选项1' }, { label: "微信支付", value: '选项2' }, { label: "微信支付-自有", value: '选项3' }, { label: "银行卡支付", value: '选项4' }, { label: "支付宝支付", value: '选项5' }, { label: "储值卡支付", value: '选项6' }, { label: "货到付款/到店付款", value: '选项7' }, { label: "找人代付", value: '选项8' }, { label: "赠品兑换", value: '选项9' }, { label: "优惠兑换", value: '选项10' }, { label: "礼品卡支付", value: '选项11' }, { label: "组合支付", value: '选项12' }, { label: "分期支付", value: '选项13' }, { label: "有赞零钱", value: '选项14' }
    ],
    orderSource: [
        { label: "全部", value: '选项1' }, { label: "微信-商家小程序", value: '选项2' }, { label: "微信-商家微商城", value: '选项3' }, { label: "百度-商家小程序", value: '选项4' }, { value: '选项5', label: "有赞精选" }, { label: "爱逛", value: '选项6' }, { label: "商家自有App", value: '选项7' }, { label: "浏览器", value: '选项8' }, { label: "支付宝", value: '选项9' }, { label: "腾讯QQ", value: '选项10' }, { label: "微博", value: '选项11' }, { label: "其他", value: '选项12' }
    ],
    addstar: [
        { label: "全部", value: '选项1' }, { label: "加星", value: '选项2' }
    ]
}

export const dingwei = {
    iconP: [
        {
            type: 0,
            p: '23px -330px',
            t: '零售'
        },
        {
            type: 1,
            p2: "url('//img.yzcdn.cn/dashboard/imgs//dashboard-edu-icon.png') no-repeat",
            t: '教育'
        },
        {
            type: 0,
            p: '23px -410px',
            t: '美业'
        },
        {
            type: 0,
            p: '23px -450px',
            t: '有赞精选'
        },
        {
            type: 0,
            p: '23px -490px',
            t: '有赞担保'
        },
        {
            type: 1,
            p2: "url('//img.yzcdn.cn/dashboard/imgs//dashboard-cross-border.png') no-repeat",
            t: '跨境服务'
        },
        {
            type: 0,
            p: '23px -530px',
            t: '有赞分销'
        },
        {
            type: 0,
            p: '23px -570px',
            t: '我要推广'
        },
        {
            type: 1,
            p2: "url('//img.yzcdn.cn/dashboard/imgs//dashboard-ad-icon.png') no-repeat",
            t: '广告投放'
        },
    ],
    iconP2:[
        {
            id:'0',
            p: '0 -90px',
            t1: '在线论坛' ,
            t2:'百万商家互通互助'
        },
        {
            id:'1',
            p: '0 -130px',
            t1: '线下培训' ,
            t2:'点击查看全国活动'
        },
        {
            id:'2',
            p: '0 -170px',
            t1: '服务市场' ,
            t2:'服务商帮你经营'
        },
        {
            id:'3',
            p: '0 -210px',
            t1: '在线课堂' ,
            t2:'资深专家视频授课'
        },
        {
            id:'4',
            p: '0 -250px',
            t1: '本地商盟' ,
            t2:'加入本地商家联盟'
        },
        {
            id:'5',
            p: '0 -290px',
            t1: '服务市场' ,
            t2:'服务商帮你经营'
        }
    ],
    iconP3:[
        {
            id:'6',
            p: '0 -794px',
            t:'发布商品'
        },
        {
            id:'4',
            p: '0 -746px',
            t:'分销员'
        },
        {
            id:'1',
            p: '0 -674px',
            t:'多网点'
        },
        {
            id:'2',
            p: '0 -698px',
            t:'小程序'
        },
        {
            id:'0',
            p: '0 -650px',
            t:'微信公众号'
        },
        {
            id:'7',
            p: '0 -818px',
            t:'收入/体现'
        },
        {
            id:'3',
            p: '0 -722px',
            t:'智能客服'
        },
        
        {
            id:'5',
            p: '0 -770px',
            t:'订单查询'
        },
    ]
}
