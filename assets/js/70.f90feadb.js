(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{452:function(e,t,a){"use strict";a.r(t);var s=a(43),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"android-root-free-running-core"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-root-free-running-core"}},[e._v("#")]),e._v(" Android Root-free running core")]),e._v(" "),a("p",[e._v("Android runs V2Ray-core without Root permission and configures global proxy")]),e._v(" "),a("p",[e._v("This method is suitable for users who do not frequently change the configuration and the device does not have root permissions")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Preparation tools:")]),e._v(" "),a("ul",[a("li",[e._v("computer")]),e._v(" "),a("li",[e._v("adb environment")]),e._v(" "),a("li",[e._v("Data cable (used to connect the device to the computer)")])]),e._v(" "),a("p",[e._v("Required skills:")]),e._v(" "),a("ul",[a("li",[e._v("Learn about APN settings")]),e._v(" "),a("li",[e._v("Some practical Linux experience")]),e._v(" "),a("li",[e._v("Able to [compile V2Ray-core] (https://www.v2fly.org/developer/intro/compile.html#%E5%A4%9A%E7%A7%8D%E6%9E%84%E5%BB%BA%E6%96%B9%E5%BC%8F)")]),e._v(" "),a("li",[e._v("Able to set the environment variables of the operating system you are using")])]),e._v(" "),a("p",[e._v("Tested terminal environment:")]),e._v(" "),a("ul",[a("li",[e._v("Android 10")]),e._v(" "),a("li",[e._v("ARM V8")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("note")]),e._v(" "),a("p",[e._v("Since Golang only supports Android 10+, lower versions of Android may not be able to run through this method")])]),e._v(" "),a("p",[e._v("Disadvantages:")]),e._v(" "),a("ul",[a("li",[e._v("You need to manually start the program after the device restarts")]),e._v(" "),a("li",[e._v("USB will automatically end all processes started by this method when using the "),a("code",[e._v("file transfer")]),e._v(" mode")])]),e._v(" "),a("h2",{attrs:{id:"preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("This phenomenon has been dealt with in v4.34+ version, you can directly proceed to the "),a("a",{attrs:{href:"#compile"}},[e._v("compile")]),e._v(" step")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://github.com/v2fly/v2ray-core/pull/572",target:"_blank",rel:"noopener noreferrer"}},[e._v("#572"),a("OutboundLink")],1),e._v(" for details")]),e._v(" "),a("p",[e._v("If you want to customize the default DNS, you can still use the solution to modify the source code in "),a("a",{attrs:{href:"#Solution"}},[e._v("Solution")])])]),e._v(" "),a("p",[e._v("Since there is no "),a("code",[e._v("/etc/resolv.conf")]),e._v(" in the Android system and it cannot be created without Root permission, the Go language cannot read the file and uses the default address "),a("code",[e._v("127.0.0.1:53")]),e._v(" (but Android There is no local DNS of 53), and because of the system limitation, it cannot monitor the lower port number and cannot be used\nV2Ray handles this problem; therefore, running "),a("code",[e._v("core")]),e._v(" directly will cause DNS resolution problems due to the influence of the Go language (Android)")]),e._v(" "),a("h3",{attrs:{id:"solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[e._v("#")]),e._v(" Solution")]),e._v(" "),a("p",[e._v("After cloning the code, "),a("a",{attrs:{href:"https://github.com/v2fly/v2ray-core/blob/master/infra/conf/dns_bootstrap_android.go#L10",target:"_blank",rel:"noopener noreferrer"}},[e._v("modify here"),a("OutboundLink")],1),e._v("; for example, modify DNS to "),a("code",[e._v("1.1.1.1")])]),e._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" bootstrapDNS "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1.1.1.1:53"')]),e._v("\n")])])]),a("p",[e._v("Only supports traditional UDP DNS")]),e._v(" "),a("h2",{attrs:{id:"compile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile"}},[e._v("#")]),e._v(" Compile")]),e._v(" "),a("p",[e._v("Go language mainly controls the compilation environment through "),a("code",[e._v("GOOS")]),e._v(" and "),a("code",[e._v("GOARCH")])]),e._v(" "),a("h3",{attrs:{id:"environment-variable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-variable"}},[e._v("#")]),e._v(" Environment variable")]),e._v(" "),a("p",[e._v("Using "),a("code",[e._v("arm64")]),e._v(" is ARM V8")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("SET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GOOS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("android\nSET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GOARCH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("arm64\n")])])]),a("p",[e._v("Other ARM architectures, such as V7")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("SET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GOOS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("android\nSET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GOARCH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("arm\nSET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GOARM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v("\n")])])]),a("p",[e._v("Enter the "),a("code",[e._v("v2ray-core")]),e._v(" directory, the complete command is as follows (Windows)")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("SET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CGO_ENABLED")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nSET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GOOS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("android\nSET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GOARCH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("arm64\ngo build -o D:/v2ray -trimpath -ldflags "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"-s -w -buildid="')]),e._v(" ./main\ngo build -o D:/v2ctl -trimpath -ldflags "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"-s -w -buildid="')]),e._v(" -tags confonly ./infra/control/main\n")])])]),a("p",[e._v("The compiled program is placed in "),a("code",[e._v("D:/")])]),e._v(" "),a("h2",{attrs:{id:"resource-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resource-storage"}},[e._v("#")]),e._v(" Resource storage")]),e._v(" "),a("p",[e._v("Put "),a("code",[e._v("v2ray")]),e._v(" and "),a("code",[e._v("v2ctl")]),e._v(" and configuration files and other resources into the internal storage of your device")]),e._v(" "),a("p",[e._v('For example, "Mobile phone internal storage/V2Ray" folder')]),e._v(" "),a("h2",{attrs:{id:"run-v2ray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-v2ray"}},[e._v("#")]),e._v(" Run V2Ray")]),e._v(" "),a("h3",{attrs:{id:"connect-to-adb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-adb"}},[e._v("#")]),e._v(" Connect to ADB")]),e._v(" "),a("ol",[a("li",[e._v("Use the data cable to connect to the computer")]),e._v(" "),a("li",[e._v("Turn on USB debugging of the device")]),e._v(" "),a("li",[e._v('Enable ADB debugging in "Charge Only" mode')]),e._v(" "),a("li",[e._v('Change the USB connection mode to "File Transfer"')])]),e._v(" "),a("h3",{attrs:{id:"testing-equipment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-equipment"}},[e._v("#")]),e._v(" Testing Equipment")]),e._v(" "),a("p",[e._v("Open the terminal and enter the following command")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("adb devices\n")])])]),a("p",[e._v('If the device prompts "Whether to allow USB debugging", check "Always allow..." and confirm')]),e._v(" "),a("p",[e._v("If the terminal displays as follows, the connection is successful")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("List of devices attached\n1234567C06011253        device\n")])])]),a("h3",{attrs:{id:"transfer-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transfer-files"}},[e._v("#")]),e._v(" Transfer files")]),e._v(" "),a("p",[e._v("Continue to enter the following command, the terminal will become the identifier of the mobile phone at this time")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("adb shell\n")])])]),a("p",[e._v("Copy the V2Ray program in the internal storage of the device to the temporary directory of the device and give permission")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cp /sdcard/V2Ray/* /data/local/tmp/\ncd /data/local/tmp/\nchmod 777 v2*\n")])])]),a("p",[e._v("Try to run it; due to system limitations, it is recommended to use port numbers above "),a("code",[e._v("1024")]),e._v(" for inbound in Inbound")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./v2ray\n")])])]),a("p",[e._v("After the test is no problem, press "),a("code",[e._v("Ctrl+C")]),e._v(' to end the process, and then change the USB transfer mode to "charge only"')]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("note")]),e._v(" "),a("p",[e._v('Due to Android system limitations, all programs running through this method will be terminated when the connection is disconnected in the "transfer file" mode.')])]),e._v(" "),a("p",[e._v("Connect again to the "),a("code",[e._v("/data/local/tmp")]),e._v(" directory")]),e._v(" "),a("p",[e._v("Run V2Ray in the background")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("nohup")]),e._v(" ./v2ray "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n")])])]),a("p",[e._v("At this point, open the task manager, find the process named "),a("code",[e._v("adb")]),e._v(" and end it; if there are two processes in Windows, end the second one")]),e._v(" "),a("p",[e._v("This can solve the problem that the process is terminated after adb is disconnected")]),e._v(" "),a("h2",{attrs:{id:"global-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-proxy"}},[e._v("#")]),e._v(" Global proxy")]),e._v(" "),a("p",[e._v("The system APN is used here to complete. Inbound requires an HTTP inbound proxy")]),e._v(" "),a("p",[e._v("Since the default APN is not allowed to be changed, it is necessary to create a new APN; copy the default content.")]),e._v(" "),a("p",[e._v("In the settings, fill in "),a("code",[e._v("127.0.0.1")]),e._v(' in the "Proxy" column, the port number is your HTTP inbound port number, save it')]),e._v(" "),a("p",[e._v("Go back to the upper setting and select this APN")]),e._v(" "),a("h3",{attrs:{id:"detail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detail"}},[e._v("#")]),e._v(" detail")]),e._v(" "),a("p",[e._v("HTTP proxy is only used in HTTP scenarios. In theory, it will not affect the game match, but there is no experiment here.")]),e._v(" "),a("p",[e._v("Most applications using APN's proxy method will work, but special applications such as Telegram will not work")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The in-app settings of such programs usually provide the option to set the proxy, you can set it manually")])]),e._v(" "),a("p",[e._v("Because this method is inconvenient to update resources, it is recommended to use the "),a("code",[e._v("IPOnDemand")]),e._v(" mode for reliable DNS routing")]),e._v(" "),a("h2",{attrs:{id:"other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[e._v("#")]),e._v(" other")]),e._v(" "),a("p",[e._v("Compared with shell apps, long-running of the "),a("code",[e._v("core")]),e._v(" started in this way will not cause the device to heat up and cause significant power consumption")])])}),[],!1,null,null,null);t.default=o.exports}}]);