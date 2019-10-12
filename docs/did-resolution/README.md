# [DID-Resolution](https://w3c-ccg.github.io/did-resolution/)
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
- Decentralized Identifier (DID)

As defined in [DECENTRALIZED-IDENTIFIERS].

- Decentralized Identifier Registry (DIR)

As defined in [DECENTRALIZED-IDENTIFIERS].
- DID Document

As defined in [DECENTRALIZED-IDENTIFIERS].
- DID Fragment

As defined in [DECENTRALIZED-IDENTIFIERS].
- DID Method

As defined in [DECENTRALIZED-IDENTIFIERS].
- DID Path

As defined in [DECENTRALIZED-IDENTIFIERS].
- DID Query

As defined in [DECENTRALIZED-IDENTIFIERS].
- DID Resolution

一种算法，将DID和其他选项作为输入，并返回DID文档或DID解析结果作为输出。该算法依赖于适用的DID方法的“读取”操作。
- DID Resolver
能够对至少一种DID方法进行DID解析和DID URL解引用的软件和/或硬件
- DID Resolution Result
表示DID解析或DID URL解引用算法结果的数据结构。可能包含DID文档。

- DID URL
As defined in [DECENTRALIZED-IDENTIFIERS].

- DID URL Dereferencing

一种算法，将DID URL和其他选项作为输入，并返回DID文档，DID解析结果或各种其他类型的资源作为输出。此算法依赖于DID解析。
- Service Endpoint

As defined in [DECENTRALIZED-IDENTIFIERS].

## DID Resolver Architectures
### Method Architectures
DID解析算法涉及根据DID的方法在DID上执行读取操作（请参见第4.节，解决DID）。

## Resolving a DID
### Input
#### DID
#### result-type
结果类型输入选项可用于请求某种类型的结果。

此输入选项是可选的。

该选项的可能值为：

“ did-document”（默认值）：请求DID文档作为输出。
“ resolution-result”：请求一个DID解析结果作为输出（请参见§6。DID解析结果）。
#### 4.1.3 version-id
version-id输入选项可用于请求DID文档的特定版本。

此输入选项是可选的。 它与§4.1.4``version-time``间互斥。

有关其他注意事项，请参见第10.3节“版本控制”。

此选项的可能值特定于输入DID方法

#### 4.1.4 version-time
版本时间输入选项可用于请求DID文档的特定版本。

此输入选项是可选的。 它与§4.1.3 ``version-id``互斥。

有关其他注意事项，请参见第10.3节“版本控制”。

此选项的值必须是[RFC3339]组合的日期和时间字符串的字符串值，该字符串值表示DID文档对于输入的DID是最新的日期和时间

#### 4.1.5 no-cache
no-cache输入选项可用于请求某种类型的缓存行为。

此输入选项是可选的。

该选项的可能值为：

“ false”（默认值）：允许缓存DID文档。
“ true”：请求禁用缓存，并从分散标识符注册表中检索新的DID文档。
有关其他注意事项，请参见第10.2节“缓存”。

### 4.2 Algorithm

以下DID解析算法必须由一致的DID解析器实现。

验证输入的DID是否符合通用DID语法的did规则。如果不是，则DID解析程序务必引发错误。
确定实现此算法的DID解析器是否支持输入DID方法。如果不是，则DID解析程序务必引发错误。
通过对输入DID的分散标识符注册表执行读操作，获取输入DID的DID文档，如输入DID方法所定义：
除了输入DID，此算法的所有其他输入选项必须传递给输入DID方法的读取操作。
如果输入的DID不存在，则返回空结果。
读取操作的结果称为输出DID文档。
验证输出的DID文档是否符合DID文档数据模型的序列化。如果不是，则DID解析程序务必引发错误。
如果结果类型输入选项的值为null或“ did-document”：
返回输出的DID文档。
如果结果类型输入选项的值to为“分辨率结果”：
构造一个DID解析结果，并使用输出DID文档以及有关产生该结果的过程的元数据填充它（请参见§6。DID解析结果。这称为输出DID解析结果。
返回输出的DID解析结果。

