# 6. DID Document Syntax
DID文档必须是符合[RFC8259]()的单个JSON对象。本文档中的许多概念都是使用JSON-LD语法通过示例介绍的，JSON-LD语法是一种将JSON数据映射到[JSON-LD]()定义的RDF语义图模型的格式。本节规范了数据模型（[§ 3. Data Model](#_3-data-model) 和 [§ 5. DID Documents](#_5-did-documents)）如何在JSON-LD中实现。

虽然仅为JSON和JSON-LD提供了语法映射，但应用程序和服务可以使用任何其他数据表示语法，例如JXD（JSON XDI Data，XDI图模型的序列化格式），XML，YAML或CBOR，它们能够表达数据模型。

## 6.1 JSON
[ § 3. Data Model ](#_3-data-model)中描述的数据模型可以通过将属性值映射到JSON类型，在Javascript对象表示法（JSON）[RFC8259]()中进行编码，如下所示：

- 可表示为IEEE754的数值应该表示为数字类型。
- Boolean values应该表示为Boolean type。
- Sequence value应该表示为Array type。
- Unordered sets of values应该表示为Array type。
- Sets of properties应该表示为Object type.。
- Empty values 应该表示为 null value.
- Other values 应该表示为 String type.

## 6.2 JSON-LD
[JSON-LD]是一种基于JSON的格式，用于序列化关联数据。该语法旨在轻松集成到已使用JSON的已部署系统中，并提供从JSON到JSON-LD的平滑升级路径。它主要用于在基于Web的编程环境中使用关联数据，构建可互操作的Web服务以及在基于JSON的存储引擎中存储关联数据。

扩展本规范中描述的数据模型时，JSON-LD非常有用。数据模型的实例在JSON-LD中编码的方式与在JSON中编码的方式相同（第 [§ 6.1 JSON](#_6-1-json)），并添加了@context属性。[JSON-LD Context]()在[JSON-LD]()规范中有详细描述，其用法在[§ 5.10 Extensibility](#_5-10-extensibility)中进行了详细说明。

通常，本文档中描述的数据模型和语法的设计使开发人员可以将示例复制并粘贴到其软件系统中。该方法的设计目标是提供较低的进入门槛，同时仍确保异构软件系统之间的全球互操作性。本节描述了其中一些方法，这些方法可能会被大多数开发人员忽视，但实施者会对其细节感兴趣。JSON-LD提供的最值得注意的语法糖是：
- @id和@type关键字分别别名为id和type，使开发人员能够将此规范用作惯用的JSON。
- 自动键入数据类型（如integers，dates， units 和URLs），以便为需要它们的用例提供更强大的类型保证。
- JSON-LD 1.1的@protected属性功能用于确保不能覆盖此规范定义的术语。这意味着只要在DID文档的顶部进行相同的@context声明，就可以保证使用JSON-LD处理器的实现与不使用JSON-LD处理器的实现之间的互操作性。