# 1. 介绍
>本节不具有规范性。

传统的[identity management-身份管理](https://en.wikipedia.org/wiki/Identity_management)系统基于集中的权限，例如[directory services-公司目录服务](https://en.wikipedia.org/wiki/Directory_service)，[certificate authorities-证书颁发机构](https://en.wikipedia.org/wiki/Certificate_authority)或[domain name registries-域名注册](https://en.wikipedia.org/wiki/Domain_name_registry)。从加密信任验证的角度来看，这些集中式权限中的每一个都是其自己 的[root of trust-信任根](https://en.wikipedia.org/wiki/Trust_anchor)。要使身份管理跨这些系统工作，需要实现[federated identity management-联合身份管理](https://en.wikipedia.org/wiki/Federated_identity)。

分布式账本技术（DLT）的出现，有时也称为区块链技术，为完全[ decentralized identity management-分散的身份管理](https://w3c-ccg.github.io/did-spec/#dfn-decentralized-identity-management)提供了机会。在分散的身份系统中，实体（在诸如但不限于人和组织的离散可识别单元的意义上）可以自由地使用任何共享的信任根。全球分布式分类账，分散式P2P网络或具有类似功能的其他系统，提供了管理信任根的方法，既没有集中权限也没有单点故障。结合使用，DLT和分散式身份系统使任何实体都能够在任意数量的独立信任根上创建和管理自己的标识符。

实体由分布式身份标识符（DID）标识，并且可以通过证明（例如，数字签名，保护隐私的生物统计协议等）进行认证。DID指向DID文档。DID文档包含一组服务端点，用于与DID标识的实体（也称为DID主题）进行交互。遵循[Privacy by Design - 隐私设计](https://en.wikipedia.org/wiki/Privacy_by_design)的格言 ，任何实体可以根据需要拥有尽可能多的DID（以及相应的DID文档和服务端点），以尊重实体所需的身份，角色和背景分离。

DID方法是在特定分布式分类帐或网络上创建，读取，更新和停用DID及其关联的DID文档的机制。DID方法使用单独的DID方法规范定义。

此设计消除了对集中式注册表的依赖性以及密钥管理的集中式证书颁发机构 - 分层[PKI (public key infrastructure - PKI（公钥基础结构）](https://en.wikipedia.org/wiki/Public_key_infrastructure)中的标准模式。由于DID驻留在分布式分类帐上，因此每个实体都可以充当其自己的根权限 - 称为 [DPKI (decentralized PKI) - DPKI（分散式PKI）](https://github.com/WebOfTrustInfo/rebooting-the-web-of-trust/blob/master/final-documents/dpki.pdf)的体系结构。

注意，还可以为在联合或集中身份管理系统中注册的标识符开发DID方法。就他们而言，所有类型的标识符系统都可以添加对DID的支持。这在集中式，联合式和分散式标识符的世界之间建立了互操作性桥梁。

本规范的第一个目的是在DID文档上定义通用DID方案和一组通用操作，这些操作可以为任何[ Decentralized Identifier Registry -分布式身份标识符注册表](https://w3c-ccg.github.io/did-spec/#dfn-dir)实现。本规范的第二个目的是定义DID方法规范的一致性要求 - 一个单独的规范，它定义特定DID方案和特定分布式身份标识符注册表的特定DID文档操作集 。
::: tip
从概念上讲，此规范与DID方法规范的关系类似于IETF通用URI规范（[RFC3986](/dids/References.html#rfc3986)）与特定URI Scheme（[IANA-URI-SCHEMES](/dids/References.html#iana-uri-schemes)（例如http：和https： [RFC7230](/dids/References.html#rfc7230)中指定的方案。它也类似于IETF通用URN规范（[RFC8141](/dids/References.html#rfc8141)）和特定URN命名空间定义（如[RFC4122](/dids/References.html#rfc4122)中定义的UUID URN命名空间）的关系。不同之处在于 除了定义特定的DID方案之外，DID方法规范还必须指定用于解析和停用DID以及在写入DID的网络上编写DID文档的方法。
:::

有关DID方法及其相应规范的列表，请参阅DID方法注册表[DID-METHOD-REGISTRY](/dids/References.html#did-method-registry)

## 1.1  一个简单的例子
>本节不具有规范性。

DID是一个简单的文本字符串，由三部分组成：
1. URL方案标识符（did）
2. DID方法的标识符
3. DID方法特定的标识符

::: warning 示例1：分布式身份标识符（DID）的简单示例
did:example:123456789abcdefghi
:::
上面的DID解析为DID文档。 DID文档包含与DID相关联的信息，例如以加密方式验证控制DID的实体的方式，以及可用于与实体交互的服务。

::: warning 示例2：最小的自我管理DID文档
```json
{
  "@context": "https://w3id.org/did/v1",
  "id": "did:example:123456789abcdefghi",
  "authentication": [{
    // used to authenticate as did:...fghi
    "id": "did:example:123456789abcdefghi#keys-1",
    "type": "RsaVerificationKey2018",
    "controller": "did:example:123456789abcdefghi",
    "publicKeyPem": "-----BEGIN PUBLIC KEY...END PUBLIC KEY-----\r\n"
  }],
  "service": [{
    // used to retrieve Verifiable Credentials associated with the DID
    "type": "VerifiableCredentialService",
    "serviceEndpoint": "https://example.com/vc/"
  }]
}
```
:::

## 1.2 设计目标
>本节不具有规范性。

DID是大型系统的一个组成部分，例如可验证证书生态系统[VC-DATA-MODEL](/dids/References.html#vc-data-model)，它们推动了该规范的设计目标。本节总结了该规范的主要设计目标

| 目标        | 描述           |
| ------------- |:-------------:|
|分权|	消除标识符管理中集中权限或单点故障的要求，包括全局唯一标识符，公共验证密钥，服务端点和其他元数据的注册。|
|控制|	赋予人类和非人类实体直接控制其数字标识符的权力，而无需依赖外部权限。|
|隐私|	使实体能够控制其信息的隐私，包括属性或其他数据的最小，选择性和渐进式披露。|
|安全|	为依赖方提供足够的安全性，以依赖DID文档达到所需的保证级别。|
|证据为基础|	启用DID主题以在与其他实体交互时提供加密证据。|
|可发现|	使实体能够发现其他实体的DID，以了解有关这些实体的更多信息或与这些实体进行交互。|
|互通性|使用可互操作的标准，以便DID基础架构可以利用为互操作性而设计的现有工具和软件库。|
|可移植性|	与系统和网络无关，使实体能够将其数字标识符用于支持DID和DID方法的任何系统。|
|简单|	支持一组简单的简单功能，以使该技术更易于理解，实施和部署。|
|可扩展性|	如果可能，请启用可扩展性，前提是它不会极大地妨碍互操作性，可移植性或简单性。|
