(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{48:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"rem方案完美解决自适应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rem方案完美解决自适应","aria-hidden":"true"}},[t._v("#")]),t._v(" rem方案完美解决自适应")]),e("p",[t._v("随着移动互联网的兴起，Web app的开发也越来越重要，与此同时页面布局也成了一个令人头痛的问题。rem的出现貌似可以完美解决移动端适配的问题。")]),e("h2",{attrs:{id:"什么是rem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是rem","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是rem")]),e("p",[t._v("说到rem自然就会想到em，我们知道em是相对于父元素的字体大小的单位，那么rem则是相对于根元素也就是"),e("code",[t._v("<html>")]),t._v("元素的字体大小的单位。")]),e("h2",{attrs:{id:"如何用rem解决移动端适配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何用rem解决移动端适配","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何用rem解决移动端适配")]),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-bc2b886890d0962a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),e("p",[t._v("通过这张图我们就可以观察到，div的宽度和高度是根据根元素（"),e("code",[t._v("<html>")]),t._v("）来决定的，根元素的字体大小为100px，然后给div的宽度和高度设置为2rem、1rem，最后生成的div的宽度为200px、高度为100px。\n也就是说我们可以通过改变根元素的字体大小，进而对页面进行等比例缩放,从而实现自适应。\n那么如何根据设备的不同来改变根元素的字体大小呢？\n我们在"),e("code",[t._v("<head>")]),t._v("标签里面引入这样一段js代码：")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("    "),e("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" width "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" css "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token template-string"}},[e("span",{attrs:{class:"token string"}},[t._v("`\n        html{\n        font-size: ")]),e("span",{attrs:{class:"token interpolation"}},[e("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("width"),e("span",{attrs:{class:"token operator"}},[t._v("/")]),e("span",{attrs:{class:"token number"}},[t._v("10")]),e("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{attrs:{class:"token string"}},[t._v("px;\n        }\n        `")])]),t._v("\n    document"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("write")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token template-string"}},[e("span",{attrs:{class:"token string"}},[t._v("`<style>")]),e("span",{attrs:{class:"token interpolation"}},[e("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("css"),e("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{attrs:{class:"token string"}},[t._v("</style>`")])]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),e("p",[t._v("很简单，只做了一件事：就是把根元素的字体大小改成当前设备的宽度，然后我们在开发的时候全部根据设计稿的宽度来设置每一个元素的大小。\n如果设计稿的宽度是按照iphone5的宽度来设计的，那么开发的时候也要根据iphone的宽度也就是320px来设置。")]),e("blockquote",[e("p",[t._v("不过最后不要忘了在body元素中重新设置正常的font-size，不然整个页面会垮掉！！")])]),e("p",[t._v("例子：如果这是我们要做的设计稿")]),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-591bb00dccbcc0f0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),e("p",[t._v("一个歌单的封面大小为103px，那么我们在写css的时候就要写（103/320）px，这时候你肯定会觉得很麻烦，难道我每次都要这样计算吗？\n不用，每次只要写出实际的px大小就好，px和rem的转换可以借助网站工具：\n"),e("a",{attrs:{href:"http://520ued.com/tools/rem",target:"_blank",rel:"noopener noreferrer"}},[t._v("px => rem")]),e("a",{attrs:{href:"http://alurk.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("功能更加强大的rem转换")])]),e("h2",{attrs:{id:"参考文献"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文献","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文献")]),e("ul",[e("li",[e("a",{attrs:{href:"http://caibaojian.com/web-app-rem.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("rem是如何实现自适应布局的？")])]),e("li",[e("a",{attrs:{href:"http://caibaojian.com/rem-responsive-2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("rem自适应布局的回顾总结")])])])])}],!1,null,null,null);a.default=n.exports}}]);