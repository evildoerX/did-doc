# 中台协议服务

## 时序图

### 浏览市场

@startuml
actor User
activate User
User -> ProtocolMarket : 进入协议市场
activate ProtocolMarket
ProtocolMarket -->User : 返回协议服务商列表
User -> ProtocolMarket : 选择服务商
ProtocolMarket -->User : 返回服务商提供的协议模板列表
@enduml

### 购买协议

@startuml
actor User
activate User
User -> ProtocolMarket : 进入协议市场
activate ProtocolMarket
ProtocolMarket -->User : 返回协议服务商列表
User -> ProtocolMarket : 选择服务商
ProtocolMarket -->User : 返回服务商提供的协议模板列表
User -> ProtocolMarket : 选择某个协议并购买协议
ProtocolMarket -->User : 购买成功，将已购买的协议添加到我的-协议分类中
@enduml

### 查看已购买协议，部署协议

@startuml
actor User
activate User
User -> 我的协议 : 进入我的协议
activate 我的协议
我的协议 -->User : 返回已购买的协议列表
User -> 我的协议 : 选择协议并点击部署协议按钮
activate 协议中心
我的协议 ->协议中心 : 开始立即签署并部署协议
activate 合约中心
协议中心 -> 合约中心 : 请求部署关联的合约
合约中心 --> 协议中心 : 部署成功返回已部署的合约地址
协议中心 -> 协议中心 : 更新已部署的成功的合约地址

协议中心 ->DID : 注册协议签署ServiceEndpoint
activate DID
DID -->协议中心 : 返回注册成功 or 失败
协议中心 --> 我的协议:更新我的协议状态，已部署，甲方已签署
协议中心 -> 消息中心: 添加部署成功的消息推送

@enduml

### 签署协议（目前指乙方）
::: tip
此处不说吗乙方是如何如何看到这个份协议的，而是处理乙方看到协议之后的签署流程。不同的协议其想用户的展示方式不同。
例如：
- 招聘协议: 是由招聘市场来负责展示.
- API监控协议:是用户在选择好API监控服务商时。
- 部署服务: 是用户在选择部署服务商时
:::
@startuml

@enduml

#### 问题

1. 甲方的签署时机是在什么时候，是在部署的时候签署 还是在部署之后签署
2. 关于协议 是使用一份Dapp 还是使用一份合约。建议使用后者
  - Dapp数据量大的时候不好维护，尤其是双向数据验证的时候 查询会很慢。而后者只需要统计本身有多少份合约就可以
  - Dapp 的逻辑会很复杂。

## 类图

@startuml
Title "协议 - 合约 - DID"

  class "ProtocolTemlate(协议模板)"{
    id:string  // 协议模板id
    name: string // 协议模板名称
    desc: string // 协议模板描述
    content: object // 协议模板内容
    serviceProvider:string //协议模板所属 服务商
    ContractTemplate:string // 合约模板
    + public AddTemplate()  // 添加模板
    + public CheckTemplate() //审核模板
    + public dellTemplate() // 删除模板
  }

  class "ProtocolMarket(协议市场)"{
    id:string  // 协议模板id
    name: string // 协议模板名称
    desc: string // 协议模板描述
    serviceProvider:string //协议模板所属 服务商
    + public GetProtocolList()   // 根据协议服务商id获取协议列表
    + public buyProtocol()   // 购买协议
  }

  class "Protocol(协议)"{
    id:string  // 协议id
    tepid:string // 协议模板 id
    accountId: // 协议购买者 account id
    state // 协议状态：未部署，已部署, 甲方已签署
    contractTx: // 合约id
    + public AddProtocol() // 购买协议 1. 购买协议--> 2. 购买合约 --> 3. 注册购买者的diddoc
    + public DeployProtocol()  // 初始化协议1. 部署合约 --> 2. 记录合约部署地址
    + public signProtocl() // 签署合约
  }

  class "ProtocolProvider(协议服务商)"{
    id // 服务商id
    name // 服务商名称
    accountid: // account id
    + public addTemp() // 添加协议模板（待审核）
    + public getTemp() // 获取已审核的协议模板
    + public delTemp() // 删除模板
  }

  "ProtocolTemlate(协议模板)" --* "ProtocolMarket(协议市场)"
  "ProtocolProvider(协议服务商)" --* "ProtocolMarket(协议市场)"
  "ProtocolMarket(协议市场)" --o  "Protocol(协议)"

  class "ContractTemlate(协议模板)"{
    id:string  // 模板id
    name: string // 模板名称
    desc: string // 模板描述
    content: object // 模板内容
    codeTemp // 链码模板
    serviceProvider:string //模板所属 服务商
    + public AddTemplate()  // 添加模板
    + public CheckTemplate() //审核模板
    + public dellTemplate() // 删除模板
  }

  class "ContractMarket(合约市场)"{
    id:string  // 模板id
    name: string // 模板名称
    desc: string // 模板描述
    serviceProvider:string //模板所属 服务商
    + public BuyContract()  // 购买合约
  }

  class "Contract(合约)"{
    id:string  // 合约id
    tepid:string // 合约模板 id
    accountId: // 合约购买者
    state // 合约状态
    tx // 已部署的合约链上地址
    + public DeployContract()  //部署合约
  }

  class "ContractProvider(合约服务商)"{
    + id // 服务商id
    + name // 服务商名称
    + accountid: // account id
    + public addTemp() // 添加合约模板（待审核）
    + public getTemp() // 获取已审核的合约模板
    + public delTemp() // 删除模板
  }

  "ContractTemlate(协议模板)" --* "ContractMarket(合约市场)"
  "ContractProvider(合约服务商)" --* "ContractMarket(合约市场)"
  "ContractMarket(合约市场)" --o  "Contract(合约)"

  abstract class DID{
    + public AddServiceEndpoint()  // 添加SE
    + public VerifyServiceEndpoint() //验证SE
  }

  ”ProtocolMarket(协议市场)“ <|-left- ”ContractMarket(合约市场)“
  ”ProtocolMarket(协议市场)“ <|-right- DID
  "Protocol(协议)" <|-left- "Contract(合约)"
  "Protocol(协议)" <|-up- DID
@enduml
