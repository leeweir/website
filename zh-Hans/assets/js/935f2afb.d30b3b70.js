"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"v1.1 \ud83d\udea7","banner":"unreleased","badge":true,"className":"docs-version-current","isLast":false,"docsSidebars":{"docs":[{"type":"category","label":"\u5feb\u901f\u5f00\u59cb","collapsed":false,"items":[{"type":"link","label":"\u7b80\u4ecb","href":"/zh-Hans/docs/next/","docId":"introduction"},{"type":"link","label":"\u5b89\u88c5","href":"/zh-Hans/docs/next/installation","docId":"installation"}],"collapsible":true},{"type":"category","label":"\u67b6\u6784","collapsed":false,"items":[{"type":"link","label":"Overview","href":"/zh-Hans/docs/next/architecture/overview","docId":"architecture/overview"},{"type":"link","label":"Resource Model","href":"/zh-Hans/docs/next/architecture/resource-model","docId":"architecture/resource-model"},{"type":"link","label":"Priority","href":"/zh-Hans/docs/next/architecture/priority","docId":"architecture/priority"},{"type":"link","label":"QoS","href":"/zh-Hans/docs/next/architecture/qos","docId":"architecture/qos"}],"collapsible":true},{"type":"category","label":"\u7528\u6237\u624b\u518c","collapsed":true,"items":[{"type":"link","label":"Colocation Profile","href":"/zh-Hans/docs/next/user-manuals/colocation-profile","docId":"user-manuals/colocation-profile"},{"type":"link","label":"Load Aware Scheduling","href":"/zh-Hans/docs/next/user-manuals/load-aware-scheduling","docId":"user-manuals/load-aware-scheduling"},{"type":"link","label":"Fine-grained CPU Orchestration","href":"/zh-Hans/docs/next/user-manuals/fine-grained-cpu-orchestration","docId":"user-manuals/fine-grained-cpu-orchestration"},{"type":"link","label":"Resource Reservation","href":"/zh-Hans/docs/next/user-manuals/resource-reservation","docId":"user-manuals/resource-reservation"},{"type":"link","label":"PodMigrationJob","href":"/zh-Hans/docs/next/user-manuals/pod-migration-job","docId":"user-manuals/pod-migration-job"},{"type":"link","label":"Device Scheduling","href":"/zh-Hans/docs/next/user-manuals/fine-grained-device-scheduling","docId":"user-manuals/fine-grained-device-scheduling"},{"type":"link","label":"GangScheduling","href":"/zh-Hans/docs/next/user-manuals/gang-scheduling","docId":"user-manuals/gang-scheduling"},{"type":"link","label":"Multi Hierarchy Elastic Quota Management","href":"/zh-Hans/docs/next/user-manuals/multi-hierarchy-elastic-quota-management","docId":"user-manuals/multi-hierarchy-elastic-quota-management"},{"type":"link","label":"CPU Suppress","href":"/zh-Hans/docs/next/user-manuals/cpu-suppress","docId":"user-manuals/cpu-suppress"},{"type":"link","label":"CPU Burst","href":"/zh-Hans/docs/next/user-manuals/cpu-burst","docId":"user-manuals/cpu-burst"},{"type":"link","label":"Memory QoS","href":"/zh-Hans/docs/next/user-manuals/memory-qos","docId":"user-manuals/memory-qos"}],"collapsible":true},{"type":"category","label":"\u8bbe\u8ba1","collapsed":true,"items":[{"type":"link","label":"Koordlet","href":"/zh-Hans/docs/next/designs/koordlet-overview","docId":"designs/koordlet-overview"},{"type":"link","label":"RuntimeProxy","href":"/zh-Hans/docs/next/designs/runtime-proxy","docId":"designs/runtime-proxy"},{"type":"link","label":"\u8d1f\u8f7d\u611f\u77e5\u8c03\u5ea6","href":"/zh-Hans/docs/next/designs/load-aware-scheduling","docId":"designs/load-aware-scheduling"},{"type":"link","label":"Fine-grained CPU orchestration","href":"/zh-Hans/docs/next/designs/fine-grained-cpu-orchestration","docId":"designs/fine-grained-cpu-orchestration"},{"type":"link","label":"Resource Reservation","href":"/zh-Hans/docs/next/designs/resource-reservation","docId":"designs/resource-reservation"},{"type":"link","label":"PodMigrationJob","href":"/zh-Hans/docs/next/designs/pod-migration-job","docId":"designs/pod-migration-job"},{"type":"link","label":"Descheduler Framework","href":"/zh-Hans/docs/next/designs/descheduler-framework","docId":"designs/descheduler-framework"},{"type":"link","label":"Fine-grained device scheduling","href":"/zh-Hans/docs/next/designs/fine-grained-device-scheduling","docId":"designs/fine-grained-device-scheduling"},{"type":"link","label":"GangScheduling","href":"/zh-Hans/docs/next/designs/gang-scheduling","docId":"designs/gang-scheduling"},{"type":"link","label":"Multi Hierarchy Elastic Quota Management","href":"/zh-Hans/docs/next/designs/multi-hierarchy-elastic-quota-management","docId":"designs/multi-hierarchy-elastic-quota-management"}],"collapsible":true},{"type":"category","label":"\u6700\u4f73\u5b9e\u8df5","collapsed":true,"items":[{"type":"link","label":"Colocation of Spark Jobs","href":"/zh-Hans/docs/next/best-practices/colocation-of-spark-jobs","docId":"best-practices/colocation-of-spark-jobs"}],"collapsible":true}]},"docs":{"architecture/overview":{"id":"architecture/overview","title":"Overview","description":"This topic describes the architecture, components, and core concepts associated with Koordinator deployments to Kubernetes. Koordinator consists of two control planes (Koordinator Scheduler/Koordinator Manager) and one DaemonSet component (Koordlet).","sidebar":"docs"},"architecture/priority":{"id":"architecture/priority","title":"Priority","description":"Koordinator defines a set of specifications on top of kubernetes priority class, and extends a dimension of priority to support fine-grained colocation.","sidebar":"docs"},"architecture/qos":{"id":"architecture/qos","title":"QoS","description":"QoS is used to express the running quality of the Pod on the node, such as the way to obtain resources, the proportion of resources obtained, and the QoS guarantee policy.","sidebar":"docs"},"architecture/resource-model":{"id":"architecture/resource-model","title":"Resource Model","description":"Colocation is a set of resource scheduling solutions for the fine grained orchestration of latency sensitive workloads with the big data computing workloads. It needs to solve two major problems:","sidebar":"docs"},"best-practices/colocation-of-spark-jobs":{"id":"best-practices/colocation-of-spark-jobs","title":"Colocation of Spark Jobs","description":"Apache Spark is an analysis engine for large-scale data processing, which is widely used in Big Data, SQL Analysis and Machine Learning scenarios. This tutorial provides a quick practice guide about running Spark jobs in colocation mode with other latency sensitive applications by Koordinator, which is helpful for improving cluster resource utilization. For more details about how to use, compose, and work with Koordinator colocation, please refer to the Introduction","sidebar":"docs"},"designs/descheduler-framework":{"id":"designs/descheduler-framework","title":"Descheduler Framework","description":"Summary","sidebar":"docs"},"designs/fine-grained-cpu-orchestration":{"id":"designs/fine-grained-cpu-orchestration","title":"Fine-grained CPU orchestration","description":"Summary","sidebar":"docs"},"designs/fine-grained-device-scheduling":{"id":"designs/fine-grained-device-scheduling","title":"Fine-grained device scheduling","description":"Summary","sidebar":"docs"},"designs/gang-scheduling":{"id":"designs/gang-scheduling","title":"GangScheduling","description":"Summary","sidebar":"docs"},"designs/koordlet-overview":{"id":"designs/koordlet-overview","title":"Koordlet","description":"Summary","sidebar":"docs"},"designs/load-aware-scheduling":{"id":"designs/load-aware-scheduling","title":"\u8d1f\u8f7d\u611f\u77e5\u8c03\u5ea6","description":"\u6458\u8981","sidebar":"docs"},"designs/multi-hierarchy-elastic-quota-management":{"id":"designs/multi-hierarchy-elastic-quota-management","title":"Multi Hierarchy Elastic Quota Management","description":"Summary","sidebar":"docs"},"designs/pod-migration-job":{"id":"designs/pod-migration-job","title":"PodMigrationJob","description":"Summary","sidebar":"docs"},"designs/resource-reservation":{"id":"designs/resource-reservation","title":"Resource Reservation","description":"Summary","sidebar":"docs"},"designs/runtime-proxy":{"id":"designs/runtime-proxy","title":"RuntimeProxy","description":"Summary","sidebar":"docs"},"installation":{"id":"installation","title":"\u5b89\u88c5","description":"\u4ece\u7248\u672c v0.1.0 (alpha/beta) \u5f00\u59cb\uff0cKoordinator \u4f9d\u8d56 Kubernetes version >= 1.18\u3002","sidebar":"docs"},"introduction":{"id":"introduction","title":"\u7b80\u4ecb","description":"\u6b22\u8fce\u6765\u5230 Koordinator\uff01","sidebar":"docs"},"user-manuals/colocation-profile":{"id":"user-manuals/colocation-profile","title":"Colocation Profile","description":"Motivation","sidebar":"docs"},"user-manuals/cpu-burst":{"id":"user-manuals/cpu-burst","title":"CPU Burst","description":"Introduction","sidebar":"docs"},"user-manuals/cpu-suppress":{"id":"user-manuals/cpu-suppress","title":"CPU Suppress","description":"Introduction","sidebar":"docs"},"user-manuals/fine-grained-cpu-orchestration":{"id":"user-manuals/fine-grained-cpu-orchestration","title":"Fine-grained CPU Orchestration","description":"Fine-grained CPU Orchestration is an ability of koord-scheduler for improving the performance of CPU-sensitive workloads.","sidebar":"docs"},"user-manuals/fine-grained-device-scheduling":{"id":"user-manuals/fine-grained-device-scheduling","title":"Device Scheduling","description":"We provide a fine-grained mechanism for managing GPUs and other devices such as RDMA and FPGA, defines a set of APIs to","sidebar":"docs"},"user-manuals/gang-scheduling":{"id":"user-manuals/gang-scheduling","title":"GangScheduling","description":"Introduction","sidebar":"docs"},"user-manuals/load-aware-scheduling":{"id":"user-manuals/load-aware-scheduling","title":"Load Aware Scheduling","description":"Load Aware Scheduling is an ability of koord-scheduler for balancing pods scheduling based on the real-time load of each node.","sidebar":"docs"},"user-manuals/memory-qos":{"id":"user-manuals/memory-qos","title":"Memory QoS","description":"Introduction","sidebar":"docs"},"user-manuals/multi-hierarchy-elastic-quota-management":{"id":"user-manuals/multi-hierarchy-elastic-quota-management","title":"Multi Hierarchy Elastic Quota Management","description":"Multi Hierarchy ElasticQuota Management is an ability of koord-scheduler to manage different user\'s resource usage in a shared-cluster.","sidebar":"docs"},"user-manuals/pod-migration-job":{"id":"user-manuals/pod-migration-job","title":"PodMigrationJob","description":"Koordinator defines a CRD-based Pod migration API called PodMigrationJob, through which the descheduler or other automatic fault recovery components can evict or delete Pods more safely.","sidebar":"docs"},"user-manuals/resource-reservation":{"id":"user-manuals/resource-reservation","title":"Resource Reservation","description":"Resource Reservation is an ability of koord-scheduler for reserving node resources for specific pods or workloads.","sidebar":"docs"}}}')}}]);