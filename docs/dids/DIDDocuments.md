# 5. DID Documents
DID指向 DID Document。  DID Document是[§ 3. Data Model ]()的序列化。以下部分定义 DID Document的属性，同时说明这些属性是必需的还是可选的。

## 5.1 Contexts
当两个软件系统需要交换数据时，它们必须使用两个系统都能理解的术语和协议。作为类比，考虑两个人如何沟通。两个人都必须使用相同的语言，他们使用的单词必须相同。此规范使用@context属性来表示对话的上下文。

**@context**: @context属性的值必须是一个或多个URIs，其中第一个URI的值是``https://www.w3.org/2019/did/v1``。如果提供了多个URI，则URI必须被解释为有序集。建议在包含有关上下文的``machine-readable``信息的文档中取消引用URI结果。

``DID Documents``必须包含``@context``属性。 ``JSON-LD Context ``在[JSON-LD]()规范中有详细描述。本声明的规则是：
1. DID Document 必须只有一个顶级上下文语句。
2. 这个属性的key必须是``@context``。
3. 此key的值必须是通用DID context的URL：``https：//w3id.org/did/v1``。

示例（使用示例URL）：
::: warning EXAMPLE 6
``` json
{
  "@context": "https://w3id.org/did/v1"
}
```
:::

DID method规范可以定义自己的JSON-LD contexts。但是，除非有必要正确实施该方法，否则不建议定义新的上下文。特定于方法的上下文绝不能覆盖通用DID context定义的术语。

## 5.2 DID Subject
DID subject是DID Document所关注的标识符，即，它是DID Document描述的DID。 DID subject的规则是：
1. DID Document必须只有一个DID subject。
2. 这个属性的Key必须是``id``。
3. 该key的值必须是有效的DID。
4. 当此DID Document向``Decentralized Identifier Registry,``注册时，已注册的DID必须与此DID主题值匹配。

示例：
::: warning EXAMPLE 7
``` json
{
  "id": "did:example:21tDAKCERh95uGgKbJNHYp"
}
```
:::

::: tip
DID Method规范可以创建不包含id key的 DID Document的中间表示，例如DID解析器执行解析时。但是，完全解析的 DID Document必须包含有效的id属性。
:::

## 5.3 Public Keys
公钥用于数字签名，加密和其他加密操作，而这些操作又是身份验证等目的的基础(参见章节[§ 5.4 Authentication]())或与``service endpoints``[(参见章节 § 5.6 Service Endpoints )]()建立安全通信。此外，公钥可能在``DID CRUD``操作的授权机制中起作用[(参见章节 § 7.2 DID Operations )]()。这可以通过DID Method规范来定义。

如果DID文档中不存在公钥，必须假设密钥已被撤销或无效。DID文档可能包含已撤销的密钥。包含撤销密钥的DID文档还必须包含或引用密钥的撤销信息（例如，撤销列表）。每个DID方法规范都要详细说明如何执行和跟踪撤销。

