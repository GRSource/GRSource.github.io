(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{561:function(t,e,n){"use strict";n.r(e);var i=n(65),v=Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"swiftui"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#swiftui"}},[t._v("#")]),t._v(" SwiftUI")]),t._v(" "),n("p",[t._v("@State:"),n("br"),t._v("\n@State变量被view拥有。@State被内存持久性存储，所以你必须为它分配初始值，要么在外部传入初始值，要么在ContentView内初始化值。苹果建议你将@State变量标记为private类型来强调@State变量是被特定的view所持有和管理。标记为private类型后，只能载ContentView内初始化其值。")]),t._v(" "),n("p",[t._v("@Binding:"),n("br"),t._v("\n@Binding变量依赖于其它的view的@State变量。它使用$前缀进行传值，将状态绑定到另外一个view，在接收的view当中，@Binding变量时对数据的引用，所以它不需要被初始化。该引用使视图可以编辑依赖于此数据的任何视图的状态。")]),t._v(" "),n("p",[t._v("@ObservedObject:"),n("br"),t._v("\n@ObservedObject变量依赖于一个实现了ObservableObject协议的对象类型，ObservableObject协议必须实现objectWillChange属性来发布数据的改变。")]),t._v(" "),n("p",[t._v("@EnvironmentObject:"),n("br"),t._v("\n@EnvironmentObject变量依赖于共享数据。它对所有视图都是可见的。可以很方便的传递数据，而不需要从父视图传递到子视图，再传递到孙子视图。")]),t._v(" "),n("p",[t._v("通常情况下，不要在可重用的视图当中使用@State声明。而是使用@Binding和@ObservedObject。如果仅仅当前的view拥有该数据，你应该使用private。")])])}),[],!1,null,null,null);e.default=v.exports}}]);