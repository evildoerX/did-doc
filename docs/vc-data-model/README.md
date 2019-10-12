# [vc-data-model](https://www.w3.org/TR/vc-data-model/)

## Abstract
凭证是我们日常生活的一部分； 驾驶执照用于断言我们有驾驶机动车的能力，大学学位可用于断言我们的教育水平，政府颁发的护照使我们能够在国家之间旅行。 该规范提供了一种机制，可以以加密安全，尊重隐私和可机器验证的方式在Web上表达这些类型的凭据。

## Status of This Document
本部分描述了本文档在发布时的状态。其他文件可能会取代本文件。 W3C技术报告索引中的https://www.w3.org/TR/可以找到当前W3C出版物列表以及该技术报告的最新版本。

工作组感谢以下人员不仅为本文档的内容做出了贡献，也感谢yeoman在该标准社区中的工作，这些工作推动了众多观点的变化，讨论和共识：Matt Stone，Gregg Kellogg，Ted小锡伯杜（Thibodeau Jr），奥利弗·泰布（Oliver Terbu），乔·安德列（Joe Andrieu），大卫·莱恩（David I.Lehn），马修·科利尔（Matthew Collier）和阿德里安·格罗珀（Adrian Gropper）。

由Christopher Allen，Shannon Appelcline，Kiara Robles，Brian Weller，Betty Dhamers，Kaliya Young，Manu Sporny，Drummond Reed，Joe Andrieu，Heather Vescent，Kim Hamilton Duffy促成的Rebooting Web of Trust社区支持了此规范的工作。 ，Samantha Chase和Andrew Hughes。由Phil Windley，Kaliya Young，Doc Searls和Heidi Nobantu Saul推动的Internet身份研讨会的参与者也通过旨在教育，辩论和改进此规范的众多工作会议来支持这项工作的完善。

工作组还感谢主席Dan Burnett和Matt Matt以及我们的W3C员工联系人Kazuyuki Ashimura在整个W3C标准化过程中对小组的专家管理和稳定指导表示感谢。

该规范的部分工作已由美国国土安全部科学技术局根据合同HSHQDC-17-C-00019资助。本规范的内容不一定反映美国政府的立场或政策，也不应推断出官方的认可。

W3C咨询委员会欢迎对此文档发表评论，但读者应注意，关于本文档其余部分的候选推荐意见的评论期已经结束，工作组现阶段不愿对该规范进行实质性修改。请直接在GitHub上提交问题，或将其发送到public-vc-comments@w3.org（订阅，存档）。

工作组已收到实施反馈，表明该规范中的每个规范功能至少都有两个实施。该小组已经从九（9）个实施中获得了报告。有关详细信息，请参见测试套件和实施报告。

自本文档上次发布以来的更改包括：

非规范性插入一个附加示例，并对规范中的一些句子进行一些小的编辑性修改。
该文档由可验证索赔工作组作为建议书发布。本文档旨在成为W3C建议书。

GitHub Issues是讨论此规范的首选。或者，您可以将评论发送到我们的邮件列表。请将它们发送到public-vc-comments@w3.org（存档）。

请W3C成员资格和其他有关方面审核文档并将评论发送到public-vc-comments@w3.org（订阅，存档），直到2019年10月03日。咨询委员会代表应查阅其WBS调查表。请注意，在截至2019年8月21日的候选推荐书审查期间，预计会有实质性技术评论。

请参阅工作组的实施报告。

作为建议书发布并不意味着得到W3C成员的认可。这是文档草案，随时可能被其他文档更新，替换或废弃。除了进行中的工作外，不宜将此文档引用为本文。

该文档由根据W3C专利政策运作的小组制作。 W3C维护与该小组的可交付成果有关的任何专利公开的公开清单；该页面还包含公开专利的说明。真正了解专利的个人（该个人认为其包含基本权利要求）必须根据W3C专利政策的第6节披露信息。

本文档受2019年3月1日W3C流程文档的约束。

## 1. Introduction
本节是非规范性的。

凭证是我们日常生活的一部分；驾驶执照用于断言我们有驾驶机动车的能力，大学学位可用于断言我们的教育水平，政府颁发的护照使我们能够在国家之间旅行。这些凭证在物理世界中使用时为我们提供了好处，但在Web上的使用仍然难以捉摸。

当前，很难在Web上表达教育资格，医疗保健数据，财务帐户详细信息以及其他类型的第三方验证的机器可读个人信息。在Web上表达数字证书的困难使得通过Web获得与物理证书在物理世界中为我们提供的相同收益的挑战颇具挑战性。

该规范提供了一种标准的方式，可以以加密安全，尊重隐私和可机器验证的方式在Web上表达凭据。

对于那些不熟悉与可验证凭据有关的概念的人员，以下各节提供了以下方面的概述：

构成可验证凭证的组件
构成可验证演示文稿的组件
可验证的凭证和可验证的表示将很有用的生态系统
告知本规范的用例和要求。

### 1.1 What is a Verifiable Credential?
本节是非规范性的。

在物理世界中，凭证可能包括：

与识别凭证主题有关的信息（例如，照片，姓名或身份证号码）
与发行机构（例如，市政府，国家机构或认证机构）有关的信息
与凭证类型有关的信息（例如，荷兰护照，美国驾驶执照或健康保险卡）
发证机关断言的与特定属性有关的信息（例如，国籍，有权驾驶的车辆类别或出生日期）
与凭证的来源有关的证据
与凭证约束有关的信息（例如，到期日期或使用条款）。
可验证的凭证可以代表物理凭证所代表的所有相同信息。数字签名等技术的添加使可验证的凭证比其物理对应凭证更具篡改性和可信赖性。

可验证证书的持有者可以生成可验证的演示文稿，然后与验证者共享这些可验证的演示文稿，以证明他们拥有具有某些特征的可验证证书。

可验证的凭据和可验证的演示文稿都可以快速传输，从而在尝试远距离建立信任时比其物理副本更方便。

尽管此规范试图提高表达数字证书的便利性，但它也试图在实现此目标与许多保护隐私的目标之间取得平衡。数字信息的持久性，以及可以收集和关联不同数字数据源的便捷性，构成了对隐私的关注，即使用可验证且易于机读的凭据可能会使情况变得更糟。本文档在第§7节中概述并尝试解决了许多此类问题。本文档中还提供了有关如何使用隐私增强技术（例如零知识证明）来使用此数据模型的示例。

### 1.2 Ecosystem Overview
他的部分是非规范的。

本节描述了在生态系统中核心参与者的角色以及它们之间的关系，在这种生态系统中，可验证的凭证将很有用。角色是一种抽象，可以通过许多不同的方式实现。角色的分离表明可能存在标准化的接口和协议。在本规范中引入了以下角色：

#### holder

