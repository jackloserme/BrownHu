(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{82:function(s,t,e){"use strict";e.r(t);var n=e(0),a=Object(n.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[s._m(0),s._m(1),s._m(2),e("p",[s._v("如果你只是想尝试一下 VuePress，你可以全局安装它：")]),s._m(3),s._m(4),e("p",[s._v("如果你想在一个现有项目中使用 VuePress，同时想要在该项目中管理文档，则应该将 VuePress 安装为本地依赖。作为本地依赖安装让你可以使用持续集成工具，或者一些其他服务（比如 Netlify）来帮助你在每次提交代码时自动部署。")]),s._m(5),s._m(6),s._m(7),s._m(8),e("p",[s._v("然后就可以开始写作了:")]),s._m(9),e("p",[s._v("要生成静态的 HTML 文件，运行：")]),s._m(10),e("p",[s._v("默认情况下，文件将会被生成在 "),e("code",[s._v(".vuepress/dist")]),s._v("，当然，你也可以通过 "),e("code",[s._v(".vuepress/config.js")]),s._v(" 中的 "),e("code",[s._v("dest")]),s._v(" 字段来修改，生成的文件可以部署到任意的静态文件服务器上，参考 "),e("router-link",{attrs:{to:"./deploy.html"}},[s._v("部署")]),s._v(" 来了解更多。")],1)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"快速上手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速上手","aria-hidden":"true"}},[this._v("#")]),this._v(" 快速上手")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("注意")]),t("p",[this._v("请确保你的 Node.js 版本 >= 8。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"全局安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局安装")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\nyarn global add vuepress "),e("span",{attrs:{class:"token comment"}},[s._v("# 或者：npm install -g vuepress")]),s._v("\n\n"),e("span",{attrs:{class:"token comment"}},[s._v("# 新建一个 markdown 文件")]),s._v("\n"),e("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),e("span",{attrs:{class:"token string"}},[s._v('"# Hello VuePress!"')]),s._v(" "),e("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" README.md\n\n"),e("span",{attrs:{class:"token comment"}},[s._v("# 开始写作")]),s._v("\nvuepress dev "),e("span",{attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n\n"),e("span",{attrs:{class:"token comment"}},[s._v("# 构建静态文件")]),s._v("\nvuepress build "),e("span",{attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"现有项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#现有项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 现有项目")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[s._v("# 将 VuePress 作为一个本地依赖安装")]),s._v("\nyarn add -D vuepress "),e("span",{attrs:{class:"token comment"}},[s._v("# 或者：npm install -D vuepress")]),s._v("\n\n"),e("span",{attrs:{class:"token comment"}},[s._v("# 新建一个 docs 文件夹")]),s._v("\n"),e("span",{attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs\n\n"),e("span",{attrs:{class:"token comment"}},[s._v("# 新建一个 markdown 文件")]),s._v("\n"),e("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),e("span",{attrs:{class:"token string"}},[s._v('"# Hello VuePress!"')]),s._v(" "),e("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" docs/README.md\n\n"),e("span",{attrs:{class:"token comment"}},[s._v("# 开始写作")]),s._v("\nnpx vuepress dev docs\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),t("p",[this._v("如果你的现有项目依赖了 webpack 3.x，推荐使用 "),t("a",{attrs:{href:"https://yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Yarn")]),this._v(" 而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("接着，在 "),t("code",[this._v("package.json")]),this._v(" 里加一些脚本:")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{attrs:{class:"token property"}},[s._v('"scripts"')]),e("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{attrs:{class:"token property"}},[s._v('"docs:dev"')]),e("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),e("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{attrs:{class:"token property"}},[s._v('"docs:build"')]),e("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("yarn docs:dev "),t("span",{attrs:{class:"token comment"}},[this._v("# 或者：npm run docs:dev")]),this._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("yarn docs:build "),t("span",{attrs:{class:"token comment"}},[this._v("# 或者：npm run docs:build")]),this._v("\n")])])}],!1,null,null,null);t.default=a.exports}}]);