public keys的规则是：
1. DID文档可以包含publicKey属性。
2. publicKey属性的值必须是一个公钥数组，每个publicKey属性必须是[Linked Data Cryptographic Suite](https://w3c-ccg.github.io/ld-cryptosuite-registry/)注册表中的。
3. 每个publicKey必须包含id和type属性，以及一个value属性。publicKey数组不应该包含具有相同id和具有不同格式的不同值属性的重复条目。
4. 每个publicKey必须包含一个controller属性，用于标识相应private key的controller。
5. 附录[§ A. Registries]()中提供了关键类型和格式的注册表。

::: tip
以下是社区使用的公开密钥属性的非详尽(non-exhaustive)列表：
``publicKeyPem``, ``publicKeyJwk``, ``publicKeyHex``, ``publicKeyBase64``, ``publicKeyBase58``, ``publicKeyMultibase``, ``ethereumAddress``.
:::

例:

::: warning EXAMPLE 8: Various public keys
```json
{
  "@context": ["https://w3id.org/did/v1", "https://w3id.org/security/v1"],
  "id": "did:example:123456789abcdefghi",
  ...
  "publicKey": [{
    "id": "did:example:123456789abcdefghi#keys-1",
    "type": "RsaVerificationKey2018",
    "controller": "did:example:123456789abcdefghi",
    "publicKeyPem": "-----BEGIN PUBLIC KEY...END PUBLIC KEY-----\r\n"
  }, {
    "id": "did:example:123456789abcdefghi#keys-2",
    "type": "Ed25519VerificationKey2018",
    "controller": "did:example:pqrstuvwxyz0987654321",
    "publicKeyBase58": "H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
  }, {
    "id": "did:example:123456789abcdefghi#keys-3",
    "type": "Secp256k1VerificationKey2018",
    "controller": "did:example:123456789abcdefghi",
    "publicKeyHex": "02b97c30de767f084ce3080168ee293053ba33b235d7116a3263d29f1450936b71"
  }],
  ...
}
```
:::

可以在DID文档中嵌入或引用密钥。例如，身份验证(authentication)属性可以通过两种方式引用密钥：

::: warning EXAMPLE 9: Various public keys
```json
{
...

  "authentication": [
    // this key is referenced, it may be used for more than one proof purpose
    "did:example:123456789abcdefghi#keys-1",
    // this key is embedded and may *only* be used for authentication
    {
      "id": "did:example:123456789abcdefghi#keys-2",
      "type": "Ed25519VerificationKey2018",
      "controller": "did:example:123456789abcdefghi",
      "publicKeyBase58": "H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
    }
  ],

...
}
```
:::
处理DID文档中的publicKey属性时使用的算法是：
1. 设value为与publicKey属性关联的数据，并将result初始化为null。
2. 如果value是对象，the key material is embedded. 将结果设置为值。
3. 如果value是字符串，则通过引用包含该键。假设值是一个URL。
> 1. 取消引用URL并检索与URL关联的publicKey属性（例如，处理取消引用文档顶层的publicKey属性）。
> 2. 遍历每个公钥对象。 如果对象的id属性与value匹配，则将result设置为该对象。

4. 如果结果不包含至少id，type和controller属性以及任何必需的公共加密材料（由结果的type属性确定），则抛出错误。

::: tip
虽然在上面的一些例子中controller字段似乎是多余的，密钥可以在DID文档中表示，其中控制器在另一个DID文档中描述。Linked Data Proof库通常期望控制器字段始终存在，并且如果缺少则可能抛出异常,此外，根据DID文档可解释为图形或树的要求，不能通过使用树中的键位置来推断默认控制器字段。
:::

::: tip
DID文档中密钥的缓存和到期完全由DID解析器和其他客户端负责。 参见章节 [§ 8. DID Resolvers]() .
:::


## 5.4 Authentication
身份验证是[ DID subject ]()可以通过加密方式证明它们与DID相关联的机制。 参见章节 [§ 9.3 Binding of Identity ]()。
请注意，身份验证与授权是分开的，因为subject可能希望允许其他人（例如， 在章节[§ 9.8 Key Revocation and Recovery]()中所述，协助密钥恢复 )）更新其DID文档而不使其能够证明控制权（从而能够冒充subject）。

Authentication的规则是：
1. DID文档可以包含``authentication``属性。
2. authentication属性的值应该是一组验证方法。
3. 可以嵌入或引用每种验证方法。验证方法的一个示例是一个公钥（请参见[§ 5.3 Public Keys )]()）。

例: 
::: warning EXAMPLE 10: Authentication field 包含三种验证方法
```json
{
  "@context": "https://w3id.org/did/v1",
  "id": "did:example:123456789abcdefghi",
  ...
  "authentication": [
    // this method can be used to authenticate as did:...fghi
    "did:example:123456789abcdefghi#keys-1",
    // this method can be used to authenticate as did:...fghi
    "did:example:123456789abcdefghi#biometric-1",
    // this method is *only* authorized for authentication, it may not
    // be used for any other proof purpose, so its full description is
    // embedded here rather than using only a reference
    {
      "id": "did:example:123456789abcdefghi#keys-2",
      "type": "Ed25519VerificationKey2018",
      "controller": "did:example:123456789abcdefghi",
      "publicKeyBase58": "H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
    }
  ],
  ...
}
```
:::

## 5.5 Authorization and Delegation 授权和委托
``Authorization``是用于说明如何代表DID subject执行操作的机制。

``Delegation``是subject可以用来授权他人代表他们行事的机制