讨论如何处理停用的DID
这里讨论如何在DID解析过程中处理已停用的DID。

问题13：验证DID文档的签名/证明
指定在DID解析过程中应如何验证DID文档上的签名/证明。

问题
我们是否应该定义允许发现DID方法列表的功能或DID解析程序支持的其他功能？还是该实现特定于此规范的范围？例如。看到这里和这里。

## Dereferencing a DID URL
本节定义了输入和DID URL解引用算法，该算法返回DID文档，DID解析结果或各种其他类型的资源作为输出。 此算法依赖于DID解析。

该算法的抽象接口是：

解引用（did-url，input-options）

### 5.1 Input

#### 5.1.1 DID URL

#### 5.1.2 result-type

#### 5.1.3 service-type

#### 5.1.4 follow-redirect

### 5.2 Algorithm
以下DID URL解引用算法必须由一致的DID解析器实现。

通过执行第4节中定义的DID解析算法，获取输入DID的DID文档。解决DID：
如果输入的DID URL包含矩阵参数version-id或version-time，则必须将它们作为输入选项传递给DID解析算法。
如果输入的DID URL包含特定于方法的矩阵参数，则必须将它们作为输入选项传递给DID解析算法。
如果输入的DID不存在，则返回空结果。
结果称为已解析的DID文档。
如果输入的DID URL等于输入的DID本身：
例1
做了：例如：1234
返回已解析的DID文档。
如果输入的DID URL包含矩阵参数服务以及可选的DID路径，DID查询和/或DID片段：
例子2
did：example：1234; service = agent / profile？query＃frag
从解析的DID文档中，选择其id属性包含与输入DID URL的服务矩阵参数值匹配的片段的服务端点。这称为输入服务端点。
执行服务端点构建算法：
读取输入服务端点的serviceEndpoint属性的值。这称为输入服务端点URL。
将输入的DID URL和输入的服务端点URL传递到服务端点构建算法。
结果称为输出服务端点URL。
返回输出服务端点URL。
如果输入的DID URL包含DID片段：
实施例3
做了：例如：1234＃keys-1
从解析的DID文档中，选择其id属性与输入的DID URL匹配的JSON-LD对象。这称为输出资源。从DID文档中选择JSON-LD对象必须考虑相对的IRI和已解析DID文档的基本IRI。
返回输出资源。
问题9：DID =基本IRI？
提及相关的IRI，并将DID本身视为JSON-LD解析器的基本IRI。如果将@base注入DID文档中，则提及潜在的攻击向量。

另请参阅有关完全限定的DID URL的讨论，作为id字段的值。

注意
DID片段的这种用法与[RFC3986]中片段标识符的定义一致。它标识辅助资源，它是主要资源（DID文档）的子集。

注意
DID片段的这种使用还与语义Web [COOL-URIS]的哈希URI的概念一致。

问题
也许我们可以在RDF，JSON-LD或Solid规范的某处找到很好的参考，这些参考明确定义了使用片段识别RDF文档中特定资源的能力。

### 5.3 Additional Features
本节列出了正在讨论中且尚未纳入算法的其他DID URL解引用功能

#### 5.3.1 Redirect
服务端点可能具有serviceEndpoint属性，该属性的值本身就是DID。 这被解释为从输入DID到另一个的“ DID重定向”。 在这种情况下，可以启动“子” DID解析过程以到达“最终”服务端点。

问题7：支持DID作为serviceEndpoint吗？
请参阅相应的未解决问题。

问题36：便携式DID分辨率
DID重定向不仅可以应用于单个服务端点，而且可以应用于整个DID文档，因此可以实现可移植性用例。

#### 5.3.2 Proxy
DID文档可能包含“代理”服务类型，该服务类型将提供需要遵循的映射才能解析为最终服务URL。