实体可以通过拥有一个或多个可验证的凭据并从中生成可验证的表示来执行的角色。持有人``(Holders)``的例子包括学生，员工和客户。
#### issuer
实体通过声明有关一个或多个主题的声明，根据这些声明创建可验证的凭证，并将该可验证的凭证传送给持有人``(Holders)``来执行的角色。发行人的例子包括公司，非营利组织，行业协会，政府和个人。
#### subject
提出索赔的实体。示例主题包括人类，动物和事物。在许多情况下，可验证证书的持有者是主题，但在某些情况下不是。例如，父母（持有人``(Holders)``）可能持有孩子（主体）的可验证凭据，或者宠物拥有者（持有人``(Holders)``）可能持有其宠物（主体）的可验证凭据。有关这些特殊情况的更多信息，请参见附录§C.主题-持有人``(Holders)``关系。
#### verifier
实体通过接收一个或多个可验证凭据（可选地在可验证表示中）进行处理而执行的角色。验证者的示例包括雇主，安全人员和网站。
#### verifiable data registry
系统可能通过协调创建，验证标识符，密钥和其他相关数据（例如，可验证的凭证架构，吊销注册表，发行者公共密钥等）来使用可验证的凭证来执行的角色。一些配置可能需要主题的相关标识符。可验证的数据注册表示例包括受信任的数据库，分散的数据库，政府ID数据库和分布式分类帐。在生态系统中，经常使用不止一种类型的可验证数据注册表。
![](https://www.w3.org/TR/vc-data-model/diagrams/ecosystem.svg)
图1角色和信息流构成了本规范的基础

::: tip 注意 
上面的图1提供了一个示例生态系统，其中以本规范的其余概念为基础。存在其他生态系统，例如受保护的环境或专有系统，其中可验证的凭证也可以带来好处。
:::

### 1.3 Use Cases and Requirements
本节是非规范性的。

可验证凭证用例文档[VC-USECASES]概述了许多读者可能会觉得有用的关键主题，包括：

对上面介绍的角色的更详尽的解释
在垂直市场中确定的需求，例如教育，金融，医疗保健，零售，专业许可和政府
生态系统中的角色执行的常见任务及其相关要求
工作组确定的共同顺序和流程。
通过记录和分析用例文档，为该规范确定了以下理想的生态系统特征：

- 可验证的凭证``(Verifiable credentials)``表示发行人``(Issuers)``以明显篡改和尊重隐私的方式所作的陈述。
- 持有人``(Holders)``将来自不同发行人``(Issuers)``的可验证凭证的集合组装到单个工件中，即可验证的表示形式。
- 发行者``(Issuers)``可以发行关于任何主题的可验证凭证。
- 充当发行人``(Issuers)``，持有人``(Holders)``或验证者``(verifier)``的身份，不需要任何机构的注册或批准，因为所涉及的信任是双方之间的双边关系。

- 可验证的演示文稿允许任何验证者``(verifier)``验证来自任何发行者``(Issuers)``的可验证凭据的真实性。
- 持有人``(Holders)``可以从任何人那里收到可验证的凭证``(Verifiable credentials)``。
- 持有人``(Holders)``可以通过任何用户代理与任何发行者``(Issuers)``和任何验证者``(verifier)``进行交互。
- 持有人``(Holders)``可以共享可验证的演示文稿，然后可以在不向发行人``(Issuers)``透露验证者``(verifier)``身份的情况下进行验证。
- 持有人``(Holders)``可以将可验证的凭证``(Verifiable credentials)``存储在任何位置，而不会影响其可验证性，并且发行人``(Issuers)``无需了解有关它们存储在何处或何时访问它们的任何信息。
- 持有人``(Holders)``可以向任何验证​​者提供可验证的演示文稿，而不会影响索赔的真实性，也不会向发行人``(Issuers)``透露该行为。
- 验证者``(verifier)``可以验证任何持有人``(Holders)``的可验证陈述，其中包含任何发行人``(Issuers)``的债权证明。
- 验证不应依赖于发行方和验证方之间的直接交互。
- 验证不应向任何发行者``(Issuers)``透露验证者``(verifier)``的身份。
- 该规范必须为发行人``(Issuers)``提供一种发行发行人``(Issuers)``的方式，以发行支持选择性公开的可验证凭证，而无需所有兼容的软件来支持该功能。
- 发行者``(Issuers)``可以发行支持选择性披露的可验证凭证。
- 如果单个可验证的凭证``(Verifiable credentials)``支持选择性披露，则持有人``(Holders)``可以在不披露整个可验证凭证的情况下提出索赔证明。
- 可验证的演示可以公开可验证证书的属性，也可以满足验证者``(verifier)``请求的派生谓词。派生谓词是布尔条件，例如大于，小于，等于，处于集合中，等等。
- 发行者``(Issuers)``可以发行可撤销的可验证凭证。
- 可验证的凭证``(Verifiable credentials)``和可验证的表示必须以一种或多种机器可读数据格式可序列化。序列化和/或反序列化的过程必须是确定性，双向且无损的。可验证凭证或可验证表示的任何序列化都需要以确定性过程转换为本文档中定义的通用数据模型，以便可以以可互操作的方式处理生成的可验证凭证。还需要能够从数据模型生成序列化表- 格，而不会丢失数据或内容。
- 数据模型和序列化必须可扩展，且协调性最小。
- 发行人``(Issuers)``的撤销不应泄露有关主题，持有人``(Holders)``，可验证的特定凭证或验证者``(verifier)``的任何识别信息。
- 发行人``(Issuers)``可以披露撤销原因。
- 发行人``(Issuers)``吊销可验证的凭证``(Verifiable credentials)``时，应区分撤销加密完整性（例如，签名密钥已被破坏）与撤销状态更改（例如，驾驶执照被暂停）。
- 发行者``(Issuers)``可以提供用于刷新可验证证书的服务。

### 1.4 Conformance
除标记为非规范的部分外，本规范中的所有创作指南，图表，示例和注释均为非规范。本规范中的所有其他内容都是规范性的。

如此处所示，本文档中的关键词“可能”，“必须”，“不得”，“推荐”和“应该”将按BCP 14 [RFC2119] [RFC8174]中的说明进行解释。

合格文档是符合本规范中规范性声明的数据模型的任何具体表达。具体而言，必须执行第4节，基本概念，第5节，高级概念和第6节中的所有相关规范性声明。符合文件的序列化格式必须是确定的，双向的且无损的，如第6节所述。语法。合格文件可以任何这种序列化格式传输或存储。

合格处理器是被实现为生成或使用合格文档的软件和/或硬件的任何算法。当使用不合格的文档时，合格的处理器必须产生错误。

由于生态系统角色的一致性是高度适用于应用，用例和特定于市场垂直的，因此该规范未对生态系统中角色的一致性做出规范性声明，例如发行者，持有者或验证者。

需要数字证明机制（其子集是数字签名）来确保对可验证凭证的保护。拥有并验证证明，这可能取决于证明的语法（例如，使用JSON Web令牌的JSON Web签名来证明密钥持有者），是处理可验证凭证的重要部分。在发布之时，工作组成员已使用至少三种证明机制实施了可验证的凭证：

使用JSON Web签名[RFC7515]保护的JSON Web令牌[RFC7519]
链接的数据签名[LD-SIGNATURES]
Camenisch-Lysyanskaya零知识证明[CL签名]。
建议实施者注意，自本规范发布之日起，并非所有证明机制都已标准化。该小组期望其中一些机制以及新机制能够独立成熟并及时标准化。鉴于存在多种有效的证明机制，因此本规范未在任何单个数字签名机制上实现标准化。本规范的目标之一是提供一种可以通过各种当前和将来的数字证明机制保护的数据模型。符合本规范不依赖于特定证明机制的细节。它需要清楚地确定可验证凭据使用的机制。

本文档还包含包含JSON和JSON-LD内容的示例。其中一些示例包含无效JSON字符，例如内联注释（//）以及使用省略号（...）表示对示例几乎没有价值的信息。如果实现者希望将信息用作有效的JSON或JSON-LD，则应警告他们删除此内容。

## 2. Terminology
本节是非规范性的。

以下术语用于描述本说明书中的概念。

### claim 要求
关于一个主题的断言。
### credential凭据
发行人提出的一组一个或多个索赔。可验证的凭证是篡改证据，其作者身份可以通过密码验证。可验证的凭证可用于构建可验证的演示文稿，也可进行密码验证。凭证中的声明可能涉及不同的主题。
### data minimization数据最小化
将共享数据量严格限制为成功完成任务或目标所需的最低限度的行为。
### decentralized identifier分散标识符
与实体相关联的可移植的基于URL的标识符，也称为DID。这些标识符最常用于可验证的凭证中，并且与主题相关联，以便可验证的凭证本身可以轻松地从一个存储库移植到另一个存储库，而无需重新发行凭证。 DID的示例为did：example：123456abcdef。
### decentralized identifier document分散标识符文件
也称为DID文档，此文档可使用可验证的数据注册表进行访问，并且包含与特定分散标识符有关的信息，例如关联的存储库和公共密钥信息。
### derived predicate派生谓词
关于可验证凭证中另一个属性的值的可验证布尔声明。这些在零知识证明风格的可验证演示中很有用，因为它们可能会限制信息公开。例如，如果可验证的凭证包含用于表示特定高度（以厘米为单位）的属性，则派生谓词可能会引用可验证凭证中的height属性，这表明发行人证明了满足最小高度要求的高度值，而没有实际披露特定的高度。高度值。例如，对象的身高超过150厘米。
### digital signature电子签名
一种证明数字消息真实性的数学方案。
### entity实体
具有独特和独立存在的事物，例如在生态系统中执行一个或多个角色的个人，组织或设备。
### graph图形
由主题及其与其他主题或数据的关系组成的信息网络。
### holder持有人
实体可以通过拥有一个或多个可验证凭据并从中生成演示文稿来执行的角色。持有人通常（但并非总是）是其持有的可验证凭证的主题。持有人将其凭证存储在凭证存储库中。
### identity身份
跨上下文跟踪实体的方法。数字身份通常可以使用标识符和属性来跟踪和自定义跨数字上下文的实体交互。意外分发或使用身份信息会损害隐私。此类信息的收集和使用应遵循数据最小化的原则。
### identity provider身份提供者
身份提供者（有时缩写为IdP）是一种用于为持有人创建，维护和管理身份信息，同时向联盟或分布式网络中的依赖方应用程序提供身份验证服务的系统。在这种情况下，持有人始终是主题。即使可验证的凭证是承载凭证，也假定可验证的凭证与主题一起保留，并且如果不是，则它们被攻击者窃取。除非将本文档中的概念与其他规范进行比较或映射，否则本规范不会使用该术语。该规范将身份提供者的概念分为两​​个不同的概念：发行者和持有者。
### issuer发行人
实体可以通过声明有关一个或多个主题的声明，根据这些声明创建可验证的凭证，并将该可验证的凭证传送给持有人来执行。
### presentation介绍
由一个或多个发行者发行的，由一个或多个可验证凭证派生的，与特定验证者共享的数据。可验证的表示形式是篡改证明表示形式，其编码方式使得在密码验证过程之后可以信任数据的作者身份。某些类型的可验证演示文稿可能包含从原始可验证凭证（例如，零知识证明）合成但不包含的数据。
### repository资料库
一种程序，例如存储金库或个人可验证的凭证钱包，用于存储和保护对持有人可验证的凭证的访问。
### selective disclosure选择披露
持有人就共享哪些信息做出精细决策的能力。
### subject学科
关于索赔的事情。
### user agent用户代理
诸如浏览器或其他Web客户端之类的程序，它在持有者，发行者和验证者之间进行通信。
### validation验证
确保可验证的凭证或可验证的表示满足验证者和其他相关利益相关者的需求。本规范仅限于Veri

### URI
由[RFC3986]定义的统一资源标识符。

## 3 Core Data Model
他的部分是非规范的。 以下各节概述了核心数据模型概念，例如声明，凭证和表示，这些概念构成了本规范的基础。

### 3.1 Claims
本节是非规范性的。 索赔是关于主题的陈述。主题是可以提出主张的事物。声明使用subject-property-value relationships。
![](https://www.w3.org/TR/vc-data-model/diagrams/claim.svg)
如上图2所示，用于索赔的数据模型功能强大，可用于表达各种语句。
例如，可以表示是否有人从特定大学毕业，如下图3所示。
![](https://www.w3.org/TR/vc-data-model/diagrams/claim-example.svg)
图3一个基本的说法，表示帕特是“示例大学”的校友。
各个声明可以合并在一起以表示有关主题的信息图。 
下面图4所示的示例通过添加Pat认识Sam以及Sam被聘为教授的主张扩展了先前的主张。
![](https://www.w3.org/TR/vc-data-model/diagrams/claim-extended.svg)
图4可以合并多个声明以表示信息图。
为此，介绍了权利要求的概念和信息图。 为了能够信任声明，希望将更多信息添加到图中。

### 3.2 Credentials
本节是非规范性的。

凭证是同一实体提出的一组一个或多个声明。 凭证可能还包括标识符和用于描述凭证属性的元数据，例如发行者，到期日期和时间，代表图像，用于验证目的的公钥，吊销机制等。 元数据可能由发行者签名。 可验证的凭证是一组篡改证据和元数据，可通过密码证明谁是颁发凭证。
![](https://www.w3.org/TR/vc-data-model/diagrams/credential.svg)
图5可验证凭证的基本组成部分。 
可验证凭证的示例包括数字员工身份卡，数字出生证明和数字教育证明。

::: tip 注意
凭证标识符通常用于标识凭证的特定实例。 这些标识符也可以用于关联。 建议希望最小化相关性的持有人使用不泄露凭证标识符的选择性披露方案。
:::

上面的图5显示了可验证凭证的基本组件，但是抽象了有关如何将索偿组织成信息图的细节，然后将这些信息图组织成可验证凭证。 下面的图6显示了可验证凭证的更完整描述，该凭证通常由至少两个信息图组成。 第一张图表示可验证的凭证本身，其中包含凭证元数据和声明。 第二张图表示数字证明，通常是数字签名。
![](https://www.w3.org/TR/vc-data-model/diagrams/credential-graph.svg)
图6与基本可验证凭证关联的信息图。
::: tip 注意
可能有一个凭证，例如结婚证书，其中包含有关不同主题的多个声明，这些声明不需要相关。
:::


::: tip 注意
可能有一个不包含有关颁发证书的实体的任何声明的证书。 例如，仅包含有关特定狗的声明的凭证，但是会颁发给其所有者。
:::

### 3.3 Presentations
他的部分是非规范的。

增强隐私是此规范的主要设计功能。因此，对于使用此技术的实体来说，仅能够表达其角色的适合于给定情况的部分非常重要。一个人的角色的子集的表达称为可验证的表示。不同角色的示例包括某人的专业角色，其在线游戏角色，其家庭角色或隐身角色。

可验证的表示表示来自一个或多个可验证凭据的数据，并以可验证数据作者身份的方式打包。如果直接提供可验证的凭据，则它们将成为可验证的表示。从可验证凭据中获得的数据格式也可以是可验证的表示，这些数据格式可以进行密码验证，但其本身并不包含可验证凭据。

演示文稿中的数据通常是关于同一主题的，但可能是由多个发行者发布的。此信息的汇总通常表示个人，组织或实体的一个方面。
![](https://www.w3.org/TR/vc-data-model/diagrams/presentation.svg)
图7可验证演示文稿的基本组件。
上面的图7显示了可验证表示的组件，但抽象了有关如何将可验证凭据组织到信息图中的详细信息，然后将信息图组织到可验证表示中。 下面的图8显示了可验证表示的更完整描述，该表示通常由至少四个信息图组成。 第一张图表示可验证的演示文稿本身，其中包含演示文稿元数据。 图中的verifiablePresentation属性是指一个或多个可验证的凭证（每个都是独立图），而凭证又包含凭证元数据和声明。 第三张图表示凭证图证明，通常是数字签名。 第四个图表示表示图证明，通常是数字签名。

![](https://www.w3.org/TR/vc-data-model/diagrams/presentation-graph.svg)
图8与基本可验证表示形式相关的信息图。

::: tip 注意
可能有一个演示文稿，例如业务角色，它利用了关于不同主题的多个凭证，这些凭证通常但并非必须相关。
:::

### 3.4 Concrete Lifecycle Example
本节是非规范性的。

前面的部分介绍了索赔的概念，可验证的凭证以及使用图形描述的可验证表示。 本节提供了一组简单但完整的数据模型生命周期示例，以本规范支持的一种具体语法表示。 可验证凭证生态系统中凭证和演示文稿的生命周期通常采用以下共同路径：

颁发一个或多个可验证的凭证。
可验证的凭证存储在凭证存储库（例如数字钱包）中。
将可验证的凭证组成为验证者的可验证表示。
验证者对可验证演示的验证。
为了说明这一生命周期，我们将以从大学兑换校友折扣的示例为例。 在下面的示例中，Pat从大学获得了校友可验证的凭证，Pat将可验证的凭证存储在数字钱包中。

::: tip EXAMPLE 1: A simple example of a verifiable credential
``` json
{
  
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  
  "id": "http://example.edu/credentials/1872",
  
  "type": ["VerifiableCredential", "AlumniCredential"],
  
  "issuer": "https://example.edu/issuers/565049",
  
  "issuanceDate": "2010-01-01T19:73:24Z",
  
  "credentialSubject": {
    
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    
    "alumniOf": {
      "id": "did:example:c276e12ec21ebfeb1f712ebc6f1",
      "name": [{
        "value": "Example University",
        "lang": "en"
      }, {
        "value": "Exemple d'Université",
        "lang": "fr"
      }]
    }
  },
  
  
  "proof": {
    
    "type": "RsaSignature2018",
    
    "created": "2017-06-18T21:19:10Z",
    
    "proofPurpose": "assertionMethod",
    
    "verificationMethod": "https://example.edu/issuers/keys/1",
    
    "jws": "eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..TCYt5X
      sITJX1CxPCT8yAV-TVkIEq_PbChOMqsLfRoPsnsgw5WEuts01mq-pQy7UJiN5mgRxD-WUc
      X16dUEMGlv50aqzpqh4Qktb3rk-BuQy72IFLOqV0G_zS245-kronKb78cPN25DGlcTwLtj
      PAYuNzVBAh4vGHSrQyHUdBBPM"
  }
}
```
:::
帕特然后尝试赎回校友折扣。 验证者是一种门票销售系统，指出“示例大学”的任何校友均可获得体育赛事季票的折扣。 Pat使用移动设备开始购买季票的过程。 此过程中的一个步骤要求提供校友可验证的凭据，并且此请求将路由到Pat的数字钱包。 数字钱包询问Pat是否愿意提供以前发布的可验证的凭证。 Pat选择校友可验证的凭据，然后将其组合为可验证的演示文稿。 可验证的演示文稿将发送到验证者并进行验证。

::: tip EXAMPLE 2: A simple example of a verifiable presentation
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "type": "VerifiablePresentation",
  
  "verifiableCredential": [{
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "http://example.edu/credentials/1872",
    "type": ["VerifiableCredential", "AlumniCredential"],
    "issuer": "https://example.edu/issuers/565049",
    "issuanceDate": "2010-01-01T19:73:24Z",
    "credentialSubject": {
      "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
      "alumniOf": {
        "id": "did:example:c276e12ec21ebfeb1f712ebc6f1",
        "name": [{
          "value": "Example University",
          "lang": "en"
        }, {
          "value": "Exemple d'Université",
          "lang": "fr"
        }]
      }
    },
    "proof": {
      "type": "RsaSignature2018",
      "created": "2017-06-18T21:19:10Z",
      "proofPurpose": "assertionMethod",
      "verificationMethod": "https://example.edu/issuers/keys/1",
      "jws": "eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..TCYt5X
        sITJX1CxPCT8yAV-TVkIEq_PbChOMqsLfRoPsnsgw5WEuts01mq-pQy7UJiN5mgRxD-WUc
        X16dUEMGlv50aqzpqh4Qktb3rk-BuQy72IFLOqV0G_zS245-kronKb78cPN25DGlcTwLtj
        PAYuNzVBAh4vGHSrQyHUdBBPM"
    }
  }],
  
  "proof": {
    "type": "RsaSignature2018",
    "created": "2018-09-14T21:19:10Z",
    "proofPurpose": "authentication",
    "verificationMethod": "did:example:ebfeb1f712ebc6f1c276e12ec21#keys-1",
    
    "challenge": "1f44d55f-f161-4938-a659-f8026467f126",
    "domain": "4jt78h47fh47",
    "jws": "eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..kTCYt5
      XsITJX1CxPCT8yAV-TVIw5WEuts01mq-pQy7UJiN5mgREEMGlv50aqzpqh4Qq_PbChOMqs
      LfRoPsnsgxD-WUcX16dUOqV0G_zS245-kronKb78cPktb3rk-BuQy72IFLN25DYuNzVBAh
      4vGHSrQyHUGlcTwLtjPAnKb78"
  }
}
```
:::

::: tip 注意
有兴趣了解更多有关上述证明机制的实现者，可以在第4.7节证明（签名）中并通过阅读以下规范来了解更多信息：链接数据证明[LD-PROOFS]，链接数据签名[LD-SIGNATURES]，2018年 RSA签名套件[LDS-RSA2018]和JSON Web签名（JWS）未编码有效负载选项[RFC7797]。 可验证凭据扩展注册表[VC-EXTENSION-REGISTRY]中提供了一系列的证明机制。
:::

## 4 Basic Concepts
本节介绍了该规范的一些基本概念，以准备本文档后面的第5节“高级概念”。
### Contexts
当两个软件系统需要交换数据时，它们需要使用两个系统都理解的术语。 打个比方，考虑两个人如何交流。 双方必须使用相同的语言，并且彼此使用的单词必须具有相同的含义。 这可能被称为对话的上下文。

可验证的凭证和可验证的表示具有许多由URI标识的属性和值。 但是，这些URI可能很长，而且不是很友好。 在这种情况下，简短的人类友好别名会更有帮助。 该规范使用@context属性将此类简短形式的别名映射到特定可验证凭据和可验证表示所需的URI。

::: tip 注意
在JSON-LD中，@ context属性还可用于传达其他详细信息，例如数据类型信息，语言信息，转换规则等，这些信息超出了本规范的要求，但将来可能会有用。 进行相关工作。 有关更多信息，请参见第3.1节：[JSON-LD]规范的上下文。
:::
可验证的凭据和可验证的演示文稿必须包含@context属性。

``@context``
@context属性的值必须是有序集合，其中第一项是值为https://www.w3.org/2018/credentials/v1的URI。 作为参考，附录§B.基本上下文中提供了基本上下文的副本。 数组中的后续项务必表示上下文信息，并由URI或对象的任何组合组成。 建议@context中的每个URI是一个URI，如果将其取消引用，则将导致一个包含有关@context的机器可读信息的文档。

::: tip 注意
尽管此规范要求存在@context属性，但并不需要使用JSON-LD处理@context属性的值。 这是为了支持使用普通JSON库的处理，例如将可验证凭证编码为JWT时可能使用的库。 所有库或处理器都必须确保@context属性中值的顺序与特定应用程序所期望的顺序相同。 支持JSON-LD的库或处理器可以按预期使用完整的JSON-LD处理来处理@context属性。
:::

::: tip EXAMPLE 3: Usage of the @context property
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.edu/credentials/58473",
  "type": ["VerifiableCredential", "AlumniCredential"],
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "alumniOf": {
      "id": "did:example:c276e12ec21ebfeb1f712ebc6f1",
      "name": [{
        "value": "Example University",
        "lang": "en"
      }, {
        "value": "Exemple d'Université",
        "lang": "fr"
      }]
    }
  },
  "proof": {  }
}
```
:::

上面的示例使用基本上下文URI（https://www.w3.org/2018/credentials/v1）来确定对话与可验证的凭据有关。 第二个URI（https://www.w3.org/2018/credentials/examples/v1）确定对话与示例有关。

::: tip 注意
本文档使用示例上下文URI（https://www.w3.org/2018/credentials/examples/v1）来演示示例。 预期实现不会将此URI用于其他任何目的，例如在试验系统或生产系统中。
:::

https://www.w3.org/2018/credentials/v1上的可用数据是静态文档，永远不会更新，应该下载和缓存。 可验证凭证数据模型的相关人类可读词汇文档可从https://www.w3.org/2018/credentials获得。 在第5.3节“可扩展性”中进一步扩展了此概念。

### 4.2 Identifiers
在表达有关特定事物（例如人，产品或组织）的陈述时，使用某种标识符通常很有用，以便其他人可以表达关于同一事物的陈述。该规范为此类标识符定义了可选的id属性。 id属性旨在明确引用对象，例如人，产品或组织。使用id属性可以表达可验证凭证中有关特定事物的语句。

如果存在id属性：

id属性必须表达一个标识符，其他人在表达有关由该标识符标识的特定事物的语句时应期望他人使用。
id属性不得包含多个值。
id属性的值必须是URI。
::: tip注意
开发人员应记住，在需要假名的情况下，标识符可能有害。在考虑这种情况时，鼓励开发人员仔细阅读第7.3节“基于标识符的关联”。 §7中还记录了其他类型的关联机制。隐私注意事项会引起隐私问题。在高度重视隐私的情况下，可以省略id属性。
:::
```ID```
id属性的值必须是单个URI。建议id中的URI是一个，如果取消引用，则将导致文档中包含有关id的机器可读信息。

::: tip EXAMPLE 4: Usage of the id property
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.edu/credentials/3732",
  "type": ["VerifiableCredential", "UniversityDegreeCredential"],
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "proof": {  }
}
```
:::

上面的示例使用两种类型的标识符。 第一个标识符用于可验证的凭证，并使用基于HTTP的URL。 第二个标识符用于可验证凭证的主题（权利要求所涉及的内容），并使用分散式标识符，也称为DID。

::: tip 注意
从本出版物发行以来，DID是一种新型的标识符，对于可验证的凭证有用，它是不必要的。 具体而言，可验证凭据不依赖于DID，并且DID不依赖于可验证凭据。 但是，预计许多可验证的凭证将使用DID，并且实现此规范的软件库可能需要解析DID。 基于DID的URL用于表示与主题，发行者，持有者，凭证状态列表，密码密钥以及与可验证凭证关联的其他机器可读信息关联的标识符。
::: 

### 4.3 Types
处理本文档中指定的对象种类的软件系统使用类型信息来确定所提供的可验证凭据或可验证表示形式是否合适。 该规范定义了用于表达类型信息的类型属性。

可验证的凭据和可验证的演示文稿必须具有type属性。 也就是说，任何不具有类型属性的凭证或表示都是不可验证的，因此不可验证的凭证或可验证的表示也不是可验证的。

```type```
类型属性的值必须（或通过解析@context属性）映射到一个或多个URI。 如果提供了多个URI，则URI必须被解释为无序集合。 应该使用语法上的便利来简化开发人员的使用。 这样的便利可能包括JSON-LD术语。 建议类型中的每个URI都是一个，如果取消引用，则会导致文档中包含有关该类型的机器可读信息。

::: tip EXAMPLE 5: Usage of the type property
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.edu/credentials/3732",
  "type": ["VerifiableCredential", "UniversityDegreeCredential"],
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "proof": {  }
}
```
:::
关于此规范，下表列出了必须具有指定类型的对象。
|Object|	Type|
|------|------|
|Verifiable credential object(a subclass of a credential object)|	VerifiableCredential and, optionally, a more specific verifiable credential type. For example,"type": ["VerifiableCredential", "UniversityDegreeCredential"]|
|Credential object|	VerifiableCredential and, optionally, a more specific verifiable credential type. For example,"type": ["VerifiableCredential", "UniversityDegreeCredential"]|
|Verifiable presentation object(a subclass of a presentation object)	|VerifiablePresentation and, optionally, a more specific verifiable presentation type. For example,"type": ["VerifiablePresentation", "CredentialManagerPresentation"]|
|Presentation object|	VerifiablePresentation and, optionally, a more specific verifiable presentation type. For example,"type": ["VerifiablePresentation", "CredentialManagerPresentation"]|
|Proof object|	A valid proof type. For example,"type": "RsaSignature2018"|
|credentialStatus object|	A valid credential status type. For example,"type": "CredentialStatusList2017"|
|termsOfUse object|	A valid terms of use type. For example,"type": "OdrlPolicy2017")|
|evidence object|	A valid evidence type. For example,"type": "DocumentVerification2018"|

::: tip 注意
可验证凭证数据模型的类型系统与[JSON-LD]相同，在第5.4节：指定类型和第8节：JSON-LD语法中进行了详细说明。当使用JSON-LD上下文时（请参阅第5.3节），此规范为@type关键字加上别名以进行键入，以使JSON-LD文档更易于理解。尽管应用程序开发人员和文档作者不需要了解JSON-LD类型系统的细节，但是想要支持可互操作的可扩展性的本规范的实现者却可以。
:::

所有凭据，表示和封装的对象必须指定其他更窄的类型（或与之关联）（例如，UniversityDegreeCredential），以便软件系统可以处理此其他信息。

当处理本规范中定义的封装对象（例如，与credentialSubject对象相关联的对象或在其中深度嵌套的对象）时，软件系统应使用在封装层次结构中较高级别的对象中指定的类型信息。具体来说，封装对象（例如凭证）应该传达关联的对象类型，以便验证者可以基于封装对象的类型快速确定关联对象的内容。

例如，类型为UniversityDegreeCredential的凭据对象向验证者发出信号，表明与credentialSubject属性关联的对象包含以下标识符：

id属性中的主题。
类型属性中的度数类型。
名称属性中学位的标题。
这使实现者可以依赖与type属性关联的值进行验证。对类型及其相关属性的期望应至少以人类可读的规范记录，最好以附加的机器可读表示形式记录。

::: tip 注意
本规范中描述的数据模型中使用的类型系统允许使用多种方式将类型与数据相关联。促请实施者和作者阅读《可验证证书实施指南》 [VC-IMP-GUIDE]中有关键入的内容。
:::

### 4.4 Credential Subject
可验证的凭证包含有关一个或多个主题的声明。 本规范定义了credentialSubject属性，用于表达有关一个或多个主题的权利要求。

可验证的凭证必须具有credentialSubject属性。

``credentialSubject``凭据主题
credentialSubject属性的值定义为一组对象，这些对象包含一个或多个属性，每个属性与可验证凭据的主题相关。 每个对象都可以包含一个ID，如第4.2节标识符所述。

::: tip EXAMPLE 6: Usage of the credentialSubject property
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.edu/credentials/3732",
  "type": ["VerifiableCredential", "UniversityDegreeCredential"],
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "proof": {  }
}
```
:::
可以在可验证的凭证中表达与多个主题相关的信息。 下面的示例指定了作为配偶的两个主题。 请注意，使用数组表示法将多个主题与credentialSubject属性相关联。

::: tip EXAMPLE 7: Specifying multiple subjects in a verifiable credential
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.edu/credentials/3732",
  "type": ["VerifiableCredential", "RelationshipCredential"],
  "credentialSubject": [{
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "name": "Jayden Doe",
    "spouse": "did:example:c276e12ec21ebfeb1f712ebc6f1"
  }, {
    "id": "did:example:c276e12ec21ebfeb1f712ebc6f1",
    "name": "Morgan Doe",
    "spouse": "did:example:ebfeb1f712ebc6f1c276e12ec21"
  }],
  "proof": {  }
}
```
:::

### 4.5 Issuer
本规范定义了一个属性，用于表达可验证证书的颁发者。

可验证的凭证必须具有发行者属性。

```issuer```
颁发者属性的值必须是URI或包含id属性的对象。 建议颁发者中的URI或它的id是一个，如果被取消引用，将导致文档中包含有关发行者的机器可读信息，该信息可用于验证凭证中表示的信息。
::: tip EXAMPLE 8: Usage of issuer property
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.edu/credentials/3732",
  "type": ["VerifiableCredential", "UniversityDegreeCredential"],
  "issuer": "https://example.edu/issuers/14",
  "issuanceDate": "2010-01-01T19:23:24Z",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "proof": {  }
}
```
:::
通过将对象与issuer属性相关联，还可以表达有关发布者的其他信息：
::: tip EXAMPLE 9: Usage of issuer expanded property
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.edu/credentials/3732",
  "type": ["VerifiableCredential", "UniversityDegreeCredential"],
  "issuer": {
    "id": "did:example:76e12ec712ebc6f1c221ebfeb1f",
    "name": "Example University"
  },
  "issuanceDate": "2010-01-01T19:23:24Z",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "proof": {  }
}
```
:::

::: tip 注意 
颁发者属性的值也可以是JWK（例如，“ https://example.com/keys/foo.jwk”）或DID（例如，“ did：example：abfe13f712120431c276e12ecab”）。
:::

### 4.6 Issuance Date
该规范定义了issuanceDate属性，用于表示凭证有效时的日期和时间。

```issuanceDate```
凭证必须具有issuanceDate属性。 issuanceDate属性的值必须是[RFC3339]组合的日期和时间字符串的字符串值，代表凭证生效的日期和时间，该日期和时间可以是将来的日期和时间。 请注意，此值表示与credentialSubject属性关联的信息生效的最早时间点。

::: warning EXAMPLE 10: Usage of issuanceDate property
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.edu/credentials/3732",
  "type": ["VerifiableCredential", "UniversityDegreeCredential"],
  "issuer": "https://example.edu/issuers/14",
  "issuanceDate": "2010-01-01T19:23:24Z",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "proof": {  }
}
```
:::

::: tip 注意
预期该规范的下一个版本将添加validFrom属性，并将弃用issuanceDate属性，而推荐使用新的已发布属性。 这两个属性的值的范围应保持为[RFC3339]组合的日期和时间字符串。 建议实现者保留有效的自和发出的属性，不建议将其用于任何其他目的。
:::

### 4.7 Proofs (Signatures)
必须将至少一种证明机制以及评估该证明所必需的细节表示为，证明或证明是可验证的证明或可证明的证明；也就是说，是可验证的。

本规范确定了两类证明机制：外部证明和嵌入式证明。外部证明是包装此数据模型的表达的证明，例如JSON Web令牌，请参见6.3.3节JSON Web令牌。嵌入式证明是一种将证明包含在数据中的机制，例如第6.3.2节“链接数据证明”中详细介绍的“链接数据签名”。

嵌入证明时，必须使用证明属性。

``proof``
一种或多种加密证明，可用于检测篡改并验证证书或演示文稿的作者身份。必须使用type属性包括用于嵌入式证明的特定方法。
由于用于数学证明的方法因表示语言和所使用的技术而异，因此，期望作为证明属性的值的一组名称/值对将相应地发生变化。例如，如果将数字签名用于证明机制，则证明属性应具有名称/值对，其中包括签名，对签名实体的引用以及签名日期的表示。下面的示例使用RSA数字签名。


::: warning EXAMPLE 11: Usage of the proof property on a verifiable credential
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.gov/credentials/3732",
  "type": ["VerifiableCredential", "UniversityDegreeCredential"],
  "issuer": "https://example.edu",
  "issuanceDate": "2010-01-01T19:73:24Z",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "proof": {
    "type": "RsaSignature2018",
    "created": "2018-06-18T21:19:10Z",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://example.com/jdoe/keys/1",
    "jws": "eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19
      ..DJBMvvFAIC00nSGB6Tn0XKbbF9XrsaJZREWvR2aONYTQQxnyXirtXnlewJMB
      Bn2h9hfcGZrvnC1b6PgWmukzFJ1IiH1dWgnDIS81BH-IxXnPkbuYDeySorc4
      QU9MJxdVkY5EL4HYbcIfwKj6X4LBQ2_ZHZIu1jdqLcRZqHcsDF5KKylKc1TH
      n5VRWy5WhYg_gBnyWny8E6Qkrze53MR7OuAmmNJ1m1nN8SxDrG6a08L78J0-
      Fbas5OjAQz3c17GY8mVuDPOBIOVjMEghBlgl3nOi1ysxbRGhHLEK4s0KKbeR
      ogZdgt1DkQxDFxxn41QWDw_mmMCjs9qxg0zcZzqEJw"
  }
}
```
:::

::: tip 注意
正如在第1.4节“一致性”中所讨论的，存在多种可行的证明机制，并且本规范未标准化也不建议任何单一的证明机制用于可验证的凭证。 有关证明机制的更多信息，请参见以下规范：链接数据证明[LD-PROOFS]，链接数据签名[LD-SIGNATURES]，2018 RSA签名套件[LDS-RSA2018]和JSON Web签名（JWS）未编码净荷 选项[RFC7797]。 可验证凭据扩展注册表[VC-EXTENSION-REGISTRY]中提供了一系列的证明机制。
:::

### 4.8 Expiration
该规范为凭证到期信息的表达定义了expirationDate属性。

``expirationDate``
如果存在，则expirationDate属性的值必须是[RFC3339]组合的日期和时间字符串的字符串值，该字符串值表示凭证停止有效的日期和时间。

::: warning EXAMPLE 12: Usage of the expirationDate property
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.edu/credentials/3732",
  "type": ["VerifiableCredential", "UniversityDegreeCredential"],
  "issuer": "https://example.edu/issuers/14",
  "issuanceDate": "2010-01-01T19:23:24Z",
  "expirationDate": "2020-01-01T19:23:24Z",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "proof": {  }
}
```
:::

::: 注意
预期该规范的下一个版本将以不赞成使用的方式添加validUntil属性，但保留与expirationDate属性的向后兼容性。 建议实现者保留validUntil属性，不建议将其用于任何其他目的。
:::

### 4.9 Status
本规范定义了以下credentialStatus属性，用于发现有关可验证凭证当前状态的信息，例如是否已暂停或吊销了该凭证。

``credentialStatus``

credentialStatus属性的值必须包括：
id属性，必须为URL。
type属性，表示凭据状态类型（也称为凭据状态方法）。 期望该值将提供足够的信息来确定证书的当前状态。 例如，该对象可以包含一个指向外部文档的链接，该链接指出凭据是否被暂停或吊销。
凭证状态信息的确切内容由特定的credentialStatus类型定义确定，并且取决于诸如实施简单还是增强隐私性等因素而变化。

::: warning EXAMPLE 13: Usage of the status property
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.edu/credentials/3732",
  "type": ["VerifiableCredential", "UniversityDegreeCredential"],
  "issuer": "https://example.edu/issuers/14",
  "issuanceDate": "2010-01-01T19:23:24Z",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "credentialStatus": {
    "id": "https://example.edu/status/24",
    "type": "CredentialStatusList2017"
  },
  "proof": {  }
}
```
:::
为状态方案定义数据模型，格式和协议超出了本规范的范围。 存在可验证的凭证扩展注册表[VC-EXTENSION-REGISTRY]，其中包含可用状态方案，供想要实施可验证的凭证状态检查的实施者使用。

### 4.10 Presentations
演示可以用于合并和展示凭证。可以以可验证数据作者的方式打包它们。演示文稿中的数据通常都是关于同一主题的，但是数据中主题或发行者的数量没有限制。来自多个可验证凭据的信息聚合是可验证表示的典型用法。

可验证的表示形式通常由以下属性组成：

#### ID
id属性是可选的，可以用来为演示文稿提供唯一的标识符。有关使用此属性的详细信息，请参见第4.2节“标识符”。
#### type
type属性是必需的，它表示表示的类型，例如VerifiablePresentation。有关使用此属性的详细信息，请参见第4.3节“类型”。
#### verifiableCredential 验证凭证
如果存在，则verifiableCredential属性的值必须由一个或多个可验证的凭据或以密码可验证的格式从可验证的凭据派生的数据构造。
#### holder 持有人
如果存在，则holder属性的值应为生成展示的实体的URI。
#### proof 证明
如果存在，证明属性的值可确保表示可验证。有关使用此属性的详细信息，请参见第4.7节“证明（签名）”。
下面的示例显示了一个可验证的演示，其中嵌入了可验证的凭据。

:: warning EXAMPLE 14: Basic structure of a presentation
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "urn:uuid:3978344f-8596-4c3a-a978-8fcaba3903c5",
  "type": ["VerifiablePresentation", "CredentialManagerPresentation"],
  "verifiableCredential": [{  }],
  "proof": [{  }]
}
```
:::
上面显示的verifiableCredential属性的内容是可验证的凭证，如本规范所述。 证明属性的内容是证明，如链接数据证明[LD-PROOFS]规范所述。 第6.3.1节JSON Web令牌中提供了使用JWT证明机制的可验证表示示例。

#### Presentations Using Derived Credentials
某些零知识密码方案可能使持有人能够间接证明他们持有可验证凭证中的主张，而不会透露可验证凭证本身。 在这些方案中，可以使用来自可验证凭证的声明来得出表示的值，该表示的值是通过密码声明的，以便验证者在信任发行者的情况下可以信任该值。

例如，可以使用包含密码的可验证方式，使用包含出生要求日期的可验证凭证来得出15岁以上的现值。 也就是说，如果验证者信任发行者，他们仍然可以信任派生的值。

::: tip 注意
有关包含派生数据而不是直接嵌入的可验证凭证的ZKP样式可验证表示的示例，请参见第5.8节“零知识证明”。
:::

使用零知识证明的选择性公开计划可以使用此模型中表达的声明来证明有关那些声明的其他声明。 例如，指定受试者的出生日期的索赔可以用作谓词，以证明受试者的年龄在给定范围内，因此可以证明受试者有资格享受与年龄相关的折扣，而无需实际透露受试者的出生日期。 持有人可以灵活地以适用于所需可验证陈述的任何方式使用权利要求。

![](https://www.w3.org/TR/vc-data-model/diagrams/claim-example-2.svg)
图9一项基本声明，声称Pat的生日是2010-01-01T19：23：24Z。日期编码将由架构确定。

## 5 Advanced Concepts
在第§4。基本概念中介绍的概念的基础上，本节探讨有关可验证凭据的更复杂的主题。
### 5.1 Lifecycle Details
本节是非规范性的。 
第1.2节生态系统概述提供了可验证凭证生态系统的概述。本节提供有关设想生态系统如何运行的更多详细信息。
![](https://www.w3.org/TR/vc-data-model/diagrams/ecosystemdetail.svg)
图10此规范的角色和信息流。
可验证凭证生态系统中的角色和信息流如下：

发行人向持有人发行可验证的凭证。 发行总是发生在涉及凭证的任何其他操作之前。
持有人可以将其一个或多个可验证凭证转移给另一持有人。
持有人将其一个或多个可验证凭据提供给验证者，还可以选择在可验证演示文稿中提供。
验证者验证所提供的可验证演示文稿和可验证证书的真实性。 这应该包括检查凭证状态以撤销可验证的凭证。
发行人可能会撤销可验证的凭证。
持有人可能会删除可验证的凭证。

::: tip 注意
上述操作的顺序不是固定的，某些操作可能会执行不止一次。 这种动作重复可能是立即发生的，也可能在以后发生。
:::

最常见的操作顺序是：

发行人向持有人发行。
持有人出示验证者。
验证者验证。
该规范未定义用于传输可验证证书或可验证表示的任何协议，但是假设其他规范确实指定了实体之间的传输方式，则此可验证证书数据模型可直接应用。

本规范也未定义授权框架，也未定义验证者在验证可验证凭据或可验证表示后考虑到所有者，可验证凭据的发行者，可验证凭据的内容及其自身的策略后可能做出的决定。 。

特别是，第5.6节“使用条款”和第C.节，主题-所有者关系指定了验证者如何确定：

持有人是否为可验证凭证的主体。
主题与持有者之间的关系。
原始持有人是否通过了可验证的凭证给后续持有人。
持有者或验证者使用可验证凭证的任何限制。

### 5.2 Trust Model
本节是非规范性的。

可验证的凭证信任模型如下：

验证者信任发行者签发其收到的证书。要建立这种信任，凭据需要：
包含证明发行人已生成证书的证明（即，它是可验证的证书），或
已通过传输方式明确确定发行者生成了可验证的凭证，并且可验证的凭证在运输或存储过程中未被篡改。根据验证者的风险评估，这种信任可能会减弱。
所有实体都信任可验证的数据注册表，以防篡改并正确记录哪些数据由哪些实体控制。
持有者和验证者相信发行者可以发布有关主题的真实（即非虚假）凭证，并在适当时快速撤消它们。
持有者相信存储库可以安全地存储凭据，不会将其释放给持有者以外的任何人，并且不会在其保管期间损坏或丢失它们。
此信任模型通过确保以下几点与其他信任模型有所不同：

发行者和验证者不需要信任存储库
发行者不需要知道或信任验证者。
通过使身份提供者和依赖方之间的信任脱钩，可以创建更加灵活和动态的信任模型，从而增加市场竞争和客户选择。

有关此信任模型如何与工作组研究的各种威胁模型进行交互的更多信息，请参见可验证凭证用例文档[VC-USECASES]。

::: tip 注意
本规范中详细介绍的数据模型并不意味着可传递的信任模型，例如更传统的证书颁发机构信任模型所提供的模型。 在可验证凭据数据模型中，验证者直接信任或不信任颁发者。 尽管可以使用可验证凭据数据模型构建传递信任模型，但仍建议实施者了解通过以证书颁发机构系统采用的方式广泛委派信任而引入的安全弱点。
:::

### 5.3 Extensibility
注意
可验证凭证数据模型的目标之一是实现无许可的创新。为此，数据模型需要以多种不同方式进行扩展。数据模型需要：

通过使用基于图的数据模型对复杂的多实体关系进行建模。
通过使用[LINKED-DATA]，可以扩展用于描述数据模型中信息的机器可读词汇，而无需使用集中式系统进行描述。
通过使用链接数据证明[LD-PROOFS]，链接数据签名[LD-SIGNATURES]和各种签名套件，支持多种类型的密码证明格式。
以一种受软件开发人员和网页作者欢迎的数据格式提供上述所有可扩展性机制，并通过使用[JSON-LD]启用该机制。
这种数据建模方法通常称为开放世界假设，这意味着任何实体都可以对其他实体发表任何言论。尽管这种方法似乎与构建简单且可预测的软件系统相冲突，但是在开放世界的假设下，与在封闭的软件系统中相比，在可扩展性与程序正确性之间取得平衡总是更具挑战性。

本节的其余部分通过一系列示例描述如何实现可扩展性和程序正确性。

让我们假设我们从下面显示的可验证凭证开始。

::: warning EXAMPLE 15: A simple credential
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.com/credentials/4643",
  "type": ["VerifiableCredential"],
  "issuer": "https://example.com/issuers/14",
  "issuanceDate": "2018-02-24T05:28:04Z",
  "credentialSubject": {
    "id": "did:example:abcdef1234567",
    "name": "Jane Doe"
  },
  "proof": {  }
}
```
:::
此可验证的凭证表明与did：example：abcdef1234567关联的实体的名称为Jane Doe。

