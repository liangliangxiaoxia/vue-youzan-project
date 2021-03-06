import axios from 'axios';
import constant from '@/utils/constant'
export function fetch(api, callback) {
    let res = localStorage.getItem('login')
    console.log(res)
    if (res) {
        // 显示加载中
        axios({
            method: "GET",
            url: constant.baseUrl + api,
            headers: {
                token: JSON.parse(res).token  // token传递给后端
            }
        }).then(res => {
            let data = null
            if (res.data.err === 0) {
                data = res.data.data
            }
            callback && callback(data)
        }).catch(err => {
            console.log('接口请求异常', err)
        }).then(() => {
            // 总是会执行
            // 隐藏加载中
        })
    }else{
        // 显示加载中
        axios({
            method: "GET",
            url: constant.baseUrl + api,
        }).then(res => {
            let data = null
            if (res.data.err === 0) {
                data = res.data.data
            }
            callback && callback(data)
        }).catch(err => {
            console.log('接口请求异常', err)
        }).then(() => {
            // 总是会执行
            // 隐藏加载中
        })
    }

}