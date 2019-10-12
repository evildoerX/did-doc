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
:::