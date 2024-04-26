"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[8088],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(a),m=o,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3199:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:4},l="\u4f7f\u7528Koordinator\u5c06Hadoop YARN\u4e0eK8s\u6df7\u90e8",i={unversionedId:"best-practices/colocation-of-hadoop-yarn",id:"best-practices/colocation-of-hadoop-yarn",title:"\u4f7f\u7528Koordinator\u5c06Hadoop YARN\u4e0eK8s\u6df7\u90e8",description:"\u80cc\u666f\u4ecb\u7ecd",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/best-practices/colocation-of-hadoop-yarn.md",sourceDirName:"best-practices",slug:"/best-practices/colocation-of-hadoop-yarn",permalink:"/zh-Hans/docs/next/best-practices/colocation-of-hadoop-yarn",draft:!1,editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/best-practices/colocation-of-hadoop-yarn.md",tags:[],version:"current",lastUpdatedBy:"Frame",lastUpdatedAt:1714144488,formattedLastUpdatedAt:"2024\u5e744\u670826\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Coordinated sharing of CPU resources in Colocation Scenarios - Fine-grained CPU Orchestration",permalink:"/zh-Hans/docs/next/best-practices/fine-grained-cpu-orchestration"},next:{title:"\u4f7f\u7528 Terway QoS \u8fdb\u884c\u7f51\u7edc\u5e26\u5bbd\u9650\u5236",permalink:"/zh-Hans/docs/next/best-practices/network-qos-with-terwayqos"}},p={},s=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u7ec4\u4ef6\u5b89\u88c5",id:"\u7ec4\u4ef6\u5b89\u88c5",level:2},{value:"\u5b89\u88c5Koordinator",id:"\u5b89\u88c5koordinator",level:3},{value:"\u5b89\u88c5Hadoop YARN",id:"\u5b89\u88c5hadoop-yarn",level:3},{value:"\u5b89\u88c5Koordinator YARN Copilot",id:"\u5b89\u88c5koordinator-yarn-copilot",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\uff08\u53ef\u9009\uff09\u8fdb\u9636\u914d\u7f6e",id:"\u53ef\u9009\u8fdb\u9636\u914d\u7f6e",level:3},{value:"\u67e5\u770bYARN\u96c6\u7fa4\u4e2d\u8282\u70b9\u7684\u8d44\u6e90\u4fe1\u606f",id:"\u67e5\u770byarn\u96c6\u7fa4\u4e2d\u8282\u70b9\u7684\u8d44\u6e90\u4fe1\u606f",level:2},{value:"\u5411YARN\u96c6\u7fa4\u63d0\u4ea4\u4f5c\u4e1a",id:"\u5411yarn\u96c6\u7fa4\u63d0\u4ea4\u4f5c\u4e1a",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4f7f\u7528koordinator\u5c06hadoop-yarn\u4e0ek8s\u6df7\u90e8"},"\u4f7f\u7528Koordinator\u5c06Hadoop YARN\u4e0eK8s\u6df7\u90e8"),(0,o.kt)("h2",{id:"\u80cc\u666f\u4ecb\u7ecd"},"\u80cc\u666f\u4ecb\u7ecd"),(0,o.kt)("p",null,"Koordinator\u5df2\u7ecf\u652f\u6301\u4e86K8s\u751f\u6001\u5185\u7684\u5728\u79bb\u7ebf\u6df7\u90e8\uff0c\u901a\u8fc7Batch\u8d85\u5356\u8d44\u6e90\u4ee5\u53caBE QoS\uff0c\u79bb\u7ebf\u4efb\u52a1\u53ef\u4ee5\u4f7f\u7528\u5230\u96c6\u7fa4\u5185\u7684\u7a7a\u95f2\u8d44\u6e90\uff0c\u63d0\u5347\u8d44\u6e90\u4f7f\u7528\u6548\u7387\u3002\u7136\u800c\uff0c\n\u5728K8s\u751f\u6001\u5916\uff0c\u4ecd\u6709\u76f8\u5f53\u6570\u91cf\u7684\u7528\u6237\u4f1a\u9009\u62e9\u5c06\u5927\u6570\u636e\u4efb\u52a1\u8fd0\u884c\u5176\u4ed6\u8d44\u6e90\u7ba1\u7406\u7cfb\u7edf\uff0c\u4f8b\u5982",(0,o.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html"},"Apache Hadoop YARN"),"\u3002\n\u4f5c\u4e3a\u5927\u6570\u636e\u751f\u6001\u4e0b\u7684\u8d44\u6e90\u7ba1\u7406\u7cfb\u7edf\uff0cYARN\u627f\u8f7d\u4e86\u5305\u62ecMapReduce\u3001Spark\u3001Flink\u4ee5\u53caPresto\u7b49\u5728\u5185\u7684\u591a\u79cd\u8ba1\u7b97\u5f15\u64ce\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u8fdb\u4e00\u6b65\u4e30\u5bccKoordinator\u652f\u6301\u7684\u5728\u79bb\u7ebf\u6df7\u90e8\u573a\u666f\uff0cKoordinator\u793e\u533a\u63d0\u4f9b\u4e86\u9762\u5411\u5927\u6570\u636e\u751f\u6001\u4e0b\u7684\u6df7\u90e8\u5957\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},"Koordinator YARN Copilot"),"\uff0c\n\u652f\u6301\u5c06\u8d85\u5356\u7684Batch\u8d44\u6e90\u63d0\u4f9b\u7ed9Hadoop YARN\u4f7f\u7528\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u96c6\u7fa4\u8d44\u6e90\u7684\u4f7f\u7528\u6548\u7387\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"Koordinator YARN Copilot"),"\u5177\u5907\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9762\u5411\u5f00\u6e90\u751f\u6001\uff1a\u57fa\u4e8eHadoop YARN\u5f00\u6e90\u7248\u672c\uff0c\u4e0d\u6d89\u53ca\u5bf9YARN\u7684\u4fb5\u5165\u5f0f\u6539\u9020\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u8d44\u6e90\u4f18\u5148\u7ea7\u548cQoS\u7b56\u7565\uff1aYARN\u4efb\u52a1\u540c\u6837\u4f7f\u7528Koordinator\u7684Batch\u4f18\u5148\u7ea7\u8d44\u6e90\uff0c\u540c\u65f6\u4f1a\u53d7koordlet\u4e00\u7cfb\u5217QoS\u7b56\u7565\u7684\u7ba1\u7406\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8282\u70b9\u7ea7\u522b\u7684\u8d44\u6e90\u5171\u4eab\uff1aKoordinator\u63d0\u4f9b\u7684\u6df7\u90e8\u8d44\u6e90\uff0c\u65e2\u53ef\u88abK8s Pod\u4f7f\u7528\uff0c\u4e5f\u53ef\u88abYARN task\u4f7f\u7528\uff0c\u4e0d\u540c\u7c7b\u578b\u7684\u79bb\u7ebf\u5e94\u7528\u53ef\u5728\u540c\u4e00\u8282\u70b9\u5185\u5171\u5b58\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u9002\u914d\u591a\u79cd\u73af\u5883\uff1a\u5bf9\u8fd0\u884c\u73af\u5883\u6ca1\u6709\u4e25\u683c\u8981\u6c42\uff0c\u53ef\u4ee5\u5728\u516c\u6709\u4e91\u6216\u8005IDC\u5185\u4f7f\u7528\u3002")),(0,o.kt)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7248\u672c\u8981\u6c42"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Kubernetes"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2265v1.18")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Koordinator"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2265v1.4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Koordinator YARN Copilot"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2265v0.1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hadoop YARN"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2265v3.2.1")))),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5b89\u88c5"},"\u7ec4\u4ef6\u5b89\u88c5"),(0,o.kt)("p",null,"Koordinator\u76f8\u5173\u5bf9\u7ec4\u4ef6\u90fd\u53ef\u4ee5\u901a\u8fc7 helm v3.5+ \u5b89\u88c5\uff0cHelm \u662f\u4e00\u4e2a\u7b80\u5355\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u60a8\u53ef\u4ee5\u4ece ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"\u8fd9\u91cc")," \u83b7\u53d6\u5b83\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(1749).Z,width:"396",height:"451"})),(0,o.kt)("h3",{id:"\u5b89\u88c5koordinator"},"\u5b89\u88c5Koordinator"),(0,o.kt)("p",null,"\u8bf7\u786e\u4fddKoordinator\u5df2\u6b63\u786e\u5b89\u88c5\u5728\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002\u60a8\u53ef\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://koordinator.sh/docs/installation"},"\u5b89\u88c5\u6587\u6863"),"\u83b7\u53d6\u6709\u5173\u5b89\u88c5\u548c\u5347\u7ea7\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# Firstly add koordinator charts repository if you haven't do this.\n$ helm repo add koordinator-sh https://koordinator-sh.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install koordinator koordinator-sh/koordinator\n")),(0,o.kt)("h3",{id:"\u5b89\u88c5hadoop-yarn"},"\u5b89\u88c5Hadoop YARN"),(0,o.kt)("p",null,"Hadoop YARN\u5305\u62ecResourceManager\u548cNodeManager\u4e24\u90e8\u5206\u7ec4\u4ef6\uff0c\u82e5\u60a8\u76ee\u524d\u5df2\u7ecf\u6709\u53ef\u7528\u7684YARN\u96c6\u7fa4\uff0cKoordinator\u793e\u533a\u5efa\u8bae\u7684\u65b9\u5f0f\u662f\u4fdd\u6301ResourceManager\n\u4ee5\u5bbf\u4e3b\u673a\u8fdb\u7a0b\u7684\u65b9\u5f0f\u76f4\u63a5\u90e8\u7f72\u4e0d\u53d8\uff0c\u5c06NodeManager\u4ee5K8s Pod\u7684\u5f62\u5f0f\u90e8\u7f72\uff0c\u540e\u7eed\u968fKoordinator YARN Copilot\u7684\u8fed\u4ee3\u6f14\u8fdb\u518d\u5c06ResourceManager\u8fdb\u884c\u5bb9\u5668\u5316\u6539\u9020\u3002"),(0,o.kt)("p",null,"Koordinator\u793e\u533a\u5728Helm\u4ed3\u5e93\u4e2d\u63d0\u4f9b\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"hadoop-yarn"),"\u6837\u4f8b\u7ec4\u4ef6\uff0c\u5176\u4e2d\u5305\u62ecResourceManager\u548cNodeManager\uff0c\u4ee5\u53ca\u53ef\u4f9b\u9009\u62e9\u6027\u5b89\u88c5\u7684HDFS\u76f8\u5173\u7ec4\u4ef6\uff0c\n\u4ee5\u4fbf\u8f7b\u677e\u8fd0\u884c\u793a\u4f8b\u4f5c\u4e1a\u3002\u60a8\u53ef\u4ee5\u76f4\u63a5\u5b89\u88c5\u6837\u4f8b\u7ec4\u4ef6\u4ee5\u4fbf\u5feb\u901f\u5c1d\u8bd5YARN\u4e0eK8s\u6df7\u90e8\uff0c\u6216\u8005\u53c2\u8003\u5b98\u65b9",(0,o.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-yarn/hadoop-yarn-site/YARN.html"},"\u5b89\u88c5\u6307\u5357"),"\n\u642d\u5efa\u81ea\u5df1\u7684 YARN \u96c6\u7fa4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# Firstly add koordinator charts repository if you haven't do this.\n$ helm repo add koordinator-sh https://koordinator-sh.github.io/charts/\n\n# [Optional]\n$ helm repo update\n# Install the latest version.\n$ helm install hadoop-yarn koordinator-sh/hadoop-yarn\n\n# check hadoop yarn pods running status\nkubectl get pod -n hadoop-yarn\n")),(0,o.kt)("p",null,"\u5728\u642d\u5efaYARN\u96c6\u7fa4\u4e4b\u524d\uff0c\u60a8\u5e94\u8be5\u4e86\u89e3\u4ee5\u4e0b\u5173\u952e\u4fe1\u606f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ResourceManager\u5fc5\u987b\u80fd\u591f\u5728K8s pod\u4e2d\u8bbf\u95ee\uff0c\u65e0\u8bba\u90e8\u7f72\u65b9\u5f0f\u4e3ahost\u6a21\u5f0f\u8fd8\u662fpod\u6a21\u5f0f\u3002"),(0,o.kt)("li",{parentName:"ul"},"NodeManager\u5fc5\u987b\u90e8\u7f72\u4e3apod\u6a21\u5f0f\u90e8\u7f72\uff0c\u5e76\u5e26\u6709annotation\u6ce8\u91ca",(0,o.kt)("inlineCode",{parentName:"li"},"yarn.hadoop.apache.org/node-id=${nm-hostname}:8041"),"\uff0c\u7528\u6765\u6807\u8bc6\u5bf9\u5e94YARN\u8282\u70b9\u7684ID\u3002"),(0,o.kt)("li",{parentName:"ul"},"NodeManager\u5fc5\u987b\u4f7f\u7528CgroupsLCEResourcesHandler\u4f5c\u4e3aYARN\u7684\u5bb9\u5668\u6267\u884c\u5668\uff0c\u5e76\u5c06cgroup\u5c42\u6b21\u7ed3\u6784\u6307\u5b9a\u5728k8s best-effort\u76ee\u5f55\u4e0b\u3002"),(0,o.kt)("li",{parentName:"ul"},"NodeManager Pod\u4f7f\u7528koord-batch\u4f18\u5148\u7ea7\u8d44\u6e90\uff0c\u56e0\u6b64\u5fc5\u987b\u9884\u5148\u5b89\u88c5Koordinator\u5e76\u542f\u7528\u6df7\u90e8\u914d\u7f6e\u3002")),(0,o.kt)("p",null,"Koordinator\u63d0\u4f9b\u7684Helm\u6837\u4f8b\u4e2d\uff0c\u4ee5\u4e0a\u76f8\u5173\u529f\u80fd\u5df2\u7ecf\u5728\u9ed8\u8ba4\u914d\u7f6e\u4e2d\u5f00\u542f\uff0c\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f\u81ea\u884c\u7ef4\u62a4\u7684YARN\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003Koordinator Helm\u5e93\u4e2d\u7684\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/charts/blob/main/charts/hadoop-yarn"},"\u6837\u4f8b\u914d\u7f6e"),"\u8fdb\u884c\u4fee\u6539\u3002"),(0,o.kt)("h3",{id:"\u5b89\u88c5koordinator-yarn-copilot"},"\u5b89\u88c5Koordinator YARN Copilot"),(0,o.kt)("p",null,"Koordinator YARN Copilot\u7531",(0,o.kt)("inlineCode",{parentName:"p"},"yarn-opeartor"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"copilot-agent"),"(\u5efa\u8bbe\u4e2d)\u4e24\u90e8\u5206\u7ec4\u6210\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# Firstly add koordinator charts repository if you haven't do this.\n$ helm repo add koordinator-sh https://koordinator-sh.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install koordinator-yarn-copilot koordinator-sh/koordinator-yarn-copilot\n")),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"koord-manager\u76f8\u5173\u914d\u7f6e")),(0,o.kt)("p",null,"\u5728\u901a\u8fc7helm chart\u5b89\u88c5Koordinator\u65f6\uff0cConfigMap slo-controller-config\u5c06\u9ed8\u8ba4\u88ab\u521b\u5efa\u5728koordinator-system\u547d\u540d\u7a7a\u95f4\u4e0b\u3002YARN\u4efb\u52a1\u7684cgroup\u5c06\n\u5728K8s\u7684best-effort\u76ee\u5f55\u4e0b\u7ba1\u7406\uff0c\u8fd9\u90e8\u5206\u5c06\u4ee5Host\u5e94\u7528\u7684\u5f62\u5f0f\u5728slo-controller-config\u4e2d\u914d\u7f6e\uff0c\u6709\u5173Koordinator\u5bf9YARN\u4efb\u52a1\u7684\u8d44\u6e90\u7ba1\u7406\uff0c\u53ef\u53c2\u8003\n\u76f8\u5173",(0,o.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/issues/1727"},"issue"),"\u83b7\u53d6\u66f4\u591a\u7ec6\u8282\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0bConfigMap\uff0c\u521b\u5efaconfigmap.yaml\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\ndata:\n  colocation-config: |\n    {\n      "enable": true\n    }\n  resource-threshold-config: |\n    {\n      "clusterStrategy": {\n        "enable": true\n      }\n    }\n  resource-qos-config: |\n    {\n      "clusterStrategy": {\n        "lsrClass": {\n          "cpuQOS": {\n            "enable": true\n          }\n        },\n        "lsClass": {\n          "cpuQOS": {\n            "enable": true\n          }\n        },\n        "beClass": {\n          "cpuQOS": {\n            "enable": true\n          }\n        }\n      }\n    }\n  host-application-config: |\n    {\n      "applications": [\n        {\n          "name": "yarn-task",\n          "priority": "koord-batch",\n          "qos": "BE",\n          "cgroupPath": {\n            "base": "KubepodsBesteffort",\n            "relativePath": "hadoop-yarn/"\n          }\n        }\n      ]\n    }\nkind: ConfigMap\nmetadata:\n  name: slo-controller-config\n  namespace: koordinator-system\n')),(0,o.kt)("p",null,"\u67e5\u770b\u5b89\u88c5\u7684\u547d\u540d\u7a7a\u95f4\u4e0b\u662f\u5426\u5b58\u5728ConfigMap\uff0c\u4ee5\u547d\u540d\u7a7a\u95f4",(0,o.kt)("inlineCode",{parentName:"p"},"koordinator-system"),"\u548cConfigMap\u540d\u5b57",(0,o.kt)("inlineCode",{parentName:"p"},"slo-controller-config"),"\u4e3a\u4f8b\uff0c\u5177\u4f53\u4ee5\u5b9e\u9645\u5b89\u88c5\u914d\u7f6e\u4e3a\u51c6\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u82e5\u5b58\u5728ConfigMap ",(0,o.kt)("inlineCode",{parentName:"p"},"slo-controller-config"),"\uff0c\u8bf7\u4f7f\u7528PATCH\u65b9\u5f0f\u8fdb\u884c\u66f4\u65b0\uff0c\u907f\u514d\u5e72\u6270ConfigMap\u4e2d\u5176\u4ed6\u914d\u7f6e\u9879\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch cm -n koordinator-system slo-controller-config --patch "$(cat configmap.yaml)"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u82e5\u4e0d\u5b58\u5728ConfigMap ",(0,o.kt)("inlineCode",{parentName:"p"},"slo-controller-config"),"\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u521b\u5efaConfigMap\u3002"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f configmap.yaml\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"koord-yarn-copilot\u76f8\u5173\u914d\u7f6e\n",(0,o.kt)("inlineCode",{parentName:"li"},"koord-yarn-copilot"),"\u5728\u8fdb\u884c\u8d44\u6e90\u540c\u6b65\u65f6\u4f1a\u4e0eYARN ResourceManager\u8fdb\u884c\u901a\u4fe1\uff0c\u76f8\u5173\u914d\u7f6e\u5728\u72ec\u7acb\u7684ConfigMap\u4e2d\u8fdb\u884c\u7ba1\u7406\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\ndata:\n  core-site.xml: |\n    <configuration>\n    </configuration>\n  yarn-site.xml: |\n    <configuration>\n        <property>\n            <name>yarn.resourcemanager.admin.address</name>\n            <value>resource-manager.hadoop-yarn:8033</value>\n        </property>\n        <property>\n            <name>yarn.resourcemanager.address</name>\n            <value>resource-manager.hadoop-yarn:8032</value>\n        </property>\n    </configuration>\nkind: ConfigMap\nmetadata:\n  name: yarn-config\n  namespace: koordinator-system\n")),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728Helm Chart\u7684value\u914d\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"yarnConfiguration.resourceManager"),"\u4e2d\u4fee\u6539\u5730\u5740\u548c\u7aef\u53e3\u4fe1\u606f\u3002"),(0,o.kt)("h3",{id:"\u53ef\u9009\u8fdb\u9636\u914d\u7f6e"},"\uff08\u53ef\u9009\uff09\u8fdb\u9636\u914d\u7f6e"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/charts/blob/main/charts/hadoop-yarn"},"hadoop-yarn"),"\n\u548c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/charts/blob/main/charts/koordinator-yarn-copilot"},"koordinator-yarn-copilot"),"\n\u7684Helm\u4ed3\u5e93\uff0c\u83b7\u53d6\u66f4\u591a\u8fdb\u9636\u914d\u7f6e\u7684\u8be6\u7ec6\u8bf4\u660e\u3002"),(0,o.kt)("h2",{id:"\u67e5\u770byarn\u96c6\u7fa4\u4e2d\u8282\u70b9\u7684\u8d44\u6e90\u4fe1\u606f"},"\u67e5\u770bYARN\u96c6\u7fa4\u4e2d\u8282\u70b9\u7684\u8d44\u6e90\u4fe1\u606f"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u67e5\u770bK8s Node\u4e2d\u7684Batch\u8d44\u6e90\u603b\u91cf\u4fe1\u606f\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get node -o yaml | grep batch-cpu\n      kubernetes.io/batch-cpu: "60646"\n      kubernetes.io/batch-cpu: "60486"\n\n$ kubectl get node -o yaml | grep batch-memory\n      kubernetes.io/batch-memory: "245976973438"\n      kubernetes.io/batch-memory: "243254790644"\n')),(0,o.kt)("p",null,"2\u3002 \u67e5\u770bYARN Node\u4e2d\u7684\u8282\u70b9\u8d44\u6e90\u603b\u91cf\u4fe1\u606f\u3002\n\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95eeYARN ResourceManager\u7684Web UI\u5730\u5740",(0,o.kt)("inlineCode",{parentName:"p"},"${hadoop-yarn-rm-addr}:8088/cluster/nodes"),"\uff0c\u67e5\u770bNodeManager\u72b6\u6001\u548c\u8d44\u6e90\u603b\u91cf\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u4e86Koordinator Helm\u4ed3\u5e93\u4e2d\u63d0\u4f9b\u7684YARN\u6837\u4f8b\u7ec4\u4ef6\uff0c\u53ef\u5728\u672c\u5730\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4f7f\u5f97RM\u53ef\u4ee5\u901a\u8fc7\u672c\u673a\u5730\u5740\u76f4\u63a5\u8bbf\u95ee\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ kubectl port-forward -n hadoop-yarn service/resource-manager 8088:8088\n")),(0,o.kt)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee\u5730\u5740",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8088/cluster/nodes")),(0,o.kt)("p",null,"\u67e5\u770b\u5404\u8282\u70b9\u7684\u8d44\u6e90\u603b\u91cf\u4fe1\u606f",(0,o.kt)("inlineCode",{parentName:"p"},"VCores Avail"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"Mem Avail"),"\uff0c\u53ef\u4ee5\u770b\u5230\u5176\u4e0eK88s\u8282\u70b9\u7684Batch\u8d44\u6e90\u76f8\u540c\u3002"),(0,o.kt)("h2",{id:"\u5411yarn\u96c6\u7fa4\u63d0\u4ea4\u4f5c\u4e1a"},"\u5411YARN\u96c6\u7fa4\u63d0\u4ea4\u4f5c\u4e1a"),(0,o.kt)("p",null,"Spark\u3001Flink\u7b49\u8ba1\u7b97\u5f15\u64ce\u81ea\u8bde\u751f\u4e4b\u521d\u5c31\u652f\u6301\u5411YARN\u63d0\u4ea4\u4f5c\u4e1a\u8fd0\u884c\uff0c\u5728\u4f7f\u7528\u65f6\u53ef\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/running-on-yarn.html"},"Spark"),"\n\u548c",(0,o.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-master/docs/deployment/resource-providers/yarn/"},"Flink"),"\u5b98\u65b9\u6587\u6863\u83b7\u53d6\u8be6\u7ec6\u6b65\u9aa4\u3002"),(0,o.kt)("p",null,"\u5728Koordinator Helm\u4ed3\u5e93\u63d0\u4f9b\u7684YARN\u6837\u4f8b\u7ec4\u4ef6\u4e2d\u6211\u4eec\u5df2\u7ecf\u96c6\u6210\u4e86Spark\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5411YARN\u63d0\u4ea4\u4f5c\u4e1a\u6267\u884c\uff0c\u5e76\u5728Resource Manager\u7684Web\u754c\u9762\u4e2d\uff0c\u67e5\u770b\u4f5c\u4e1a\u7684\u6267\u884c\u60c5\u51b5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ kubectl exec -n hadoop-yarn -it ${yarn-rm-pod-name} yarn-rm -- /opt/spark/bin/spark-submit --master yarn --deploy-mode cluster --class org.apache.spark.examples.SparkPi /opt/spark/examples/jars/spark-examples_2.12-3.3.3.jar 1000\n")))}u.isMDXComponent=!0},1749:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hadoop-k8s-a092bf3c9bc72245fec2b31b173a8792.svg"}}]);