(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{606:function(a,t,s){"use strict";s.r(t);var r=s(65),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"webassembly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webassembly"}},[a._v("#")]),a._v(" WebAssembly")]),a._v(" "),s("h2",{attrs:{id:"module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[a._v("#")]),a._v(" Module")]),a._v(" "),s("h3",{attrs:{id:"module-onruntimeinitialized"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-onruntimeinitialized"}},[a._v("#")]),a._v(" Module.onRuntimeInitialized")]),a._v(" "),s("ul",[s("li",[a._v("回调在运行时准备就绪后执行测试代码")])]),a._v(" "),s("h3",{attrs:{id:"module-total-memory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-total-memory"}},[a._v("#")]),a._v(" Module.TOTAL_MEMORY")]),a._v(" "),s("ul",[s("li",[a._v("设置内存容量。")])]),a._v(" "),s("h3",{attrs:{id:"module-print-function-e"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-print-function-e"}},[a._v("#")]),a._v(" Module.print = function(e) {")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\talert(e);\n}\n")])])]),s("ul",[s("li",[a._v("更改Module的标准输出行为")])]),a._v(" "),s("h2",{attrs:{id:"虚拟文件系统-同步访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟文件系统-同步访问"}},[a._v("#")]),a._v(" 虚拟文件系统(同步访问)")]),a._v(" "),s("h3",{attrs:{id:"memfs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#memfs"}},[a._v("#")]),a._v(" MEMFS")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("内存文件系统")]),a._v(" "),s("ul",[s("li",[a._v("该系统的数据完全存储于内存中，程序运行时写入的数据在页面刷新或程序重载后将丢失；")])])])]),a._v(" "),s("h3",{attrs:{id:"nodefs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodefs"}},[a._v("#")]),a._v(" NODEFS")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Node.js文件系统")]),a._v(" "),s("ul",[s("li",[a._v("该系统可以访问本地文件系统，可以持久化存储，但只能用于Node.js环境；")])])])]),a._v(" "),s("h3",{attrs:{id:"idbfs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idbfs"}},[a._v("#")]),a._v(" IDBFS")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("IndexedDB文件系统")]),a._v(" "),s("ul",[s("li",[a._v("该系统基于浏览器的IndexedDB对象，可以持久化存储，但只能用于浏览器环境。")])])])]),a._v(" "),s("h2",{attrs:{id:"消息循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息循环"}},[a._v("#")]),a._v(" 消息循环")]),a._v(" "),s("h3",{attrs:{id:"void-emscripten-set-main-loop-em-callback-func-func-int-fps-int-simulate-infinite-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#void-emscripten-set-main-loop-em-callback-func-func-int-fps-int-simulate-infinite-loop"}},[a._v("#")]),a._v(" void emscripten_set_main_loop(em_callback_func func, int fps, int simulate_infinite_loop)")]),a._v(" "),s("ul",[s("li",[a._v("func：消息处理回调函数。")]),a._v(" "),s("li",[a._v("fps：消息循环的执行帧率。如果该参数小等于0，则使用页面的requestAnimationFrame机制调用消息处理函数，该机制可以确保页面刷新率与显示器刷新率对齐，对于需要执行图形渲染任务的程序，使用该机制可以得到平滑的渲染速度。")]),a._v(" "),s("li",[a._v("simulate_infinite_loop：是否模拟“无限循环”，如果为1，则后续的方法将不调用，且main函数未销毁")])]),a._v(" "),s("h3",{attrs:{id:"void-emscripten-set-main-loop-arg-em-arg-callback-func-func-void-arg-int-fps-int-simulate-infinite-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#void-emscripten-set-main-loop-arg-em-arg-callback-func-func-void-arg-int-fps-int-simulate-infinite-loop"}},[a._v("#")]),a._v(" void emscripten_set_main_loop_arg(em_arg_callback_func func, void *arg, int fps, int simulate_infinite_loop);")]),a._v(" "),s("h3",{attrs:{id:"void-emscripten-pause-main-loop-void"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#void-emscripten-pause-main-loop-void"}},[a._v("#")]),a._v(" void emscripten_pause_main_loop(void)")]),a._v(" "),s("ul",[s("li",[a._v("暂停")])]),a._v(" "),s("h3",{attrs:{id:"void-emscripten-resume-main-loop-void"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#void-emscripten-resume-main-loop-void"}},[a._v("#")]),a._v(" void emscripten_resume_main_loop(void)")]),a._v(" "),s("ul",[s("li",[a._v("继续")])]),a._v(" "),s("h3",{attrs:{id:"void-emscripten-cancel-main-loop-void"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#void-emscripten-cancel-main-loop-void"}},[a._v("#")]),a._v(" void emscripten_cancel_main_loop(void)")]),a._v(" "),s("ul",[s("li",[a._v("终止")])]),a._v(" "),s("h2",{attrs:{id:"emcc-hello-world-sdl-cpp-o-hello-html-preload-file-hello-world-file-txt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emcc-hello-world-sdl-cpp-o-hello-html-preload-file-hello-world-file-txt"}},[a._v("#")]),a._v(" emcc hello_world_sdl.cpp -o hello.html --preload-file hello_world_file.txt")]),a._v(" "),s("h3",{attrs:{id:"预加载文件进入虚拟文件系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预加载文件进入虚拟文件系统"}},[a._v("#")]),a._v(" 预加载文件进入虚拟文件系统")]),a._v(" "),s("h2",{attrs:{id:"emcc-hello-world-c"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emcc-hello-world-c"}},[a._v("#")]),a._v(" emcc hello_world.c")]),a._v(" "),s("h3",{attrs:{id:"将c-c-转成js和wasm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将c-c-转成js和wasm"}},[a._v("#")]),a._v(" 将C/C++转成js和wasm")]),a._v(" "),s("h3",{attrs:{id:"o1、-o2-开启代码优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#o1、-o2-开启代码优化"}},[a._v("#")]),a._v(" -O1、-O2...开启代码优化")]),a._v(" "),s("h2",{attrs:{id:"node-a-out-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-a-out-js"}},[a._v("#")]),a._v(" node a.out.js")]),a._v(" "),s("h3",{attrs:{id:"运行js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行js"}},[a._v("#")]),a._v(" 运行js")]),a._v(" "),s("h2",{attrs:{id:"python3-m-http-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python3-m-http-server"}},[a._v("#")]),a._v(" python3 -m http.server")]),a._v(" "),s("h3",{attrs:{id:"启动当前目录的http服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动当前目录的http服务器"}},[a._v("#")]),a._v(" 启动当前目录的http服务器")]),a._v(" "),s("h2",{attrs:{id:"emcc-hello-world-c-o-hello-html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emcc-hello-world-c-o-hello-html"}},[a._v("#")]),a._v(" emcc hello_world.c -o hello.html")]),a._v(" "),s("h3",{attrs:{id:"将cpp或者c转成html以便测试js和wasm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将cpp或者c转成html以便测试js和wasm"}},[a._v("#")]),a._v(" 将cpp或者c转成html以便测试js和wasm")]),a._v(" "),s("h2",{attrs:{id:"emrun-hello-html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emrun-hello-html"}},[a._v("#")]),a._v(" emrun hello.html")]),a._v(" "),s("h3",{attrs:{id:"运行html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行html"}},[a._v("#")]),a._v(" 运行html")]),a._v(" "),s("h2",{attrs:{id:"emrun-list-browsers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emrun-list-browsers"}},[a._v("#")]),a._v(" emrun --list_browsers")]),a._v(" "),s("h3",{attrs:{id:"查看支持的浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看支持的浏览器"}},[a._v("#")]),a._v(" 查看支持的浏览器")]),a._v(" "),s("h2",{attrs:{id:"emrun-browser-safari-hello-html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emrun-browser-safari-hello-html"}},[a._v("#")]),a._v(" emrun --browser safari hello.html")]),a._v(" "),s("h3",{attrs:{id:"指定浏览器运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指定浏览器运行"}},[a._v("#")]),a._v(" 指定浏览器运行")]),a._v(" "),s("h2",{attrs:{id:"npm-run-build-wasm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-run-build-wasm"}},[a._v("#")]),a._v(" npm run build-wasm")]),a._v(" "),s("h3",{attrs:{id:"编译到wasm-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译到wasm-js"}},[a._v("#")]),a._v(" 编译到wasm+js")]),a._v(" "),s("h2",{attrs:{id:"和js的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#和js的区别"}},[a._v("#")]),a._v(" 和js的区别")]),a._v(" "),s("h3",{attrs:{id:"自己管理内存-没有js的垃圾回收机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自己管理内存-没有js的垃圾回收机制"}},[a._v("#")]),a._v(" 自己管理内存，没有js的垃圾回收机制")]),a._v(" "),s("h3",{attrs:{id:"静态类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态类型"}},[a._v("#")]),a._v(" 静态类型")]),a._v(" "),s("h2",{attrs:{id:"em-port-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#em-port-api"}},[a._v("#")]),a._v(" EM_PORT_API")]),a._v(" "),s("h3",{attrs:{id:"导出c函数到js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出c函数到js"}},[a._v("#")]),a._v(" 导出C函数到js")]),a._v(" "),s("h3",{attrs:{id:"也可以用此宏在c函数当中声明-在js当中进行实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#也可以用此宏在c函数当中声明-在js当中进行实现"}},[a._v("#")]),a._v(" 也可以用此宏在C函数当中声明，在js当中进行实现")]),a._v(" "),s("ul",[s("li",[a._v("mergeInto(LibraryManager.library, {\njs_add: function})")])]),a._v(" "),s("h2",{attrs:{id:"c-c-只能访问module-buffer当中的内存地址-无法访问其他原生的js地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-c-只能访问module-buffer当中的内存地址-无法访问其他原生的js地址"}},[a._v("#")]),a._v(" C/C++只能访问Module.buffer当中的内存地址，无法访问其他原生的js地址")]),a._v(" "),s("h3",{attrs:{id:"指针类型为int32"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指针类型为int32"}},[a._v("#")]),a._v(" 指针类型为Int32")]),a._v(" "),s("h2",{attrs:{id:"js和c进行数据传递及数据类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js和c进行数据传递及数据类型转换"}},[a._v("#")]),a._v(" js和C进行数据传递及数据类型转换")]),a._v(" "),s("h3",{attrs:{id:"传递"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传递"}},[a._v("#")]),a._v(" 传递")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("通过参数或者返回值Number")]),a._v(" "),s("ul",[s("li",[a._v("32位整型")]),a._v(" "),s("li",[a._v("32位浮点型")]),a._v(" "),s("li",[a._v("64位浮点型")])])]),a._v(" "),s("li",[s("p",[a._v("字符串/数组等非Number类型")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("交换内存")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("js读取C数据")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("获取C当中的内存地址后通过js当中的Module.HEAP32来取值")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Module.HEAP32[(ptr >> 2) + i]")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("通过传递ptr指针，然后在js当中通过ptr去取数据")]),a._v(" "),s("ul",[s("li",[a._v("free")])])])])])])])])]),a._v(" "),s("li",[s("p",[a._v("C读取js数据")]),a._v(" "),s("ul",[s("li",[a._v("js当中初始化指针Module._malloc")]),a._v(" "),s("li",[a._v("初始化数据Module.HEAP32[ptr / 4 + i] = i + 1;")]),a._v(" "),s("li",[a._v("调用C当中的方法Module._sum")]),a._v(" "),s("li",[a._v("free")])])])])])])])]),a._v(" "),s("h3",{attrs:{id:"转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换"}},[a._v("#")]),a._v(" 转换")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("字符串")]),a._v(" "),s("ul",[s("li",[a._v("js当中使用Pointer_stringify(ptr)将C当中的字符串转换成js字符串")]),a._v(" "),s("li",[a._v('js通过allocateUTF8("")方法在公共内存当中创建字符串，创建后记得free')])])]),a._v(" "),s("li",[s("p",[a._v("字符类型转换")]),a._v(" "),s("ul",[s("li",[a._v("AsciiToString()")]),a._v(" "),s("li",[a._v("stringToAscii()")]),a._v(" "),s("li",[a._v("UTF8ArrayToString()")]),a._v(" "),s("li",[a._v("stringToUTF8Array()")])])])]),a._v(" "),s("h2",{attrs:{id:"ccall-cwrap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ccall-cwrap"}},[a._v("#")]),a._v(" ccall/cwrap")]),a._v(" "),s("h3",{attrs:{id:"js调用c"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js调用c"}},[a._v("#")]),a._v(" js调用C")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("var result = Module.ccall(ident, returnType, argTypes, args);//result为调用结果")]),a._v(" "),s("ul",[s("li",[a._v("ident ：C导出函数的函数名（不含“_”下划线前缀）；")]),a._v(" "),s("li",[a._v("returnType ：C导出函数的返回值类型，可以为'boolean'、'number'、'string'、'null'，分别表示函数返回值为布尔值、数值、字符串、无返回值；")]),a._v(" "),s("li",[a._v("rgTypes ：C导出函数的参数类型的数组。参数类型可以为'number'、'string'、'array'，分别代表数值、字符串、数组；")]),a._v(" "),s("li",[a._v("args ：参数数组。")])])]),a._v(" "),s("li",[s("p",[a._v("var func = Module.cwrap(ident, returnType, argTypes);//func为方法")]),a._v(" "),s("ul",[s("li",[a._v("ident ：C导出函数的函数名（不含“_”下划线前缀）；")]),a._v(" "),s("li",[a._v("returnType ：C导出函数的返回值类型，可以为'boolean'、'number'、'string'、'null'，分别表示函数返回值为布尔值、数值、字符串、无返回值；")]),a._v(" "),s("li",[a._v("argTypes ：C导出函数的参数类型的数组。参数类型可以为'number'、'string'、'array'，分别代表数值、字符串、数组；")])])]),a._v(" "),s("li",[s("p",[a._v("ccall/cwrap分配栈，需要避免爆栈")])])]),a._v(" "),s("h2",{attrs:{id:"c嵌入js代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c嵌入js代码"}},[a._v("#")]),a._v(" C嵌入js代码")]),a._v(" "),s("h3",{attrs:{id:"静态硬编码传入字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态硬编码传入字符"}},[a._v("#")]),a._v(" 静态硬编码传入字符")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("无参数和无返回值")]),a._v(" "),s("ul",[s("li",[a._v("EM_ASM(console.log(''你好));")])])]),a._v(" "),s("li",[s("p",[a._v("参数和int返回值")]),a._v(" "),s("ul",[s("li",[a._v("int sum = EM_ASM_({return $0 + $1 + $2;}, 1, 2, 3);")])])]),a._v(" "),s("li",[s("p",[a._v("参数和double返回值")]),a._v(" "),s("ul",[s("li",[a._v("double pi2 = EM_ASM_DOUBLE({return $0 * $1;}, pi, 2.0);")])])]),a._v(" "),s("li",[s("p",[a._v("无参数和有int返回值")]),a._v(" "),s("ul",[s("li",[a._v("int answer = EM_ASM_INT_V(return 42);")])])]),a._v(" "),s("li",[s("p",[a._v("无参数和有double返回值")]),a._v(" "),s("ul",[s("li",[a._v("double pi_js = EM_ASM_DOUBLE_V(return 3.14159);")])])])]),a._v(" "),s("h3",{attrs:{id:"动态编码js字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态编码js字符串"}},[a._v("#")]),a._v(" 动态编码js字符串")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("有int返回值")]),a._v(" "),s("ul",[s("li",[a._v("int emscripten_run_script_int(const char *script)")])])]),a._v(" "),s("li",[s("p",[a._v("有char *返回值")]),a._v(" "),s("ul",[s("li",[a._v("char *emscripten_run_script_string(const char *script)")])])]),a._v(" "),s("li",[s("p",[a._v("无返回值")]),a._v(" "),s("ul",[s("li",[a._v("void emscripten_run_script(const char *script)")])])])]),a._v(" "),s("h2",{attrs:{id:"emcc命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emcc命令"}},[a._v("#")]),a._v(" emcc命令")]),a._v(" "),s("h3",{attrs:{id:"s-wasm-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s-wasm-0"}},[a._v("#")]),a._v(" -s WASM=0")]),a._v(" "),s("ul",[s("li",[a._v("不使用wasm")])]),a._v(" "),s("h3",{attrs:{id:"js-library-pkg-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-library-pkg-js"}},[a._v("#")]),a._v(" --js-library pkg.js")]),a._v(" "),s("ul",[s("li",[a._v("合并pkg.js当中的代码到emscripten，对于C声明，但实际实现在pkg.js当中的代码需要开启这个")])]),a._v(" "),s("h3",{attrs:{id:"std-c-11"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#std-c-11"}},[a._v("#")]),a._v(" -std=c++11")]),a._v(" "),s("ul",[s("li",[a._v('原生当中使用了c++11相关的标准时，需要开启，例如字符串转义emscripten_run_script(R"());')])]),a._v(" "),s("h3",{attrs:{id:"s-extra-exported-runtime-methods-ccall-cwrap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s-extra-exported-runtime-methods-ccall-cwrap"}},[a._v("#")]),a._v(" -s \"EXTRA_EXPORTED_RUNTIME_METHODS=['ccall', 'cwrap']\"")]),a._v(" "),s("ul",[s("li",[a._v("开启ccall/cwrap调用")])]),a._v(" "),s("h3",{attrs:{id:"s-no-exit-runtime-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s-no-exit-runtime-0"}},[a._v("#")]),a._v(" -s NO_EXIT_RUNTIME=0")]),a._v(" "),s("ul",[s("li",[a._v("main函数返回后禁止js端在原生里面调用Module，即注销Emscripten运行时")])]),a._v(" "),s("h3",{attrs:{id:"preload-file-hello-txt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preload-file-hello-txt"}},[a._v("#")]),a._v(" --preload-file hello.txt")]),a._v(" "),s("ul",[s("li",[a._v("将文件/文件夹打包成.data")])]),a._v(" "),s("h3",{attrs:{id:"s-force-filesystem-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s-force-filesystem-1"}},[a._v("#")]),a._v(" -s FORCE_FILESYSTEM=1")]),a._v(" "),s("ul",[s("li",[a._v("使用已经打包好的外部文件需要开启")])]),a._v(" "),s("h3",{attrs:{id:"s-total-memory-67108864"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s-total-memory-67108864"}},[a._v("#")]),a._v(" -s TOTAL_MEMORY=67108864")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("设置emscripten内存容量，默认为16MB，必须为64KB的整数倍，默认在运行时无法修改")])]),a._v(" "),s("li",[s("p",[a._v("var Module = {\nTOTAL_MEMORY : 134217728\n}")]),a._v(" "),s("ul",[s("li",[a._v("通过javascript设置内存容量，但必须在emscripten装载前进行设置，设置后会覆盖默认值，且无法修改")])])])]),a._v(" "),s("h3",{attrs:{id:"s-total-stack-3145728"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s-total-stack-3145728"}},[a._v("#")]),a._v(" -s TOTAL_STACK=3145728")]),a._v(" "),s("ul",[s("li",[a._v("设置栈容量，默认为5MB")])]),a._v(" "),s("h3",{attrs:{id:"s-allow-memory-growth-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s-allow-memory-growth-1"}},[a._v("#")]),a._v(" -s ALLOW_MEMORY_GROWTH=1")]),a._v(" "),s("ul",[s("li",[a._v("设置运行时可扩大内存容量，当编译目标为asm.js时，可变内存模式会影响性能，当编译目标为wasm时，可变内存模式非常高效，不会影响运行性能")])]),a._v(" "),s("h3",{attrs:{id:"s-malloc-emmalloc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s-malloc-emmalloc"}},[a._v("#")]),a._v(' -s MALLOC="emmalloc"')]),a._v(" "),s("ul",[s("li",[s("p",[a._v("dlmalloc")]),a._v(" "),s("ul",[s("li",[a._v("默认值。由Doug Lea创建的内存分配器，其变种广泛使用于Linux等。如果频繁申请大量小片内存，使用dlmalloc性能较好")])])]),a._v(" "),s("li",[s("p",[a._v("emmalloc")]),a._v(" "),s("ul",[s("li",[a._v("专为Emscripten设计的内存分配器。代码体积小于dlmalloc")])])])]),a._v(" "),s("p",[s("em",[a._v("XMind - Trial Version")])])])}),[],!1,null,null,null);t.default=e.exports}}]);