现在，让我们假设开发人员想要扩展可验证的凭证来存储另外两个信息：一个内部公司参考号和Jane最喜欢的食物。

要做的第一件事是创建一个包含两个新术语的JSON-LD上下文，如下所示。

::: warning EXAMPLE 16: A JSON-LD context
``` json
{
  "@context": {
    "referenceNumber": "https://example.com/vocab#referenceNumber",
    "favoriteFood": "https://example.com/vocab#favoriteFood"
  }
}
```
:::
创建此JSON-LD上下文之后，开发人员将其发布到某个位置，以便将要处理可验证凭据的验证者可以访问它。 假设以上JSON-LD上下文在https://example.com/contexts/mycontext.jsonld上发布，我们可以通过包含上下文并将新属性和凭据类型添加到可验证凭据来扩展此示例。

::: warning EXAMPLE 17: A verifiable credential with a custom extension
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://example.com/contexts/mycontext.jsonld"
  ],
  "id": "http://example.com/credentials/4643",
  "type": ["VerifiableCredential", "CustomExt12"],
  "issuer": "https://example.com/issuers/14",
  "issuanceDate": "2018-02-24T05:28:04Z",
  "referenceNumber": 83294847,
  "credentialSubject": {
    "id": "did:example:abcdef1234567",
    "name": "Jane Doe",
    "favoriteFood": "Papaya"
  },
  "proof": {  }
}
```
:::
此示例演示了以无许可且分散的方式扩展可验证凭证数据模型。所示的机制还确保以这种方式创建的可验证凭据提供了一种防止名称空间冲突和语义歧义的机制。

这样的动态可扩展性模型确实增加了实施负担。为此类系统编写的软件必须根据应用程序的风险状况来确定带有扩展名的可验证凭证是否可接受。某些应用程序可能仅接受某些扩展，而高度安全的环境则可能不接受任何扩展。这些决定取决于这些应用程序的开发人员，并且特别不是本规范的范围。

敦促开发人员确保扩展JSON-LD上下文高度可用。无法获取上下文的实现将产生错误。确保扩展JSON-LD上下文始终可用的策略包括为上下文使用内容寻址的URL，将上下文文档与实现捆绑在一起或启用积极的上下文缓存。

建议实施者密切注意本规范中的扩展点，如§4.7证明（签名），§4.9状态，§5.4数据模式，§5.5刷新，§5.6使用条款和§5.7证据。尽管此规范未定义这些扩展点的具体实现，但可验证凭证扩展注册表[VC-EXTENSION-REGISTRY]提供了一个非正式的，经过精心策划的扩展列表，开发人员可以从这些扩展点使用这些扩展。

#### 5.3.1 Semantic Interoperability
该规范可确保“普通” JSON和JSON-LD语法在语义上兼容，而无需JSON实现使用JSON-LD处理器。为实现此目的，该规范对这两种语法施加了以下附加要求：

基于JSON的处理器必须处理@context密钥，以确保期望值按预期顺序存在于正在处理的凭据类型中。该顺序很重要，因为凭据中使用的键（使用与@context关联的值定义）是使用“首次定义的获胜”机制定义的，更改顺序可能会导致不同的键定义“赢得”。
当JSON-LD上下文重新定义活动上下文中的任何术语时，基于JSON-LD的处理器务必产生错误。更改现有术语定义的唯一方法是引入一个新术语，以清除该新术语范围内的活动上下文。对此功能感兴趣的作者应阅读JSON-LD 1.1规范中的@protected功能。
描述@context属性的值的预期顺序的可读文档将由寻求互操作性的任何实现者发布。寻求互操作性的JSON-LD实现者希望在@context属性中指定的URL上发布机器可读的描述（即普通的JSON-LD Context文档）。

以上要求保证了@context机制定义的术语在JSON和JSON-LD之间的语义互操作性。尽管JSON-LD处理器将使用提供的特定机制并可以验证是否正确指定了所有术语，但是基于JSON的处理器隐式接受同一组术语，而无需测试它们是否正确。换句话说，使用相同的机制为JSON和JSON-LD明确声明了发生数据交换的上下文。对于基于JSON的处理器，这是通过轻量级方式实现的，而不必使用JSON-LD处理库。

### 5.4 Data Schemas
在给定的数据集合上强制使用特定结构时，数据模式非常有用。本规范至少考虑两种类型的数据模式：

数据验证架构，用于验证可验证凭证的结构和内容是否符合发布的架构。
数据编码模式，用于将可验证凭证的内容映射到其他表示形式，例如用于零知识证明的二进制格式。
重要的是要理解，数据模式与@context属性有不同的用途，@ context属性既不强制执行数据结构或数据语法，也不允许将任意编码定义为备用表示格式。

该规范为数据模式的表达定义了以下属性：

``credentialSchema``凭证架构
credentialSchema属性的值务必是一个或多个数据模式，这些模式可为验证者提供足够的信息，以确定所提供的数据是否符合所提供的模式。每个credentialSchema必须指定其类型（例如，JsonSchemaValidator2018），以及一个id属性，该属性必须是标识模式文件的URI。每个数据模式的确切内容由特定的类型定义确定。

::: tip 注意
credentialSchema属性为注释类型定义或将其锁定到词汇表的特定版本提供了机会。 可验证凭据的作者可以使用credentialSchema包含词汇表的静态版本，该版本已锁定到某些内容完整性保护机制。 credentialSchema属性还可以对凭证执行语法检查，并使用诸如JSON Schema [JSON-SCHEMA-2018]验证之类的验证机制。
:::

::: warning EXAMPLE 18: Usage of the credentialSchema property to perform JSON schema validation
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.edu/credentials/3732",
  "type": ["VerifiableCredential", "UniversityDegreeCredential"],
  "issuer": "https://example.edu/issuers/14",
  "issuanceDate": "2010-01-01T19:23:24Z",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "credentialSchema": {
    "id": "https://example.org/examples/degree.json",
    "type": "JsonSchemaValidator2018"
  },
  "proof": {  }
}
```
:::
在上面的示例中，颁发者指定了一个credentialSchema，该证书指向[JSON-SCHEMA-2018]文件，验证者可以使用该文件来确定可验证的凭证是否格式正确。

