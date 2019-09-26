# 中台协议服务
::: tip

:::
## 应用场景
<!-- ### 角色
1. 开发商：在中台开发应用的机构
2. 运营商：

### 应用场景说明 -->
### 开发空间和部署服务
- 现在的流程：开发者A开发完成一个服务发布到服务市场，开发者B在开发空间引入服务， 部署服务部署开发者引入的服务

- 增加签署协议的流程：开发者A开发完成一个服务发布到服务市场并定制自己的服务协议,开发者B在开发空间引入服务，引入时增加签署协议页面(弹框)，部署服务部署已经签署协议的服务。

### 优客学院
#### 1、角色
- 优客学院(管理员)：招聘者
- 招聘市场：发布并展示招聘信息的机构或者应用
- 老师：应聘者
- 协议服务商(wlk)：处理先关协议的机构或者服务商。
#### 2、优客学院招聘与老师签约
优客学院发布招聘事宜时定制自己的招聘协议，老师点击招聘链接进入招聘流程。在最后确认招聘流程弹出签约界面进行签署招聘协议。
   - 老师的did doc 背书：用于证明当前did 是否是优客学院的老师。

需要背书当前老师在优客学院的老师个人信息的url（通过url可以查询到老师的加入时间，老师的id，老师的名称，头像等信息）
   - 机构的did doc 背书：背书已经签约的那些老师。（签约老师的did，签约时间，薪酬等）

#### 3、协议
1. 招聘协议：用于背书机构发布招聘协议的真实性。招聘发起人（或机构），招聘时间，招聘人数。
2. 应聘协议：用于背书老师是否应聘到对应的机构。应聘人身份信息（accountId，did），应聘人基础信息， 应聘信息（应聘时间，应聘职位）

3. 协议的目的
   - 保障招聘协议的有效性和真实性
   - 保障招聘的进度的真实性（招聘10人 已到位5人）


#### 系统结构图

#### 系统角色概览图

#### 时序图
<mermaid>
sequenceDiagram
  participant 优客学院(管理员)
  participant 招聘市场
  participant 协议服务商(wlk)
  优客学院(管理员)->>招聘市场: 提交招聘信息并申请发布招聘
  loop 审核提交招聘信息
    招聘市场->>招聘市场: 自动/手动审核并更新招聘信息
  end
  <!-- Note right of 招聘市场: 审核提交招聘信息<br/>(不需要审核的自动<br/>更新招聘信息) -->
  招聘市场-->>优客学院(管理员): 审核通过并返回等待签署协议
  优客学院(管理员)->>招聘市场: 签署协议，更新招聘状态
  招聘市场->>协议服务商(wlk): 更新协议数据
  优客学院(管理员)->>协议服务商(wlk):提交协议信息，并更新相关数据
</mermaid>


#### 类图


## 会员信用卡
1. did对于会员系统是会员权益的获取手续和对权益的凭证。如果用中台的方式实现的话双方的意愿直接落数据库字段，再产生争议的情况下很难进行仲裁。如果用DID确认数据生成。包含DID本身记录的地方和签署过程，某种意义上是可以进行后续仲裁的。
2. 对于会员来说，它可以根据对应的线上系统的自身权限控制特性以一个DID去作为访问的身份，同时对方系统也认可这个DID身份；这个DID可以记录在数据库里，也可以记录在自己自用的非公开(加密存储在链上或者就存在应用数据里，以DID Doc的形式)的did文档里；将来中台都提供这种endpoint，所有用户都会有did格式的操作面板，；相当于数据库的权限可以对外展示成操作按钮

### 签署会员协议
@startuml
actor 用户A
participant 机构A
participant "DID Resolver"
participant BlockChain

用户A -> 机构A: 签订会员权益协议（提供用户a的did给到机构A）
机构A -> 机构A: 选择需要签署的协议
机构A -> "DID Resolver": 签署协议
"DID Resolver" -> BlockChain: 更新机构A的did文档
"DID Resolver" --> 机构A: 签订成功
机构A --> 用户A: 签订成功 等待用户签署(提供机构的DID，publickey，以及其他se信息)
用户A -> "DID Resolver": 签署成功
"DID Resolver" -> BlockChain: 更新用户A的did文档
@enduml

``` json
 "service": [{
    "id": "did:example:123456789abcdefghi#VipCard",
    "type": "xxxshop.VipCard",
    "@context": {
      "@id":"机构A的did url",
      "publickKey":"机构A的公钥"
    },
    "serviceEndpoint": "https://openid.example.com/did&vip=1",
    "description":"xxxshop 的 VIP 1",
    "开始时间":"xx",
    "结束时间":"xx",
    "会员等级":"1",
    "会员折扣":"0.8"
  }
 ]
```

### 用户A享受机构A的会员服务

@startuml
actor 用户A
participant 机构A
participant "DID Resolver"
participant BlockChain

用户A -> 机构A: 出示与机构A签署协议的凭证
机构A -> "DID Resolver": 获取凭证中的didurl发送给，DID Resolver
"DID Resolver" -> BlockChain: DID Resolver 解析did url ，从链上解析对应的did doc，
BlockChain --> "DID Resolver": 返回did doc
"DID Resolver" -> "DID Resolver": 解析didurl 对应的service end point
"DID Resolver" --> 机构A: 使用当前service end point的publickey 加密数据 并返回
机构A --> 机构A: 使用自己的私钥解密数据，成功说明是真实签约。同时解析service end point内的业务数据
机构A -> 用户A: 用户权益解析成功
@enduml

### 机构A和机构B签署合作协议
@startuml
participant 机构A
participant 机构B
participant "DID Resolver"
participant BlockChain

机构A -> 机构B: 签订会员合作权益协议（提供机构A的did给到机构B）
机构A -> 机构A: 选择需要签署的协议
机构A -> "DID Resolver": 签署协议
"DID Resolver" -> BlockChain: 更新机构A的did文档
"DID Resolver" --> 机构A: 签订成功
机构A --> 机构B: 签订成功 等待机构B签署(提供机构的DID，publickey，以及其他se信息)
机构B -> "DID Resolver": 签署成功
"DID Resolver" -> BlockChain: 更新机构B的did文档
@enduml

### 跨机构共享权益
@startuml
actor 用户A
participant 机构A
participant 机构B
participant "DID Resolver"
participant BlockChain

用户A -> 机构B: 出示与机构A签署的协议
机构B -> "DID Resolver": 获取用户A与机构A签署的协议
"DID Resolver" -> 机构B: 返回用户A与机构B签署的具体信息(SE信息)
机构B
机构A -> 机构B: 签订会员合作权益协议（提供机构A的did给到机构B）
机构A -> 机构A: 选择需要签署的协议
机构A -> "DID Resolver": 签署协议
"DID Resolver" -> BlockChain: 更新机构A的did文档
"DID Resolver" --> 机构A: 签订成功
机构A --> 机构B: 签订成功 等待机构B签署(提供机构的DID，publickey，以及其他se信息)
机构B -> "DID Resolver": 签署成功
"DID Resolver" -> BlockChain: 更新机构B的did文档
@enduml