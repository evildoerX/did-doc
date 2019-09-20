# Linked Data Cryptographic Suite Registry
***Linked Data Cryptographic Suites的注册表***

***2019年6月11日社区小组报告草案***

**最新编辑的草稿：**

[https://w3c-ccg.github.io/ld-cryptosuite-registry/](https://w3c-ccg.github.io/ld-cryptosuite-registry/)


**编辑：**
[Manu Sporny (Digital Bazaar)]()
[Drummond Reed (Evernym)]()
**作者**
[Credentials Community Group (W3C)]

**参与：**
GitHub w3c-ccg/ld-cryptosuite-registry
File a bug
Commit history
Pull requests

版权所有 © 2019 由Credentials社区组根据 W3C社区贡献者许可协议（CLA）发布 的关联数据加密套件注册规范的 贡献者。提供人类可读的 摘要 。 


### 简介
本文档用作所有已知关联数据密钥描述及其相关规范的信息性注册表。

### 本文件的状态
该规范由 Credentials Community Group发布。它不是W3C标准，也不是W3C标准轨道。请注意，根据 W3C社区贡献者许可协议（CLA） ，选择退出有限且适用其他条件。 了解有关W3C社区和业务组的更多信息 。

欢迎提出有关本文件的意见。请直接在GitHub上提交问题，或发送到 public-credentials@w3.org （订阅， 存档）。

本规范的部分工作由美国国土安全部科学和技术理事会根据合同HSHQDC-16-R00012-H-SB2016-1-002和HSHQDC-17-C-00019提供资金。本规范的内容不一定反映美国政府的立场或政策，也不应推断出官方认可。

Christopher Allen，Shannon Appelcline，Kiara Robles，Brian Weller，Betty Dhamers，Kaliya Young，Manu Sporny，Drummond Reed和Joe Andrieu推动了重启网络信任社区的支持。

如果您想对本文档发表评论，请将其发送至 公共证书@ w3.org （订阅， 存档）。

## 1. 介绍
本文档包含所有已知的链接数据加密套件及其相关规范的列表。

本文档包含所有已知的链接数据加密套件及其相关规范的列表。

## 2. 注册程序
软件实施者可能会发现此存储库中列出的现有加密套件不适合其用例，并且可能需要向此注册表添加新的加密套件。将链接数据加密套件添加到此列表旨在成为轻量级，社区驱动的流程。为了向此注册表添加新套件，实现者必须：

至少实现新加密套件的实验版本。
创建描述新加密套件的规范，该套件是公开可用的，旨在符合 Linked Data Proofs 规范。
请求通过提交Github Pull Request将规范添加到此注册表中，该请求将新套件添加到具有URL的现有套件列表中。
不接受不符合这些标准的规格。可能会删除不符合规定的旧列表。

敦促在此过程中需要帮助或指导的实施者加入W3C凭证社区小组， 并通过邮件列表请求帮助 。

## 3. 已注册规范
本节总结了社区目前已知的关联数据密钥规范。

### 3.1 Ed25519Signature2018
|摘要|      |
|---:|---:|
|身份标识|	Ed25519Signature2018，Ed25519VerificationKey2018|
|状态|	临时|
|作者|	Markus Sabadello|
|规范|	[Ed25519 Signature Suite 2018](https://w3c-dvcg.github.io/lds-ed25519-2018/)|

:::warning EXAMPLE 1: Example of Ed25519VerificationKey2018
```json
{
  "@context": ["https://w3id.org/security/v1"],
  "id": "did:example:123456789abcdefghi#keys-1",
  "type": "Ed25519VerificationKey2018",
  "owner": "did:example:123456789abcdefghi",
  "publicKeyBase58" : "H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
}
```
:::
### 3.2 RsaSignature2018
|摘要|      |
|---:|---:|
|身份标识|	RsaSignature2018，RsaVerificationKey2018|
|状态|	临时|
|作者|	Dave Longley，Manu Sporny|
|规范|	[RSA Signature Suite 2018](https://w3c-dvcg.github.io/lds-rsa2018/)|

:::warning EXAMPLE 2: Example of RsaVerificationKey2018
```json
{
  "id": "did:example:123456789abcdefghi#keys-1",
  "type": "RsaVerificationKey2018",
  "owner": "did:example:123456789abcdefghi",
  "publicKeyPem": "-----BEGIN PUBLIC KEY...END PUBLIC KEY-----\r\n"
}
```
:::
### 3.3 EcdsaKoblitzSignature2016
|摘要|      |
|---:|---:|
|身份标识|	EcdsaKoblitzSignature2016|
|状态|	临时|
|作者|	Harlan Wood, Manu Sporny|
|规范|	[Koblitz Signature Suite 2016](https://w3c-dvcg.github.io/lds-koblitz2016/)|

### 3.4 EcdsaSecp256k1Signature2019
|摘要|      |
|---:|---:|
|身份标识|	EcdsaSecp256k1Signature2019, EcdsaSecp256k1VerificationKey2019|
|状态|	临时|
|作者|	(needs authors)|
|规范|	(needs specification) [ECDSA Secp256k1 Signature Suite 2019](https://w3c-dvcg.github.io/lds-ecdsa-secp256k1-2019/)|

:::warning EXAMPLE 3: Example of EcdsaSecp256k1VerificationKey2019
```json
{
  "id": "did:example:123456789abcdefghi#keys-1",
  "type": "EcdsaSecp256k1VerificationKey2019",
  "owner": "did:example:123456789abcdefghi",
  "publicKeyHex": "02b97c30de767f084...263d29f1450936b71"
}
```
:::