# Decentralized Identifiers (DIDs)
***数据模型和语法***

***2019 6月 20日 社区组织草案报告***

## 最新编辑的草稿:
[https://w3c-ccg.github.io/did-spec/](https://w3c-ccg.github.io/did-spec/)
## 编辑:
- Drummond Reed (Evernym)
- Manu Sporny (Digital Bazaar)
- Markus Sabadello (Danube Tech)
## 作者:
- Drummond Reed (Evernym)
- Manu Sporny (Digital Bazaar)
- Dave Longley (Digital Bazaar)
- Christopher Allen (Blockchain Commons)
- Ryan Grant
- Markus Sabadello (Danube Tech)
## 参与:
- [GitHub w3c-ccg/did-spec](https://github.com/w3c-ccg/did-spec/)
- [File a bug](https://github.com/w3c-ccg/did-spec/issues/)
- [Commit history](https://github.com/w3c-ccg/did-spec/commits/gh-pages)
- [Pull requests](https://github.com/w3c-ccg/did-spec/pulls/)

Copyright © 2019 the Contributors to the Decentralized Identifiers (DIDs) v0.13 Specification, published by the Credentials Community Group under the W3C Community Contributor License Agreement (CLA). A human-readable summary is available.
版权所有©2019权力下放标识符（DID）v0.13规范的贡献者，由证书社区组根据W3C社区贡献者许可协议（CLA）发布。提供人类可读的摘要。
## 摘要
分布式身份标识符（DIDs）是用于可验证的“自我主权”数字身份的新型标识符。 DID完全在DID主题的控制之下，独立于任何集中注册表，身份提供者或证书颁发机构。 DID是将DID主题与可信任的交互方式相关联的URL。 DID解析为DID文档 - 描述如何使用该特定DID的简单文档。每个DID文档可能至少包含三个内容：证明目的，验证方法和服务端点。证明目的与验证方法相结合，以提供证明事物的机制。例如，DID文档可以指定可以使用特定验证方法（例如加密公钥或假名生物识别协议）来验证为验证目的而创建的证明。服务端点启用与DID控制器的可信交互。

本文档指定了所有DIDs支持的通用数据模型，格式和操作。

## 本文档的状态
该规范由[Credentials Community Group](https://www.w3.org/community/credentials/)发布。它不是W3C标准，也不是W3C标准轨道。请注意，根据W3C社区贡献者许可协议（CLA），选择退出有限且适用其他条件。了解有关W3C社区和业务组的更多信息。

欢迎提出有关本文件的意见。请直接在[GitHub](https://github.com/w3c-ccg/did-spec/issues/)上提交问题，或发送到[public-credentials@w3.org](public-credentials@w3.org)（订阅，存档）。

本规范的部分工作由美国国土安全部科学和技术理事会根据合同HSHQDC-16-R00012-H-SB2016-1-002和HSHQDC-17-C-00019提供资金。本规范的内容不一定反映美国政府的立场或政策，也不应推断出官方认可。

关于此规范的工作也得到了 the Rebooting the Web of Trust community,facilitated by Christopher Allen, Shannon Appelcline, Kiara Robles, Brian Weller, Betty Dhamers, Kaliya Young, Kim Hamilton Duffy, Manu Sporny, Drummond Reed, Joe Andrieu, 和 Heather Vescent的支持

如果您想对本文档发表评论，请发送至[public-credentials@w3.org](public-credentials@w3.org)（订阅，存档）。