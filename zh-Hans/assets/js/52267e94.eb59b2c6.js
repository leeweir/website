"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[7695],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return s}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),s=a,k=u["".concat(c,".").concat(s)]||u[s]||d[s]||o;return r?n.createElement(k,l(l({ref:t},m),{},{components:r})):n.createElement(k,l({ref:t},m))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4669:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={},c="Performance Collector",p={unversionedId:"user-manuals/performance-collector",id:"user-manuals/performance-collector",title:"Performance Collector",description:"\u80cc\u666f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-manuals/performance-collector.md",sourceDirName:"user-manuals",slug:"/user-manuals/performance-collector",permalink:"/zh-Hans/docs/next/user-manuals/performance-collector",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/performance-collector.md",tags:[],version:"current",lastUpdatedBy:"songtao98",lastUpdatedAt:1672820177,formattedLastUpdatedAt:"2023/1/4",frontMatter:{},sidebar:"docs",previous:{title:"\u57fa\u4e8e\u5185\u5b58\u7528\u91cf\u7684\u9a71\u9010\u7b56\u7565",permalink:"/zh-Hans/docs/next/user-manuals/memory-evict"},next:{title:"\u5bbf\u4e3b\u673a\u5e94\u7528QoS\u7ba1\u7406",permalink:"/zh-Hans/docs/next/user-manuals/host-application-qos"}},m={},d=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u51c6\u5907\u6761\u4ef6",id:"\u51c6\u5907\u6761\u4ef6",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"feature-gates",id:"feature-gates",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u5f00\u9500\u5bf9\u6bd4",id:"\u5f00\u9500\u5bf9\u6bd4",level:2},{value:"\u6d4b\u8bd5\u73af\u5883",id:"\u6d4b\u8bd5\u73af\u5883",level:3},{value:"\u6d4b\u8bd5\u7ed3\u8bba",id:"\u6d4b\u8bd5\u7ed3\u8bba",level:3},{value:"Case 1\uff1aKoordlet\u5bb9\u5668\u8fd0\u884cPerformance Collector\u524d\u540e\u5f00\u9500\u5bf9\u6bd4",id:"case-1koordlet\u5bb9\u5668\u8fd0\u884cperformance-collector\u524d\u540e\u5f00\u9500\u5bf9\u6bd4",level:4},{value:"Case 2\uff1a\u8fd0\u884cPerformance Collector\u540e\u8282\u70b9\u5f00\u9500\u5bf9\u6bd4",id:"case-2\u8fd0\u884cperformance-collector\u540e\u8282\u70b9\u5f00\u9500\u5bf9\u6bd4",level:4},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:2}],u={toc:d};function s(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"performance-collector"},"Performance Collector"),(0,o.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,o.kt)("p",null,"\u5728\u771f\u5b9e\u7684\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u5355\u673a\u7684\u8fd0\u884c\u65f6\u72b6\u6001\u662f\u4e00\u4e2a\u201c\u6df7\u6c8c\u7cfb\u7edf\u201d\uff0c\u8d44\u6e90\u7ade\u4e89\u4ea7\u751f\u7684\u5e94\u7528\u5e72\u6270\u65e0\u6cd5\u7edd\u5bf9\u907f\u514d\u3002Koordinator\u6b63\u5728\u5efa\u7acb\u5e72\u6270\u68c0\u6d4b\u4e0e\u4f18\u5316\u7684\u80fd\u529b\uff0c\u901a\u8fc7\u63d0\u53d6\u5e94\u7528\u8fd0\u884c\u72b6\u6001\u7684\u6307\u6807\uff0c\u8fdb\u884c\u5b9e\u65f6\u7684\u5206\u6790\u548c\u68c0\u6d4b\uff0c\u5728\u53d1\u73b0\u5e72\u6270\u540e\u5bf9\u76ee\u6807\u5e94\u7528\u548c\u5e72\u6270\u6e90\u91c7\u53d6\u66f4\u5177\u9488\u5bf9\u6027\u7684\u7b56\u7565\u3002\nKoordinator\u5df2\u7ecf\u5b9e\u73b0\u4e86\u4e00\u7cfb\u5217",(0,o.kt)("inlineCode",{parentName:"p"},"Performance Collector"),"\uff0c\u5728\u5355\u673a\u4fa7\u91c7\u96c6\u4e0e\u5e94\u7528\u8fd0\u884c\u72b6\u6001\u9ad8\u76f8\u5173\u6027\u7684\u5e95\u5c42\u6307\u6807\uff0c\u5e76\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"Prometheus"),"\u66b4\u9732\u51fa\u6765\uff0c\u4e3a\u5e72\u6270\u68c0\u6d4b\u80fd\u529b\u548c\u96c6\u7fa4\u5e94\u7528\u8c03\u5ea6\u63d0\u4f9b\u652f\u6301\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,o.kt)("h3",{id:"\u51c6\u5907\u6761\u4ef6"},"\u51c6\u5907\u6761\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Kubernetes >= 1.18")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Koordinator >= 1.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u82e5\u60a8\u4f7f\u7528CPI Collector\uff0c\u8bf7\u786e\u4fdd\u60a8\u7684\u673a\u5668\u652f\u6301\u83b7\u53d6Cycles\u3001Instructions\u8fd9\u4e24\u4e2aKernel PMU\uff08Performance Monitoring Unit\uff09\u4e8b\u4ef6\u3002"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u68c0\u67e5\u662f\u5426\u652f\u6301")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ perf list\nList of pre-defined events (to be used in -e):\n\n  branch-instructions OR branches                    [Hardware event]\n  branch-misses                                      [Hardware event]\n  bus-cycles                                         [Hardware event]\n  ...\n\n  cpu-cycles OR cpu/cpu-cycles/                      [Kernel PMU event]\n  ...\n  instructions OR cpu/instructions/                  [Kernel PMU event]\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u82e5\u60a8\u4f7f\u7528PSI Collector\uff0c\u60a8\u9700\u8981\u5728Anolis OS\u4e2d\u5f00\u542fPSI\u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/155464.html"},"\u6587\u6863"),"\u83b7\u53d6\u5f00\u542f\u65b9\u6cd5\u3002"))),(0,o.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("p",null,"\u8bf7\u786e\u4fddKoordinator\u7684\u76f8\u5173\u7ec4\u4ef6\u5df2\u88ab\u6b63\u786e\u5b89\u88c5\u4e8e\u60a8\u7684\u96c6\u7fa4\u4e2d\u3002\u60a8\u53ef\u4ee5\u53c2\u8003\u6587\u6863",(0,o.kt)("a",{parentName:"p",href:"https://koordinator.sh/zh-Hans/docs/installation"},"Installation"),"\u6765\u83b7\u53d6\u76f8\u5173\u7684\u5b89\u88c5\u65b9\u6cd5\u3002"),(0,o.kt)("h3",{id:"feature-gates"},"feature-gates"),(0,o.kt)("p",null,"Performance Collector\u7531\u591a\u4e2afeature-gate\u8fdb\u884c\u63a7\u5236\uff0cKoordinator\u76ee\u524d\u63d0\u4f9b\u4e00\u4e0b\u51e0\u4e2a\u6307\u6807\u91c7\u96c6\u5668\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CPICollector"),"\uff1a\u7528\u4e8e\u63a7\u5236CPI\u6307\u6807\u91c7\u96c6\u5668\u3002CPI\uff1aCycles Per Instruction\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PSICollector"),"\uff1a\u7528\u4e8e\u63a7\u5236PSI\u6307\u6807\u91c7\u96c6\u5668\u3002PSI\uff1aPressure Stall Information\u3002")),(0,o.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"Performance Collector\u76ee\u524d\u662f\u9ed8\u8ba4\u5173\u95ed\u7684\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539Koordlet\u7684feature-gates\u9879\u6765\u4f7f\u7528\u5b83\uff0c\u6b64\u9879\u4fee\u6539\u4e0d\u4f1a\u5f71\u54cd\u5176\u4ed6feature-gate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl edit ds koordlet -n koordinator-system\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"...\nspec:\n  ...\n    spec:\n      containers:\n      - args:\n        ...\n        # modify here\n        # - -feature-gates=BECPUEvict=true,BEMemoryEvict=true,CgroupReconcile=true,Accelerators=true\n        - -feature-gates=BECPUEvict=true,BEMemoryEvict=true,CgroupReconcile=true,Accelerators=true,CPICollector=true,PSICollector=true\n        ...\n")),(0,o.kt)("h2",{id:"\u5f00\u9500\u5bf9\u6bd4"},"\u5f00\u9500\u5bf9\u6bd4"),(0,o.kt)("p",null,"Koordinator Performance Collector\u4f5c\u4e3a\u5e72\u6270\u68c0\u6d4b\u7684\u91cd\u8981\u5de5\u5177\uff0c\u5176\u6838\u5fc3\u76ee\u6807\u4e4b\u4e00\u4e3a\u5728\u4f4e\u6210\u672c\u3001\u65e0\u81ea\u8eab\u5e72\u6270\u5f15\u5165\u7684\u60c5\u51b5\u4e0b\u91c7\u96c6\u76f8\u5173\u6307\u6807\u3002\u4e0b\u6587\u5c55\u793a\u4e86\u5f00\u542fPerformance Collector\u524d\u540eKoordinator\u5f15\u5165\u7684\u7cfb\u7edf\u5f00\u9500\u3002\u7528\u6237\u53ef\u53c2\u8003\u6b64\u6d4b\u8bd5\u7ed3\u679c\u4f7f\u7528Performance Collector\u529f\u80fd\u3002"),(0,o.kt)("h3",{id:"\u6d4b\u8bd5\u73af\u5883"},"\u6d4b\u8bd5\u73af\u5883"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u963f\u91cc\u4e91\u5bb9\u5668\u670d\u52a1Kubernetes\u7248\uff08ACK\uff09\u6258\u7ba1\u7248\u96c6\u7fa4\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Kubernetes\u7248\u672c\uff1a1.24.6-aliyun.1"),(0,o.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u8fd0\u884c\u65f6\uff1acontainerd 1.5.13"),(0,o.kt)("li",{parentName:"ul"},"\u8282\u70b9\u89c4\u683c\uff1aecs.ebmg6.26xlarge\uff0c104 vCPU 384 GiB\uff0c\u64cd\u4f5c\u7cfb\u7edfAlibaba Cloud Linux 2.1903"))),(0,o.kt)("li",{parentName:"ul"},"\u8282\u70b9\u8d1f\u8f7d\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5Pod\u955c\u50cf\uff1anginx:1.14.2"),(0,o.kt)("li",{parentName:"ul"},"\u5355\u8282\u70b9Pod\u6570\u91cf\uff1a100 test Pod + 50 system Pod"),(0,o.kt)("li",{parentName:"ul"},"\u5355\u8282\u70b9\u5bb9\u5668\u6570\u91cf\uff1a150"),(0,o.kt)("li",{parentName:"ul"},"\u7cfb\u7edfCPU usage\u6c34\u4f4d\uff1a25%\u5de6\u53f3\uff0c\u4f7f\u7528lookbusy-1.4\u5de5\u5177\u5728\u6bcf\u4e2aCPU\u6838\u4e0a\u751f\u4ea7\u538b\u529b"))),(0,o.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u6761\u4ef6\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"100\u4e2anginx Pod\u7531Linux cronjob\u7ba1\u7406\uff0c\u6bcf\u4e94\u5206\u949f\u5220\u9664\u4e00\u6b21\u3002Deployment\u63a7\u5236\u5668\u5c06\u4f1a\u968f\u4e4b\u8fdb\u884c\u91cd\u5efa\u3002"),(0,o.kt)("li",{parentName:"ul"},"CPI Collector\u7684\u8fd0\u884c\u65f6\u95f4\u7a97\u53e3\u4e3a\u6bcf60\u79d2\u4e00\u6b21\uff0c\u6bcf\u6b21\u6301\u7eed\u65f6\u957f10\u79d2\u3002"),(0,o.kt)("li",{parentName:"ul"},"PSI Collector\u6bcf10\u79d2\u91c7\u96c6\u4e00\u6b21\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u5728Performance Collector\u5f00\u542f\u524d\u540e\u5747\u8fd0\u884c\u4e00\u5c0f\u65f6\u3002")))),(0,o.kt)("h3",{id:"\u6d4b\u8bd5\u7ed3\u8bba"},"\u6d4b\u8bd5\u7ed3\u8bba"),(0,o.kt)("h4",{id:"case-1koordlet\u5bb9\u5668\u8fd0\u884cperformance-collector\u524d\u540e\u5f00\u9500\u5bf9\u6bd4"},"Case 1\uff1aKoordlet\u5bb9\u5668\u8fd0\u884cPerformance Collector\u524d\u540e\u5f00\u9500\u5bf9\u6bd4"),(0,o.kt)("p",null,"Performance Collector\u8fd0\u884c\u4e8eKoordinator\u7684Koordlet\u7ec4\u4ef6\uff0c\u73b0\u5c06\u5176\u5bf9\u8be5\u7ec4\u4ef6\u7684\u5f00\u9500\u5bf9\u6bd4\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u603b\u4f53\u5f00\u9500\u65e0\u660e\u663e\u4e0a\u5347\uff1a"),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5173\u952e\u6307\u6807"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5f00\u542f\u524d"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5f00\u542f\u540e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"RSS Memory usage"),(0,o.kt)("td",{parentName:"tr",align:"center"},"341MiB"),(0,o.kt)("td",{parentName:"tr",align:"center"},"366MiB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"CPU usage"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.5 core"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.6 core")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"\u7f51\u7edcI/O"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u65e0\u660e\u663e\u53d8\u5316"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6027\u80fd\u5f00\u9500\u539f\u56e0\u5206\u6790\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u65b0\u589eContainer\u7ef4\u5ea6\u7684CPI\u3001Container\u548cPod\u7ef4\u5ea6\u7684PSI\u6570\u636e\u8868"),(0,o.kt)("li",{parentName:"ul"},"\u6bcfcgroup\u552f\u4e00\u7684\u91c7\u96c6\u5668goroutine\u5e26\u6765\u7684\u6027\u80fd\u6d88\u8017"),(0,o.kt)("li",{parentName:"ul"},"Prometheus\u4e0a\u62a5\u6570\u636e\u4eea\u8868\u76d8\u5e26\u6765\u7684\u5c11\u91cf\u5185\u5b58\u6d88\u8017")))),(0,o.kt)("h4",{id:"case-2\u8fd0\u884cperformance-collector\u540e\u8282\u70b9\u5f00\u9500\u5bf9\u6bd4"},"Case 2\uff1a\u8fd0\u884cPerformance Collector\u540e\u8282\u70b9\u5f00\u9500\u5bf9\u6bd4"),(0,o.kt)("p",null,"Performance Collector\u4f7f\u7528\u4e86perf_event_open(2)\u7cfb\u7edf\u8c03\u7528\uff0c\u5e76\u5f00\u542f\u4e86\u8282\u70b9\u4e0a\u7684PSI\u529f\u80fd\uff0c\u73b0\u5c06\u5176\u5bf9\u8282\u70b9\u5f71\u54cd\u5bf9\u6bd4\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u65e0\u660e\u663e\u5f00\u9500\u589e\u957f\uff1a"),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5173\u952e\u6307\u6807"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5f00\u542f\u524d"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5f00\u542f\u540e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5185\u6838\u6001CPU\u4f7f\u7528\u7387"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.94%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.96%")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"\u7528\u6237\u6001CPU\u4f7f\u7528\u7387"),(0,o.kt)("td",{parentName:"tr",align:"center"},"24.51%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"25.19%"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6027\u80fd\u5f00\u9500\u539f\u56e0\u5206\u6790\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"perf_event_open(2)\u7684\u4f7f\u7528"),(0,o.kt)("li",{parentName:"ul"},"PSI\u529f\u80fd\u7684\u5f00\u542f")))),(0,o.kt)("h2",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6253\u5f00\u60f3\u8981\u4f7f\u7528\u7684Performance Collector\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'helm install koordinator https://... --set featureGates="CPICollector=true,PSICollector=true"\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5982\u4e0bflag\u914d\u7f6e\u6307\u6807\u91c7\u96c6\u5668\u7684\u65f6\u95f4\u7a97\u53e3\u3001\u91c7\u96c6\u95f4\u9694\u7b49\uff1a"),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"flag\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"-cpi-collector-interval-seconds"),(0,o.kt)("td",{parentName:"tr",align:"center"},"60"),(0,o.kt)("td",{parentName:"tr",align:"center"},"CPI\u6307\u6807\u91c7\u96c6\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u79d2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"-collect-cpi-timewindow-seconds"),(0,o.kt)("td",{parentName:"tr",align:"center"},"10"),(0,o.kt)("td",{parentName:"tr",align:"center"},"CPI\u6307\u6807\u91c7\u96c6\u7684\u65f6\u95f4\u7a97\u53e3\uff0c\u5355\u4f4d\u4e3a\u79d2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"-psi-collector-interval-seconds"),(0,o.kt)("td",{parentName:"tr",align:"center"},"10"),(0,o.kt)("td",{parentName:"tr",align:"center"},"PSI\u6307\u6807\u91c7\u96c6\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u79d2"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u60a8\u53ef\u4ee5\u5728Prometheus\u6307\u6807\u66b4\u9732\u7aef\u53e3\uff08\u9ed8\u8ba4\u4e3a9316\uff09\u5904\u89c2\u5bdf\u5230\u91c7\u96c6\u5230\u7684\u6307\u6807\uff0c\u67e5\u8be2 API\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"/metrics"),"\uff0cCPI\u6307\u6807\u4ee5",(0,o.kt)("em",{parentName:"p"},"cycles"),"\u548c",(0,o.kt)("em",{parentName:"p"},"instructions"),"\u4e24\u6761\u8bb0\u5f55\u5206\u5f00\u5c55\u793a\uff1a"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://localhost:9316/metrics\n\n# HELP koordlet_container_cpi Container cpi collected by koordlet\n# TYPE koordlet_container_cpi gauge\nkoordlet_container_cpi{container_id="containerd://498de02ddd3ad7c901b3c80f96c57db5b3ed9a817dbfab9d16b18be7e7d2d047",container_name="koordlet",cpi_field="cycles",node="your-node-name",pod_name="koordlet-x8g2j",pod_namespace="koordinator-system",pod_uid="3440fb9c-423b-48e9-8850-06a6c50f633d"} 2.228107503e+09\nkoordlet_container_cpi{container_id="containerd://498de02ddd3ad7c901b3c80f96c57db5b3ed9a817dbfab9d16b18be7e7d2d047",container_name="koordlet",cpi_field="instructions",node="your-node-name",pod_name="koordlet-x8g2j",pod_namespace="koordinator-system",pod_uid="3440fb9c-423b-48e9-8850-06a6c50f633d"} 4.1456092e+09\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u540c\u65f6\uff0c\u6211\u4eec\u63d0\u4f9bServiceMonitor\u7528\u4e8e\u66b4\u9732Koordlet\u91c7\u96c6\u7684\u6307\u6807\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    koord-app: koordlet\n  name: koordlet\n  namespace: koordinator-system\nspec:\n  clusterIP: None\n  ports:\n  - name: koordlet-service\n    port: 9316\n    targetPort: 9316\n  selector:\n    koord-app: koordlet\n---    \napiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  labels:\n    koord-app: koordlet\n  name: koordlet\n  namespace: koordinator-system\nspec:\n  endpoints:\n  - interval: 30s\n    port: koordlet-service\n    scheme: http\n  jobLabel: koord-app\n  selector:\n    matchLabels:\n      koord-app: koordlet\n")),(0,o.kt)("p",{parentName:"li"},"\u60a8\u53ef\u4ee5\u5728\u90e8\u7f72\u540e\u4e8ePrometheus\u7684Targets\u4e2d\u627e\u5230\u5e76\u4f7f\u7528\uff1a"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{loading:"lazy",alt:"koordlet-servicemonitor-prometheus",src:r(634).Z,width:"3276",height:"564"})))))}s.isMDXComponent=!0},634:function(e,t,r){t.Z=r.p+"assets/images/koordlet-servicemonitor-prometheus-f9dd8c0071d3b2bad20437419eb8973c.png"}}]);