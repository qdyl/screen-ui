(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe39c2a6"],{"30ff":function(e,t,n){var s={"./NumberA1":"cfdb","./NumberA1.vue":"cfdb","./NumberB1":"828b","./NumberB1.vue":"828b"};function c(e){var t=i(e);return n(t)}function i(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}c.keys=function(){return Object.keys(s)},c.resolve=i,e.exports=c,c.id="30ff"},5049:function(e,t,n){},"7cd8":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{color:"#fff"}},[e._v(" echart图 ")])},c=[],i={data(){return{}}},o=i,a=n("2877"),r=Object(a["a"])(o,s,c,!1,null,"94ae26d6",null);t["default"]=r.exports},"828b":function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div class="" style="color:#fff">\n    echart图\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {};\n    }\n  };\n<\/script>\n\n<style lang="scss" scoped></style>\n'},a254:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{color:"#fff"}},[e._v(" echart图 ")])},c=[],i={data(){return{}}},o=i,a=n("2877"),r=Object(a["a"])(o,s,c,!1,null,"0faa0756",null);t["default"]=r.exports},a5b2:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page"},[e._m(0),t("section",{staticClass:"units-box"},[t("ul",{staticClass:"unit-list"},e._l(e.dynamicComponents_A,(function(n,s){return t("li",{key:s+"A",staticClass:"unit-item",attrs:{id:"itemCls"+s}},[t("div",{staticClass:"theUnit"},[t(e.dynamicComponents_A[s],{tag:"component"})],1),t("div",{staticClass:"btnBlock"},[t("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.vueFiles["NumberA"+(s+1)],expression:"vueFiles[`NumberA${i + 1}`]",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],staticClass:"iconfont icon-fuzhi",attrs:{title:"复制"}}),t("span",{staticClass:"iconfont icon-yulan",attrs:{title:"预览"},on:{click:function(t){return e.onPreview("NumberA"+(s+1))}}})])])})),0)]),e.isShowFullCode?t("FullScreenCodeNew",{attrs:{isshow:e.isShowFullCode,codecontent:e.codecontent},on:{"update:isshow":function(t){e.isShowFullCode=t},"update:codecontent":function(t){e.codecontent=t}}}):e._e(),e.isShowFullPreview?t("FullScreenPreview",{attrs:{isshow:e.isShowFullPreview},on:{"update:isshow":function(t){e.isShowFullPreview=t}}},[t(e.previewEchart,{tag:"component"}),t("template",{slot:"btn"},[t("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.vueFiles[""+e.previewEchart],expression:"vueFiles[`${previewEchart}`]",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],staticClass:"btnicon"},[e._v("复制")])])],2):e._e()],1)},c=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("h3",{staticClass:"title"},[e._v("A数字")])])}],i=(n("14d9"),n("2b0e")),o=n("00e9");let a={},r=[];function l(){const e=n("cb8a");e.keys().forEach(t=>{const s=e(t),c=t.replace(/^\.\//,"").replace(/\.vue$/,"");i["default"].component(c,s.default||s);const o=t.replace(/\.\//,""),l=n("30ff")("./"+o),u=o.replace(".vue","");a[u]=l.default,r.push(u)})}l();var u={data(){return{isShowFullCode:!1,isShowFullPreview:!1,previewEchart:"",codecontent:"hello world",vueFiles:{},dynamicComponents_A:[],dynamicComponents_B:[],dynamicComponents_C:[],dynamicComponents_D:[],dynamicComponents:[]}},components:{},mounted(){this.vueFiles=a,this.dynamicComponents_A=r.filter(e=>e.includes("A")),this.dynamicComponents_B=r.filter(e=>e.includes("B")),this.dynamicComponents_C=r.filter(e=>e.includes("C")),this.dynamicComponents_D=r.filter(e=>e.includes("D"))},methods:{onHandleItem(e){this.isShowFullCode=!0,this.codecontent=a[e]},clipboardSuccess(){Object(o["a"])()},onPreview(e){this.isShowFullPreview=!0,this.previewEchart=e}}},d=u,p=(n("ab32"),n("2877")),f=Object(p["a"])(d,s,c,!1,null,"07018e95",null);t["default"]=f.exports},ab32:function(e,t,n){"use strict";n("5049")},cb8a:function(e,t,n){var s={"./NumberA1.vue":"7cd8","./NumberB1.vue":"a254"};function c(e){var t=i(e);return n(t)}function i(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}c.keys=function(){return Object.keys(s)},c.resolve=i,e.exports=c,c.id="cb8a"},cfdb:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div class="" style="color:#fff">\n    echart图\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {};\n    }\n  };\n<\/script>\n\n<style lang="scss" scoped></style>\n'}}]);