::: tip 注意 
有关与JSON模式[JSON-SCHEMA-2018]或其他可选验证机制的链接的信息，请参阅《可验证证书实施指南》 [VC-IMP-GUIDE]文档。
::: 
数据模式还可用于指定到其他二进制格式的映射，例如用于执行零知识证明的格式。 有关将credentialSchema属性与零知识证明结合使用的更多信息，请参见第5.8节“零知识证明”。

::: warning EXAMPLE 19: Usage of the credentialSchema property to perform zero-knowledge validation
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.edu/credentials/3732",
  "type": ["VerifiableCredential", "UniversityDegreeCredential"],
  "issuer": "https://example.edu/issuers/14",
  "issuanceDate": "2010-01-01T19:23:24Z",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "credentialSchema": {
    "id": "https://example.org/examples/degree.zkp",
    "type": "ZkpExampleSchema2018"
  },
  "proof": {  }
}
```
:::
在上面的示例中，发行方正在指定一个credentialSchema，该凭据结构指向零知识打包二进制数据格式，该格式能够将输入数据转换为一种格式，然后供验证者用来确定是否提供了可验证的证明。 凭证有效。

### 5.5 Refreshing
对于系统而言，启用手动或自动刷新已过期的可验证证书非常有用。有关过期的可验证凭据的更多信息，请参见第4.8节“过期”。该规范定义了refreshService属性，该属性使发行者可以包括指向刷新服务的链接。

发行人可以将刷新服务作为元素包含在可验证凭证中（如果该验证服务或证件持有人（或两者兼有）），也可以将其包含在可验证表示中（如果仅针对持有人）。在后一种情况下，这使持有人可以在创建可验证的演示文稿以与验证者共享之前刷新可验证的凭证。在前一种情况下，将刷新服务包含在可验证的凭证中，使持有人或验证者可以执行凭证的将来更新。

仅当凭证已过期或发行者未发布凭证状态信息时，才预期使用刷新服务。建议发行者不要将refreshService属性放在不包含公共信息或刷新服务未受到某种保护的可验证凭证中。

::: tip 注意
将refreshService属性放在可验证的凭证中，以便验证者可以使用它，从而可以取消持有人的控制和同意，并允许将可验证的凭证直接颁发给验证者，从而绕过持有人。
:::

``refreshService``

refreshService属性的值必须是一个或多个刷新服务，该服务必须向接收者的软件提供足够的信息，以便接收者可以刷新可验证的凭证。 每个refreshService值必须指定其类型（例如，ManualRefreshService2018）及其ID（即服务的URL）。 每个刷新服务的确切内容由特定的refreshService类型定义确定。

::: warning EXAMPLE 20: Usage of the refreshService property by an issuer
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.edu/credentials/3732",
  "type": ["VerifiableCredential", "UniversityDegreeCredential"],
  "issuer": "https://example.edu/issuers/14",
  "issuanceDate": "2010-01-01T19:23:24Z",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "refreshService": {
    "id": "https://example.edu/refresh/3732"
    "type": "ManualRefreshService2018",
  },
  "proof": {  }
}
```
:::
在上面的示例中，发行方指定了手动的refreshService，可以通过将持有者或验证者定向到https://example.edu/refresh/3732来使用。

