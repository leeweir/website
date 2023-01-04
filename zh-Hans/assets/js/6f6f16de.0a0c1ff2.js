"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[4450],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(h,s(s({ref:n},c),{},{components:t})):a.createElement(h,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},738:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),s=["components"],i={},l="Resource Reservation",d={unversionedId:"user-manuals/resource-reservation",id:"version-v1.1/user-manuals/resource-reservation",title:"Resource Reservation",description:"Resource Reservation is an ability of koord-scheduler for reserving node resources for specific pods or workloads.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.1/user-manuals/resource-reservation.md",sourceDirName:"user-manuals",slug:"/user-manuals/resource-reservation",permalink:"/zh-Hans/docs/user-manuals/resource-reservation",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/resource-reservation.md",tags:[],version:"v1.1",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1672728732,formattedLastUpdatedAt:"2023/1/3",frontMatter:{},sidebar:"docs",previous:{title:"\u7cbe\u7ec6\u5316 CPU \u7f16\u6392",permalink:"/zh-Hans/docs/user-manuals/fine-grained-cpu-orchestration"},next:{title:"PodMigrationJob",permalink:"/zh-Hans/docs/user-manuals/pod-migration-job"}},c={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Installation",id:"installation",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Use Resource Reservation",id:"use-resource-reservation",level:2},{value:"Quick Start",id:"quick-start",level:3},{value:"Advanced Configurations",id:"advanced-configurations",level:3},{value:"Example: Reserve on Specified Node, with Multiple Owners",id:"example-reserve-on-specified-node-with-multiple-owners",level:3}],u={toc:p};function m(e){var n=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resource-reservation"},"Resource Reservation"),(0,o.kt)("p",null,"Resource Reservation is an ability of koord-scheduler for reserving node resources for specific pods or workloads."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Pods are fundamental for allocating node resources in Kubernetes, which bind resource requirements with business logic.\nHowever, we may allocate resources for specific pods or workloads not created yet in the scenarios below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Preemption: Existing preemption does not guarantee that only preempting pods can allocate preempted resources. We expect that the scheduler can "lock" resources preventing from allocation of other pods even if they have the same or higher priorities.'),(0,o.kt)("li",{parentName:"ol"},"De-scheduling: For the descheduler, it is better to ensure sufficient resources before pods get rescheduled. Otherwise, rescheduled pods may not be runnable anymore and make the belonging application disrupted."),(0,o.kt)("li",{parentName:"ol"},"Horizontal scaling: To achieve more deterministic horizontal scaling, we expect to allocate node resources for the replicas to scale."),(0,o.kt)("li",{parentName:"ol"},"Resource Pre-allocation: We may want to pre-allocate node resources for future resource demands even if the resources are not currently allocatable.")),(0,o.kt)("p",null,"To enhance the resource scheduling of Kubernetes, koord-scheduler provides a scheduling API named ",(0,o.kt)("inlineCode",{parentName:"p"},"Reservation"),", which allows us to reserve node resources for specified pods or workloads even if they haven't get created yet."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"image",src:t(4462).Z,width:"511",height:"371"})),(0,o.kt)("p",null,"For more information, please see ",(0,o.kt)("a",{parentName:"p",href:"../designs/resource-reservation"},"Design: Resource Reservation"),"."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kubernetes >= 1.18"),(0,o.kt)("li",{parentName:"ul"},"Koordinator >= 0.6")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Please make sure Koordinator components are correctly installed in your cluster. If not, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation"},"Installation"),"."),(0,o.kt)("h3",{id:"configurations"},"Configurations"),(0,o.kt)("p",null,"Resource Reservation is ",(0,o.kt)("em",{parentName:"p"},"Enabled")," by default. You can use it without any modification on the koord-scheduler config."),(0,o.kt)("h2",{id:"use-resource-reservation"},"Use Resource Reservation"),(0,o.kt)("h3",{id:"quick-start"},"Quick Start"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deploy a reservation ",(0,o.kt)("inlineCode",{parentName:"li"},"reservation-demo")," with the YAML file below.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.koordinator.sh/v1alpha1\nkind: Reservation\nmetadata:\n  name: reservation-demo\nspec:\n  template: # set resource requirements\n    namespace: default\n    spec:\n      containers:\n        - args:\n            - '-c'\n            - '1'\n          command:\n            - stress\n          image: polinux/stress\n          imagePullPolicy: Always\n          name: stress\n          resources: # reserve 500m cpu and 800Mi memory\n            requests:\n              cpu: 500m\n              memory: 800Mi\n      schedulerName: koord-scheduler # use koord-scheduler\n  owners: # set the owner specifications\n    - object: # owner pods whose name is `default/pod-demo-0`\n        name: pod-demo-0\n        namespace: default\n  ttl: 1h # set the TTL, the reservation will get expired 1 hour later\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create -f reservation-demo.yaml\nreservation.scheduling.koordinator.sh/reservation-demo created\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Watch the reservation status util it becomes available.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get reservation reservation-demo -o wide\nNAME               PHASE       AGE   NODE     TTL  EXPIRES\nreservation-demo   Available   88s   node-0   1h\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Deploy a pod ",(0,o.kt)("inlineCode",{parentName:"li"},"pod-demo-0")," with the YAML file below.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-demo-0 # match the owner spec of `reservation-demo`\nspec:\n  containers:\n    - args:\n        - '-c'\n        - '1'\n      command:\n        - stress\n      image: polinux/stress\n      imagePullPolicy: Always\n      name: stress\n      resources:\n        limits:\n          cpu: '1'\n          memory: 1Gi\n        requests:\n          cpu: 200m\n          memory: 400Mi\n  restartPolicy: Always\n  schedulerName: koord-scheduler # use koord-scheduler\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create -f pod-demo-0.yaml\npod/pod-demo-0 created\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Check the scheduled result of the pod ",(0,o.kt)("inlineCode",{parentName:"li"},"pod-demo-0"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod pod-demo-0 -o wide\nNAME         READY   STATUS    RESTARTS   AGE   IP            NODE     NOMINATED NODE   READINESS GATES\npod-demo-0   1/1     Running   0          32s   10.17.0.123   node-0   <none>           <none>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pod-demo-0")," is scheduled at the same node with ",(0,o.kt)("inlineCode",{parentName:"p"},"reservation-demo"),"."),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Check the status of the reservation ",(0,o.kt)("inlineCode",{parentName:"li"},"reservation-demo"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get reservation reservation-demo -oyaml\napiVersion: scheduling.koordinator.sh/v1alpha1\nkind: Reservation\nmetadata:\n  name: reservation-demo\n  creationTimestamp: "YYYY-MM-DDT05:24:58Z"\n  uid: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\n  ...\nspec:\n  owners:\n  - object:\n      name: pod-demo-0\n      namespace: default\n  template:\n    spec:\n      containers:\n      - args:\n        - -c\n        - "1"\n        command:\n        - stress\n        image: polinux/stress\n        imagePullPolicy: Always\n        name: stress\n        resources:\n          requests:\n            cpu: 500m\n            memory: 800Mi\n      schedulerName: koord-scheduler\n  ttl: 1h\nstatus:\n  allocatable: # total reserved\n    cpu: 500m\n    memory: 800Mi\n  allocated: # current allocated\n    cpu: 200m\n    memory: 400Mi\n  conditions:\n  - lastProbeTime: "YYYY-MM-DDT05:24:58Z"\n    lastTransitionTime: "YYYY-MM-DDT05:24:58Z"\n    reason: Scheduled\n    status: "True"\n    type: Scheduled\n  - lastProbeTime: "YYYY-MM-DDT05:24:58Z"\n    lastTransitionTime: "YYYY-MM-DDT05:24:58Z"\n    reason: Available\n    status: "True"\n    type: Ready\n  currentOwners:\n  - name: pod-demo-0\n    namespace: default\n    uid: yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy\n  nodeName: node-0\n  phase: Available\n')),(0,o.kt)("p",null,"Now we can see the reservation ",(0,o.kt)("inlineCode",{parentName:"p"},"reservation-demo")," has reserved 500m cpu and 800Mi memory, and the pod ",(0,o.kt)("inlineCode",{parentName:"p"},"pod-demo-0"),"\nallocates 200m cpu and 400Mi memory from the reserved resources."),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Cleanup the reservation ",(0,o.kt)("inlineCode",{parentName:"li"},"reservation-demo"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl delete reservation reservation-demo\nreservation.scheduling.koordinator.sh "reservation-demo" deleted\n$ kubectl get pod pod-demo-0\nNAME         READY   STATUS    RESTARTS   AGE\npod-demo-0   1/1     Running   0          110s\n')),(0,o.kt)("p",null,"After the reservation deleted, the pod ",(0,o.kt)("inlineCode",{parentName:"p"},"pod-demo-0")," is still running."),(0,o.kt)("h3",{id:"advanced-configurations"},"Advanced Configurations"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The latest API can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/blob/main/apis/scheduling/v1alpha1/reservation_types.go"},(0,o.kt)("inlineCode",{parentName:"a"},"reservation_types")),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.koordinator.sh/v1alpha1\nkind: Reservation\nmetadata:\n  name: reservation-demo\nspec:\n  # pod template (required): Reserve resources and play pod/node affinities according to the template.\n  # The resource requirements of the pod indicates the resource requirements of the reservation\n  template:\n    namespace: default\n    spec:\n      containers:\n        - args:\n            - '-c'\n            - '1'\n          command:\n            - stress\n          image: polinux/stress\n          imagePullPolicy: Always\n          name: stress\n          resources:\n            requests:\n              cpu: 500m\n              memory: 800Mi\n      # scheduler name (required): use koord-scheduler to schedule the reservation\n      schedulerName: koord-scheduler\n  # owner spec (required): Specify what kinds of pods can allocate resources of this reservation.\n  # Currently support three kinds of owner specifications:\n  # - object: specify the name, namespace, uid of the owner pods\n  # - controller: specify the owner reference of the owner pods, e.g. name, namespace(extended by koordinator), uid, kind\n  # - labelSelector: specify the matching labels are matching expressions of the owner pods\n  owners:\n    - object:\n        name: pod-demo-0\n        namespace: default\n    - labelSelector:\n        matchLabels:\n          app: app-demo\n  # TTL (optional): Time-To-Live duration of the reservation. The reservation will get expired after the TTL period.\n  # If not set, use `24h` as default.\n  ttl: 1h\n  # Expires (optional): Expired timestamp when the reservation is expected to expire.\n  # If both `expires` and `ttl` are set, `expires` is checked first.\n  expires: \"YYYY-MM-DDTHH:MM:SSZ\"\n")),(0,o.kt)("h3",{id:"example-reserve-on-specified-node-with-multiple-owners"},"Example: Reserve on Specified Node, with Multiple Owners"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check the resources allocatable of each node.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get node -o custom-columns=NAME:.metadata.name,CPU:.status.allocatable.cpu,MEMORY:.status.allocatable.memory\nNAME     CPU     MEMORY\nnode-0   7800m   28625036Ki\nnode-1   7800m   28629692Ki\n...\n$ kubectl describe node node-1 | grep -A 8 "Allocated resources"\n  Allocated resources:\n    (Total limits may be over 100 percent, i.e., overcommitted.)\n    Resource                     Requests     Limits\n    --------                     --------     ------\n    cpu                          780m (10%)   7722m (99%)\n    memory                       1216Mi (4%)  14044Mi (50%)\n    ephemeral-storage            0 (0%)       0 (0%)\n    hugepages-1Gi                0 (0%)       0 (0%)\n    hugepages-2Mi                0 (0%)       0 (0%)\n')),(0,o.kt)("p",null,"As above, the node ",(0,o.kt)("inlineCode",{parentName:"p"},"node-1")," has about 7.0 cpu and 26Gi memory unallocated."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Deploy a reservation ",(0,o.kt)("inlineCode",{parentName:"li"},"reservation-demo-big")," with the YAML file below.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.koordinator.sh/v1alpha1\nkind: Reservation\nmetadata:\n  name: reservation-demo-big\nspec:\n  template:\n    namespace: default\n    spec:\n      containers:\n        - args:\n            - '-c'\n            - '1'\n          command:\n            - stress\n          image: polinux/stress\n          imagePullPolicy: Always\n          name: stress\n          resources: # reserve 6 cpu and 20Gi memory\n            requests:\n              cpu: 6\n              memory: 20Gi\n      nodeName: node-1 # set the expected node name to schedule at\n      schedulerName: koord-scheduler\n  owners: # set multiple owners\n    - object: # owner pods whose name is `default/pod-demo-0`\n        name: pod-demo-1\n        namespace: default\n    - labelSelector: # owner pods who have label `app=app-demo` can allocate the reserved resources\n        matchLabels:\n          app: app-demo\n  ttl: 1h\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create -f reservation-demo-big.yaml\nreservation.scheduling.koordinator.sh/reservation-demo-big created\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Watch the reservation status util it becomes available.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get reservation reservation-demo-big -o wide\nNAME                   PHASE       AGE   NODE     TTL  EXPIRES\nreservation-demo-big   Available   37s   node-1   1h\n")),(0,o.kt)("p",null,"The reservation ",(0,o.kt)("inlineCode",{parentName:"p"},"reservation-demo-big")," is scheduled at the node ",(0,o.kt)("inlineCode",{parentName:"p"},"node-1"),", which matches the nodeName set in pod template."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Deploy a deployment ",(0,o.kt)("inlineCode",{parentName:"li"},"app-demo")," with the YAML file below.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app-demo\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: app-demo\n  template:\n    metadata:\n      name: stress\n      labels:\n        app: app-demo # match the owner spec of `reservation-demo-big`\n    spec:\n      schedulerName: koord-scheduler # use koord-scheduler\n      containers:\n      - name: stress\n        image: polinux/stress\n        args:\n          - '-c'\n          - '1'\n        command:\n          - stress\n        resources:\n          requests:\n            cpu: 2\n            memory: 10Gi\n          limits:\n            cpu: 4\n            memory: 20Gi\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create -f app-demo.yaml\ndeployment.apps/app-demo created\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Check the scheduled result of the pods of deployment ",(0,o.kt)("inlineCode",{parentName:"li"},"app-demo"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"k get pod -l app=app-demo -o wide\nNAME                        READY   STATUS    RESTARTS   AGE   IP            NODE     NOMINATED NODE   READINESS GATES\napp-demo-798c66db46-ctnbr   1/1     Running   0          2m    10.17.0.124   node-1   <none>           <none>\napp-demo-798c66db46-pzphc   1/1     Running   0          2m    10.17.0.125   node-1   <none>           <none>\n")),(0,o.kt)("p",null,"Pods of deployment ",(0,o.kt)("inlineCode",{parentName:"p"},"app-demo")," are scheduled at the same node with ",(0,o.kt)("inlineCode",{parentName:"p"},"reservation-demo-big"),"."),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Check the status of the reservation ",(0,o.kt)("inlineCode",{parentName:"li"},"reservation-demo-big"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get reservation reservation-demo-big -oyaml\napiVersion: scheduling.koordinator.sh/v1alpha1\nkind: Reservation\nmetadata:\n  name: reservation-demo-big\n  creationTimestamp: "YYYY-MM-DDT06:28:16Z"\n  uid: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\n  ...\nspec:\n  owners:\n  - object:\n      name: pod-demo-0\n      namespace: default\n  template:\n    spec:\n      containers:\n      - args:\n        - -c\n        - "1"\n        command:\n        - stress\n        image: polinux/stress\n        imagePullPolicy: Always\n        name: stress\n        resources:\n          requests:\n            cpu: 500m\n            memory: 800Mi\n      schedulerName: koord-scheduler\n  ttl: 1h\nstatus:\n  allocatable:\n    cpu: 6\n    memory: 20Gi\n  allocated:\n    cpu: 4\n    memory: 20Gi\n  conditions:\n  - lastProbeTime: "YYYY-MM-DDT06:28:17Z"\n    lastTransitionTime: "YYYY-MM-DDT06:28:17Z"\n    reason: Scheduled\n    status: "True"\n    type: Scheduled\n  - lastProbeTime: "YYYY-MM-DDT06:28:17Z"\n    lastTransitionTime: "YYYY-MM-DDT06:28:17Z"\n    reason: Available\n    status: "True"\n    type: Ready\n  currentOwners:\n  - name: app-demo-798c66db46-ctnbr\n    namespace: default\n    uid: yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy\n  - name: app-demo-798c66db46-pzphc\n    namespace: default\n    uid: zzzzzzzz-zzzz-zzzz-zzzzzzzzzzzz\n  nodeName: node-1\n  phase: Available\n')),(0,o.kt)("p",null,"Now we can see the reservation ",(0,o.kt)("inlineCode",{parentName:"p"},"reservation-demo-big")," has reserved 6 cpu and 20Gi memory, and the pods of deployment\n",(0,o.kt)("inlineCode",{parentName:"p"},"app-demo")," allocates 4 cpu and 20Gi memory from the reserved resources.\nThe allocation for reserved resources does not increase the requested of node resources, otherwise the total request of\n",(0,o.kt)("inlineCode",{parentName:"p"},"node-1")," would exceed the node allocatable.\nMoreover, a reservation can be allocated by multiple owners when there are enough reserved resources unallocated."))}m.isMDXComponent=!0},4462:function(e,n,t){n.Z=t.p+"assets/images/resource-reservation-0c5a187530dd5e3dc9c6e96f97add1ba.svg"}}]);