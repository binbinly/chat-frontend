"use strict";(self["webpackChunkvue_h5_template"]=self["webpackChunkvue_h5_template"]||[]).push([[942],{55029:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",[t.showTime?e("div",{staticClass:"flex align-center justify-center pb-1 pt-1"},[e("span",{staticClass:"text-light-muted font-small"},[t._v(t._s(t.showTime))])]):t._e(),t.item.isremove?e("div",{ref:"isremove",staticClass:"flex align-center justify-center pb-1 pt-1"},[e("span",{staticClass:"text-light-muted font-small"},[t._v(t._s(t.isself?"你":"对方")+"撤回了一条信息")])]):t._e(),t.isSystem?e("div",{ref:"isremove",staticClass:"flex align-center justify-center pb-1 pt-1"},[e("span",{staticClass:"text-light-muted font-small"},[t._v(t._s(t.item.content))])]):t._e(),t.isSystem||t.item.isremove?t._e():e("div",{directives:[{name:"longpress",rawName:"v-longpress",value:t.long,expression:"long"}],staticClass:"flex align-start position-relative mb-2",class:t.isself?"justify-end":"justify-start"},[t.isself?t._e():[e("van-image",{staticClass:"pl-1",attrs:{round:"",width:"35",height:"35",src:t._f("formatAvatar")(t.item.from.avatar)},on:{click:t.openUser}}),t.hasLabelClass?e("span",{staticClass:"iconfont font-smaller text-white position-absolute chat-left-icon",style:t.show_name?"top:22px;":"top:10px;"},[t._v("")]):t._e()],t.isself&&t.item.sendStatus&&"success"!==t.item.sendStatus?e("div",{staticClass:"flex flex-column p-1"},[e("span",{class:"fail"===t.item.sendStatus?"text-danger":"text-muted"},[t._v(t._s("fail"===t.item.sendStatus?"X":""))])]):t._e(),e("div",{staticClass:"flex flex-column"},[t.show_name?e("div",{staticClass:"flex",class:t.nicknameClass,staticStyle:{"max-width":"180px",margin:"0 15px"},style:t.labelStyle},[e("span",{staticClass:"text-muted"},[t._v(t._s(t.item.from.name))])]):t._e(),e("div",{staticClass:"rounded",class:t.labelClass,staticStyle:{"max-width":"200px"},style:t.labelStyle},[t.isText?e("span",{staticClass:"font-sm"},[t._v(t._s(t.item.content))]):t.isEmoticon||t.isImage?e("div",{staticClass:"flex flex-wrap"},[e("van-image",{staticStyle:{"max-width":"200px","max-height":"240px"},attrs:{fit:"cover",imageClass:"rounded bg-secondary",src:t.item.content},on:{click:function(e){return t.prediv(t.item.content)}}})],1):t.isAudio?e("div",{staticClass:"flex align-center",on:{click:t.openAudio}},[t.isself?e("van-image",{staticClass:"mx-1",attrs:{width:"25",height:"25",round:"",src:t.audioPlaying?s(22348):s(69722)}}):t._e(),e("span",[t._v(t._s(t.item.options.time+'"'))]),t.isself?t._e():e("van-image",{staticClass:"mx-1",attrs:{width:"25",height:"25",round:"",src:t.audioPlaying?s(22348):s(69722)}})],1):t.isVideo?e("div",{staticClass:"position-relative rounded",on:{click:t.openVideo}},[e("video",{staticStyle:{"max-width":"200px","max-height":"300px"},attrs:{src:t.item.content}}),e("span",{staticClass:"iconfont text-white position-absolute",staticStyle:{"font-size":"35px",width:"35px",height:"35px"},style:t.posterIconStyle},[t._v("")])]):t.isCard?e("div",{staticClass:"bg-white",staticStyle:{width:"180px"},attrs:{"hover-class":"bg-light"},on:{click:t.openUserBase}},[e("div",{staticClass:"p-1 flex align-center border-bottom border-light-secondary"},[e("van-image",{staticClass:"pr-1",attrs:{round:"",width:"35",height:"35",src:t._f("formatAvatar")(t.item.options.avatar)}}),e("span",{staticClass:"font ml-1"},[t._v(t._s(t.item.content))])],1),t._m(0)]):t._e()])]),t.isself?[t.hasLabelClass?e("span",{staticClass:"iconfont text-chat-item font-smaller position-absolute chat-right-icon",style:t.show_name?"top:20px;":"top:10px;"},[t._v("")]):t._e(),e("van-image",{staticClass:"pr-1",attrs:{round:"",width:"35",height:"35",src:t._f("formatAvatar")(t.user.avatar)},on:{click:t.openMy}})]:t._e()],2)])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex align-center p-1"},[e("span",{staticClass:"font-small text-muted"},[t._v("个人名片")])])}],n=s(557),o=s(20629),r=s(57381),l={props:{item:Object,index:Number,pretime:[Number,String],show_name:{type:Boolean,default:!1}},data(){return{test_url:"",innerAudioContext:null,audioPlaying:!1,poster:{w:100,h:100}}},computed:{...(0,o.rn)({user:t=>t.user.user}),isSystem(){return this.item.type===r.Z.TYPE_SYSTEM},isText(){return this.item.type===r.Z.TYPE_TEXT},isImage(){return this.item.type===r.Z.TYPE_IMAGE},isVideo(){return this.item.type===r.Z.TYPE_VIDEO},isAudio(){return this.item.type===r.Z.TYPE_AUDIO},isEmoticon(){return this.item.type===r.Z.TYPE_EMOTICON},isCard(){return this.item.type===r.Z.TYPE_CARD},isself(){return!this.isSystem&&(!!this.item.self&&this.item.self)},showTime(){return n.Z.getChatTime(this.item.t,this.pretime)},hasLabelClass(){return this.isText||this.isAudio},labelClass(){const t=this.hasLabelClass?"bg-chat-item mr-1 p-1":"mr-1",e=this.hasLabelClass?"bg-white ml-1 p-1":"ml-1";return this.isself?t:e},nicknameClass(){let t=this.isself?"justify-end":"";return t},labelStyle(){if("audio"===this.item.type){let t=this.item.options.time||0,e=parseInt(t)/.3;return e=e<75?75:e,`width:${e}px;`}},posterIconStyle(){let t=this.poster.w/2-17.5,e=this.poster.h/2-22.5;return`left:${t}px;top:${e}px;`}},mounted(){if(this.isAudio&&this.audioOn(this.onPlayAudio),this.isVideo){let t=document.querySelector("video");t.addEventListener("canplay",(()=>{this.loadPoster(t.videoWidth,t.videoHeight)}))}},destroyed(){this.isAudio&&this.audioOff(this.onPlayAudio),this.innerAudioContext&&(this.innerAudioContext.destroy(),this.innerAudioContext=null)},methods:{...(0,o.nv)(["audioOn","audioEmit","audioOff"]),openUser(){const t=this.item.chat_type===r.Z.CHAT_TYPE_USER?this.item.from.id:this.item.to_id;this.$router.push({path:"/user_base",query:{id:t}})},openMy(){const t=this.user.id;this.$router.push({path:"/user_base",query:{id:t}})},openUserBase(){this.$router.push({path:"/user_base",query:{id:this.item.options.id}})},loadPoster(t,e){const s=t/e;if(s>1){if(t>200)return this.poster.w=200,void(this.poster.h=parseInt(200/t*e))}else if(e>300)return this.poster.h=300,void(this.poster.h=parseInt(300/e*t));this.poster.w=t,this.poster.h=e},onPlayAudio(t){this.innerAudioContext&&this.index!==t&&this.innerAudioContext.pause()},openVideo(){this.$emit("openVideo",this.item.content)},openAudio(){this.audioEmit(this.index),this.innerAudioContext?(this.innerAudioContext.stop(),this.innerAudioContext.play()):(this.innerAudioContext=uni.createInnerAudioContext(),this.innerAudioContext.src=this.item.content,this.innerAudioContext.play(),this.innerAudioContext.onPlay((()=>{this.audioPlaying=!0})),this.innerAudioContext.onPause((()=>{this.audioPlaying=!1})),this.innerAudioContext.onStop((()=>{this.audioPlaying=!1})),this.innerAudioContext.onError((()=>{this.audioPlaying=!1})))},prediv(t){this.$emit("prediv",t)},long(t){const e=t.changedTouches[0].pageX,s=t.changedTouches[0].pageY;this.$emit("long",{x:e,y:s,index:this.index})}}},h=l,u=s(1001),d=(0,u.Z)(h,i,a,!1,null,"c4adb1fa",null),c=d.exports},24942:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{attrs:{"left-text":"聊天记录",fixed:"",placeholder:"","left-arrow":""},on:{"click-left":t.onClickLeft}}),e("van-search",{attrs:{placeholder:"搜索"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),e("div",{staticClass:"px-1 py-1 bg-white"},[e("span",{staticClass:"text-muted"},[t._v(t._s(t.keyword?"搜索结果":"历史记录"))])]),t._l(t.allList,(function(s,i){return e("div",{key:i,attrs:{id:"chatItem_"+i}},[e("chat-item",{ref:"chatItem",refInFor:!0,attrs:{item:s,index:i,pretime:i>0?t.list[i-1].t:0,show_name:!0}})],1)})),""!==t.keyword&&0===t.searchList.length?e("div",{staticClass:"flex align-center justify-center",staticStyle:{height:"50px"}},[e("span",{staticClass:"text-light-muted"},[t._v("暂无搜索结果")])]):t._e()],2)},a=[],n=s(55029),o=s(71568),r=s(20629),l={mixins:[o.Z],components:{ChatItem:n.Z},data(){return{keyword:"",top:0,list:[]}},activated(){this.list=this.chat.getChatDetail()},computed:{...(0,r.rn)({user:t=>t.user.user,chat:t=>t.user.chat}),allList(){return""===this.keyword?this.list:this.searchList},searchList(){return""===this.keyword?[]:this.list.filter((t=>-1!==t.content.indexOf(this.keyword)))}},methods:{}},h=l,u=s(1001),d=(0,u.Z)(h,i,a,!1,null,null,null),c=d.exports},71568:function(t,e,s){s(58479);var i=s(39146),a=s(76927);e["Z"]={created(){let t=(0,a.cF)("token");if(!t)return this.$router.push({path:"/login"})},methods:{onClickLeft(){this.$router.back()},push(t,e){this.$router.push({path:t,params:e})},draw(){(0,i.Z)("待开发")},backToast(t="非法参数"){this.toast(t),setTimeout((()=>{this.$router.back()}),500)},toast(t="非法参数"){(0,i.Z)({title:t,position:"bottom"})}}}},22348:function(t){t.exports="data:image/gif;base64,R0lGODlhZABkAPAAAERERAAAACH5BAEyAAEAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAZABkAAAC04yPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/gkICoO/0nBYJB2FydGS2Aw9AVHpswqaYj/abafr3YDDmTH5Yj5X0uoJux15wx/yeaNuX+DziT3/4PcXEPhHyGeYh2inOMcI59gGqSZ5RklmGYbppbnFieVZBRol2kSaZFqE+qPqw9rjygO7I6tDm2OLg3uja8Nb40sDPCMsQxxjDIP8ouzC3OLMAr0irUKdYo2CDXQlCKHdDR4uPk5ebn6Onq6+zt7u/g7vXgAAIfkEATIAAgAsAAAAAGQAZACBQ0NDREREAAAAAAAAAv6Uj6nL7Q+jnLTai7PevPsPhuJIluaJpurKtu4Lx/JM1/aN5/rO9/4ZCAqDv9JwWCQdhcnRktgMPQNR6bMKmmI/2m2n692Aw5kx+WI+A66M9OEJ8E2pC7dgGu/N22wFXm4XCAfYlyC4lMezV1eI8Kd3eMSHSLg0KclICdn4xmnwqBiJlHmUuLPo53k3uGlJOpqqybOmKipkqoNqWMsayusaW1qJGQy7K3tqC1V8O2zs+CvcSnxMDY2cq0zHHISbo3tt3Yn9rX055I0DPi7+2Zsc/cyO7sz0as8dkH6z7g5cTW+aPH/tVpFTZ+5et3rLAOJzuLAHrX/hBhqU5ovivHyHFZsJ5LixYceIGQtq22ej30WLoOBpJMjyXbZ4IGF6LBnz5cqbLk3SJNkzp8+D/BLmQ1lD5UkfEy3uFDkSKRY7ZyRQrQrhKlYHWreeq+n1QdewELeRjTD2rE2oar+ybZsPblZVcuvavYs3r969fPv6/Qs4sODBhAsbBlEAACH5BAEyAAIALAAAAABkAGQAgUNDQ0RERAAAAAAAAAL+lI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+GQgKg7/ScFgkHYXJ0ZLYDD0DUemzCppiP9ptp+vdgMOZMfliPgOujPThCfBNqQu3YBrvzdtsBV5uFwgH2JcguJTHs1dXiPCnd3jEh0i4NCnJSAnZ+MZp8KgYiZR5lLiz6Od5N7hpSTqaqsmzpioqZJoCamgLFVt6iamh68hL5zuE26lKMazsesz0egsMW8YKHY1tvCvL/WzdTVw7Hu4cDP4rne1dLZ6uvY3R/FlMHZRMvzwxv0p+7o7MXi90AdUNBLgO4T2B8dBcY9fOXEKJCw02tMAPFcSugxQD4Ov3Td5DhRzz/ev4UaPIciZPtpz4siI8DhnrGUxph9nIjhdBRozpkSHNnUB7FsOpbwStkB0FfrShsunNSi59wrQq85RNbU9rRAXqlOpPrEaJ3vhKNmyrqkfFXm27dizcUP7kmoW6dWPQHkvHprXXFUvOMxEGE35g+HCDxIoNNsaY9LE2yTqZUl4c+TJYzRAYa/bMObTo0aRLmz6NOrXq1axbu34NO7bsFgUAADs="}}]);