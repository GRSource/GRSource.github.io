(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{598:function(e,t,a){"use strict";a.r(t);var i=a(65),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"react-native"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-native"}},[e._v("#")]),e._v(" React Native")]),e._v(" "),a("h2",{attrs:{id:"javascriptcore引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascriptcore引擎"}},[e._v("#")]),e._v(" JavaScriptCore引擎")]),e._v(" "),a("h2",{attrs:{id:"rn与oc通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rn与oc通信"}},[e._v("#")]),e._v(" RN与OC通信")]),e._v(" "),a("h3",{attrs:{id:"两端都保存objective-c暴露给js的配置表-存有模块和方法-实际通过moduleid、methodid和arguments来通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两端都保存objective-c暴露给js的配置表-存有模块和方法-实际通过moduleid、methodid和arguments来通信"}},[e._v("#")]),e._v(" 两端都保存Objective-C暴露给JS的配置表，存有模块和方法，实际通过ModuleId、MethodId和Arguments来通信")]),e._v(" "),a("h3",{attrs:{id:"通过runtime获取所有的类-判断是否实现了rctbridgemodule接口-就可以取得所有模块类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过runtime获取所有的类-判断是否实现了rctbridgemodule接口-就可以取得所有模块类"}},[e._v("#")]),e._v(" 通过runtime获取所有的类，判断是否实现了RCTBridgeModule接口，就可以取得所有模块类")]),e._v(" "),a("h3",{attrs:{id:"子主题-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子主题-3"}},[e._v("#")]),e._v(" 子主题 3")]),e._v(" "),a("h2",{attrs:{id:"加载js源码流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载js源码流程"}},[e._v("#")]),e._v(" 加载JS源码流程")]),e._v(" "),a("h3",{attrs:{id:"rctjavascriptloader-loadbundleaturl-加载远程服务器中的js代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rctjavascriptloader-loadbundleaturl-加载远程服务器中的js代码"}},[e._v("#")]),e._v(" [RCTJavaScriptLoader loadBundleAtURL]加载远程服务器中的JS代码")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("attemptAsynchronousLoadOfBundleAtURL开启异步加载JS代码")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("RCTCxxBridge执行executeSourceCode方法，执行源代码")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("执行完后发送通知RCTJavaScriptDidLoadNotification")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("收到通知后创建RCTRootContentView")]),e._v(" "),a("ul",[a("li",[e._v("RCTRootView runApplication通知JS运行App")])])])])])])])])])]),e._v(" "),a("h2",{attrs:{id:"ui控件渲染流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui控件渲染流程"}},[e._v("#")]),e._v(" UI控件渲染流程")]),e._v(" "),a("h3",{attrs:{id:"rctrootview-runapplication通知js运行app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rctrootview-runapplication通知js运行app"}},[e._v("#")]),e._v(" RCTRootView runApplication通知JS运行App")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("调用bridge一系列方法")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("创建View")]),e._v(" "),a("ul",[a("li",[e._v("添加子控件，完成UI渲染")])])])])])]),e._v(" "),a("h2",{attrs:{id:"事件处理流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件处理流程"}},[e._v("#")]),e._v(" 事件处理流程")]),e._v(" "),a("h3",{attrs:{id:"创建rctrootcontentview时-内部会创建rcttouchhandler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建rctrootcontentview时-内部会创建rcttouchhandler"}},[e._v("#")]),e._v(" 创建RCTRootContentView时，内部会创建RCTTouchHandler")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("RCTTouchHandler内部会创建RCTEventDispatcher")]),e._v(" "),a("ul",[a("li",[e._v("通过RCTEventDispatcher将事件分发出去，最终调用RCTCxxBridge的enqueueJSCall方法进行JS调用")])])])]),e._v(" "),a("h2",{attrs:{id:"rctrootview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rctrootview"}},[e._v("#")]),e._v(" RCTRootView")]),e._v(" "),a("h3",{attrs:{id:"注册监听bridgedidreload-javascriptdidload-hideloadingview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册监听bridgedidreload-javascriptdidload-hideloadingview"}},[e._v("#")]),e._v(" 注册监听bridgeDidReload，javaScriptDidLoad，hideLoadingView")]),e._v(" "),a("ul",[a("li",[e._v("监听到bridgeDidReload时设置reactTag为nil")]),e._v(" "),a("li",[e._v("监听到javaScriptDidLoad时，重新创建RCTRootContentView")])]),e._v(" "),a("h3",{attrs:{id:"rctrootcontentview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rctrootcontentview"}},[e._v("#")]),e._v(" RCTRootContentView")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("RCTCxxBridge")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("RCTUIManager")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("注册RCTRootContentView，存储到字典viewRegistry")])]),e._v(" "),a("li",[a("p",[e._v("注册RCTRootShadowView，存储到字典shadowViewRegistry")]),e._v(" "),a("ul",[a("li",[e._v("RCTShadowView保存对应UIView的布局和子控件，管理UIView的加载，每创建一个UIView，就会创建一个RCTShadowView，与UIView一一对应")])])]),e._v(" "),a("li",[a("p",[e._v("封装了刷新UI，修改UI的一些管理方法")])])])])])]),e._v(" "),a("li",[a("p",[e._v("RCTTouchHandler")]),e._v(" "),a("ul",[a("li",[e._v("RCTEventDispatcher")])])])]),e._v(" "),a("h3",{attrs:{id:"调用runapplication方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用runapplication方法"}},[e._v("#")]),e._v(" 调用runApplication方法")]),e._v(" "),a("ul",[a("li",[e._v("调用RCTCxxBridge的enqueueJSCall方法")])]),e._v(" "),a("h2",{attrs:{id:"rctbridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rctbridge"}},[e._v("#")]),e._v(" RCTBridge")]),e._v(" "),a("h3",{attrs:{id:"rctperformancelogger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rctperformancelogger"}},[e._v("#")]),e._v(" RCTPerformanceLogger")]),e._v(" "),a("h3",{attrs:{id:"调用setup方法创建cxxbridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用setup方法创建cxxbridge"}},[e._v("#")]),e._v(" 调用setup方法创建cxxbridge")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("RCTCxxBridge")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("当接收到触摸事件后调用enqueueJSCall方法，执行instance->callJSFunction方法")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("在instance中调用nativeToJsBridge->callFunction方法")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("在NativeToJsBridge中调用JSIExecutor的callFunction方法")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("在JSIExecutor中调用NativeToJsBridge的callNativeModules方法")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("在NativeToJsBridge中遍历调用RegistryModule的callNativeMethod。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("在ModuleRegistry中调用RCTNativeModule的invoke方法")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("在RCTNativeModule中调用invokeInner方法")]),e._v(" "),a("ul",[a("li",[e._v("在RCTNativeModule中调用RCTModuleMethod的invokeWithBridge方法，执行原生调用")])])])])])])]),e._v(" "),a("li",[a("p",[e._v("同时批量处理完成后调用RCTCxxBridge中onBatchComplete的方法，在onBatchComplete方法中循环为moduleData的RCTUIManager调用batchDidComplete方法来加载子控件")]),e._v(" "),a("ul",[a("li",[e._v("通过JS调用RCTUIManager中的createView来创建子控件")])])])])])])])])])])]),e._v(" "),a("li",[a("p",[e._v("RCTReloadCommand刷新监听")])]),e._v(" "),a("li",[a("p",[e._v("_reactInstance")]),e._v(" "),a("ul",[a("li",[e._v("callJSFunction")])])]),e._v(" "),a("li",[a("p",[e._v("启动过程：调用start方法")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("创建jsThread常驻线程用来执行JS代码")])]),e._v(" "),a("li",[a("p",[e._v("将js需要用到的OC类封装成RCTModuleData，存储在一个字典和数组里")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("是如何将OC类暴露给JS的呢？")]),e._v(" "),a("ul",[a("li",[e._v("1.遵守RCTBridgeModule协议")]),e._v(" "),a("li",[e._v("2.在implemention中调用RCT_EXPORT_MODULE()实现协议方法")]),e._v(" "),a("li",[e._v("3.调用RCTBridge中的RCTRegisterModule，将该类加入到全局唯一的数组中")]),e._v(" "),a("li",[e._v("4.RCT_EXPORT_METHOD()暴露类对象的方法")])])])])]),e._v(" "),a("li",[a("p",[e._v("准备JS运行环境：初始化_reactInstance，初始化JSExecutorFactory，在js线程，创建js的RCTMessageThread，初始化nativeToJsBridge_")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("_reactInstance初始化需要一个ModuleRegistry")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("ModuleRegistry包含了所有的RCTNativeModule")]),e._v(" "),a("ul",[a("li",[e._v("每个RCTNativeModule包含了RCTModuleData")])])]),e._v(" "),a("li",[a("p",[e._v("_reactInstance初始化的时候创建了NativeToJsBridge实例")]),e._v(" "),a("ul",[a("li",[e._v("NativeToJsBridge里面主要创建了JSCExecutor")])])])])])])]),e._v(" "),a("li",[a("p",[e._v("loadSource加载JS源码")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("RCTJavaScriptLoader")]),e._v(" "),a("ul",[a("li",[e._v("封装NSURLSession下载")])])])])]),e._v(" "),a("li",[a("p",[e._v("以上做完后通过notify的全局队列执行JS源码，步骤如下：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("1.执行RCTCxxBridge中的executeSourceCode方法")])]),e._v(" "),a("li",[a("p",[e._v("2.执行enqueueApplicationScript方法，同时调用enqueueJSCall方法")])]),e._v(" "),a("li",[a("p",[e._v("3.执行executeApplicationScript方法")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("在RCTCxxBridge中调用reactInstance的方法loadScriptFromString")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("在Instance中调用NativeToJsBridge的loadApplication方法")]),e._v(" "),a("ul",[a("li",[e._v("在NativeToJsBridge中调用JSIExecutor的loadApplicationScript方法")])])])])])])])])])])]),e._v(" "),a("li",[a("p",[e._v("RCTMessageThread用于在js线程中执行c++的同步和异步函数")])])])])]),e._v(" "),a("h2",{attrs:{id:"启动流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动流程"}},[e._v("#")]),e._v(" 启动流程")]),e._v(" "),a("h3",{attrs:{id:"创建rctrootview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建rctrootview"}},[e._v("#")]),e._v(" 创建RCTRootView")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("创建RCTBridge")]),e._v(" "),a("p",[e._v("桥接对象，管理JS和OC交互，中转作用")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("创建RCTCxxBridge")]),e._v(" "),a("p",[e._v("批量桥架对象，JS和OC交互具体实现都在这个类中")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("创建OC模块表")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("加载JS源码")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("执行JS源码，回调OC，调用OC中的组件")]),e._v(" "),a("ul",[a("li",[e._v("完成UI渲染")])])])])])])])])])])])]),e._v(" "),a("p",[a("em",[e._v("XMind - Trial Version")])])])}),[],!1,null,null,null);t.default=r.exports}}]);