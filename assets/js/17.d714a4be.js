(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{68:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"如何在你的项目中引入emoji😀"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何在你的项目中引入emoji😀","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何在你的项目中引入emoji😀")]),e("p",[t._v("最近在做我们学校的"),e("a",{attrs:{href:"https://hubingliang.github.io/Confession-wall/dist/",target:"_blank",rel:"noopener noreferrer"}},[t._v("表白墙网站")]),t._v("，在做到评论功能的时候自然而然就想到了emoji-😏。\n于是就去搜了一些这方面的资料，发现了比较好的三个emoji库：")]),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/emojione/emojione",target:"_blank",rel:"noopener noreferrer"}},[t._v("emojione")]),t._v("（第一个开源且完整的emoji网站，编码方面100%免费，且与项目有非常好的整合性）")]),e("li",[e("a",{attrs:{href:"https://github.com/twitter/twemoji",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twemoji")]),t._v(" (完全免费，简单小巧，API相比emojione较少。)")]),e("li",[e("a",{attrs:{href:"http://ellekasai.github.io/twemoji-awesome/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twemoji Awesome")]),t._v(" (Twemoji社区的项目，纯css显示emoji)")])]),e("p",[t._v("综合考虑最后选择了emojione来实现，因为API比较多而且文档十分友好。")]),e("h2",{attrs:{id:"引入emojione"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引入emojione","aria-hidden":"true"}},[t._v("#")]),t._v(" 引入emojione")]),e("ul",[e("li",[t._v("通过外链")])]),e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/emojione@3.1.2/lib/js/emojione.min.js"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{attrs:{class:"token script language-javascript"}}),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("rel")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("href")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/emojione@3.1.2/extras/css/emojione.min.css"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),e("ul",[e("li",[t._v("NPM")])]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> npm install emojione\n")])]),e("h2",{attrs:{id:"生成emoji选择界面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成emoji选择界面","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成emoji选择界面")]),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-ef3ae78893a558c3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),e("p",[t._v("首先我们需要这些emoji的图片，随即我就去"),e("a",{attrs:{href:"https://www.emojione.com/developers/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("emojione")]),t._v("官网下载了32×32px的PNG图片，可是之后我发现图片太多不可能让我一个一个引入吧！")]),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-21d1a6f7e13a2288.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),e("p",[t._v("转变思路，去看emojione的"),e("a",{attrs:{href:"https://github.com/emojione/emojione",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档")]),t._v("，发现了一个提供API演示功能的"),e("a",{attrs:{href:"https://demos.emojione.com/latest/index.html#extras",target:"_blank",rel:"noopener noreferrer"}},[t._v("emojione实验室")]),t._v("。")]),e("p",[t._v("实验室中有一个API可以把HTML中的unicode 转换为图片："),e("a",{attrs:{href:"https://demos.emojione.com/latest/jsunicodetoimage.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(".unicodeToImage(str)")])]),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-baca09028eec4ae2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),e("p",[t._v("于是我用JS Bin 做了一个小"),e("a",{attrs:{href:"http://js.jirengu.com/vupel/2/edit",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo")]),t._v("测试了一下,发现没有什么问题。")]),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-2650383b4132fa9d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),e("p",[t._v("OK，那么我们就可以通过这个API批量生成emoji的图片了，可是emoji的Unicode码去哪找呢？\n官方提供了一个Unicode复制粘贴的网站："),e("a",{attrs:{href:"https://www.emojicopy.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("emojiCOPY")])]),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-a391a9796b5010fd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),e("p",[t._v("选中想要的emoji，之后点击COPY就可以复制下来，然后再粘贴到刚才的JS Bin之中就可以批量生成图片了：")]),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-9f47be5f280a88f1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),e("p",[t._v("之后把这些图片的HTML直接复制到我们的项目之中：")]),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-45fb81e4f83df1d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),e("p",[t._v("让人惊喜的是这些生成的img的alt是Unicode，这让input显示和用户点击同步也变得简单了。")]),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-19fd42f9cf8aa49b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),e("p",[t._v("接下来只需要写很简单的JS就可以实现了：")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("$")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'.emoji'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("children")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("click")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("emoji"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    comment "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" comment "),e("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" emoji"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alt　"),e("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("　"),e("span",{attrs:{class:"token string"}},[t._v("' '")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-c0ae294af0d711b5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-64fbd4090a322e38.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})])])}],!1,null,null,null);a.default=n.exports}}]);