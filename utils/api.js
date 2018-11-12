import md5 from './md5.js'

/* 在你的小程序中 填写你的appid 和 key */

const translate = function(q,{from= 'auto',to='auto'}={from: 'auto',to: 'auto'}){
    let salt = Date.now()
    
    let sign = md5(`${appid}${q}${salt}${key}`)
    return new Promise(function(resolve,reject){
       wx.request({
           url: '',/*'你请求的url'*/
           data: {
               q,
               from,
               to,
               appid,
               salt,
               sign
           },
           success(res){
               if(res.data && res.data.trans_result){
                   resolve(res.data)
               }else{
                reject({ status: 'error', msg: '翻译失败' })
               }
           },
           fail(){
               reject({ status: 'error', msg: '翻译失败' })
               wx.showToast({
                   title: '网络异常',
                   icon: 'none',
               })
           }
       })  
    })
}
module.exports.translate = translate