(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{49:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"浅拷贝没那么简单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浅拷贝没那么简单","aria-hidden":"true"}},[t._v("#")]),t._v(" 浅拷贝没那么简单")]),a("h2",{attrs:{id:"拷贝的分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拷贝的分类","aria-hidden":"true"}},[t._v("#")]),t._v(" 拷贝的分类")]),a("ol",[a("li",[t._v("浅拷贝： 只能对基本类型的值拷贝，如果所要拷贝的对象的某个属性的值是对象的话，那么目标对象拷贝得到的是这个对象的引用。")]),a("li",[t._v("深拷贝： 和原对象一样的属性和原型，相互之间互不影响（不一样的内存地址）")])]),a("p",[t._v("在写这篇博客之前，看了很多博客实现的浅拷贝，发现大家实现的方法或多或少都有些不足，今天就把这些坑说一说。")]),a("ul",[a("li",[t._v("我需不需要拷贝原对象的原型？")]),a("li",[t._v("对象中有以Symbol为属性名的属性我需不需要拷贝？")]),a("li",[t._v("对象中有不可遍历的属性，我要不要拷贝？")])]),a("h2",{attrs:{id:"逐个属性遍历（es6之前）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逐个属性遍历（es6之前）","aria-hidden":"true"}},[t._v("#")]),t._v(" 逐个属性遍历（ES6之前）")]),a("p",[t._v("通过逐个遍历对象的属性并复制，来实现浅拷贝，但这种方法有两个弊端：")]),a("ul",[a("li",[t._v("不可遍历以symbol为属性名的属性")]),a("li",[t._v("不可遍历不可枚举属性")])]),a("blockquote",[a("p",[t._v("Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 浅拷贝函数")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("shallowClone")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newObj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" obj"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        newObj"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" newObj"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 被拷贝对象")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    b"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'hellow world'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    c"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    d"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'symbol'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'e'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'e'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nObject"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("defineProperty")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'f'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'f'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  enumerable"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 添加不可枚举属性")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("shallowClone")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nobj2 "),a("span",{attrs:{class:"token comment"}},[t._v('// {a: 1, b: "hellow world", c: true, d: Symbol(symbol)}')]),t._v("\n")])]),a("p",[t._v("所拷贝的对象并没有以symbol为属性名的属性，也不能拷贝不可遍历的属性，所以这种方法并不是最佳实践。")]),a("h2",{attrs:{id:"es6下的浅拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6下的浅拷贝","aria-hidden":"true"}},[t._v("#")]),t._v(" ES6下的浅拷贝")]),a("p",[t._v("ES6新增了许多操作对象或者遍历对象的API，下面分别测试下能不能实现完美的浅拷贝")]),a("h3",{attrs:{id:"object-assign"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-assign","aria-hidden":"true"}},[t._v("#")]),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object.assign()")])]),a("p",[t._v("通过和空对象合并来实现浅拷贝：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    b"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'hellow world'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    c"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    d"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'symbol'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'e'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'e'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("assign")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("obj1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ES6新扩展： Object.assign() ")]),t._v("\nobj2 "),a("span",{attrs:{class:"token comment"}},[t._v('// {a: 1, b: "hellow world", c: true, d: Symbol(symbol), Symbol(e): "e"}')]),t._v("\n")])]),a("p",[t._v("发现可以实现对以symbol为属性名的属性的拷贝，但是对于不可枚举属性Object.assign()还是无能为力。\n我们在MDN上发现"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object.assign()")]),t._v("不可以遍历出不可枚举属性：")]),a("blockquote",[a("p",[t._v("Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。")])]),a("h3",{attrs:{id:"解构赋值-rest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解构赋值-rest","aria-hidden":"true"}},[t._v("#")]),a("a",{attrs:{href:"https://github.com/tc39/proposal-object-rest-spread",target:"_blank",rel:"noopener noreferrer"}},[t._v("解构赋值+rest")])]),a("p",[t._v("那我们看看更加优雅的"),a("strong",[t._v("解构赋值+rest")]),t._v("能不能实现完美的浅克隆通过ES6的解构赋值可以更简单的实现浅拷贝：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    b"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'hellow world'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    c"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    d"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'symbol'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'e'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'e'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nObject"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("defineProperty")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'f'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'f'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  enumerable"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("obj2 "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj1\nobj2 "),a("span",{attrs:{class:"token comment"}},[t._v('// {a: 1, b: "hellow world", c: true, d: Symbol(symbol), Symbol(e): "e"}')]),t._v("\n")])]),a("p",[t._v("发现依然不能解决不可遍历属性的问题。")]),a("h2",{attrs:{id:"es7下的浅拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es7下的浅拷贝","aria-hidden":"true"}},[t._v("#")]),t._v(" ES7下的浅拷贝")]),a("h3",{attrs:{id:"object-getownpropertydescriptors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-getownpropertydescriptors","aria-hidden":"true"}},[t._v("#")]),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object.getOwnPropertyDescriptors")])]),a("blockquote",[a("p",[t._v("Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）")])]),a("p",[a("strong",[t._v("Object.getOwnPropertyDescriptors")]),t._v("方法可以配合"),a("strong",[t._v("Object.create")]),t._v("方法实现浅拷贝")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("shallowClone")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("create")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getPrototypeOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getOwnPropertyDescriptors")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    b"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'hellow world'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    c"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    d"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'symbol'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'e'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'e'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nObject"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("defineProperty")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'f'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'f'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    enumerable"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("shallowClone")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nobj2 "),a("span",{attrs:{class:"token comment"}},[t._v('//{a: 1, b: "hellow world", c: true, d: Symbol(symbol), f: "f"}')]),t._v("\n")])]),a("p",[t._v("基本上完美实现了对所有类型属性的拷贝，可以看见即使是浅拷贝，要踩得坑还是很多的。")])])}],!1,null,null,null);s.default=o.exports}}]);