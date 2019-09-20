# 2. 术语
>本节不具有规范性。

本文档试图通过使用专门术语来讨论特定概念，以传达分布式身份标识符空间中概述的概念。该术语包含在下面，并与整个文档相关联，以帮助读者：

### DID - Decentralized Identifier 分布式身份标识符

全球唯一标识符，不需要集中注册机构，因为它是使用[分布式分类帐技术](/dids/Terminology.html#distributed-ledger-aka-dlt-分布式分类帐（又名dlt）)或其他形式的分散式网络注册的。DID的通用格式在本规范中定义。在[DID method](/dids/Terminology.html#did-method)规范中定义了 特定的DID scheme。

### Decentralized Identity Management 分散身份管理

基于[分布式身份标识符]()的[身份管理]()。分散式身份管理将标识符创建权限扩展到X.500目录服务，域名系统和大多数国家ID系统所需的传统信任根之外。

### DIR - Decentralized Identifier Registry 分布式身份标识符登记处

一个系统执行角色，用于处理[分布式身份标识符]()的创建，验证，更新和停用。DIR是一种可验证数据注册表（参见[VC-DATA-MODEL](/dids/References.html#vc-data-model)）。

### DID Document DID文档

描述DID主题的一组数据 ，包括DID主题可用于验证自身并证明其与DID关联的机制，如公钥和假名生物识别。DID文档还可能包含 描述主题的其他 属性或 声明。这些文档是基于图形的数据结构，通常使用[ JSON-LD ]表示，但可以使用其他兼容的基于图形的数据格式表示。

### DID Fragment 

所述一个的部分DID URL跟随第一散列符号字符（#）。DID片段使用与URI片段相同的语法。见章节[§ 4.7 片段]() 。

### DID Method

定义如何在特定的分布式总账或网络上实现特定的DID方案，包括解决和停用DID的精确方法以及DID文档的编写和更新。

### DID Path

DID URL 的一部分，以并包含第一个正斜杠字符（/）开头。DID路径使用相同的语法作为URI路径。见章节[§ 4.5 路径 ]。

### DID Query

DID URL的第一个问号字符（?）后面 的部分。DID路径使用相同的语法作为URI路径。见章节[§ 4.6 查询 ](/dids/DecentralizedIdentifiers.html#_4-6-query)

### DID URL

[DID](#did-decentralized-identifier-分布式身份标识符)加上可选的[DID Path](#did-path)，可选?字符后跟[DID query](#did-query)，可选#字符后跟[DID fragment](#did-fragment)。

### DID Scheme

分布式身份标识符 的正式语法。通用DID方案在本说明书中定义。单独的[DID method](/dids/Terminology.html#did-method)规范定义了与该特定[DID method](/dids/Terminology.html#did-method)一起使用的特定DID方案。

### Distributed Ledger (aka DLT)  分布式分类帐（又名DLT）

一种分布式数据库，其中各个节点使用共识协议来维护共享分类帐，其中每个事务都以加密方式签名并链接到先前的事务

### Service Endpoint

服务代表[DID Subject]()运行的网络地址。特定服务的示例包括发现服务，社交网络，文件存储服务和可验证的声明存储库服务。服务端点还可以由常规的数据交换协议提供支持，例如：[Extensible Data Interchange.]() 。

### Extensible Data Interchange (aka XDI) 可扩展数据交换（又名XDI）

由[OASIS XDI Technical Committee]定义的语义图格式(semantic graph format )和语义数据交换协议(semantic data interchange protocol )。

### URI

由RFC3986定义的标识符。