### 5.6 Terms of Use
发行人或持有人可以使用使用条款来传达签发可验证证书或可验证表示的条款。 发行人将其使用条款放入可验证的凭证中。 持有人将其使用条款放入可验证的演示文稿中。 该规范定义了一个termsOfUse属性，用于表达使用条款信息。

如果要接受可验证的凭据或可验证的表示形式，termsOfUse属性的值告诉验证者需要执行哪些操作（一项义务），不允许执行（禁止）或允许执行（许可）什么。

::: tip 注意
需要进一步研究以确定非持有人的主体如何在其可验证的凭证上放置使用条款。 一种方法可以是让主体请求发行者将使用条款放入已发行的可验证凭证中。 主题的另一种可能方式是，主题将一个可验证的凭证委派给持有人，并对所委派的可验证的凭证施加使用条款限制。
:::

``termsOfUse``
termsOfUse属性的值必须指定一个或多个使用条款政策，创建者根据该条款或条件发布证书或演示文稿。 如果接收者（持有者或验证者）不愿意遵守指定的使用条款，那么他们将自己承担责任，并且如果违反规定的使用条款，可能会承担法律责任。 每个termsOfUse值必须指定其类型，例如IssuerPolicy，并可以指定其实例ID。 每个使用条款的确切内容由特定的termsOfUse类型定义确定。

