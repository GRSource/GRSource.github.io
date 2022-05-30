(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{562:function(v,_,e){"use strict";e.r(_);var a=e(65),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"ui视图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ui视图"}},[v._v("#")]),v._v(" UI视图")]),v._v(" "),e("h2",{attrs:{id:"ui事件传递"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ui事件传递"}},[v._v("#")]),v._v(" UI事件传递")]),v._v(" "),e("p",[e("code",[v._v("UIView")]),v._v("和"),e("code",[v._v("CALayer")]),v._v("的区别是什么？")]),v._v(" "),e("ol",[e("li",[e("code",[v._v("UIView")]),v._v("可以响应事件，"),e("code",[v._v("CALayer")]),v._v("不可以，因为"),e("code",[v._v("UIView")]),v._v("继承自"),e("code",[v._v("UIResponsder")]),v._v("，而"),e("code",[v._v("CALayer")]),v._v("直接继承自"),e("code",[v._v("NSObject")]),v._v("，并没有相应的处理事件的接口。")]),v._v(" "),e("li",[e("code",[v._v("View")]),v._v("的"),e("code",[v._v("frame")]),v._v("、"),e("code",[v._v("center")]),v._v("和"),e("code",[v._v("bounds")]),v._v("只是简单的返回"),e("code",[v._v("Layer")]),v._v("的"),e("code",[v._v("frame")]),v._v("、"),e("code",[v._v("center")]),v._v("和"),e("code",[v._v("bounds")])]),v._v(" "),e("li",[e("code",[v._v("UIView")]),v._v("主要对显示内容的管理，而"),e("code",[v._v("CALayer")]),v._v("主要侧重显示内容的绘制")]),v._v(" "),e("li",[e("code",[v._v("CALayer")]),v._v("修改属性时默认会产生隐式动画，时间为0.25s，但在为"),e("code",[v._v("UIView")]),v._v("当中的"),e("code",[v._v("CALayer")]),v._v("做动画时，"),e("code",[v._v("View")]),v._v("作为"),e("code",[v._v("Layer")]),v._v("的代理，"),e("code",[v._v("Layer")]),v._v("需要通过"),e("code",[v._v("actionForLayer:forKey:")]),v._v("向"),e("code",[v._v("View")]),v._v("请求相应的动画"),e("code",[v._v("action")]),v._v("。")])]),v._v(" "),e("p",[v._v("UI事件的传递机制是什么样的？")]),v._v(" "),e("ol",[e("li",[v._v("当iOS程序发生触摸事件后，系统会将事件加入到"),e("code",[v._v("UIApplication")]),v._v("管理的一个任务队列中")]),v._v(" "),e("li",[e("code",[v._v("UIApplication")]),v._v("将处于任务队列最前端的事件向下分发给"),e("code",[v._v("UIWindow")])]),v._v(" "),e("li",[e("code",[v._v("UIWindow")]),v._v("将事件下发给"),e("code",[v._v("UIView")])]),v._v(" "),e("li",[e("code",[v._v("UIView")]),v._v("通过"),e("code",[v._v("hitTest:withEvent:")]),v._v("来判断自己是否能处理事件(即触点是否在自身范围之内)，如果能，那么继续采用倒序的方式遍历它的子视图，一直循环下去，直到找到最终能处理事件的视图")]),v._v(" "),e("li",[v._v("如果遍历完之后仍然未找到处理事件的子视图，那么自己就是事件的处理者")]),v._v(" "),e("li",[v._v("如果自己也不能处理，那么将不做任何处理。")])]),v._v(" "),e("p",[e("code",[v._v("UIView")]),v._v("不接受事件处理的情况有三种：")]),v._v(" "),e("ol",[e("li",[e("code",[v._v("alpha")]),v._v(" < 0.01")]),v._v(" "),e("li",[e("code",[v._v("userInteractionEnabled")]),v._v(" = NO")]),v._v(" "),e("li",[e("code",[v._v("hidden")]),v._v(" = YES")])]),v._v(" "),e("h2",{attrs:{id:"二、ui事件响应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、ui事件响应"}},[v._v("#")]),v._v(" 二、UI事件响应")]),v._v(" "),e("p",[v._v("问1：UI事件的响应机制是什么样的？"),e("br"),v._v("\n通过hitTest:withEvent:找第一响应者之后，如果该响应者没有处理该事件，那么事件会沿着响应链向上传递，依次为父视图、视图控制器、UIWindow、UIApplication，如果UIApplication也不处理，那就将该事件丢弃")]),v._v(" "),e("h2",{attrs:{id:"三、uitableview卡顿原因及优化方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、uitableview卡顿原因及优化方案"}},[v._v("#")]),v._v(" 三、UITableView卡顿原因及优化方案")]),v._v(" "),e("p",[v._v("问1：卡顿原因是什么及如何优化？"),e("br"),v._v("\n1.cell没有重用，在数据量比较大时，如果没有重用就会堆积很多cell"),e("br"),v._v("\n2.避免cell重新布局"),e("br"),v._v("\n3.提前计算并缓存cell的属性及内容"),e("br"),v._v("\n4.减少cell中控件的数量"),e("br"),v._v("\n5.不要使用ClearColor，渲染耗时比较长"),e("br"),v._v("\n6.使用局部刷新"),e("br"),v._v("\n7.加载网络数据、下载图片，使用异步加载并缓存"),e("br"),v._v("\n8.少使用addSubView给cell动态添加view"),e("br"),v._v("\n9.不要实现无用的代理方法"),e("br"),v._v("\n10.缓存行高"),e("br"),v._v("\n11.不要做多余的绘制工作，比如在drawRect范围之外绘制"),e("br"),v._v("\n12.采用异步绘制")]),v._v(" "),e("h2",{attrs:{id:"四、异步绘制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、异步绘制"}},[v._v("#")]),v._v(" 四、异步绘制")]),v._v(" "),e("p",[v._v("实现displayLayer:代理方法，自己生成对应的bitmap，将bitmap设置为layer.contents属性的值")]),v._v(" "),e("h2",{attrs:{id:"离屏渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#离屏渲染"}},[v._v("#")]),v._v(" "),e("strong",[v._v("离屏渲染")])]),v._v(" "),e("p",[v._v("问1：什么是在屏渲染？"),e("br"),v._v("\n在屏渲染指的是GPU在当前用于显示的屏幕缓冲区中进行渲染操作"),e("br"),v._v("\n问2：什么是离屏渲染？离屏渲染是怎么造成的？"),e("br"),v._v("\n离屏渲染指的是GPU在当前屏幕缓冲区以外开辟一个新的缓存区进行渲染操作。\n当我们指定了UI视图的某些属性，标记为它在位域合成之前不能用于当前屏幕直接显示的时候，就会触发离屏渲染。比如说圆角和maskToBounds结合使用时、蒙版、阴影、光栅化。"),e("br"),v._v("\n问3：为何要避免？"),e("br"),v._v("\n触发离屏渲染的时候会增加GPU的工作量，而增加了GPU的工作量很有可能导致CPU和GPU总耗时加起来超过16.7毫秒，那么就可能导致UI的卡顿和掉帧，所以我们需要避免离屏渲染。")])])}),[],!1,null,null,null);_.default=r.exports}}]);