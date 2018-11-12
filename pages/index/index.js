//<
import { translate } from '../../utils/api.js'


const app = getApp()

Page({
 data: {
  hideClearIcon: true,
   query: '',
   beforeQuery: '',
   result: [],
   currentLang: {},
   beforeCurrentLang: '',
   confirmed: false
 },
 onShow: function () {
  if (this.data.currentLang.lang !== app.globalData.currentLang.lang) {
    
    this.setData({ currentLang: app.globalData.currentLang })
    this.onConfirm()
}},
onLoad(option){
  if(option.query){
    console.log(option)
    this.setData({query: option.query})
  }
},
 onInput: function(e){
   /*console.log(e)看看是什么东西  再找到想要的*/
   this.setData({query: e.detail.value})
   if(e.detail.value){
    this.setData({hideClearIcon: false})
   }else{
    this.setData({hideClearIcon: true})
   }
 },
 onConfirm: function(e){
   console.log(e)
   console.log('this.data.beforeQuery')
   console.log(this.data.beforeQuery)
   console.log('this.data.query')
   console.log(this.data.query)
   if (!this.data.query) {
    console.log(1)
    return
   }else if (this.data.beforeQuery === this.data.query && this.data.currentLang.lang  === this.data.beforeCurrentLang) {
    console.log(2)
    return
   
  }else{translate(this.data.query,{from: 'auto',to: this.data.currentLang.lang}).then((res)=>{
    this.setData({'result': res.trans_result})
    this.setData({'beforeQuery': this.data.query})
    this.setData({'beforeCurrentLang': this.data.currentLang.lang})

     let history = wx.getStorageSync('history')||[]
     history.unshift({query: res.trans_result[0].src, result: res.trans_result})
     history.length = history.length < 10? history.length: 10
     wx.setStorageSync('history',history)
   })
 }},
 onTapClose: function(){
   this.setData({query: '', hideClearIcon: true})
 }
})