::: warning EXAMPLE 21: Usage of the termsOfUse property by an issuer
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.edu/credentials/3732",
  "type": ["VerifiableCredential", "UniversityDegreeCredential"],
  "issuer": "https://example.edu/issuers/14",
  "issuanceDate": "2010-01-01T19:23:24Z",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "termsOfUse": [{
    "type": "IssuerPolicy",
    "id": "http://example.com/policies/credential/4",
    "profile": "http://example.com/profiles/credential",
    "prohibition": [{
      "assigner": "https://example.edu/issuers/14",
      "assignee": "AllVerifiers",
      "target": "http://example.edu/credentials/3732",
      "action": ["Archival"]
    }]
  },
  "proof": {  }
}
```
:::
在上面的示例中，发行者（分配者）禁止验证者（受让人）将数据存储在存档中。

::: warning EXAMPLE 22: Usage of the termsOfUse property by a holder
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
  "type": ["VerifiablePresentation"],
  "verifiableCredential": [{
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "http://example.edu/credentials/3732",
    "type": ["VerifiableCredential", "UniversityDegreeCredential"],
    "issuer": "https://example.edu/issuers/14",
    "issuanceDate": "2010-01-01T19:23:24Z",
    "credentialSubject": {
      "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
      "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
    },
    "proof": {  }
  }],
  "termsOfUse": [{
    "type": "HolderPolicy",
    "id": "http://example.com/policies/credential/6",
    "profile": "http://example.com/profiles/credential",
    "prohibition": [{
      "assigner": "did:example:ebfeb1f712ebc6f1c276e12ec21",
      "assignee": "https://wineonline.example.org/",
      "target": "http://example.edu/credentials/3732",
      "action": ["3rdPartyCorrelation"]
    }]
  },
  "proof": [ ... ]
}
```
:::

在上面的示例中，持有人（转让人）也是主体，其使用条款禁止验证者（受让人https://wineonline.example.org）使用提供的信息来关联持有人或主题使用第三方服务。如果验证者要使用第三方服务进行关联，则它们将违反持有人创建演示文稿的条款。

政府发行的可验证凭证也有望使用此功能，以指示数字钱包将它们的使用限制在类似的政府组织中，以保护公民免受意外使用敏感数据的侵害。同样，私营企业发行的一些可验证的凭证将限制在组织内部部门或工作时间内使用。敦促实施者在“可验证证书实施准则” [VC-IMP-GUIDE]文档的相应部分中详细了解此快速发展的功能。

### 5.7 Evidence
发行者可以包括证据，以在可验证的凭证中为验证者提供其他支持信息。验证者可以使用它来建立可信赖凭证中依赖于声明的置信度。

例如，发行者可以在颁发证书之前检查对象提供的物理文档或执行一组背景检查。在某些情况下，当确定与依赖给定凭据相关的风险时，此信息对验证者很有用。

本规范定义了用于表达证据信息的证据属性。

```evidence```
证据财产的价值必须是一个或多个证据方案，为验证者提供足够的信息，以确定发行人收集的证据是否满足其依赖凭证的置信度要求。每个证据方案都通过其类型进行标识。 id属性是可选的，但如果存在，则应包含一个URL，该URL指向可以找到有关该证据实例的更多信息的位置。每个证据方案的确切内容由特定的证据类型定义确定。

::: tip 注意 
有关规范如何支持凭据和非凭据数据的附件和引用的信息，请参见《可验证凭据实施指南》 [VC-IMP-GUIDE]文档。
:::

::: warning EXAMPLE 23: Usage of the evidence property
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.edu/credentials/3732",
  "type": ["VerifiableCredential", "UniversityDegreeCredential"],
  "issuer": "https://example.edu/issuers/14",
  "issuanceDate": "2010-01-01T19:23:24Z",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "evidence": [{
    "id": "https://example.edu/evidence/f2aeec97-fc0d-42bf-8ca7-0548192d4231",
    "type": ["DocumentVerification"],
    "verifier": "https://example.edu/issuers/14",
    "evidenceDocument": "DriversLicense",
    "subjectPresence": "Physical",
    "documentPresence": "Physical"
  },{
    "id": "https://example.edu/evidence/f2aeec97-fc0d-42bf-8ca7-0548192dxyzab",
    "type": ["SupportingActivity"],
    "verifier": "https://example.edu/issuers/14",
    "evidenceDocument": "Fluid Dynamics Focus",
    "subjectPresence": "Digital",
    "documentPresence": "Digital"
  }],
  "proof": {  }
}
```
:::

::: tip 注意
证据属性为证明属性提供了不同的补充信息。 证据属性用于表达与可验证凭证的完整性有关的支持信息，例如文件证据。 相反，证明属性用于表示与发行者的真实性和可验证凭证的完整性有关的机器可验证的数学证明。 有关证明属性的更多信息，请参见第4.7节“证明（签名）”。
:::

### 5.8 Zero-Knowledge Proofs
零知识证明是一种加密方法，在这种方法中，一个实体可以向另一个实体证明他们知道某个值，而无需透露实际值。一个现实的例子证明，一所获得认可的大学已向您授予了学位，而没有透露您的身份或学位中包含的任何其他个人身份信息。

零知识证明机制引入的关键功能是持有人的能力：

将来自多个发行者的多个可验证凭据合并为一个可验证的演示文稿，而无需向验证者透露可验证的凭据或主题标识符。这使得验证者更难与发行人就已发行的可验证凭证进行合谋。
有选择地向验证人提供可验证凭证中的权利要求，而无需颁发多个原子可验证凭证。这样，持有人就可以为验证者提供他们所需的准确信息，仅此而已。
生成派生的可验证凭据，该凭据根据验证者的数据模式（而不是发行者的数据格式）进行格式化，而无需在可验证凭据颁发之后涉及发行者。这为持有人使用其发行的可验证凭证提供了很大的灵活性。
该规范描述了一种支持零知识证明机制的数据模型。下面的示例重点介绍了如何使用数据模型来发布，呈现和验证零知识可验证凭证。

为了使用零知识可验证凭证，发行者必须以一种使持有人能够以增强隐私的方式将信息提供给验证者的方式来发行可验证凭证。这意味着持有人可以证明发行人签名的有效性，而不必透露已签名的值，或者仅透露某些选定的值。标准做法是通过证明签名知识而不公开签名本身来做到这一点。在零知识证明系统中使用可验证凭据时，有两个要求。可验证的凭证必须包含：

使用credentialSchema属性的凭据定义，各方可以使用它以零知识执行各种加密操作。
使用证明属性的证明可用于导出可验证的表示形式，以零知识呈现包含在原始可验证凭证中的信息。零知识可验证的陈述不得透露持有人不打算透露的任何信息。
以下示例显示了一种在零知识中使用可验证凭据的方法。它使用CL签名，该签名允许通过使用选择性公开可验证凭据值来支持持有人和主体隐私的方式来显示可验证凭据。

::: warning EXAMPLE 24: A verifiable credential that supports CL Signatures
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "type": ["VerifiableCredential", "UniversityDegreeCredential"],
  "credentialSchema": {
    "id": "did:example:cdf:35LB7w9ueWbagPL94T9bMLtyXDj9pX5o",
    "type": "did:example:schema:22KpkXgecryx9k7N6XN1QoN3gXwBkSU8SfyyYQG"
  },
  "issuer": "did:example:Wz4eUg7SetGfaUVCn8U9d62oDYrUJLuUtcy619",
  "credentialSubject": {
    "givenName": "Jane",
    "familyName": "Doe",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts",
      "college": "College of Engineering"
    }
  },
  "proof": {
    "type": "CLSignature2019",
    "issuerData": "5NQ4TgzNfSQxoLzf2d5AV3JNiCdMaTgm...BXiX5UggB381QU7ZCgqWivUmy4D",
    "attributes": "pPYmqDvwwWBDPNykXVrBtKdsJDeZUGFA...tTERiLqsZ5oxCoCSodPQaggkDJy",
    "signature": "8eGWSiTiWtEA8WnBwX4T259STpxpRKuk...kpFnikqqSP3GMW7mVxC4chxFhVs",
    "signatureCorrectnessProof": "SNQbW3u1QV5q89qhxA1xyVqFa6jCrKwv...dsRypyuGGK3RhhBUvH1tPEL8orH"
  }
}
```
:::
上面的示例通过使用credentialSchema属性提供可验证的凭证定义，并提供可在Camenisch-Lysyanskaya零知识证明系统中使用的特定证明。

下一个示例利用上面的可验证凭证来生成带有隐私保护证明的新派生可验证凭证。然后将派生的可验证凭据放入可验证的表示中，这进一步证明了整个断言是有效的。在零知识系统中使用时，最可验证的演示有三个要求：

可验证表示中的每个派生可验证凭证必须具有credentialSchema属性。这允许派生的可验证凭证引用用于生成派生证明的凭证定义。
可验证的演示文稿一定不能泄漏使验证者能够在多个可验证的演示文稿中关联持有人的信息。
可验证的演示文稿必须包含证明属性，以使验证者能够确定可验证的演示文稿中所有派生的可验证证书均已发布给同一持有人，而不会泄露持有人不打算共享的个人身份信息。

