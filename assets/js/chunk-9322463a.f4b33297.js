(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9322463a"],{"10c8":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page"},[e._m(0),t("section",{staticClass:"units-box"},[t("ul",{staticClass:"unit-list"},e._l(e.dynamicComponents_A,(function(n,s){return t("li",{key:s+"A",staticClass:"unit-item",attrs:{id:"itemCls"+s}},[t("div",{staticClass:"theUnit"},[t(e.dynamicComponents_A[s],{tag:"component"})],1),t("div",{staticClass:"btnBlock"},[t("span",{staticClass:"iconfont icon-bianji",attrs:{title:"编辑"},on:{click:function(t){return e.onHandleItem("LineA"+(s+1))}}}),t("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.vueFiles["LineA"+(s+1)],expression:"vueFiles[`LineA${i + 1}`]",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],staticClass:"iconfont icon-fuzhi",attrs:{title:"复制"}}),t("span",{staticClass:"iconfont icon-yulan",attrs:{title:"预览"},on:{click:function(t){return e.onPreview("LineA"+(s+1))}}})])])})),0)]),e.isShowFullCode?t("FullScreenCodeNew",{attrs:{isshow:e.isShowFullCode,codecontent:e.codecontent},on:{"update:isshow":function(t){e.isShowFullCode=t},"update:codecontent":function(t){e.codecontent=t}}}):e._e(),e.isShowFullPreview?t("FullScreenPreview",{attrs:{isshow:e.isShowFullPreview},on:{"update:isshow":function(t){e.isShowFullPreview=t}}},[t(e.previewEchart,{tag:"component"}),t("template",{slot:"btn"},[t("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.vueFiles[""+e.previewEchart],expression:"vueFiles[`${previewEchart}`]",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],staticClass:"btnicon"},[e._v("复制")])])],2):e._e()],1)},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("h3",{staticClass:"title"},[e._v("Colors · 色彩")])])}],o=(n("14d9"),n("2b0e")),c=n("00e9");let a={},r=[];function l(){const e=n("92616");e.keys().forEach(t=>{const s=e(t),i=t.replace(/^\.\//,"").replace(/\.vue$/,"");o["default"].component(i,s.default||s);const c=t.replace(/\.\//,""),l=n("36b6")("./"+c),u=c.replace(".vue","");a[u]=l.default,r.push(u)})}l();var u={data(){return{isShowFullCode:!1,isShowFullPreview:!1,previewEchart:"",codecontent:"hello world",vueFiles:{},dynamicComponents_A:[],dynamicComponents_B:[],dynamicComponents_C:[],dynamicComponents_D:[],dynamicComponents:[]}},components:{},mounted(){this.vueFiles=a,this.dynamicComponents_A=r.filter(e=>e.includes("A")),this.dynamicComponents_B=r.filter(e=>e.includes("B")),this.dynamicComponents_C=r.filter(e=>e.includes("C")),this.dynamicComponents_C=r.filter(e=>e.includes("C"))},methods:{onHandleItem(e){this.isShowFullCode=!0,this.codecontent=a[e]},clipboardSuccess(){Object(c["a"])()},onPreview(e){this.isShowFullPreview=!0,this.previewEchart=e}}},d=u,p=(n("6084"),n("2877")),f=Object(p["a"])(d,s,i,!1,null,"e6babb26",null);t["default"]=f.exports},"255a":function(e,t,n){"use strict";n.r(t),t["default"]='baseUnit\n<template>\n  <div class="unit" style="color:#fff">暂无</div>\n</template>\n\n<script>\n  export default {\n    props: {},\n    data() {\n      return {};\n    }\n  };\n<\/script>\n\n<style lang="scss" scoped></style>\n'},"36b6":function(e,t,n){var s={"./ColorA1":"a51d","./ColorA1.vue":"a51d","./ColorA2":"255a","./ColorA2.vue":"255a"};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=o,e.exports=i,i.id="36b6"},"373e":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"unit",staticStyle:{color:"#fff"}},[e._v("暂无")])},i=[],o={props:{},data(){return{}}},c=o,a=n("2877"),r=Object(a["a"])(c,s,i,!1,null,"a1809b0c",null);t["default"]=r.exports},"3d54":function(e,t,n){},6084:function(e,t,n){"use strict";n("3d54")},92616:function(e,t,n){var s={"./ColorA1.vue":"373e","./ColorA2.vue":"9538"};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=o,e.exports=i,i.id="92616"},9538:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"unit",staticStyle:{color:"#fff"}},[e._v("暂无")])},i=[],o={props:{},data(){return{}}},c=o,a=n("2877"),r=Object(a["a"])(c,s,i,!1,null,"0a93310a",null);t["default"]=r.exports},a51d:function(e,t,n){"use strict";n.r(t),t["default"]='baseUnit\n<template>\n  <div class="unit" style="color:#fff">暂无</div>\n</template>\n\n<script>\n  export default {\n    props: {},\n    data() {\n      return {};\n    }\n  };\n<\/script>\n\n<style lang="scss" scoped></style>\n'}}]);