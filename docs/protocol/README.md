# 中台协议服务
## 服务拓扑关系图
![](./fw.png)
## 用例图
@startuml
left to right direction
用户 --> (协议模板)
(协议模板) ..> (创建协议模板): <<include>>
(协议模板) ..> (获取协议模板列表): <<include>>
(协议模板) ..> (获取协议模板详情): <<include>>
(协议模板) ..> (更新协议模板): <<include>>
用户 --> (协议实例化)
(协议实例化) ..> (实例化协议): <<include>>
(协议实例化) ..> (更新实例化协议): <<include>>
(协议实例化) ..> (获取实例化协议信息): <<include>>
用户 --> (协议签署)
(协议签署) ..> (签名实例化协议): <<include>>
(协议签署) ..> (解析DIDURL): <<include>>
用户 --> (DIDs)
(DIDs) ..> (创建DIDs): <<include>>
(DIDs) ..> (获取DIDs): <<include>>
用户 --> (公私钥)
(公私钥) ..> (创建公私钥对): <<include>>
(公私钥) ..> (获取私钥): <<include>>
用户 --> (协议设置)
(协议设置) ..> (协议存储设置): <<include>>
@enduml
## 类图

@startuml
Title "协议 - 合约 - DID"

  class "ProtocolTemlate(协议模板)"{
    Id
    Appkey
    Channel
    AccountId
    ProtocolTemplateId // 协议模板id
    State // 协议模板状态，1：审核，0 未审核
    Name // 协议模板名称
    ProtocolType // 协议类型
    DIDDocument:string //协议模板内容
    Version:string // 协议版本
    + public Add()  // 添加模板
    + public Verify() //审核模板
    + public Get() //获取模板列表
    + public Dell() // 删除模板
  }

  class "ProtocolInstance(协议实例)"{
    Id
    Appkey
    Channel
    AccountId
    ProtocolId  // 协议实例化id
    ProtocolTemplateId // 协议模板id
    Subject // 协议Subject DID
    Controller // 协议Controller DID
    SubjectProof //  协议Subject Proof
    ControllerProof // 协议Controller Proof
    DIDDocument // 协议文档
    IsSigned // 协议是否已签署
    IsPublish // 协议是否已发布
    Tx // 协议链上地址
    + public Instance()  // 实例化协议
    + public UpdateInstance() //更新实例化协议
    + public Signeture() //签署实例化协议
    + public ParserDIDUrl() // 协议didurl
  }

  class "ProtocolTemplateAnalysis(协议模板简单JSON)"{
    Id
    Appkey
    Channel
    AccountId
    ProtocolTemplateId // 协议模板id
    Property // 属性名称
    PropertyType // 属性类型
    AnalysisPath: //属性路径
    + public Add()  // 添加模板JSON字段
    + public Get() //获取模板JSON字段列表
    + public Dell() // 删除模板
    + public Update() // 更新模板JSON列表
  }

  class "DIDs(did)"{
    Id
    Appkey
    Channel
    RoleType // 类型：0 accountId，1 subOrgKey，2 appid
    SubjectId // 身份id 
    KeyType // 加密类型
    HashType // hash类型
    IdString //did string
    PublicKey // 公钥
    + public create()  // 创建did
    + public Get() //获取did
  }

  class "MSP" {}
  class "Hyperledger" {}
  

  "ProtocolTemlate(协议模板)" --* "ProtocolInstance(协议实例)"
  "ProtocolTemplateAnalysis(协议模板简单JSON)" --* "ProtocolInstance(协议实例)"
  "DIDs(did)" --* "ProtocolInstance(协议实例)"

  "ProtocolTemplateAnalysis(协议模板简单JSON)" .|> "ProtocolTemlate(协议模板)"

  "MSP" -down-* "ProtocolInstance(协议实例)"
  "Hyperledger" -down-* "ProtocolInstance(协议实例)"
@enduml

## 构件图
![](./gjt.png)


## 时序图


## 部署图