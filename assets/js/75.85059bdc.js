(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{617:function(t,a,e){"use strict";e.r(a);var s=e(65),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"音频常识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#音频常识"}},[t._v("#")]),t._v(" 音频常识")]),t._v(" "),e("h2",{attrs:{id:"音频"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#音频"}},[t._v("#")]),t._v(" 音频")]),t._v(" "),e("p",[t._v("指人耳可以听到的声音频率在20HZ~20kHz之间的声波，称为音频。")]),t._v(" "),e("h2",{attrs:{id:"音频文件的产生"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#音频文件的产生"}},[t._v("#")]),t._v(" 音频文件的产生")]),t._v(" "),e("h3",{attrs:{id:"模拟信号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模拟信号"}},[t._v("#")]),t._v(" 模拟信号")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("PCM以后的数字信号，PCM时采样频率叫做sample rate。每一次采样可以得到若干采样数据，对应多个channel。每一个采样点得到的若干采样数据组合起来，叫做一个frame。若干frame组合起来叫做一个packet。")]),t._v(" "),e("ul",[e("li",[t._v("压缩、编码以后的音频文件")])])])]),t._v(" "),e("h2",{attrs:{id:"录音流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#录音流程"}},[t._v("#")]),t._v(" 录音流程")]),t._v(" "),e("h3",{attrs:{id:"创建audiounit描述符audiocomponentdescription的对象acd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建audiounit描述符audiocomponentdescription的对象acd"}},[t._v("#")]),t._v(" 创建AudioUnit描述符AudioComponentDescription的对象acd")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("找到合适的AudioUnit：AudioComponent component = AudioComponentFindNext(NULL, &acd);")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("创建AudioUnit实例_componentInstance：AudioComponentInstanceNew(self.component, &_componetInstance);")]),t._v(" "),e("ul",[e("li",[t._v("开启录音权限UInt32 flagOne = 1;")])]),t._v(" "),e("p",[t._v("AudioUnitSetProperty(self.componetInstance, kAudioOutputUnitProperty_EnableIO, kAudioUnitScope_Input, 1, &flagOne, sizeof(flagOne));")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("  - 创建音频流的描述符AudioStreamBasicDescription desc\n\n  \t- 将音频流描述符添加到AudioUnit的输出单元AudioUnitSetProperty(self.componetInstance, kAudioUnitProperty_StreamFormat, kAudioUnitScope_Output, 1, &desc, sizeof(desc));\n\n  \t\t- 创建音频回调结构体AURenderCallbackStruct cb;cb.inputProcRefCon = (__bridge void *)(self);\n")])])]),e("p",[t._v("cb.inputProc = handleInputBuffer;持续不断的从handleInputBuffer回调函数中获取音频流")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("  \t\t\t- 将录音回调函数添加到AudioUnit的全局属性AudioUnitSetProperty(self.componetInstance, kAudioOutputUnitProperty_SetInputCallback, kAudioUnitScope_Global, 1, &cb, sizeof(cb));\n\n  \t\t\t  录音回调，回调中使用AudioUnitRender播放\n\n  \t\t\t\t- 调用AudioUnitInitialize(self.componetInstance);给AudioUnit分配资源和准备处理音频，是线程安全的\n\n  \t\t\t\t\t- 开始录制AudioOutputUnitStart(self.componetInstance);\n\n  \t\t\t- 播放回调：AudioUnitSetProperty(_ioUnit, kAudioUnitProperty_SetRenderCallback, kAudioUnitScope_Output, 0, &playCallBack, sizeof(playCallBack));\n")])])])])]),t._v(" "),e("p",[t._v('CheckStatus(status, @"set renderCallBackError", YES);')])])]),t._v(" "),e("h3",{attrs:{id:"同时使用avaudiosession来管理音频设备这一系统的唯一资源-用来协调不同的app的工作。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同时使用avaudiosession来管理音频设备这一系统的唯一资源-用来协调不同的app的工作。"}},[t._v("#")]),t._v(" 同时使用AVAudioSession来管理音频设备这一系统的唯一资源，用来协调不同的App的工作。")]),t._v(" "),e("ul",[e("li",[t._v("是进行录音还是播放？")]),t._v(" "),e("li",[t._v("当系统静音键按下时该如何表现？")]),t._v(" "),e("li",[t._v("是从扬声器还是从听筒里面播放声音？")]),t._v(" "),e("li",[t._v("插拔耳机后如何表现？")]),t._v(" "),e("li",[t._v("来电话/闹钟响了后如何表现？")]),t._v(" "),e("li",[t._v("其他音频App启动后如何表现？")])]),t._v(" "),e("h2",{attrs:{id:"采样位数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#采样位数"}},[t._v("#")]),t._v(" 采样位数")]),t._v(" "),e("p",[t._v("即采样值或取样值（就是将采样样本幅度量化）。它是用来衡量声音波动变化的一个参数，也可以说是声卡的分辨率。它的数值越大，分辨率也就越高，所发出声音的能力越强。每个采样数据记录的是振幅, 采样精度取决于采样位数的大小，即采样位数越过，所能采集的音量范围就越广。")]),t._v(" "),e("h3",{attrs:{id:"_1-字节-也就是8bit-只能记录-256-个数-也就是只能将振幅划分成-256-个等级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-字节-也就是8bit-只能记录-256-个数-也就是只能将振幅划分成-256-个等级"}},[t._v("#")]),t._v(" 1 字节(也就是8bit) 只能记录 256 个数, 也就是只能将振幅划分成 256 个等级;")]),t._v(" "),e("h3",{attrs:{id:"_2-字节-也就是16bit-可以细到-65536-个数-这已是-cd-标准了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-字节-也就是16bit-可以细到-65536-个数-这已是-cd-标准了"}},[t._v("#")]),t._v(" 2 字节(也就是16bit) 可以细到 65536 个数, 这已是 CD 标准了;")]),t._v(" "),e("h3",{attrs:{id:"_4-字节-也就是32bit-能把振幅细分到-4294967296-个等级-实在是没必要了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-字节-也就是32bit-能把振幅细分到-4294967296-个等级-实在是没必要了"}},[t._v("#")]),t._v(" 4 字节(也就是32bit) 能把振幅细分到 4294967296 个等级, 实在是没必要了.")]),t._v(" "),e("h2",{attrs:{id:"帧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#帧"}},[t._v("#")]),t._v(" 帧")]),t._v(" "),e("p",[t._v("帧记录了一个声音单元，其长度为样本长度(采样位数)和通道数的乘积。")]),t._v(" "),e("h2",{attrs:{id:"周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#周期"}},[t._v("#")]),t._v(" 周期")]),t._v(" "),e("p",[t._v("音频设备一次处理所需要的帧数，对于音频设备的数据访问以及音频数据的存储，都是以此为单位。")]),t._v(" "),e("h2",{attrs:{id:"交错模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#交错模式"}},[t._v("#")]),t._v(" 交错模式")]),t._v(" "),e("p",[t._v("数字音频信号存储的方式。数据以连续帧的方式存放，即首先记录帧1的左声道样本和右声道样本，再开始帧2的记录")]),t._v(" "),e("h2",{attrs:{id:"非交错模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非交错模式"}},[t._v("#")]),t._v(" 非交错模式")]),t._v(" "),e("p",[t._v("首先记录的是一个周期内所有帧的左声道样本，再记录所有右声道样本。")]),t._v(" "),e("h2",{attrs:{id:"比特率"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#比特率"}},[t._v("#")]),t._v(" 比特率")]),t._v(" "),e("p",[t._v("每秒的传输速率(位速, 也叫比特率)。如705.6kbps 或 705600bps, 其中的 b 是 bit, ps 是每秒的意思，表示每秒705600bit的容量。")]),t._v(" "),e("h2",{attrs:{id:"信噪比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#信噪比"}},[t._v("#")]),t._v(" 信噪比")]),t._v(" "),e("p",[t._v("即分贝")]),t._v(" "),e("h3",{attrs:{id:"_10lg-p1-p2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10lg-p1-p2"}},[t._v("#")]),t._v(" 10lg(P1/P2)")]),t._v(" "),e("h2",{attrs:{id:"pcm数据三要素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pcm数据三要素"}},[t._v("#")]),t._v(" PCM数据三要素")]),t._v(" "),e("h3",{attrs:{id:"采样频率samplerate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#采样频率samplerate"}},[t._v("#")]),t._v(" 采样频率sampleRate")]),t._v(" "),e("p",[t._v("即取样频率, 指每秒钟取得声音样本的次数。采样频率越高,声音的质量也就越好,声音的还原也就越真实，但同时它占的资源比较多。由于人耳的分辨率很有限,太高的频率并不能分辨出来。")]),t._v(" "),e("p",[t._v("22050 的采样频率是常用的, 44100已是CD音质, 超过48000或96000的采样对人耳已经没有意义。这和电影的每秒 24 帧图片的道理差不多。")]),t._v(" "),e("p",[t._v("如果是双声道(stereo), 采样就是双份的, 文件也差不多要大一倍.")]),t._v(" "),e("p",[t._v("常见的采样率为：8k、16k、32k、44.1k、48k")]),t._v(" "),e("h3",{attrs:{id:"声道数channel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#声道数channel"}},[t._v("#")]),t._v(" 声道数channel")]),t._v(" "),e("p",[t._v("即声音的通道的数目。常有单声道和立体声之分，单声道的声音只能使用一个喇叭发声（有的也处理成两个喇叭输出同一个声道的声音），立体声可以使两个喇叭都发声（一般左右声道有分工） ，更能感受到空间效果，当然还有更多的通道数。")]),t._v(" "),e("h3",{attrs:{id:"量化格式sampleformat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#量化格式sampleformat"}},[t._v("#")]),t._v(" 量化格式sampleFormat")]),t._v(" "),e("p",[t._v("通常16个比特")]),t._v(" "),e("h2",{attrs:{id:"库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#库"}},[t._v("#")]),t._v(" 库")]),t._v(" "),e("h3",{attrs:{id:"fdk-aac"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fdk-aac"}},[t._v("#")]),t._v(" FDK_AAC")]),t._v(" "),e("p",[t._v("用来编码和解码AAC文件的开源库")]),t._v(" "),e("ul",[e("li",[t._v("AAC有很多种Profile，FDK_AAC几乎支持大部分Profile，并且支持CBR和VBR两种模式")])]),t._v(" "),e("h3",{attrs:{id:"lame"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lame"}},[t._v("#")]),t._v(" LAME")]),t._v(" "),e("p",[t._v("mp3编码引擎，转码成mp3格式时，最常用的编码器就是LAME库")]),t._v(" "),e("h3",{attrs:{id:"x264"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#x264"}},[t._v("#")]),t._v(" X264")]),t._v(" "),e("p",[t._v("X264是一个开源的H.264/MPEG-4 AVC视频编码函数库，是最好的 有损视频编码器之一")]),t._v(" "),e("ul",[e("li",[t._v("支持CBR、VBR模式")])]),t._v(" "),e("h2",{attrs:{id:"封装格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#封装格式"}},[t._v("#")]),t._v(" 封装格式")]),t._v(" "),e("h3",{attrs:{id:"mp4a"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mp4a"}},[t._v("#")]),t._v(" mp4a")]),t._v(" "),e("p",[e("em",[t._v("XMind - Trial Version")])])])}),[],!1,null,null,null);a.default=r.exports}}]);