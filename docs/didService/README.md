# DID服务
## 服务拓扑关系图

## 服务结构图
@startuml
node DID服务
node DIDRegister服务
node DIDResoluton服务

node DID注册
node DIDDoc初始化
node DID解析

node DID协议签署
node DID协议证明
node DID协议解析

DID服务 -- DIDRegister服务
DID服务 -- DIDResoluton服务

DIDRegister服务 -- DID注册
DIDRegister服务 -- DIDDoc初始化
DIDRegister服务 -- DID解析

DIDResoluton服务 -- DID协议签署
DIDResoluton服务 -- DID协议证明
DIDResoluton服务 -- DID协议解析


@enduml
## 顶层用例图
skinparam linetype ortho

@startuml
left to right direction
DID --> (DIDRegister)
(DIDRegister) ..> (创建DID): <<include>>
(DIDRegister) ..> (创建DIDDocument): <<include>>
(DIDRegister) ..> (发布DIDDocument): <<include>>
(DIDRegister) ..> (更新DIDDocument): <<include>>
(DIDRegister) ..> (撤销DIDDocument): <<include>>
(DIDRegister) ..> (解析DID): <<include>>

DID --> (DIDResolution)
(DIDResolution) ..> (协议签名): <<include>>
(DIDResolution) ..> (协议证明): <<include>>
(DIDResolution) ..> (协议解析): <<include>>

@enduml
## 活动图

## E-R图

## 数据流图

## 类图


## 构件图

## 时序图