问题35：是否支持“代理”服务类型？
在此处跟踪建议w3c-ccg / did-spec＃90（注释），DID文档可能包含“代理”服务类型，该服务类型将提供必须遵循的映射才能解析为最终服务URL。

``` json
{
   "id": "did:example:123456789abcdefghi",
   "type": "ProxyService",
   "serviceEndpoint": "https://mydomain.com/proxy"
}
```

#### 5.3.3 JSON Pointer
问题 讨论了选择DID文档部分的几种方法，包括JSON指针的使用。 参见相应的PR。

#### 5.4 Example
鉴于以下DID文档：

::: tip EXAMPLE 6
``` json
{
  "@context": ["https://w3id.org/did/v1", "https://w3id.org/security/v1"],
  "id": "did:example:123456789abcdefghi",
  "service": [{
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
  }]
}
```
:::

并给出以下输入DID URL：

::: tip
EXAMPLE 7
```did:example:123456789abcdefghi;service=messages/some/path?query#frag```
:::

然后§5。取消引用DID URL算法的结果是以下输出服务端点URL：

::: tip
EXAMPLE 8
```https://example.com/messages/8377464/some/path?query#frag```
:::

![](https://w3c-ccg.github.io/did-resolution/diagrams/did-url-dereferencing.png)
图7将DID URL解引用到服务端点URL。

## 6. DID Resolution Result
本节定义了一种数据结构，在某些情况下，该数据结构表示第4节中描述的算法的结果。解析DID和第5节中取消引用DID URL。 DID解析结果包含DID文档或其他结果，以及有关生成结果的过程的元数据。

问题23：did并不是该did的URL，而是一个尚未命名的解析结构的URL。
请参阅相应的未解决问题。

问题
需要定义此数据结构的确切工作方式，以及是否始终包含DID文档还是还可以包含其他结果。

### 6.1 Example

::: tip EXAMPLE 9: Example DID Resolution Result
``` json
{
	"didDocument": {
		"id": "did:sov:WRfXPg8dantKVubE3HX8pw",
		"service": {
			"type": "xdi",
			"serviceEndpoint": "http://127.0.0.1:8080/xdi"
		},
		"authentication": {
			"type": "Ed25519SignatureAuthentication2018",
			"publicKey": ["did:sov:WRfXPg8dantKVubE3HX8pw#key-1"]
		},
		"publicKey": [{
			"id": "did:sov:WRfXPg8dantKVubE3HX8pw#key-1",
			"type": "Ed25519VerificationKey2018",
			"publicKeyBase58": "H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
		}],
		"@context": "https://w3id.org/did/v1"
	},
	"resolverMetadata": {
		"driverId": "did:sov",
		"driver": "HttpDriver",
		"retrieved": "2019-06-01T19:73:24Z",
		"duration": 1015
	},
	"methodMetadata": {
		"nymResponse": {
			"result": {
				"data": "{\"dest\":\"WRfXPg8dantKVubE3HX8pw\",\"identifier\":\"V4SGRU86Z58d6TV7PBUe6f\",\"role\":\"0\",\"seqNo\":11,\"txnTime\":1524055264,\"verkey\":\"H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV\"}",
				"type": "105",
				"txnTime": 1.524055264E9,
				"seqNo": 11.0,
				"reqId": 1.52725687080231475E18,
				"identifier": "HixkhyA4dXGz9yxmLQC4PU",
				"dest": "WRfXPg8dantKVubE3HX8pw"
			},
			"op": "REPLY"
		},
		"attrResponse": {
			"result": {
				"identifier": "HixkhyA4dXGz9yxmLQC4PU",
				"seqNo": 12.0,
				"raw": "endpoint",
				"dest": "WRfXPg8dantKVubE3HX8pw",
				"data": "{\"endpoint\":{\"xdi\":\"http://127.0.0.1:8080/xdi\"}}",
				"txnTime": 1.524055265E9,
				"type": "104",
				"reqId": 1.52725687092557056E18
			},
			"op": "REPLY"
		}
	}
}
```
:::

### 6.2 DID Document
与DID关联的DID文档。 §4。解析DID的结果。

### 6.3 Resolver Metadata
问题
待办事项：描述不是特定于方法的DID解析元数据，例如：

DID解决过程的持续时间。
有关DID文档的版本控制信息（请参见第10.3节“版本控制”）。
有关DID文档的缓存信息（请参阅第10.2节“缓存”）。

### 6.4 Method Metadata
问题
待办事项：描述特定于方法的DID解析元数据，例如：

分散标识符注册表中的状态证明。
区块链或其他分散式标识符注册表中记录的块号，索引，交易哈希，确认数等。
在DID解析过程中使用的各种URL，IP地址或其他网络信息。
问题
对于某些数据，它是否应该成为DID文档的一部分（即描述DID主题的数据），或者它是否是元数据（即有关DID文档或有关DID解析过程的数据），可能是有争议的。 例如，BTCR方法中“ Continuation DID Document”的URL。

## 7 Service Endpoint Construction
本部分定义了服务端点构建的输入和算法，该算法返回服务端点URL作为输出。 在DID URL取消引用过程中选择了服务端点时，将使用此算法（请参见§5。取消引用DID URL）。

在本节中，路径，查询和片段应理解为[RFC3986]中定义的内容。

### 7.1 Input
服务端点构造算法的输入是输入DID URL和输入服务端点URL。

服务端点构造算法的输入要求如下：

输入的DID URL和输入的服务端点URL都可以具有路径部分。
输入的DID URL和输入的服务终结点URL均不得包含查询组件。
输入的DID URL和输入的服务端点URL都不得包含片段组件。
输入服务端点URL必须是HTTP（S）URL。

### 7.2 Algorithm
将字符串输出服务端点URL初始化为输入服务端点URL的值
如果输出服务端点URL具有查询组件，则将其删除。
如果输出服务端点URL包含片段组件，请将其删除。
将输入DID URL的路径部分追加到输出服务端点URL。
如果输入服务端点URL具有查询组件，请附加？以及对输出服务端点URL的查询。
如果输入的DID URL具有查询组件，请追加？以及对输出服务端点URL的查询。
如果输入服务端点URL具有片段组成部分，请在输出服务端点URL后面附加＃和该片段。
如果输入的DID URL具有片段组成部分，则将＃和片段附加到输出服务端点URL。
返回输出服务端点URL。
问题
如果输入DID URL和输入服务端点URL上都包含可以合并的键/值参数列表，则我们可能会允许它们同时包含查询组件。

问题
服务端点构造算法的详细信息已于2019年4月在CCG邮件列表中进行了讨论，例如在这里或这里。

问题
除了定义自己的算法，我们还可以重用[RFC3986]中定义的“相对分辨率”算法。

### 7.3 Example
做了：例如：123456789abcdefghi; service = messages / some / path？query＃frag

然后，输出服务端点URL为：

https://example.com/messages/8377464/some/path?query#frag


## 8.Bindings
本节在§4。解析DID和§5。取消引用DID URL中定义抽象算法的绑定。

### 8.1 HTTP(S) Binding
本节定义了一个DID解析器绑定，该绑定通过HTTP（S）端点公开DID解析和/或DID URL解引用功能（包括所有输入选项和输出数据）。请参阅第3.2节绑定体系结构。

问题
待办事项：为DID解析和DID URL解引用定义HTTP（S）绑定，包括以下主题：

如何通过HTTP（S）传递输入选项？使用查询字符串和/或HTTP标头？
如何通过HTTP（S）返回输出数据（DID文档，DID解析结果）
DID文档的MIME类型是什么？应该如何使用Accept和Content-Type HTTP标头？
resolve（）和dereference（）函数是否需要/允许使用两个单独的HTTP（S）端点，或者可以/必须使用单个HTTP（S）端点？
DID解析器的HTTP（S）绑定需要一个称为DID解析器HTTP（S）终结点的已知HTTP（S）URL。

使用此绑定，可以按以下方式执行DID解析功能（请参见第4节：解析DID）和/或DID URL取消引用功能（请参见第5节。

通过将输入的DID或输入的DID URL附加到DID解析器HTTP（S）端点来构造请求HTTP（S）URL。
在请求HTTP（S）URL上执行HTTP GET请求。
如果输入的DID不存在（即DID解析函数返回空结果）：
HTTP响应状态代码必须为404。
如果输入的DID存在并且结果是DID文档（的一部分）：
HTTP响应状态码必须为200。
HTTP响应必须包含一个Content-Type头。此标头的值必须为application / did + ld + json。
HTTP响应正文必须包含解析的DID文档或其他输出资源，这些资源是DID解析或DID URL解引用功能的结果。
如果输入的DID存在并且结果是服务端点URL：
HTTP响应状态码必须为303。
HTTP响应必须包含位置标头。此标头的值务必是输出服务端点URL。

### 8.2 Example
给定以下DID解析器HTTP（S）端点：

https://uniresolver.io/1.0/identifiers/

并给出以下输入DID：

did：sov：WRfXPg8dantKVubE3HX8pw

然后，请求HTTP（S）URL为：

https://uniresolver.io/1.0/identifiers/did:sov:WRfXPg8dantKVubE3HX8pw

HTTP（S）绑定可以按以下方式调用：

示例10：通过HTTP（S）绑定对DID解析器的示例curl调用
curl -X GET https://uniresolver.io/1.0/identifiers/did:sov:WRfXPg8dantKVubE3HX8pw

## 9 Errors
问题
我们是否需要定义错误条件，代码等的列表。

## 10 Security and Privacy Considerations

### 10.1 Authentication/Authorization
DID解析和DID URL取消引用不涉及任何身份验证或授权功能。与DNS解析类似，任何人都可以执行此过程，而无需任何凭据或非公开知识。

问题38：限制访问/身份验证/授权
规范应阐明符合性的解析器是否必须是公共的，或者可以通过某种身份验证和授权方案来限制访问。

如果身份验证只是超出范围或是否被禁止，当前的语言并不清楚。

问题
说明DID不一定是全局可解析的，例如成对或N对“对等” DID。

参见[RFC3339]：URI具有全局范围，并且不管上下文如何，都统一解释，尽管该解释的结果可能与最终用户的上下文有关。

一个高级的想法是DID解析的结果可能是上下文相关的或取决于策略，请参阅此注释。

问题
一个相关主题是是否可以对DID文档（的一部分）进行加密，例如参见w3c-ccg / did-spec / issues / 172。另请参阅IPID DID方法中片段的使用。

### 10.2 Caching
DID解析器可以维护DID文档的通用缓存。 它还可能维护特定于某些DID方法的缓存。

缓存行为可以通过DID解析器的配置，no-cache输入选项或DID文档的内容（例如生存时间字段）或这些选项的组合来控制。

问题10：需要TTL构造吗？
请参阅相应的未解决问题。

问题
也许我们可以重用其他协议（例如HTTP）的缓存机制。

### 10.3 Versioning
如果提供了版本ID或版本时间输入选项，则DID解析算法将返回特定版本的DID文档。

DID文档可以包含一个版本标识符，该版本标识符随在DID上执行的每个更新操作而变化。

问题12：设计版本控制功能
请参阅相应的未解决问题。

注意
尽管所有DID方法都必须支持Update操作，但并不需要DID方法保留所有以前的DID文档版本，因此并非所有DID方法都支持版本控制。

### 10.4 Non-DID Identifiers
问题8：从其他标识符中发现DID
有关DID解析和非DID标识符（例如域名，HTTP URI或电子邮件地址）的解析之间的关系的讨论。 这包括以下问题：如何从非DID标识符中发现DID，以及如何验证标识符之间的链接。

### 10.5 DID Method Governance
DID方法治理
描述DID解析程序应支持的方法以及潜在的影响。