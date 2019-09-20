# 7. DID Methods
## 7.1 DID Method Schemes
DID方法规范必须完全定义一个由一个方法名称标识的特定DID方案（[第4.1节 Generic DID Syntax](#_4-1-generic-did-syntax)中的``method-name``规则）。

由于方法名称是DID的一部分，因此它应该尽可能短。建议使用五个字符或更少字符的方法名称。方法名称可以反映DID方法规范适用的[ Decentralized Identifier Registry ]()的名称。

特定DID方案的DID方法规范必须指定如何生成DID的``method-specific-id ``的id组件。必须能够在不使用集中式注册表服务的情况下生成``method-specific-id ``的值。``method-specific-id ``值应该本身是全局唯一的。[§ 4.1 Generic DID Syntax ](#_4-1-generic-did-syntax)中的did规则定义的DID必须是全局唯一的。

如果需要，特定的DID scheme可以定义多个``method-specific-id``格式。建议特定的DID scheme尽可能少地定义``method-specific-id ``格式。

## 7.2 DID Operations
要在特定的[Decentralized Identifier Registry]()上启用DID和DID文档的完整功能，DID方法规范必须指定客户端如何执行以下每个CRUD操作。必须将每个操作指定为构建和测试与目标系统的可互操作客户端实现所必需的详细级别。请注意，由于DID文档的指定内容，这些操作可以有效地用于执行CKMS（加密密钥管理系统）所需的所有操作，例如：
- Key registration
- Key replacement
- Key rotation
- Key recovery
- Key expiration

### 7.2.1 Create
DID method规范必须指定客户端如何在[Decentralized Identifier Registry]()创建DID及其关联的DID文档，包括建立控制证据所需的所有加密操作。


### 7.2.2 Read/Verify
DID method规范必须指定客户端如何使用DID从[Decentralized Identifier Registry]()请求DID文档，包括客户端如何验证响应的真实性。

### 7.2.3 Update
DID method规范必须指定客户端如何更[Decentralized Identifier Registry]()上的DID文档，包括建立控制证据所需的所有加密操作。

### 7.2.4 Deactivate
虽然分布式分类账的核心功能是不变性，但DID方法规范必须指定客户端如何在[Decentralized Identifier Registry]()上停用DID，包括建立停用证明所需的所有加密操作。

## 7.3 Unique DID Method Names
> 本节不具有规范性。

新DID方法规范的作者应该使用在发布时已知的所有DID方法名称中唯一的方法名称。

由于没有分配或批准DID方法名称的中央权限，因此无法确定特定DID方法名称是否唯一。为了应对这一挑战，W3C凭证社区小组维护着一份已知DID方法名称及其相关规范的非权威列表（请参阅附录[§ A. Registries )]()）。

[DID-METHOD-REGISTRY](/dids/References.html#did-method-registry)是实现者在对新方法名称达成共识时使用的工具，以及为不同DID方法实现§8。DID解析器的软件开发人员的信息参考。[DID-METHOD-REGISTRY](/dids/References.html#did-method-registry)不是DID方法的权威或正式列表。尽管如此，鼓励将DID方法名称添加到[DID-METHOD-REGISTRY](/dids/References.html#did-method-registry)，以便其他实现者和社区成员可以查看现有DID方法的概述。包含的轻量级标准记录在[DID-METHOD-REGISTRY](/dids/References.html#did-method-registry)中。
