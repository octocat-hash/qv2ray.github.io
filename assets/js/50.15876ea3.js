(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{424:function(a,t,n){"use strict";n.r(t);var r=n(17),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"关于-wayland-的一些说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于-wayland-的一些说明"}},[a._v("#")]),a._v(" 关于 Wayland 的一些说明")]),a._v(" "),n("p",[n("strong",[a._v("注意：本章节仅仅涉及到 GNU/Linux 系统")])]),a._v(" "),n("h2",{attrs:{id:"运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[a._v("#")]),a._v(" 运行")]),a._v(" "),n("p",[a._v("Qv2ray 是原生的 Qt5/C++ 程序，，能够完整地支持 Wayland 显示协议。不过，若要使 Qv2ray 运行在 Wayland 协议下，你需要一个 Wayland 会话（比如 Gnome 会话、KDE Wayland 会话、Sway 等），同时还需要安装 Qt5 的 Wayland 支持（包名一般是 "),n("code",[a._v("qt5-wayland")]),a._v(" 或 "),n("code",[a._v("qtwayland5")]),a._v("）。")]),a._v(" "),n("p",[a._v("如果一切就绪，那么你可以试着通过 Wayland 显示协议运行 Qv2ray 了。")]),a._v(" "),n("h3",{attrs:{id:"gnome-环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gnome-环境"}},[a._v("#")]),a._v(" Gnome 环境")]),a._v(" "),n("p",[a._v("Gnome 环境下的 Qt5 程序默认使用 Xorg 协议运行于 Xwayland 上（Xorg 在 Wayland 下的后备模式）。因此，如果要让 Qv2ray 运行在 Wayland 显示协议下你需要运行如下命令：")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("QT_QPA_PLATFORM")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("wayland qv2ray\n")])])]),n("p",[a._v("运行效果如下：\n"),n("a",{attrs:{href:"https://imgchr.com/i/BIuwb4",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://s1.ax1x.com/2020/11/07/BIuwb4.png",alt:"Qv2ray On Wayland in Gnome Session"}}),n("OutboundLink")],1)]),a._v(" "),n("p",[a._v("你可以将 "),n("code",[a._v("QT_QPA_PLATFORM=wayland")]),a._v(" 添加到 Qv2ray 的 desktop 文件，这样 Qv2ray 就可以在启动的时候就使用 Wayland 显示协议了。")]),a._v(" "),n("h3",{attrs:{id:"kde-plasma-wayland-会话"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kde-plasma-wayland-会话"}},[a._v("#")]),a._v(" KDE Plasma Wayland 会话")]),a._v(" "),n("p",[a._v("理论上默认就走 Wayland 显示协议，但是尚未验证过。指定 Qv2ray 走 Wayland 显示协议的方法同上。")]),a._v(" "),n("h3",{attrs:{id:"sway"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sway"}},[a._v("#")]),a._v(" Sway")]),a._v(" "),n("p",[a._v("未曾测试过，欢迎有使用经验的人作出贡献。指定 Qv2ray 走 Wayland 显示协议的方法同上。")]),a._v(" "),n("h2",{attrs:{id:"疑难排查"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#疑难排查"}},[a._v("#")]),a._v(" 疑难排查")]),a._v(" "),n("h3",{attrs:{id:"无法运行于-wayland"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#无法运行于-wayland"}},[a._v("#")]),a._v(" 无法运行于 Wayland")]),a._v(" "),n("p",[a._v("你可能在使用基于 Xorg 的桌面会话，或者你没有安装 Qt5 的 Wayland 组件。或者，你静态编译了 Qv2ray，但是未加入 Qt5 的 Wayland 组件。")]),a._v(" "),n("h3",{attrs:{id:"运行在-wayland-显示协议下能否加快翻墙速度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行在-wayland-显示协议下能否加快翻墙速度"}},[a._v("#")]),a._v(" 运行在 Wayland 显示协议下能否加快翻墙速度？")]),a._v(" "),n("p",[a._v("不能，谢谢。")]),a._v(" "),n("h3",{attrs:{id:"gnome-下没有托盘图标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gnome-下没有托盘图标"}},[a._v("#")]),a._v(" Gnome 下没有托盘图标")]),a._v(" "),n("p",[a._v("Gnome 桌面本就不支持托盘图标。Ubuntu 做了个"),n("a",{attrs:{href:"https://extensions.gnome.org/extension/1301/ubuntu-appindicators/",target:"_blank",rel:"noopener noreferrer"}},[a._v("扩展"),n("OutboundLink")],1),a._v("来支持了一个基于 DBus 通讯的 Gnome 托盘扩展。目前测试的结果是此扩展能在 Arch Linux 下显示运行于 Wayland 的 Qv2ray 的托盘，但是在 Ubuntu 定制的 Ubuntu Wayland 会话下可能无法显示。此为上游的问题，本项目无法处理。")])])}),[],!1,null,null,null);t.default=s.exports}}]);