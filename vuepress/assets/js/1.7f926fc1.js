(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{65:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),s("ul",[s("li",[s("router-link",{attrs:{to:"../guide/assets.html#base-url"}},[t._v("Base URL")])],1),s("li",[s("router-link",{attrs:{to:"../guide/deploy.html#github-pages"}},[t._v("Deploy Guide > Github Pages")])],1)]),t._m(7),t._m(8),s("p",[t._v("Title for the site. This will be the prefix for all page titles, and displayed in the navbar in the default theme.")]),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),s("p",[t._v("Specify the port to use for the dev server.")]),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),s("p",[t._v("Provide the Google Analytics ID to enable integration.")]),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),s("p",[t._v("Provide config options to the used theme. The options will vary depending on the theme you are using.")]),t._m(35),s("ul",[s("li",[s("router-link",{attrs:{to:"../default-theme-config/"}},[t._v("Default Theme Configuration")]),t._v(".")],1)]),t._m(36),t._m(37),t._m(38),s("p",[t._v("Function for transforming header texts into slugs. This affects the ids/links generated for header anchors, table of contents and sidebar links.")]),t._m(39),t._m(40),t._m(41),t._m(42),t._m(43),t._m(44),t._m(45),t._m(46),t._m(47),t._m(48),t._m(49),t._m(50),t._m(51),t._m(52),t._m(53),t._m(54),t._m(55),t._m(56),t._m(57),t._m(58),t._m(59),t._m(60),t._m(61),t._m(62),t._m(63),t._m(64)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"config-reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config-reference","aria-hidden":"true"}},[this._v("#")]),this._v(" Config Reference")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"basic-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-config","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic Config")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"base"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base","aria-hidden":"true"}},[this._v("#")]),this._v(" base")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),e("li",[this._v("Default: "),e("code",[this._v("/")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The base URL the site will be deployed at. You will need to set this if you plan to deploy your site under a sub path, for example GitHub pages. If you plan to deploy your site to "),e("code",[this._v("https://foo.github.io/bar/")]),this._v(", then "),e("code",[this._v("base")]),this._v(" should be set to "),e("code",[this._v('"/bar/"')]),this._v(". It should always start and end with a slash.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("base")]),this._v(" is automatically prepended to all the URLs that start with "),e("code",[this._v("/")]),this._v(" in other options, so you only need to specify it once.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Also see:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#title","aria-hidden":"true"}},[this._v("#")]),this._v(" title")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" description")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Description for the site. This will be rendered as a "),e("code",[this._v("<meta>")]),this._v(" tag in the page HTML.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"head"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#head","aria-hidden":"true"}},[this._v("#")]),this._v(" head")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Array")])]),e("li",[this._v("Default: "),e("code",[this._v("[]")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Extra tags to be injected to the page HTML "),e("code",[this._v("<head>")]),this._v(". Each tag can be specified in the form of "),e("code",[this._v("[tagName, { attrName: attrValue }, innerHTML?]")]),this._v(". For example, to add a custom favicon:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  head"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v("'link'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'icon'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`/logo.png`")])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"port"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#port","aria-hidden":"true"}},[this._v("#")]),this._v(" port")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("number")])]),e("li",[this._v("Default: "),e("code",[this._v("8080")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"dest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dest","aria-hidden":"true"}},[this._v("#")]),this._v(" dest")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),e("li",[this._v("Default: "),e("code",[this._v(".vuepress/dist")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Specify the output directory for "),e("code",[this._v("vuepress build")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"ga"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ga","aria-hidden":"true"}},[this._v("#")]),this._v(" ga")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"serviceworker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serviceworker","aria-hidden":"true"}},[this._v("#")]),this._v(" serviceWorker")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("boolean")])]),e("li",[this._v("Default: "),e("code",[this._v("false")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If set to "),e("code",[this._v("true")]),this._v(", VuePress will automatically generate and register a service worker that caches the content for offline use (only enabled in production).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If developing a custom theme, the "),e("code",[this._v("Layout.vue")]),this._v(" component will also be emitting the following events:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("sw-ready")])]),e("li",[e("code",[this._v("sw-cached")])]),e("li",[e("code",[this._v("sw-updated")])]),e("li",[e("code",[this._v("sw-offline")])]),e("li",[e("code",[this._v("sw-error")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("PWA NOTES")]),s("p",[t._v("The "),s("code",[t._v("serviceWorker")]),t._v(" option only handles the service worker. To make your site fully PWA-compliant, you will need to provide the Web App Manifest and icons in "),s("code",[t._v(".vuepress/public")]),t._v(". For more details, see "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN docs about the Web App Manifest")]),t._v(".")]),s("p",[t._v("Also, only enable this if you are able to deploy your site with SSL, since service worker can only be registered under HTTPs URLs.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"theming"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#theming","aria-hidden":"true"}},[this._v("#")]),this._v(" Theming")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"theme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#theme","aria-hidden":"true"}},[this._v("#")]),this._v(" theme")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Specify this to use a custom theme. With the value of "),e("code",[this._v('"foo"')]),this._v(", VuePress will attempt to load the theme component at "),e("code",[this._v("node_modules/vuepress-theme-foo/Layout.vue")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"themeconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#themeconfig","aria-hidden":"true"}},[this._v("#")]),this._v(" themeConfig")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),e("li",[this._v("Default: "),e("code",[this._v("{}")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Also see:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"markdown"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown","aria-hidden":"true"}},[this._v("#")]),this._v(" Markdown")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"markdown-slugify"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-slugify","aria-hidden":"true"}},[this._v("#")]),this._v(" markdown.slugify")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Function")])]),e("li",[this._v("Default: "),e("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/lib/markdown/slugify.js",target:"_blank",rel:"noopener noreferrer"}},[this._v("source")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"markdown-anchor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-anchor","aria-hidden":"true"}},[this._v("#")]),this._v(" markdown.anchor")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),e("li",[this._v("Default: "),e("code",[this._v("{ permalink: true, permalinkBefore: true, permalinkSymbol: '#' }")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Options for "),e("a",{attrs:{href:"https://github.com/valeriangalliat/markdown-it-anchor",target:"_blank",rel:"noopener noreferrer"}},[this._v("markdown-it-anchor")]),this._v(". (Note: prefer "),e("code",[this._v("markdown.slugify")]),this._v(" if you want to customize header ids.)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"markdown-toc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-toc","aria-hidden":"true"}},[this._v("#")]),this._v(" markdown.toc")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),e("li",[this._v("Default: "),e("code",[this._v("{ includeLevel: [2, 3] }")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Options for "),e("a",{attrs:{href:"https://github.com/Oktavilla/markdown-it-table-of-contents",target:"_blank",rel:"noopener noreferrer"}},[this._v("markdown-it-table-of-contents")]),this._v(". (Note: prefer "),e("code",[this._v("markdown.slugify")]),this._v(" if you want to customize header ids.)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"markdown-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-config","aria-hidden":"true"}},[this._v("#")]),this._v(" markdown.config")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Function")])]),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A function to apply additional plugins to the "),e("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[this._v("markdown-it")]),this._v(" instance used to render source files. Example:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" md "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      md"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("use")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'markdown-it-xxx'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"build-pipeline"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-pipeline","aria-hidden":"true"}},[this._v("#")]),this._v(" Build Pipeline")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"postcss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postcss","aria-hidden":"true"}},[this._v("#")]),this._v(" postcss")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object")])]),e("li",[this._v("Default: "),e("code",[this._v("{ plugins: [require('autoprefixer')] }")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Options for "),e("a",{attrs:{href:"https://github.com/postcss/postcss-loader",target:"_blank",rel:"noopener noreferrer"}},[this._v("postcss-loader")]),this._v(". Note specifying this value will overwrite autoprefixer and you will need to include it yourself.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configurewebpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configurewebpack","aria-hidden":"true"}},[this._v("#")]),this._v(" configureWebpack")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Object | Function")])]),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Modify the internal webpack config. If the value is an Object, it will be merged into the final config using "),e("a",{attrs:{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer"}},[this._v("webpack-merge")]),this._v("; If the value is a function, it will receive the config as the 1st argument and an "),e("code",[this._v("isServer")]),this._v(" flag as the 2nd argument. You can either mutate the config directly, or return an object to be merged:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  configureWebpack"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isServer"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("isServer"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// mutate the config for client")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"chainwebpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chainwebpack","aria-hidden":"true"}},[this._v("#")]),this._v(" chainWebpack")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Function")])]),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Modify the internal webpack config with "),e("a",{attrs:{href:"https://github.com/mozilla-neutrino/webpack-chain",target:"_blank",rel:"noopener noreferrer"}},[this._v("webpack-chain")]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  chainWebpack"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isServer"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// config is an instance of ChainableConfig")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"browser-compatibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#browser-compatibility","aria-hidden":"true"}},[this._v("#")]),this._v(" Browser Compatibility")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"evergreen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#evergreen","aria-hidden":"true"}},[this._v("#")]),this._v(" evergreen")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("boolean")])]),e("li",[this._v("Default: "),e("code",[this._v("false")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Set to "),e("code",[this._v("true")]),this._v(" if you are only targeting evergreen browsers. This will disable ES5 transpilation and polyfills for IE, and result in faster builds and smaller files.")])}],!1,null,null,null);e.default=n.exports}}]);