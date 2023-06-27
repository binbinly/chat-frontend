"use strict";(self["webpackChunkvue_h5_template"]=self["webpackChunkvue_h5_template"]||[]).push([[664],{92664:function(t,e,i){i.r(e),i.d(e,{default:function(){return _}});var s=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{attrs:{title:t.nickname,fixed:"",placeholder:"","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight},scopedSlots:t._u([{key:"right",fn:function(){return[e("van-icon",{attrs:{name:"ellipsis",size:"24",color:"#0E151D"}})]},proxy:!0}])}),e("van-cell",{attrs:{center:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("van-image",{staticClass:"pr-1",attrs:{round:"",width:"45",height:"45",src:t._f("formatAvatar")(t.info.avatar)}})]},proxy:!0},{key:"title",fn:function(){return[e("div",{staticClass:"flex flex-column"},[e("span",{staticClass:"text-dark font-md font-weight-bold"},[t._v(t._s(t.nickname))]),e("span",{staticClass:"text-light-muted"},[t._v("账号："+t._s(t.info.username))])])]},proxy:!0}])}),t.is_friend?e("van-cell",{attrs:{"is-link":""},on:{click:t.openTag},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{staticClass:"flex align-center"},[e("span",{staticClass:"text-dark mr-1"},[t._v("标签")]),t.friend.tags.length>0?e("div",{staticClass:"text-inline",staticStyle:{width:"260px"}},t._l(t.friend.tags,(function(i,s){return e("span",{key:s,staticClass:"text-light-muted mr-1"},[t._v(t._s(i))])})),0):e("span",{staticClass:"text-light-muted"},[t._v("未设置")])])]},proxy:!0}],null,!1,2439900491)}):t._e(),e("van-divider"),e("van-cell",{attrs:{title:"朋友圈",center:"","is-link":""},on:{click:t.openMoments},scopedSlots:t._u([t.friend.moments?{key:"default",fn:function(){return[t.friend.moments[0].content&&!t.friend.moments[0].image.length?e("span",{staticClass:"text-secondary"},[t._v(t._s(t.friend.moments[0].content))]):t._e(),t._l(t.friend.moments[0].image,(function(t,i){return e("van-image",{key:i,staticStyle:{margin:"5px"},attrs:{src:t,width:"40",height:"40"}})}))]},proxy:!0}:null],null,!0)}),e("van-cell",{attrs:{title:"更多信息","is-link":""}}),e("van-divider"),t.is_friend?e("van-button",{attrs:{block:"",icon:t.friend.is_black?"":"chat-o",type:"default"},on:{click:t.doEvent}},[t._v(t._s(t.friend.is_black?"移出黑名单":"发信息")+" ")]):t._e(),t.user.id==t.user_id||t.is_friend?t._e():e("van-button",{attrs:{block:"",icon:"plus",type:"default"},on:{click:t.addFriend}},[t._v("添加好友")]),e("van-popup",{staticStyle:{height:"40%"},attrs:{position:"bottom",round:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},t._l(t.actions,(function(i,s){return e("van-cell",{key:s,attrs:{"is-link":"",title:i.title},on:{click:function(e){return t.popupEvent(i)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("span",{staticClass:"iconfont font-lg pr-1",attrs:{slot:"icon"},slot:"icon"},[t._v(t._s(i.icon))])]},proxy:!0}],null,!0)})})),1)],1)},n=[],r=(i(58479),i(39146)),a=(i(88694),i(41610)),o=i(71568),c=i(18128),u=i(20629),l=i(14266),h=i(57381),d={mixins:[o.Z],data(){return{show:!1,user_id:0,is_friend:!1,info:{id:0,username:"",nickname:"",avatar:"",sex:"",sign:"",area:""},friend:{nickname:"",look_me:1,look_him:1,is_star:0,is_black:0,tags:[]}}},activated(){if(this.user_id=parseInt(this.$route.query.id),!this.user_id)return this.backToast();this.getData()},mounted(){c.Z.$on("saveRemarkTag",(t=>{this.nickname=t.nickname,this.tagList=t.tagList}))},computed:{...(0,u.rn)({chat:t=>t.user.chat,user:t=>t.user.user}),nickname(){return this.friend.nickname||this.info.nickname||this.info.username},actions(){return[{icon:"",title:"设置备注和标签",type:"push",path:"/user_remark_tag",query:{user_id:this.user_id,nickname:this.friend.nickname,tags:this.friend.tags?this.friend.tags.join(","):""}},{icon:"",title:"把他推荐给朋友",type:"push",path:"/chat_list",query:{type:h.Z.TYPE_CARD,content:this.info.nickname||this.info.username,options:{id:this.user_id,avatar:this.info.avatar}}},{icon:"",title:this.friend.is_star?"取消星标好友":"设为星标朋友",type:"event",event:"setStar"},{icon:"",title:"设置朋友圈和动态权限",type:"push",path:"/user_moments_auth",query:{id:this.user_id,look_me:this.friend.look_me,look_him:this.friend.look_him}},{icon:"",title:this.friend.is_black?"移出黑名单":"加入黑名单",type:"event",event:"setBlack"},{icon:"",title:"投诉",type:"push",path:"/user_report",query:{user_id:this.user_id,type:1}},{icon:"",title:"删除",type:"event",event:"deleteUser"}]}},destroyed(){c.Z.$off("saveRemarkTag")},methods:{onClickRight(){this.show=!0},getData(){(0,l.oJ)(this.user_id).then((t=>{t.moments&&t.moments[0]["image"]&&(t.moments[0].image=t.moments[0].image.split(","),t.moments[0].image.length>=3&&(t.moments[0].image=t.moments[0].image.splice(0,3))),this.is_friend=t.is_friend,this.info=t.user,t.is_friend&&(this.friend=t.friend)}))},addFriend(){return this.$router.push({path:"/add_friend",query:{id:this.user_id,act:"apply",nickname:this.nickname}})},popupEvent(t){if(this.show=!1,t.type)switch(t.type){case"push":this.$router.push({path:t.path,query:t.query});break;case"event":this[t.event](t);break}},deleteUser(){a.Z.confirm({message:"是否要删除该好友？"}).then((()=>{(0,l.lW)(this.user_id).then((()=>{r.Z.success("删除好友成功"),this.$router.replace({path:"/home"})}))})).catch((()=>{}))},setStar(t){let e=0==this.friend.is_star?1:0;(0,l.JH)({user_id:this.user_id,star:e}).then((i=>{this.friend.is_star=e,t.title=this.friend.is_star?"取消星标好友":"设为星标朋友",r.Z.success("操作成功")}))},setBlack(){let t=this.friend.is_black?"移出黑名单":"加入黑名单";a.Z.confirm({message:"是否要"+t+"？"}).then((()=>{const e=0==this.friend.is_black?1:0;(0,l.Wk)({user_id:this.user_id,black:e}).then((i=>{this.friend.is_black=e,r.Z.success(t+"成功")}))})).catch((()=>{}))},doEvent(){if(this.friend.is_black)return this.setBlack();this.$router.push({path:"/chat",query:{id:this.user_id,type:h.Z.CHAT_TYPE_USER}}),this.chat.readChatItem(this.user_id,"user")},openMoments(){this.$router.push({path:"/moments",query:{id:this.user_id}})},openTag(){this.$router.push({path:"/user_remark_tag",query:{user_id:this.user_id,nickname:this.friend.nickname,tags:this.friend.tags?this.friend.tags.join(","):""}})}}},m=d,f=i(1001),p=(0,f.Z)(m,s,n,!1,null,null,null),_=p.exports},71568:function(t,e,i){i(58479);var s=i(39146),n=i(76927);e["Z"]={created(){let t=(0,n.cF)("token");if(!t)return this.$router.push({path:"/login"})},methods:{onClickLeft(){this.$router.back()},push(t,e){this.$router.push({path:t,params:e})},draw(){(0,s.Z)("待开发")},backToast(t="非法参数"){this.toast(t),setTimeout((()=>{this.$router.back()}),500)},toast(t="非法参数"){(0,s.Z)({title:t,position:"bottom"})}}}}}]);