(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44eb1f4c"],{2656:function(e,t,s){},"7e2f":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"theme",class:e.themeNumber},[s("div",{staticClass:"back",on:{click:e.back}},[s("i",{staticClass:"icon-back"})]),s("div",{staticClass:"choose",on:{click:e.changeThemeOK}},[s("p",{staticClass:"choosetext"},[e._v("确定")])]),s("div",{ref:"tophead",staticClass:"tophead",class:e.themeNumber}),s("div",{ref:"theme",staticClass:"content"},[s("div",{staticClass:"preview"},[s("div",{staticClass:"imgwrapper"},[s("img",{attrs:{src:e.imgurl}})])]),s("div",{staticClass:"themeitme"},[s("Row",{staticClass:"code-row-bg",attrs:{gutter:16,type:"flex",justify:"space-between"}},[s("Col",{attrs:{span:"8"}},[s("div",{ref:"theme1"},[s("Card",{staticStyle:{height:"50px",background:"#ff7675"}},[s("div",{staticStyle:{"text-align":"center"},on:{click:function(t){e.chooseItem1()}}},[s("p",{staticClass:"title"},[e._v("桃花粉")])])])],1)]),s("Col",{attrs:{span:"8"}},[s("div",{ref:"theme2"},[s("Card",{staticStyle:{height:"50px",background:"#87cbd8"}},[s("div",{staticStyle:{"text-align":"center"},on:{click:e.chooseItem2}},[s("p",{staticClass:"title"},[e._v("绿松青")])])])],1)]),s("Col",{attrs:{span:"8"}},[s("div",{ref:"theme3"},[s("Card",{staticStyle:{height:"50px",background:"#d6a2e8"}},[s("div",{staticStyle:{"text-align":"center"},on:{click:e.chooseItem3}},[s("p",{staticClass:"title"},[e._v("丁香紫")])])])],1)])],1)],1)])])])},c=[],h=s("c93e"),r=(s("cadf"),s("551c"),s("097d"),s("510f")),a=s("2f62"),n={mixins:[r["b"]],name:"theme",data:function(){return{imgurl:"https://cdn.xieyezi.com/theme1.png",themeId:0}},computed:Object(h["a"])({themeNumber:function(){return 0===this.theme?"theme1":1===this.theme?"theme2":"theme3"}},Object(a["c"])(["theme"])),methods:Object(h["a"])({handlePlayList:function(e){var t=e.length>0?"20px":"";this.$refs.theme.style.bottom=t},back:function(){this.$refs.theme1.style.border="0",this.$refs.theme2.style.border="0",this.$refs.theme3.style.border="0",this.imgurl="https://cdn.xieyezi.com/theme1.png",this.$router.back()},changeThemeOK:function(){var e=this;this.changeTheme(e.themeId),this.$router.back()},chooseItem1:function(){this.imgurl="https://cdn.xieyezi.com/theme1.png",this.$refs.theme1.style.border="solid 1px gray",this.$refs.theme2.style.border="0",this.$refs.theme3.style.border="0",this.themeId=0},chooseItem2:function(){this.imgurl="https://cdn.xieyezi.com/theme2.png",this.$refs.theme2.style.border="solid 1px gray",this.$refs.theme1.style.border="0",this.$refs.theme3.style.border="0",this.themeId=1},chooseItem3:function(){this.imgurl="https://cdn.xieyezi.com/theme3.png",this.$refs.theme3.style.border="solid 1px gray",this.$refs.theme2.style.border="0",this.$refs.theme1.style.border="0",this.themeId=2}},Object(a["b"])(["changeTheme"]))},o=n,m=(s("db84"),s("2877")),l=Object(m["a"])(o,i,c,!1,null,"642d77ad",null);l.options.__file="theme.vue";t["default"]=l.exports},db84:function(e,t,s){"use strict";var i=s("2656"),c=s.n(i);c.a}}]);