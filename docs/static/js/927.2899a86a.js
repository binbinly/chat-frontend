"use strict";(self["webpackChunkvue_h5_template"]=self["webpackChunkvue_h5_template"]||[]).push([[927],{16927:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=function(){var t=this,n=t._self._c;return n("div",[n("van-nav-bar",{attrs:{title:"群聊列表",fixed:"",placeholder:"","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(n){t.refreshing=n},expression:"refreshing"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},t._l(t.list,(function(e,r){return n("van-cell",{key:r,attrs:{title:e.name,center:"","is-link":""},on:{click:function(n){return t.handle(e)}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("van-image",{staticClass:"pr-1",attrs:{round:"",width:"35",height:"35",src:t._f("formatAvatar")(e.avatar)}})]},proxy:!0}],null,!0)})})),1)],1)],1)},i=[],o=e(71568),u=e(79591),s={mixins:[o.Z],data(){return{loading:!1,finished:!1,refreshing:!1,page:1,list:[]}},methods:{onLoad(){(0,u.X8)(this.page).then((t=>{this.refreshing&&(this.list=[],this.refreshing=!1),this.list=[...this.list,...t],this.loading=!1,t.length<10&&(this.finished=!0),this.page++}))},onRefresh(){this.page=1,this.finished=!1,this.loading=!0,this.onLoad()},handle(t){this.$router.push({path:"/chat",query:{id:t.id,type:2}})}}},a=s,f=e(1001),h=(0,f.Z)(a,r,i,!1,null,null,null),l=h.exports},79591:function(t,n,e){e.d(n,{Aj:function(){return c},F8:function(){return a},Ge:function(){return s},Q_:function(){return o},X8:function(){return u},_u:function(){return f},bq:function(){return i},gF:function(){return h},od:function(){return l}});var r=e(7705);function i(t){return r.Z.post(r.Z.Group.Create,t)}function o(t){return r.Z.post(r.Z.Group.Invite,t)}function u(t){return r.Z.get(r.Z.Group.List,{p:t})}function s(t){return r.Z.get(r.Z.Group.Info,{id:t})}function a(t){return r.Z.post(r.Z.Group.Edit,t)}function f(t){return r.Z.post(r.Z.Group.Nickname,t)}function h(t){return r.Z.get(r.Z.Group.Quit,t)}function l(t){return r.Z.post(r.Z.Group.KickOff,t)}function c(t){return r.Z.get(r.Z.Group.User,{id:t})}},71568:function(t,n,e){e(58479);var r=e(39146),i=e(76927);n["Z"]={created(){let t=(0,i.cF)("token");if(!t)return this.$router.push({path:"/login"})},methods:{onClickLeft(){this.$router.back()},push(t,n){this.$router.push({path:t,params:n})},draw(){(0,r.Z)("待开发")},backToast(t="非法参数"){this.toast(t),setTimeout((()=>{this.$router.back()}),500)},toast(t="非法参数"){(0,r.Z)({title:t,position:"bottom"})}}}}}]);