请注意，在章节[§ 5.4 Authentication .](#_5-4-authentication)确定授权-Authorization与身份验证-Authentication是分开的，这对于密钥丢失情况下的密钥恢复尤为重要，当subject不再能够访问其密钥或密钥泄露时，controller的可信第三方需要覆盖攻击者的恶意活动。详见[§ 9. Security Considerations]()

每个DID方法必须定义如何实现Authorization和Delegation，包括任何必要的加密操作。

至少有两种建议的方法用于实现Authorization，Delegation和监护-Guardianship的概念：
1. [ Decentralized Identifier Registry ]()可以通过重用authentication属性使用的相同证明目的模式来实现粗粒度监护(guardian)模式，或者更优选地
2. [ Decentralized Identifier Registry ]()可以实施基于功能的方法，并提供更细粒度的Authorization，Delegation和监护-Guardianship控制。

## 5.6 Service Endpoints
除了发布身份验证和授权机制外，DID文档的另一个主要目的是为该subject启用发现服务端点。服务端点可以表示主体希望通告的任何类型的服务。包括分散的身份管理服务，用于进一步发现，认证，授权或交互。服务端点的规则是：
1. DID文档可以包含service属性。
2. service属性的值应该是服务端点的数组。
3. 每个服务端点必须包含id，type和serviceEndpoint属性，并且可以包含其他属性。
4. 服务端点协议应该应该以开放标准规范发布。
5. serviceEndpoint属性的值必须是JSON-LD对象或符合[RFC3986](/dids/References.html#rfc3986)的有效URI，并根据[RFC3986](/dids/References.html#rfc3986)第6节中的规则以及其适用的URI scheme规范中的任何规范化规则进行规范化。

例：

::: warning EXAMPLE 11: 各种 service endpoints
```json
{
  "service": [{
    "id": "did:example:123456789abcdefghi#openid",
    "type": "OpenIdConnectVersion1.0Service",
    "serviceEndpoint": "https://openid.example.com/"
  }, {
    "id": "did:example:123456789abcdefghi#vcr",
    "type": "CredentialRepositoryService",
    "serviceEndpoint": "https://repository.example.com/service/8377464"
  }, {
    "id": "did:example:123456789abcdefghi#xdi",
    "type": "XdiService",
    "serviceEndpoint": "https://xdi.example.com/8377464"
  }, {
    "id": "did:example:123456789abcdefghi#agent",
    "type": "AgentService",
    "serviceEndpoint": "https://agent.example.com/8377464"
  }, {
    "id": "did:example:123456789abcdefghi#hub",
    "type": "HubService",
    "serviceEndpoint": "https://hub.example.com/.identity/did:example:0123456789abcdef/"
  }, {
    "id": "did:example:123456789abcdefghi#messages",
    "type": "MessagingService",
    "serviceEndpoint": "https://example.com/messages/8377464"
  }, {
    "id": "did:example:123456789abcdefghi#inbox",
    "type": "SocialWebInboxService",
    "serviceEndpoint": "https://social.example.com/83hfh37dj",
    "description": "My public social inbox",
    "spamCost": {
      "amount": "0.50",
      "currency": "USD"
    }
  }, {
    "id": "did:example:123456789abcdefghi#authpush",
    "type": "DidAuthPushModeVersion1",
    "serviceEndpoint": "http://auth.example.com/did:example:123456789abcdefg"
  }]
}
```
:::
有关身份验证服务端点的进一步安全注意事项，请参见[§ 7.1 DID Method Schemes]() 和 [§ 5.4 Authentication](#_5-4-authentication) 。


## 5.7 Created (Optional)
标识符记录的标准元数据包括原始创建的时间戳。包含创建时间戳的规则是：
1. DID文档必须具有零个或一个表示创建时间戳的属性。建议包含此属性。
2. 创建此属性键值必须是created。
3. 此key的值必须是有效的XML日期时间值，如[W3C XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes [XMLSCHEMA11-2].]()的3.3.7节中所定义
4. 该日期时间值必须标准化为UTC 00:00，如尾随“Z”所示。
5. 当DLTs支持这样的概念时，依赖于DLT的方法规范应该要求在已知的["median time past" (defined in Bitcoin BIP 113),]()之后的时间值。
例：

::: warning EXAMPLE 12
```json
{
  "created": "2002-10-10T17:00:00Z"
}
```
:::

## 5.8 Updated (Optional) 
标识符记录的标准元数据包括最近更改的时间戳。包含更新时间戳的规则如下：
1. DID文档必须具有零个或一个表示更新时间戳的属性。建议包含此属性。
2. 创建此属性键值必须是updated。
3. 此key的值必须遵循第[§ 5.7 Created (Optional)](#_5-7-created-optional)部分中的格式规则（3,4,5）。

例：

::: warning EXAMPLE 13
```json
{
  "updated": "2016-10-17T02:41:00Z"
}
```
:::

## 5.9 Proof (Optional) 证明
DID文档的proof是DID文档完整性的加密证明，根据以下任一方面：
1. 如第[§ 5.6 Service Endpoints](#_5-6-service-endpoints)中所定义的subject，或者如果不存在。
2. 在[4.3章节]定义的delegate

此proof不能证明DID和DID文档之间的绑定。请参见[§ 9.3 Binding of Identity ]()。proof规则是：
1. DID文档可以只有一个表示proof的属性。
2. 此属性键值必须是proof。
3. 此键的值必须是由[Linked Data Proofs](https://w3c-dvcg.github.io/ld-signatures/)定义的有效JSON-LDproof。

例：

::: warning EXAMPLE 14 A signature-based proof
```json
{
  "proof": {
    "type": "LinkedDataSignature2015",
    "created": "2016-02-08T16:02:20Z",
    "creator": "did:example:8uQhQMGzWxR8vw5P3UWH1ja#keys-1",
    "signatureValue": "QNB13Y7Q9...1tzjn4w=="
  }
}
```
:::

## 5.10 Extensibility
分布式身份标识符数据模型的目标之一是enable permissionless innovation。这要求数据模型可以通过多种不同方式进行扩展：
- 通过使用基于图的数据模型提供了对复杂多实体关系建模的要求。
- 通过使用[LINKED-DATA]()来实现扩展用于描述数据模型中的信息的机器可读词汇表 - 不依赖于集中式系统 - 的要求。
- 支持多种类型的加密证明格式的要求是通过使用关联数据证明[LD-PROOFS]()，关联数据签名[LD-SIGNATURES]()和各种签名套件来完成的。
- 通过使用[JSON-LD]()，能够以软件开发人员和网页作者之间流行的数据格式提供上述所有可扩展性机制的要求。

这种数据建模方法通常被称为"open world assumption"，这意味着任何人都可以对任何其他事情说些什么。这种方法通常与构建简单且可预测的软件系统相冲突。与开放世界的假设相比，平衡可扩展性与程序正确性总是比封闭式软件系统更具挑战性。

本节的其余部分描述了如何通过一系列示例实现可扩展性和程序正确性。

我们假设我们从以下DID文档开始：

::: warning EXAMPLE 15 A signature-based proof
```json
{
  "@context": "https://example.org/example-method/v1",
  "id": "did:example:123456789abcdefghi",
  "publicKey": [{ ... }],
  "authentication": [{ ... }],
  "service": [{ ... }]
}
```
:::


对于本节而言，publicKey，authentication和service属性的内容并不重要。重要的是上面的对象是有效的DID文档。让我们假设开发人员想要扩展DID文档以表达一条额外的信息：subject的公共照片流

开发人员要做的第一件事就是创建一个包含新术语的JSON-LD Context：

::: warning EXAMPLE 16: An example JSON-LD Context
```json
{
  "@context": {
    "PhotoStreamService": "https://example.com/vocab#PhotoStreamService"
  }
}
```
:::

现在已经创建了JSON-LD Context，开发人员必须将它发布到任何DID Document processor都可以访问的地方。对于此示例，我们假设上面的JSON-LD上下文发布在以下URL：did：example：contexts：987654321。此时，扩展本节中的第一个示例很简单，包括上面的上下文并将新属性添加到DID文档。

::: warning EXAMPLE 17: A DID Document with a custom extension
```json
{
  "@context": "https://example.org/example-method/v1",
  "id": "did:example:123456789abcdefghi",
  "authentication": [ ... ],
  "service": [{
    "@context": "did:example:contexts:987654321",
    "id": "did:example:123456789abcdefghi#photos",
    "type": "PhotoStreamService",
    "serviceEndpoint": "https://example.org/photos/379283"
  }]
}
```
:::

到目前为止的例子表明，很容易以无权限和分散的方式扩展Decentralized Identifiers Data Model。该机制还确保以这种方式创建的分布式身份标识符可以防止名称空间冲突和语义模糊。

这种动态的可扩展性模型确实增加了实现负担。为此类系统编写的软件必须根据应用程序的风险概况确定是否接受具有扩展名的DID文档。某些应用程序可能会选择接受但忽略扩展，其他应用程序可能会选择仅接受某些扩展，而高度安全的环境可能会禁止扩展。这些决定取决于应用程序开发人员，而不是本规范的范围。

当扩展JSON-LD上下文覆盖本规范中指定的术语的扩展URL时，实现必须产生错误。为避免意外覆盖条款的可能性，建议开发人员扩展其范围。例如，以下扩展名范围新的PhotoStreamService术语，以便它只能在服务属性中使用：

::: warning EXAMPLE 18: Scoping terms in a JSON-LD Context
```json
{
  "@context": {
    "service": {
      "@id": "https://w3id.org/did#service",
      "@context": {
        "PhotoStreamService": "https://example.com/vocab#PhotoStreamService"
      }
    }
  }
}
```
:::

敦促开发人员确保扩展JSON-LD Contexts具有高可用性。无法获取Context的实现将产生错误。确保扩展JSON-LD Contexts始终可用的策略包括使用内容寻址的URL用于contexts，将contexts文档与实现捆绑在一起，或者启用对contexts的积极缓存。

