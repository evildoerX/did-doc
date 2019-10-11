# DID-Resolution
## Abstract
分散标识符（DID）是用于可验证的“自我主权”数字身份的新型标识符。 DID完全受DID主题的控制，独立于任何集中式注册表，身份提供者或证书颁发机构。 DID解析为DID文档—描述如何使用特定DID的简单文档。

本文档指定了用于解析DID和取消引用DID URL的算法和准则。

## Status of This Document
该规范由 Credentials Community Group发布。它不是W3C标准，也不在W3C标准轨道上。请注意，根据 W3C社区贡献者许可协议（CLA） ，选择退出的时间有限，并且需要遵守其他条件。 了解有关W3C社区和业务组的更多信息 。

欢迎对本文档发表评论。请直接在GitHub上提交问题，或将其发送到 public-credentials@w3.org （subscribe， archives）。

该规范的部分工作已由美国国土安全部科学技术局根据合同HSHQDC-17-C-00019资助。本规范的内容不一定反映美国政府的立场或政策，也不应推断出任何官方认可。

Christopher Allen，Shannon Appelcline，Kiara Robles，Brian Weller，Betty Dhamers，Kaliya Young，Kim Hamilton Duffy，Manu Sporny，Drummond Reed，Joe Andrieu和Heather Vescent。

如果您想对本文档发表意见，请将其发送至 public-credentials @ w3.org （subscribe， archives）。

## Introduction
DID Resolution 是获取给定DID的DID文档的过程。这是可以在任何DID上执行的四个必需操作之一（“读取”；其他是“创建”，“更新”和“停用”）。这些操作的细节因DID方法而异。在在DID解析的基础上，DID URL解引用是获取给定DID URL资源的过程。能够执行这些过程的软件和/或硬件称为DID解析器。该规范定义了通用要求，包括其输入和结果的算法，体系结构选项以及DID解析和DID URL解引用过程的各种注意事项 。

请注意，尽管此规范为DID解析定义了一些基本级别的功能，但与DID的分散标识符注册表进行通信所需的实际步骤由适用的 DID方法规范定义。

## Terminology
1. Decentralized Identifier (DID)
As defined in [DECENTRALIZED-IDENTIFIERS].
2. Decentralized Identifier Registry (DIR)
As defined in [DECENTRALIZED-IDENTIFIERS].
3. DID Document
As defined in [DECENTRALIZED-IDENTIFIERS].
4. DID Fragment
As defined in [DECENTRALIZED-IDENTIFIERS].
5. DID Method
As defined in [DECENTRALIZED-IDENTIFIERS].
6. DID Path
As defined in [DECENTRALIZED-IDENTIFIERS].
7. DID Query
As defined in [DECENTRALIZED-IDENTIFIERS].
8. DID Resolution
一种算法，将DID和其他选项作为输入，并返回DID文档或DID解析结果作为输出。该算法依赖于适用的DID方法的“读取”操作。
9. DID Resolver
能够对至少一种DID方法进行DID解析和DID URL解引用的软件和/或硬件
10. DID Resolution Result
表示DID解析或DID URL解引用算法结果的数据结构。可能包含DID文档。

11. DID URL
12. DID URL Dereferencing
13. Service Endpoint
