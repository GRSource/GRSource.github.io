(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{613:function(a,t,r){"use strict";r.r(t);var s=r(65),v=Object(s.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"视频常识"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#视频常识"}},[a._v("#")]),a._v(" 视频常识")]),a._v(" "),r("h2",{attrs:{id:"一般来说-i帧的压缩率是7-p是20-b是50"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一般来说-i帧的压缩率是7-p是20-b是50"}},[a._v("#")]),a._v(" 一般来说，I帧的压缩率是7，P是20，B是50")]),a._v(" "),r("h2",{attrs:{id:"avframe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#avframe"}},[a._v("#")]),a._v(" AVFrame")]),a._v(" "),r("p",[a._v("AVFrame结构体 来描述解码后或编码前的原始数据，对于视频来说，AVFrame就是视频 的一帧图像")]),a._v(" "),r("h2",{attrs:{id:"avpacket"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#avpacket"}},[a._v("#")]),a._v(" AVPacket")]),a._v(" "),r("p",[a._v("FFmpeg中使用 AVPacket结构体来描述解码前或编码后的压缩数据")]),a._v(" "),r("h2",{attrs:{id:"位图bitmap"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#位图bitmap"}},[a._v("#")]),a._v(" 位图bitmap")]),a._v(" "),r("h3",{attrs:{id:"分辨率x每个像素的字节数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分辨率x每个像素的字节数"}},[a._v("#")]),a._v(" 分辨率x每个像素的字节数")]),a._v(" "),r("p",[a._v("比如rgba_8888计算：\n1280 * 720 * 4 = 3.516MB")]),a._v(" "),r("h2",{attrs:{id:"yuv"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yuv"}},[a._v("#")]),a._v(" YUV")]),a._v(" "),r("p",[a._v("Y表示亮度，通过RGB信号的特定部分叠加计算得来。\nUV定义了颜色的两个方面色调和饱和度，Cr反映了红色部分与亮度之间的差异，Cb反映了蓝色部分和亮度之间的差异")]),a._v(" "),r("h3",{attrs:{id:"rec-601和bt-709中-y范围为16-235-uv范围为16-240"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rec-601和bt-709中-y范围为16-235-uv范围为16-240"}},[a._v("#")]),a._v(" Rec.601和BT.709中，Y范围为16-235，UV范围为16-240")]),a._v(" "),r("h2",{attrs:{id:"帧间编码技术"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#帧间编码技术"}},[a._v("#")]),a._v(" 帧间编码技术")]),a._v(" "),r("h3",{attrs:{id:"运动补偿"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运动补偿"}},[a._v("#")]),a._v(" 运动补偿")]),a._v(" "),r("p",[a._v("运动补偿是通过先前的局部图像来预测、补偿当前的 局部图像，它是减少帧序列冗余信息的有效方法。")]),a._v(" "),r("h3",{attrs:{id:"运动表示"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运动表示"}},[a._v("#")]),a._v(" 运动表示")]),a._v(" "),r("p",[a._v("不同区域的图像需要使用不同的运动矢量来描述运动 信息。")]),a._v(" "),r("h3",{attrs:{id:"运动估计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运动估计"}},[a._v("#")]),a._v(" 运动估计")]),a._v(" "),r("p",[a._v("运动估计是从视频序列中抽取运动信息的一整套技 术。")]),a._v(" "),r("h2",{attrs:{id:"i帧"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#i帧"}},[a._v("#")]),a._v(" I帧")]),a._v(" "),r("p",[a._v("去除空间冗余信息")]),a._v(" "),r("h2",{attrs:{id:"p帧"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#p帧"}},[a._v("#")]),a._v(" P帧")]),a._v(" "),r("p",[a._v("去除空间冗余信息")]),a._v(" "),r("h2",{attrs:{id:"b帧"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b帧"}},[a._v("#")]),a._v(" B帧")]),a._v(" "),r("p",[a._v("去除时间冗余信息")]),a._v(" "),r("h2",{attrs:{id:"idr帧"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#idr帧"}},[a._v("#")]),a._v(" IDR帧")]),a._v(" "),r("p",[a._v("特殊的I帧，一旦收到一个IDR帧，就会立即清理参考帧缓冲区，并将IDR帧作为被参考的帧")]),a._v(" "),r("h2",{attrs:{id:"pts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pts"}},[a._v("#")]),a._v(" PTS")]),a._v(" "),r("p",[a._v("显示时间错")]),a._v(" "),r("h2",{attrs:{id:"dts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dts"}},[a._v("#")]),a._v(" DTS")]),a._v(" "),r("p",[a._v("解码时间戳")]),a._v(" "),r("h2",{attrs:{id:"pps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pps"}},[a._v("#")]),a._v(" PPS")]),a._v(" "),r("h2",{attrs:{id:"sps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sps"}},[a._v("#")]),a._v(" SPS")]),a._v(" "),r("h2",{attrs:{id:"gop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gop"}},[a._v("#")]),a._v(" GOP")]),a._v(" "),r("p",[a._v("两个I帧之间形成的一组图片，就是GOP，通常编码器需要设置gop_size的值")]),a._v(" "),r("h2",{attrs:{id:"封装格式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#封装格式"}},[a._v("#")]),a._v(" 封装格式")]),a._v(" "),r("h3",{attrs:{id:"avc1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#avc1"}},[a._v("#")]),a._v(" AVC1")]),a._v(" "),r("p",[r("em",[a._v("XMind - Trial Version")])])])}),[],!1,null,null,null);t.default=v.exports}}]);