::: warning EXAMPLE 25: A verifiable presentation that supports CL Signatures
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "type": "VerifiablePresentation",
  "verifiableCredential": [
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
      ],
      "type": ["VerifiableCredential", "UniversityDegreeCredential"],
      "credentialSchema": {
        "id": "did:example:cdf:35LB7w9ueWbagPL94T9bMLtyXDj9pX5o",
        "type": "did:example:schema:22KpkXgecryx9k7N6XN1QoN3gXwBkSU8SfyyYQG"
      },
      "issuer": "did:example:Wz4eUg7SetGfaUVCn8U9d62oDYrUJLuUtcy619",
      "credentialSubject": {
        "degreeType": "BachelorDegree",
        "degreeSchool": "College of Engineering"
      },
      "proof": {
        "type": "AnonCredDerivedCredentialv1",
        "primaryProof": "cg7wLNSi48K5qNyAVMwdYqVHSMv1Ur8i...Fg2ZvWF6zGvcSAsym2sgSk737",
        "nonRevocationProof": "mu6fg24MfJPU1HvSXsf3ybzKARib4WxG...RSce53M6UwQCxYshCuS3d2h"
      }
  }],
  "proof": {
    "type": "AnonCredPresentationProofv1",
    "proofValue": "DgYdYMUYHURJLD7xdnWRinqWCEY5u5fK...j915Lt3hMzLHoPiPQ9sSVfRrs1D"
  }
}
```
:::


![](https://www.w3.org/TR/vc-data-model/diagrams/zkp-cred-pres.svg)
图11 ZKP演示中凭据与派生凭据之间关系的直观示例。

::: tip 注意
有关凭证定义和证明格式的重要详细信息将被故意省略，因为它们不在本文档的范围之内。 本部分的目的是指导想要扩展可验证凭据和可验证表示以支持零知识证明系统的实施者。
:::

### 5.9 Disputes
对于要对发行人发行的证书提出异议的实体，至少要考虑两种不同的情况：

主体对发行人的索赔提出异议。 例如，address属性不正确或已过期。
实体对发行人就另一主题提出的潜在虚假主张提出异议。 例如，冒名顶替者索要实体的社会保险号。
发出DisputeCredential的机制与常规凭证的机制相同，只是DisputeCredential属性中的credentialSubject标识符是有争议的凭证的标识符。

例如，如果标识符为https://example.org/credentials/245的证书有争议，则受试者可以颁发以下所示的证书，并将其与有争议的证书一起提供给验证者。

::: warning EXAMPLE 26: A subject disputes a credential
``` json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.com/credentials/123",
  "type": ["VerifiableCredential", "DisputeCredential"],
  "credentialSubject": {
    "id": "http://example.com/credentials/245",
    "currentStatus": "Disputed",
    "statusReason": {
      "value": "Address is out of date.",
      "lang": "en"
    },
  },
  "issuer": "https://example.com/people#me",
  "issuanceDate": "2017-12-05T14:27:42Z",
  "proof": {  }
}
```
:::
在上述可验证凭证中，发行人声称有争议的可验证凭证中的地址是错误的。

::: tip 注意
如果凭证没有标识符，则可以使用内容寻址的标识符来标识有争议的凭证。 类似地，内容寻址的标识符可用于唯一地标识各个声明。
:::

::: tip 注意
该研究领域正在迅速发展，并敦促对发布对其他凭证的真实性提出异议的凭证感兴趣的开发人员阅读《可验证凭证实施指南》 [VC-IMP-GUIDE]文档中与争议有关的部分。
:::

### 5.10 Authorization
本节是非规范性的。

可验证的凭证旨在作为可靠地标识主题的一种手段。 尽管公认基于角色的访问控制（RBAC）和基于属性的访问控制（ABAC）依靠此标识作为授权主体访问资源的方法，但本规范并未为RBAC或ABAC提供完整的解决方案。 没有随附的授权框架，授权不适用于本规范。

工作组确实在创建本规范的过程中考虑了授权用例，并且正在寻求将其用作在本规范之上构建的体系结构层。

## 6 Syntaxes
如第3节，核心数据模型，第4节，基本概念和第5节中所述，数据模型是可验证凭证或可验证表示形式的规范结构表示。所有序列化均以特定格式表示该数据模型。本部分指定如何在JSON-LD和纯JSON中实现数据模型。尽管仅针对这两种语法提供了语法映射，但是应用程序和服务可以使用能够表达数据模型的任何其他数据表示语法（例如XML，YAML或CBOR）。由于验证和确认要求是根据数据模型定义的，因此必须将所有序列化语法确定性地转换为数据模型，以便进行处理，验证或比较。该规范不要求支持任何特定的序列化格式。

在本规范中，属性值的期望值以及保存这些值的结果数据类型可以根据属性而有所不同。如果存在，则以下属性表示为单个值：

id property
issuer property
issuanceDate property
expirationDate property.
所有其他属性（如果存在）均表示为单个值或值的数组。

### 6.1 JSON
如第3节中所述，数据模型可以通过将属性值映射到JSON类型来用Javascript Object Notation（JSON）[RFC8259]进行编码：

可表示为IEEE754的数值应表示为数字类型。
布尔值应表示为布尔类型。
序列值应表示为数组类型。
值的无序集合应表示为数组类型。
属性集应表示为对象类型。
空值应表示为空值。
其他值必须表示为字符串类型。
::: tip 注意
由于此处列出的转换可能具有不兼容的解释，因此需要对JSON格式进行其他分析，才能为数据模型提供确定性转换。
:::

### 6.2 JSON-LD
[JSON-LD]是用于序列化链接数据的基于JSON的格式。该语法旨在轻松集成到已经使用JSON的已部署系统中，并提供从JSON到[JSON-LD]的平滑升级路径。它主要旨在成为一种在基于Web的编程环境中使用链接数据，构建可互操作的Web服务以及将链接数据存储在基于JSON的存储引擎中的方法。

扩展本规范中描述的数据模型时，[JSON-LD]很有用。数据模型的实例以与在JSON中编码（第6.1节JSON）的相同方式在[JSON-LD]中进行编码，并添加了@context属性。 JSON-LD上下文在[JSON-LD]规范中进行了详细说明，其用法在第5.3节“可扩展性”中进行了详细说明。

可以使用或组合多个上下文来表达关于惯用JSON中可验证证书的任意信息。 https://www.w3.org/2018/credentials/v1上提供了JSON-LD上下文，它是一个永不更新的静态文档，因此可以在客户端下载和缓存。可验证凭证数据模型的关联词汇文档可从https://www.w3.org/2018/credentials获得。
#### 6.2.1 Syntactic Sugar
通常，设计本文档中描述的数据模型和语法，以便开发人员可以复制和粘贴示例以将可验证的凭证合并到他们的软件系统中。这种方法的设计目标是提供较低的进入门槛，同时仍确保异构软件系统集之间的全局互操作性。本节描述了其中一些方法，大多数开发人员可能不会注意到这些方法，但是实现者会关注其详细信息。 [JSON-LD]提供的最值得注意的语法糖是：

@id和@type关键字分别别名为id和type，使开发人员能够将此规范用作惯用JSON。
数据类型（例如整数，日期，度量单位和URL）将被自动键入，以为需要它们的用例提供更强的类型保证。
verifiableCredential和证明属性被视为图形容器。即，用于隔离由不同实体断言的数据集的机制。例如，这可确保在每个发行者提供的数据图与​​持有人提供可验证凭证的数据图之间进行适当的密码分离，以确保保留每个图信息的来源。
[JSON-LD] 1.1的@protected属性功能用于确保此规范定义的术语不会被覆盖。这意味着只要在可验证的凭证或可验证的表示的顶部进行相同的@context声明，就可以保证数据模型用户理解的所有术语的互操作性，无论他们是否使用[JSON-LD]处理器。


### 6.3 Proof Formats
本规范中描述的数据模型被设计为与证明格式无关。该规范在规范上不要求任何特定的数字证明或签名格式。虽然数据模型是可验证凭证或可验证表示的规范表示，但这些的校对机制通常与各方之间在文档传输中使用的语法相关。这样，每个校对机制都必须指定是根据发送的文档状态，转换后的数据模型还是另一种形式来计算校对的有效性。在发布之时，实施者至少积极使用至少两种证明格式，工作组认为记录这些证明格式是什么以及如何使用它们对实施者是有益的。当前正在积极地用于发布可验证证书的当前证明格式的各节分别为：

第6.3.1节JSON Web令牌，以及
第6.3.2节链接数据证明。

#### 6.3.1 JSON Web Token
JSON Web令牌（JWT）[RFC7519]仍然是一种广泛使用的方式来表达要在两方之间转移的声明。通过提供JWT的可验证凭证数据模型的表示，可以使现有系统和库参与第1.2节“生态系统概述”中所述的生态系统。 JWT将一组声明编码为包含在JSON Web签名（JWS）[RFC7515]或JWE [RFC7516]中的JSON对象。对于本规范，JWE的使用超出范围。

与可验证凭证数据模型的关系
该规范定义了JWT和JWS上的可验证凭证数据模型的编码规则。它还定义了处理规则，如何以及何时使用特定的JWT注册的声明名称和特定的JWS注册的标头参数名称，以允许基于JWT的系统遵守此规范。如果存在这些特定的声明名称和标头参数，则可以省略它们在标准可验证凭证和可验证表示中的对应部分，以避免重复。

JSON Web令牌扩展
本规范引入了两个新的注册索赔名称，其中包含标准可验证凭证和可验证表示的那些部分，其中不存在针对JWT的明确编码规则。这些对象包含在JWT有效负载中，如下所示：

vc：JSON对象，必须存在于JWT可验证的凭证中。对象包含根据此规范的可验证凭证。
vp：JSON对象，必须存在于JWT可验证的表示形式中。对象包含根据此规范的可验证表示。
JWT和JWS注意事项

JWT编码
要将可验证的凭证编码为JWT，此规范引入的特定属性必须为：

编码为标准的JOSE标头参数，或者
编码为注册的JWT索赔名称，或
包含在JWS签名部分中。
如果未指定显式规则，则使用与标准可验证凭据相同的方式对属性进行编码，并将其添加到JWT的vc声明中。与所有JWT一样，在应用任何解码或转换规则之前，将根据整个线路上呈现的文字JWT字符串值来计算以JWT语法表示的可验证凭证的基于JWS的签名。以下段落描述了这些编码规则。

如果存在JWS，则数字签名是指可验证证书的发行者，或者在可验证表示的情况下是可验证证书的持有者。 JWS证明JWT的发行者签署了包含的JWT有效负载，因此可以省略证明属性。

如果没有JWS，则必须提供证明属性。证明属性可以用来表示更复杂的证明，如果创建者与发行人不同，则可以使用证明属性，或者可以使用不基于数字签名的证明（例如工作证明）来证明。发行者可以包括一个JWS和一个证明属性。出于向后兼容的原因，发行者必须使用JWS代表基于数字签名的证明。

在本规范的上下文中，以下规则适用于JOSE标头：

必须为数字签名设置alg。如果所选签名方法仅需要证明属性（即，如果该方法中没有算法选择），则必须将alg标头设置为none。
如果有多个与JWT的发行者关联的密钥，则可以使用kid。关键发现超出了本规范的范围。例如，孩子可以引用DID文档中的密钥，或者可以是JWKS中密钥的标识符。
typ（如果存在）必须设置为JWT。
为了与JWT处理器向后兼容，必须使用以下JWT注册的声明名称代替或补充其各自的标准可验证凭据副本：

exp必须表示expirationDate属性，编码为UNIX时间戳（NumericDate）。
iss必须代表可验证凭证的发行人财产或可验证陈述的持有人财产。
nbf必须表示issuanceDate，编码为UNIX时间戳（NumericDate）。
jti必须表示可验证凭证或可验证表示的id属性。
sub必须代表可验证凭证主题中包含的id属性。
aud必须代表（即识别）可验证演示文稿的预定受众（即，演示者希望接收并验证可验证演示文稿的验证者）。
如果未明确禁止其他未使用的JOSE标头参数和JWT声明名称，则可以使用它们。附加的可验证凭证声明必须添加到JWT的credentialSubject属性中。

有关使用此处未指定的JOSE标头参数和/或JWT声明名称的更多信息，请参见“可验证凭证实现准则” [VC-IMP-GUIDE]文档。

该版本的规范没有为“高级概念”部分中概述的概念（例如，refreshService，termsOfUse和证据）定义任何JWT特定的编码规则。这些概念可以直接进行编码而无需任何转换，并且可以添加到JWT的vc声明中。

::: tip 注意
实施人员被警告，JWT无法编码多个主题，因此无法编码具有多个主题的可验证凭证。 JWT将来可能支持多个主题，建议实现者参考JSON Web令牌声明注册表以获取多主题JWT声明名称或嵌套JSON Web令牌规范。
:::

JWT解码
要将JWT解码为标准的可验证凭证，必须执行以下转换：

创建一个JSON对象。
将vc声明中的内容添加到新的JSON对象。
转换其余的特定于JWT的标头和声明，并将结果添加到新的JSON对象。
要转换特定于JWT的标头和声明，必须完成以下操作：

如果存在exp，则UNIX时间戳记必须转换为[RFC3339]日期时间，并且必须用于设置新JSON对象的credentialSubject的expirationDate属性的值。
如果存在iss，则该值务必用于设置新的可验证凭证JSON对象的issuer属性或新的可验证表示JSON对象的holder属性。
如果存在nbf，则UNIX时间戳记必须转换为[RFC3339]日期时间，并且必须用于设置新JSON对象的issuanceDate属性的值。
如果存在sub，则该值务必用于设置新JSON对象的credentialSubject的id属性的值。
如果存在jti，则该值务必用于设置新JSON对象的id属性的值。

::: warning EXAMPLE 27: JWT header of a JWT-based verifiable credential using JWS as a proof (non-normative)
``` json
{
    "alg": "RS256",
    "typ": "JWT",
    "kid": "did:example:abfe13f712120431c276e12ecab#keys-1"
}
```
:::
在上面的示例中，可验证的凭证使用基于JWS数字签名的凭证，并且可以使用kid标头参数获得相应的验证密钥。
::: warning EXAMPLE 28: JWT payload of a JWT-based verifiable credential using JWS as a proof (non-normative)
``` json
{
  "sub": "did:example:ebfeb1f712ebc6f1c276e12ec21",
  "jti": "http://example.edu/credentials/3732",
  "iss": "https://example.com/keys/foo.jwk",
  "nbf": 1541493724,
  "iat": 1541493724,
  "exp": 1573029723,
  "nonce": "660!6345FSer",
  "vc": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "type": ["VerifiableCredential", "UniversityDegreeCredential"],
    "credentialSubject": {
      "degree": {
        "type": "BachelorDegree",
        "name": "Bachelor of Science and Arts"
      }
    }
  }
}
```
:::
在上面的示例中，vc不包含id属性，因为JWT编码使用jti属性表示唯一标识符。 子属性编码由credentialSubject的id属性表示的信息。

::: warning EXAMPLE 29: Verifiable credential using JWT compact serialization (non-normative)
``` json
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImRpZDpleGFtcGxlOmFiZmUxM2Y3MTIxMjA0
MzFjMjc2ZTEyZWNhYiNrZXlzLTEifQ.eyJzdWIiOiJkaWQ6ZXhhbXBsZTplYmZlYjFmNzEyZWJjNmYxY
zI3NmUxMmVjMjEiLCJqdGkiOiJodHRwOi8vZXhhbXBsZS5lZHUvY3JlZGVudGlhbHMvMzczMiIsImlzc
yI6Imh0dHBzOi8vZXhhbXBsZS5jb20va2V5cy9mb28uandrIiwibmJmIjoxNTQxNDkzNzI0LCJpYXQiO
jE1NDE0OTM3MjQsImV4cCI6MTU3MzAyOTcyMywibm9uY2UiOiI2NjAhNjM0NUZTZXIiLCJ2YyI6eyJAY
29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImh0dHBzOi8vd
3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL2V4YW1wbGVzL3YxIl0sInR5cGUiOlsiVmVyaWZpYWJsZ
UNyZWRlbnRpYWwiLCJVbml2ZXJzaXR5RGVncmVlQ3JlZGVudGlhbCJdLCJjcmVkZW50aWFsU3ViamVjd
CI6eyJkZWdyZWUiOnsidHlwZSI6IkJhY2hlbG9yRGVncmVlIiwibmFtZSI6IjxzcGFuIGxhbmc9J2ZyL
UNBJz5CYWNjYWxhdXLDqWF0IGVuIG11c2lxdWVzIG51bcOpcmlxdWVzPC9zcGFuPiJ9fX19.KLJo5GAy
BND3LDTn9H7FQokEsUEi8jKwXhGvoN3JtRa51xrNDgXDb0cq1UTYB-rK4Ft9YVmR1NI_ZOF8oGc_7wAp
8PHbF2HaWodQIoOBxxT-4WNqAxft7ET6lkH-4S6Ux3rSGAmczMohEEf8eCeN-jC8WekdPl6zKZQj0YPB
1rx6X0-xlFBs7cl6Wt8rfBP_tZ9YgVWrQmUWypSioc0MUyiphmyEbLZagTyPlUyflGlEdqrZAv6eSe6R
txJy6M1-lD7a5HTzanYTWBPAUHDZGyGKXdJw-W_x0IWChBzI8t3kpG253fg6V3tPgHeKXE94fz_QpYfg
--7kLsyBAfQGbg
```
:::
::: warning EXAMPLE 30: JWT header of a JWT based verifiable presentation (non-normative)
``` json
{
  "alg": "RS256",
  "typ": "JWT",
  "kid": "did:example:ebfeb1f712ebc6f1c276e12ec21#keys-1"
}
```
:::
在上面的示例中，可验证的演示使用基于JWS数字签名的证明，并且可以使用kid标头参数获得相应的验证密钥。

::: warning EXAMPLE 31: JWT payload of a JWT based verifiable presentation (non-normative)
``` json
{
  "iss": "did:example:ebfeb1f712ebc6f1c276e12ec21",
  "jti": "urn:uuid:3978344f-8596-4c3a-a978-8fcaba3903c5",
  "aud": "did:example:4a57546973436f6f6c4a4a57573",
  "nbf": 1541493724,
  "iat": 1541493724,
  "exp": 1573029723,
  "nonce": "343s$FSFDa-",
  "vp": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "type": ["VerifiablePresentation"],
    
    "verifiableCredential": [""]
  }
}
```
:::

在上面的示例中，vp不包含id属性，因为JWT编码使用jti属性表示唯一标识符。 verifiableCredential包含使用JWT紧凑序列化的可验证凭据的字符串数组。

::: warning EXAMPLE 32: Verifiable presentation using JWT compact serialization (non-normative)
``` json
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImRpZDpleGFtcGxlOjB4YWJjI2tleTEifQ.e
yJpc3MiOiJkaWQ6ZXhhbXBsZTplYmZlYjFmNzEyZWJjNmYxYzI3NmUxMmVjMjEiLCJqdGkiOiJ1cm46d
XVpZDozOTc4MzQ0Zi04NTk2LTRjM2EtYTk3OC04ZmNhYmEzOTAzYzUiLCJhdWQiOiJkaWQ6ZXhhbXBsZ
To0YTU3NTQ2OTczNDM2ZjZmNmM0YTRhNTc1NzMiLCJuYmYiOjE1NDE0OTM3MjQsImlhdCI6MTU0MTQ5M
zcyNCwiZXhwIjoxNTczMDI5NzIzLCJub25jZSI6IjM0M3MkRlNGRGEtIiwidnAiOnsiQGNvbnRleHQiO
lsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCJodHRwczovL3d3dy53My5vc
mcvMjAxOC9jcmVkZW50aWFscy9leGFtcGxlcy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVQcmVzZW50Y
XRpb24iLCJDcmVkZW50aWFsTWFuYWdlclByZXNlbnRhdGlvbiJdLCJ2ZXJpZmlhYmxlQ3JlZGVudGlhb
CI6WyJleUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0k2SWtwWFZDSXNJbXRwWkNJNkltUnBaRHBsZUdGd
GNHeGxPbUZpWm1VeE0yWTNNVEl4TWpBME16RmpNamMyWlRFeVpXTmhZaU5yWlhsekxURWlmUS5leUp6Z
FdJaU9pSmthV1E2WlhoaGJYQnNaVHBsWW1abFlqRm1OekV5WldKak5tWXhZekkzTm1VeE1tVmpNakVpT
ENKcWRHa2lPaUpvZEhSd09pOHZaWGhoYlhCc1pTNWxaSFV2WTNKbFpHVnVkR2xoYkhNdk16Y3pNaUlzS
W1semN5STZJbWgwZEhCek9pOHZaWGhoYlhCc1pTNWpiMjB2YTJWNWN5OW1iMjh1YW5kcklpd2libUptS
WpveE5UUXhORGt6TnpJMExDSnBZWFFpT2pFMU5ERTBPVE0zTWpRc0ltVjRjQ0k2TVRVM016QXlPVGN5T
Xl3aWJtOXVZMlVpT2lJMk5qQWhOak0wTlVaVFpYSWlMQ0oyWXlJNmV5SkFZMjl1ZEdWNGRDSTZXeUpvZ
EhSd2N6b3ZMM2QzZHk1M015NXZjbWN2TWpBeE9DOWpjbVZrWlc1MGFXRnNjeTkyTVNJc0ltaDBkSEJ6T
2k4dmQzZDNMbmN6TG05eVp5OHlNREU0TDJOeVpXUmxiblJwWVd4ekwyVjRZVzF3YkdWekwzWXhJbDBzS
W5SNWNHVWlPbHNpVm1WeWFXWnBZV0pzWlVOeVpXUmxiblJwWVd3aUxDSlZibWwyWlhKemFYUjVSR1ZuY
21WbFEzSmxaR1Z1ZEdsaGJDSmRMQ0pqY21Wa1pXNTBhV0ZzVTNWaWFtVmpkQ0k2ZXlKa1pXZHlaV1VpT
25zaWRIbHdaU0k2SWtKaFkyaGxiRzl5UkdWbmNtVmxJaXdpYm1GdFpTSTZJanh6Y0dGdUlHeGhibWM5S
jJaeUxVTkJKejVDWVdOallXeGhkWExEcVdGMElHVnVJRzExYzJseGRXVnpJRzUxYmNPcGNtbHhkV1Z6U
EM5emNHRnVQaUo5ZlgxOS5LTEpvNUdBeUJORDNMRFRuOUg3RlFva0VzVUVpOGpLd1hoR3ZvTjNKdFJhN
TF4ck5EZ1hEYjBjcTFVVFlCLXJLNEZ0OVlWbVIxTklfWk9GOG9HY183d0FwOFBIYkYySGFXb2RRSW9PQ
nh4VC00V05xQXhmdDdFVDZsa0gtNFM2VXgzclNHQW1jek1vaEVFZjhlQ2VOLWpDOFdla2RQbDZ6S1pRa
jBZUEIxcng2WDAteGxGQnM3Y2w2V3Q4cmZCUF90WjlZZ1ZXclFtVVd5cFNpb2MwTVV5aXBobXlFYkxaY
WdUeVBsVXlmbEdsRWRxclpBdjZlU2U2UnR4Snk2TTEtbEQ3YTVIVHphbllUV0JQQVVIRFpHeUdLWGRKd
y1XX3gwSVdDaEJ6STh0M2twRzI1M2ZnNlYzdFBnSGVLWEU5NGZ6X1FwWWZnLS03a0xzeUJBZlFHYmciX
X19.ft_Eq4IniBrr7gtzRfrYj8Vy1aPXuFZU-6_ai0wvaKcsrzI4JkQEKTvbJwdvIeuGuTqy7ipO-EYi
7V4TvonPuTRdpB7ZHOlYlbZ4wA9WJ6mSVSqDACvYRiFvrOFmie8rgm6GacWatgO4m4NqiFKFko3r58Lu
eFfGw47NK9RcfOkVQeHCq4btaDqksDKeoTrNysF4YS89INa-prWomrLRAhnwLOo1Etp3E4ESAxg73CR2
kA5AoMbf5KtFueWnMcSbQkMRdWcGC1VssC0tB0JffVjq7ZV6OTyV4kl1-UVgiPLXUTpupFfLRhf9QpqM
BjYgP62KvhIvW8BbkGUelYMetA
```
:::

#### 6.3.2 Linked Data Proofs
该规范利用链接数据使用URL和JSON-LD等标准在Web上发布信息，以标识主题及其相关属性。当以这种方式呈现信息时，可以轻松发现其他相关信息，并且可以轻松地将新信息合并到现有的知识图中。链接数据可以以分散的方式扩展，从而大大减少了大规模集成的障碍。本规范中的数据模型可与链接数据证明，链接数据签名以及关联的链接数据密码套件很好地配合使用，这些套件旨在保护此规范所描述的数据模型。

与使用JSON Web令牌不同，不需要额外的预处理或后处理。链接数据证明格式旨在简化并轻松保护可验证的凭据和可验证的表示形式。保护可验证的凭证或可验证的表示就像将本规范中的有效示例传递给链接数据签名实现并生成数字签名一样简单。

::: tip 注意
有关各种语法格式（例如JSON + JWT，JSON-LD + JWT或JSON-LD + LD-Proofs）的不同质量的更多信息，请参阅《可验证证书实施指南[VC-IMP-GUIDE]》文档。
:::

## 7 Privacy Considerations
