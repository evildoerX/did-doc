# 4. 分布式身份标识符 (DIDs)
全球唯一的分布式身份标识符(decentralized identifier)的概念并不新鲜; 通用唯一标识符（UUID）最初是在20世纪80年代开发的，后来成为开放软件基金会分布式计算环境的标准功能 。通过使用生成具有足够熵的128位值的算法，UUID在没有集中式注册服务的情况下实现全局唯一性，以使碰撞的机会极小。UUID在[ RFC4122 ](/dids/References.html#rfc4122) 中正式指定为特定类型的统一资源名称（URN）。

DID类似于UUID，除了：（a）像URL一样，它可以被解析或解引用到描述主体(subject)的标准资源（[DID Document]()- 参见章节[§ 5。 DID文档]() ），以及（b）与URL不同，DID文档通常包含能够验证DID subject的加密材料。


## 4.1 通用DID语法
通用[ DID scheme ]()是符合[RFC3986](/dids/References.html#rfc3986)的URI scheme。DID scheme专门仅scheme和权威部件(uthority components)而言与DID URI-path-abempty， query和fragment组件是相同的，都是[RFC3986](/dids/References.html#rfc3986)定义的ABNF规则。
::: tip
术语DID仅指符合did下面ABNF中规则的URI 。DID始终标识DID subject。由did-url规则定义的术语DID URL是指URL以DID开头，后跟一个或多个附加组件的。DID URL始终标识要定位的资源。
:::

以下是使用[RFC5234]()中定义``ALPHA``和``DIGIT``的ABNF语法的规范 。此``ABNF``中未定义的所有其他规则名称在[RFC3986](/dids/References.html#rfc3986)中定义。

```json
did                = "did:" method-name ":" method-specific-id
method-name        = 1*method-char
method-char        = %x61-7A / DIGIT
method-specific-id = *idchar *( ":" *idchar )
idchar             = ALPHA / DIGIT / "." / "-" / "_"
did-url            = did *( ";" param ) path-abempty [ "?" query ]
                     [ "#" fragment ]
param              = param-name [ "=" param-value ]
param-name         = 1*param-char
param-value        = *param-char
param-char         = ALPHA / DIGIT / "." / "-" / "_" / ":" /
                     pct-encoded
```
::: danger
语法目前允许一个为空method-specific-id，例如did:example:将是一个有效的DID，可以识别[DID method](/dids/Terminology.html#did-method)本身
:::

## 4.2 特定的方法的语法
[DID method](/dids/Terminology.html#did-method)规范必须通过定义自己的method-name和自己的method-specific-id语法来进一步限制泛型DID语法。见章节[§ 7。 DID方法]() 。

## 4.3 通用DID参数名称
DID URL语法支持基于矩阵参数语法（[MATRIX-URIS]()）的参数的简单通用格式。上面的ABNF没有指定任何参数名称（param-name规则）。

一些通用DID参数名称（例如，用于服务选择）完全独立于任何特定[DID method](/dids/Terminology.html#did-method)，并且必须始终以相同方式对所有DIDs起作用。其他（例如，用于版本控制）可能由某些DID方法支持。但必须在那些支持它们的DID方法上统一运行

第4.4节“特定方法的DID参数名称”([§ 4.4 Method-Specific DID Parameter Names .]())中介绍了完全特定于方法的参数名称。

下表定义了一组通用DID参数名称:
|通用DID参数名称|描述|
|-------------:|--:|
|``service``|从DID Document中以service id标识服务|
DID决议(DID Resolution)中规范指定了这些参数的确切处理规则
::: tip
请注意，可能有其他参数或选项不属于DID URL，而是传递给“out of band(带外)”的DID解析程序，例如：使用一个解决方案或一些其他机制。这些选项可以控制高速缓存或一个解决方案所需的格式。这类似于HTTP，其中缓存或结果格式以HTTP Header表达，而不是HTTP URL的一部分。重要的区别是DID参数(DID parameters)作为DID URL一部分的指定了正在识别的资源。然而 不属于DID URL的DID解析程序 控制如何取消引用该资源。
:::

## 4.4 特定方法的 DID 参数名称
[DID method](/dids/Terminology.html#did-method)规范可以指定其他的method-specific参数名称。method-specific 的参数名称必须以``method-name``规则定义的方法名称作为前缀。

例如，如果方法``did:foo:``定义了参数栏，则参数名必须是``foo:bar``。使用此方法和``method-specific``的参数的DID URL示例将是：

``did:foo:21tDAKCERh95uGgKbJNHYp;foo:bar=high``

::: danger
考虑使用``kebab-case``样式而不是冒号分隔符，例如``foo-bar``而不是``foo：bar``。
:::

由一个[DID method](/dids/Terminology.html#did-method)定义的``method-specific``的参数名称可以由其他DID方法使用。例如：

``did:example:21tDAKCERh95uGgKbJNHYp;foo:bar=low``

``Method-specific``的参数名称可以按任何顺序与通用参数名称组合。

``did:example:21tDAKCERh95uGgKbJNHYp;service=agent;foo:bar=high``

[DID method](/dids/Terminology.html#did-method) namespaces和method-specific parameter namespaces都可以包括冒号，因此它们可以按照[DID method](/dids/Terminology.html#did-method)规范的定义进行分层分区。这是一个示例DID URL，它说明了：

``did:foo:baz:21tDAKCERh95uGgKbJNHYp;foo:baz:hex=b612``

::: danger
查看我们想要说明的一个方法定义的``method-specific``的参数，但在具有不同方法的DID URL中使用。还讨论DID参数名称中的分层方法的命名空间。
:::

## 4.5 Path
通用``DID path ``与U`` URI path ``相同，并且必须符合[RFC3986](/dids/References.html#rfc3986)中的``path-abempty````ABNF``规则。 ``DID path``应该用于解决通过`` DID service endpoint``可用的资源。请参见第5.6节[Service Endpoints]()。

特定的``DID scheme``可以为`` DID paths``指定``ABNF``规则，这些规则比本节中的通用规则更具限制性。

::: warning EXAMPLE 3
did:example:123456/path
:::

## 4.6 Query
通用``DID query ``与``URI query``相同，并且必须符合[RFC3986](/dids/References.html#rfc3986)中的``query``ABNF规则。``DID query ``应该用于解决通过`` DID service endpoint``可用的资源。请参见第5.6节[Service Endpoints]()。

特定的``DID scheme``可以为``DID queries``指定ABNF规则，这些规则比本节中的通用规则更具限制性。

::: warning EXAMPLE 4
did:example:123456?query=true
:::

## 4.7 Fragment
通用``DID fragment ``与``URI fragment``相同，必须符合[RFC3986](/dids/References.html#rfc3986)中的片段ABNF规则。``DID fragment``必须仅用作``DID Document``中与方法无关的引用，以识别DID文档的组件（例如，唯一的密钥描述）。要解决此参考，包含`` DID fragment``的完整``DID URL``必须用作DID Document对象中目标组件的键值。

特定的``DID scheme``可以为``DID fragments ``指定ABNF规则，这些规则比本节中的通用规则更具限制性。

我们希望我们启用包含``DID fragment``（直接在``DID document``中解析）的DIDs的``tree-based``的处理，以定位直接包含在``DID document``中的元数据。或目标URL提供的服务资源，而不需要依赖`` graph-based``的处理。

::: warning EXAMPLE 5
did:example:123456#oidc
:::

## 4.8 Normalization 正常化
对于最广泛的互操作性，DID规范化应该尽可能简单和通用。因此：
1. ``did：scheme name``必须是小写的。
2. ``method name`` 必须是小写的。
3. [第4.1节``Generic DID Syntax``(通用DID语法)]() 中的``method-specific-i``规则的区分大小写和规范化必须由管理[DID method](/dids/Terminology.html#did-method)规范定义。


## 4.9 Persistence
DID必须是持久的和不可变的，即一次绑定到subject并永远不会改变（永远）。

理想情况下，DID将是一个完全抽象的分布式身份标识符（如UUID），可以随着时间的推移绑定到多个底层的`` Decentralized Identifier Registries ``，从而保持其持久性独立于任何特定系统。但是，在多个`` Decentralized Identifier Registries``相同的标识符会 引入极其困难的实体和 ``start-of-authority (权限启动)`` （SOA）问题。它还大大增加了开发人员的实现复杂性。

为了避免这些问题，建议``DID method ``规范只产生绑定到强大的DID和``DID method ``，稳定分散标识注册(Decentralized Identifier Registries )管理机构随着时间的推移，对DID和``DID method ``的持久性做出最高水平的承诺。

::: tip
虽然未包含在此版本中，但此规范的未来版本可能支持DID Document  的 equivID属性，以在多个[ Decentralized Identifier Registry -分布式身份标识符注册表](https://w3c-ccg.github.io/did-spec/#dfn-dir)上表示同一主题的DID之间建立可验证的等效关系。这种等价关系可以产生单个持久抽象DID的实际等价物。见未来工作（第§节） 11。 未来的工作 ）
:::