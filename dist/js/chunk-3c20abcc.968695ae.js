(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c20abcc"],{"01b9":function(t,e,s){"use strict";var a=s("c456"),i=s.n(a);i.a},"0cd3":function(t,e,s){"use strict";var a=s("8838"),i=s.n(a);i.a},"35d7":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide"}},[s("MusciList",{attrs:{title:t.title,bgImage:t.bgImage,songList:t.songList}})],1)},i=[],n=(s("ac6a"),s("7f7f"),s("c93e")),r=s("2f62"),o=s("d9d2"),l={name:"singerDetail",data:function(){return{id:"",singerInfo:{},songList:[]}},computed:Object(n["a"])({title:function(){return this.singerInfo.name},bgImage:function(){return this.singerInfo.img1v1Url}},Object(r["c"])(["singer"])),components:{MusciList:o["a"]},methods:{loadSingerSong:function(){var t=this,e=[];t.id?t.$axios.get("api/artists",{params:{id:t.id}}).then(function(s){200===s.data.code&&(t.singerInfo=s.data.artist,e=s.data.hotSongs,t.filterSinger(e),t.formatSongs(e))}).catch(function(t){console.log(t)}):this.$router.push("/singer")},filterSinger:function(t){t.forEach(function(t){var e=[],s="";t.ar.forEach(function(t){e.push(t.name)}),s=e.join("/"),t.ar=s})},formatSongs:function(t){var e=this;e.loadSongUrl(t)},loadSongUrl:function(t){for(var e=this,s="",a=[],i=0;i<t.length;i++)s+=t[i].id+",";s=s.substring(0,s.length-1),e.$axios.get("api/song/url",{params:{id:s}}).then(function(s){200===s.data.code&&(a=s.data.data,e.manageSongList(t,a))}).catch(function(t){console.log(t)})},manageSongList:function(t,e){for(var s=this,a=0;a<t.length;a++){var i={id:"",name:"",ar:"",al:"",imgURL:"",songURL:"",time:0};i.id=t[a].id,i.name=t[a].name,i.ar=t[a].ar,i.al=t[a].al.name,i.imgURL=t[a].al.picUrl,i.time=t[a].dt;for(var n=0;n<e.length;n++)if(t[a].id===e[n].id){i.songURL=e[n].url;break}s.songList.push(i)}}},created:function(){this.id=decodeURIComponent(this.$route.query.id),this.loadSingerSong()}},c=l,g=(s("60a9"),s("2877")),u=Object(g["a"])(c,a,i,!1,null,"3ef076ec",null);u.options.__file="singerDetail.vue";e["default"]=u.exports},"60a9":function(t,e,s){"use strict";var a=s("84dd"),i=s.n(a);i.a},"67df":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"song-list"},[s("ul",t._l(t.songs,function(e,a){return s("li",{staticClass:"item",on:{click:function(s){t.selectItem(e,a)}}},[s("div",{staticClass:"content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.rankflag,expression:"!rankflag"}],staticClass:"count"},[t._v(t._s(t.pad(a+1)))]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.rankflag,expression:"rankflag"}],staticClass:"count",class:t.RankRed(a+1)},[t._v(t._s(t.pad(a+1)))]),s("div",{staticClass:"info"},[s("h2",{staticClass:"name"},[t._v(t._s(e.name))]),s("p",{staticClass:"desc"},[t._v(t._s(e.ar)+" - "+t._s(e.al))])])])])}))])},i=[],n=(s("6b54"),{name:"songList",props:{songs:{type:Array,default:[]},rankflag:{type:Boolean,default:!1}},methods:{pad:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,s=t.toString().length;while(s<e)t="0"+t,s++;return t},selectItem:function(t,e){this.$emit("select",t,e)},RankRed:function(t){return t<4?"red":""}},computed:{}}),r=n,o=(s("01b9"),s("2877")),l=Object(o["a"])(r,a,i,!1,null,"ff60a984",null);l.options.__file="songList.vue";e["a"]=l.exports},"84dd":function(t,e,s){},8838:function(t,e,s){},c428:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loading"},[s("img",{attrs:{width:"40",height:"30",src:"https://cdn.xieyezi.com/loading.gif"}}),s("p",{staticClass:"desc",class:t.themeNumber},[t._v(t._s(t.title))])])},i=[],n=s("c93e"),r=(s("cadf"),s("551c"),s("097d"),s("2f62")),o={props:{title:{type:String,default:"玩命载入中..."}},computed:Object(n["a"])({themeNumber:function(){return 0===this.theme?"theme1":1===this.theme?"theme2":"theme3"}},Object(r["c"])(["theme"]))},l=o,c=(s("d89d"),s("2877")),g=Object(c["a"])(l,a,i,!1,null,"078c5288",null);g.options.__file="loading.vue";e["a"]=g.exports},c456:function(t,e,s){},d89d:function(t,e,s){"use strict";var a=s("eb40"),i=s.n(a);i.a},d9d2:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"music-list"},[s("div",{staticClass:"back",on:{click:t.back}},[s("i",{staticClass:"icon-back"})]),s("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),s("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[s("div",{staticClass:"play-wrapper"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.songList.length>0,expression:"songList.length>0"}],ref:"playBtn",staticClass:"play",class:t.themeNumber,on:{click:t.random}},[s("span",{staticClass:"themeplay"},[s("Icon",{attrs:{type:"ios-play-outline"}})],1),s("p",{staticClass:"text"},[t._v("随机播放全部")])])]),s("div",{ref:"filter",staticClass:"filter"})]),s("div",{ref:"layer",staticClass:"bg-layer"}),s("scroll",{ref:"list",staticClass:"list",attrs:{probeType:t.probeType,listenScroll:t.listenScroll,data:t.songList},on:{scroll:t.scroll}},[s("div",{staticClass:"song-list-warpper"},[s("song-list",{attrs:{rankflag:t.rankflag,songs:t.songList},on:{select:t.selectItem}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.songList.length,expression:"!songList.length"}],staticClass:"loading-container"},[s("loading")],1)])],1)},i=[],n=s("c93e"),r=s("aada"),o=s("67df"),l=s("c428"),c=s("2f62"),g=s("3e2c"),u=s("510f"),f=120,d=Object(g["b"])("transform"),h=Object(g["b"])("backdrop-filter"),m={mixins:[u["b"]],name:"musicList",components:{SongList:o["a"],Scroll:r["a"],Loading:l["a"]},props:{title:{type:String,default:""},bgImage:{type:String,default:""},songList:{type:Array,default:[],required:!0},rankflag:{type:Boolean,default:!1}},data:function(){return{scrollY:0,probeType:1}},computed:Object(n["a"])({bgStyle:function(){return"background-image:url(".concat(this.bgImage,")")},themeNumber:function(){return 0===this.theme?"theme1":1===this.theme?"theme2":"theme3"}},Object(c["c"])(["theme"])),methods:Object(n["a"])({handlePlayList:function(t){var e=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=e,this.$refs.list.refresh()},back:function(){this.$router.back()},scroll:function(t){this.scrollY=t.y},selectItem:function(t,e){var s=this;s.selectPlay({list:s.songList,index:e})},random:function(){this.randomPlay({list:this.songList})}},Object(c["b"])(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var e=Math.max(this.minTranslateY,t),s=0,a=1,i=0;this.$refs.layer.style["transform"]="translate3d(0,".concat(e,"px,0)"),this.$refs.layer.style["webkitTransform"]="translate3d(0,".concat(e,"px,0)");var n=Math.abs(t/this.imageHeight);t>0?(a=n+1,s=10):i=Math.min(20*n,20),this.$refs.filter.style[h]="blur(".concat(i,"px)"),t<this.minTranslateY?(s=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="".concat(f,"px")):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0),this.$refs.bgImage.style.zIndex=s,this.$refs.bgImage.style[d]="scale(".concat(a,")")}},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTranslateY=-this.imageHeight+f,this.$refs.list.$el.style.top="".concat(this.imageHeight,"px")},created:function(){this.probeType=3,this.listenScroll=!0}},p=m,b=(s("0cd3"),s("2877")),v=Object(b["a"])(p,a,i,!1,null,"01f006a4",null);v.options.__file="musicList.vue";e["a"]=v.exports},eb40:function(t,e,s){}}]);